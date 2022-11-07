import axios, {AxiosResponse} from 'axios'
import { useEffect, useState } from 'react'

const METRICS_API_ENDPOINT = 'https://soy-finance.deta.dev/soy_metrics'

const METRICS_DEFAULT_ZEROES = {
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
}

const METRICS_DEFAULT_MOCK = {
  runtime: 0.031,
  block_number: 8392129,
  result: {
    Users: 8930,
    Trades: 4090000,
    Volume: 89130000,
    Volume_24h: 152610,
    Soy_Circulating_Supply: 73380000,
    Soy_IDO: 798570,
    Total_Value_Locked_In_Farms: 2340000,
  },
}

const CONFIG_USE_MOCK_DATA = true
const CONFIG_API_TRIES = 10

export const useMetrics = () => {
  const [metricsData, setMetricsData] = useState(CONFIG_USE_MOCK_DATA ? METRICS_DEFAULT_MOCK : METRICS_DEFAULT_ZEROES)

  useEffect(() => {
    const fetchData = async () => {
      let errorEncountered = false // api errored?
      let counter = 0 // times loop finished
      let response: AxiosResponse<any>

      while(!errorEncountered || response === undefined) {
        errorEncountered = false;

        try { // eslint-disable-next-line
          response = await axios.get(METRICS_API_ENDPOINT)
        } catch(err) {
          console.error(err)
          errorEncountered = true
        }

        counter += 1
        if(counter === CONFIG_API_TRIES)
          break;
      }

      setMetricsData(response.data)
        /* axios
          .get(METRICS_API_ENDPOINT)
          .then((response) => {
            if (response.data) {
              setMetricsData(response.data)
            }
          })
          .catch((err) => {
            console.error(err)
          }) */
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
