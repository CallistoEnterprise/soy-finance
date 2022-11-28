import axios from 'axios'
import { useEffect, useState } from 'react'
import { request, gql } from 'graphql-request'
import Farmlist from 'constants/farmlist.json'

/* eslint no-await-in-loop: 0 */

const METRICS = 'https://soy-finance.deta.dev/soy_metrics'

export const useMetrics = () => {
  const [metricsData, setMetricsData] = useState({
    runtime: 0.031,
    block_number: 8392129,
    result: {
      Users: 0,
      Trades: 0,
      Volume: 0,
      Volume_24h: 0,
      Soy_Circulating_Supply: 0,
      Soy_IDO: 0,
      Total_Value_Locked_In_Farms: 0,
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(METRICS)
        .then((response) => {
          if (response.data) {
            setMetricsData(response.data)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return metricsData
}

export const useGetBurnedSoy = () => {
  const [burnedSoy, setBurnedSoy] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('https://soy-supply-api.netlify.app/.netlify/functions/server/burned')
        .then((response) => {
          if (response.data) {
            setBurnedSoy(response.data)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return burnedSoy
}

export const useGetStakingAPR = () => {
  const [apr, setAPR] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('https://soy-finance-api.netlify.app/.netlify/functions/server/staking')
        .then((response) => {
          if (response.data) {
            setAPR(response.data.apr)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return apr
}

export const useGetFarmsApr = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('https://soy-finance-api.netlify.app/.netlify/functions/server/farming')
        .then((response) => {
          // console.log(response)
          if (response.data) {
            setData(response.data)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return data
}

export const useStakingAPR = () => {
  const [maxApr, setMaxApr] = useState(0)

  useEffect(() => {
    setMaxApr(50)
  }, [])

  return maxApr
}

interface FarmWithAPR {
  name: string
  lp: string
  apr: number
  liquidityUSD: number
  token0: string
  token1: string
}

const defaultFarm: FarmWithAPR = {
  name: 'undefined',
  lp: '',
  apr: 0,
  liquidityUSD: 0,
  token0: '',
  token1: '',
}

const INFO_CLIENT = 'https://03.callisto.network/subgraphs/name/soyswap'

export const useFarmingAPR = () => {
  const [bestFarms, setBestFarms] = useState([{ ...defaultFarm }, { ...defaultFarm }, { ...defaultFarm }])

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const coingeckoRequest = await axios.get('https://api.coingecko.com/api/v3/coins/soy-finance')
        const soyPrice = coingeckoRequest.data.market_data.current_price.usd

        const query = gql`
          query {
            pairs(first: 1000) {
              id
              name
              token0 {
                id
              }
              token1 {
                id
              }
              reserveUSD
            }
          }
        `
        const data = await request(INFO_CLIENT, query)

        const farmsWithAPRs: FarmWithAPR[] = []
        // eslint-disable-next-line
        for (const farm of Farmlist.farmsInfo) {
          const pair = data.pairs.find((lp) => lp.id.toLowerCase() === farm.lptoken.toLowerCase())
          const apr = (farm.yearlysoyreward * soyPrice) / pair.reserveUSD

          farmsWithAPRs.push({
            name: farm.pair, // pair.name, // sometimes unknown, subgraph issue
            lp: pair.id,
            apr: apr * 100,
            liquidityUSD: pair.reserveUSD,
            token0: pair.token0.id,
            token1: pair.token1.id,
          })
        }

        farmsWithAPRs.sort((a, b) => (a.apr < b.apr ? 1 : -1))

        // console.log(farmsWithAPRs)

        setBestFarms([farmsWithAPRs[0], farmsWithAPRs[1], farmsWithAPRs[2]])
      } catch (err) {
        // console.log(err)
      }
    }
    fetchFarms()
  }, [])

  return bestFarms
}
