import axios from 'axios'
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import Utils from 'web3-utils'
import { request, gql } from 'graphql-request'
import Farmlist from "./farmlist.json"

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


const SOY_STAKING_ABI = [{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getAllocationX1000","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getRewardPerSecond","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalStaked","inputs":[]},]
const SOY_STAKING_ADDRESSES = [
  "0xfF9289C2656CA1d194DeA1895aAf3278B744Fa70", // 7
  "0x86F7e2ef599690b64f0063b3F978ea6Ae2814f63", // 30
  "0x7d6C70b6561C31935e6B0dd77731FC63D5aC37F2", // 91
  "0x19DcB402162b6937a8ACEac87Ed6c05219c9bEf7", // 182
  "0x31bFf88C6124E1622f81b3Ba7ED219e5d78abd98", // 365
]

export const useStakingAPR = () => {
  const [maxApr, setMaxApr] = useState(0)

  useEffect(() => {
    const fetchApr = async () => {
      const web3 = new Web3(process.env.REACT_APP_NODE_1);

      const aprs: number[] = []
      
      try {
        for(let i = 0; i < SOY_STAKING_ADDRESSES.length; i++) {  // @ts-ignore
          const stakingContract = new web3.eth.Contract(SOY_STAKING_ABI, SOY_STAKING_ADDRESSES[i])

          const totalStaked = await stakingContract.methods.totalStaked().call()
          const rewardPerSecond = await stakingContract.methods.getRewardPerSecond().call()
          const multiplier1000 = await stakingContract.methods.getAllocationX1000().call()
          const year = 365 * 24 * 60 * 60 // await stakingContract.methods.lockTime().call()

          const stakingAPR = Number(Utils.fromWei(rewardPerSecond, "ether"))
                              * Number(multiplier1000)
                              * Number(year)
                              * 100 / 1000
                              / Number(Utils.fromWei(totalStaked, "ether"))

          aprs.push(stakingAPR)
        }
      } catch(err) {
        // console.log("useStakingAPR error:", err)
      }

      setMaxApr(Math.max(...aprs))
    }
    fetchApr()
  }, [])

  return maxApr
}



interface FarmWithAPR {
  name: string,
  lp: string,
  apr: number,
  liquidityUSD: number,
  token0: string,
  token1: string
}

const defaultFarm:FarmWithAPR = {
  name: "undefined",
  lp: "",
  apr: 0,
  liquidityUSD: 0,
  token0: "",
  token1: "",
}

const INFO_CLIENT = "https://03.callisto.network/subgraphs/name/soyswap"

export const useFarmingAPR = () => {
  const [bestFarms, setBestFarms] = useState([{...defaultFarm}, {...defaultFarm}, {...defaultFarm}])

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const coingeckoRequest = await axios.get('https://api.coingecko.com/api/v3/coins/soy-finance')
        const soyPrice = coingeckoRequest.data.market_data.current_price.usd

        const query = gql`
          query {
            pairs(first: 1000){
              id,
              name,
              token0 {
                id
              },
              token1 {
                id
              },
              reserveUSD
            }
          }        
          `
        const data = await request(INFO_CLIENT, query)

        const farmsWithAPRs:FarmWithAPR[] = []
          // eslint-disable-next-line
        for(const farm of Farmlist.farmsInfo) {
          const pair = data.pairs.find((lp) => lp.id.toLowerCase() === farm.lptoken.toLowerCase())
          const apr = farm.yearlysoyreward * soyPrice / pair.reserveUSD

          farmsWithAPRs.push({
            name: farm.pair, // pair.name, // sometimes unknown, subgraph issue
            lp: pair.id,
            apr: apr * 100,
            liquidityUSD: pair.reserveUSD,
            token0: pair.token0.id,
            token1: pair.token1.id
          })
        }

        farmsWithAPRs.sort((a, b) => a.apr < b.apr ? 1 : -1)

        // console.log(farmsWithAPRs)

        setBestFarms([farmsWithAPRs[0], farmsWithAPRs[1], farmsWithAPRs[2]])

      } catch(err) {
        // console.log(err)
      }
    }
    fetchFarms()
  }, [])

  return bestFarms
}