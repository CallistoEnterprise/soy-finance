import axios from 'axios'
import { useEffect, useState } from 'react'
import Web3 from 'web3-eth'
import Utils from 'web3-utils'

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




// logic copied from soy-finance-api /////////////////////

// GlobalFarm Contract
const globalFarmAddress = "0x64Fa36ACD0d13472FD786B03afC9C52aD5FCf023"
const localFarmsABI  = {"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"farmAddress","internalType":"address"},{"type":"uint256","name":"multiplier","internalType":"uint256"},{"type":"uint256","name":"lastPayment","internalType":"uint256"}],"name":"localFarms","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]}
const totalMultiplierABI = {"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalMultipliers","inputs":[]}

// SOY-LP Contract
const getReservesABI = {"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint112","name":"_reserve0","internalType":"uint112"},{"type":"uint112","name":"_reserve1","internalType":"uint112"},{"type":"uint32","name":"_blockTimestampLast","internalType":"uint32"}],"name":"getReserves","inputs":[],"constant":true}

// SoyStaking Contract
const totalStakingAmountABI = {"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"TotalStakingAmount","inputs":[]}



export const useStakingAPR = async () => {  // @ts-ignore
  const web3 = new Web3(process.env.REACT_APP_NODE_1);
  const globalFarmContract = new web3.Contract([localFarmsABI, totalMultiplierABI], globalFarmAddress)
  
  const yearlySoyReward = 136986*365
  const farmsTotalMultipler = parseInt(await globalFarmContract.methods.totalMultipliers().call())
  const poolInfo = await globalFarmContract.methods.localFarms(33).call()
  const weight = poolInfo.multiplier/farmsTotalMultipler
  const poolReward = weight*yearlySoyReward
  const stakingContract = new web3.Contract([totalStakingAmountABI], '0xeB4511C90F9387De8F8945ABD8C803d5cB275509')
  const totalStakingAmount = await stakingContract.methods.TotalStakingAmount().call()
  const liquidity = Number(Utils.fromWei(totalStakingAmount,"ether")) // api has error here
  const stakingAPR = poolReward/liquidity*100

  return {'apr': stakingAPR}
}