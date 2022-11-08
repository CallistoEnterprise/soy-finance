import axios from 'axios'
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import Utils from 'web3-utils'

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


const SOY_STAKING_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"uint256","name":"_lockTime","internalType":"uint256"}]},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Rescue","inputs":[{"type":"address","name":"_token","internalType":"address","indexed":false},{"type":"uint256","name":"_amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetAffiliatePercentage","inputs":[{"type":"uint256","name":"_affiliatePercent","internalType":"uint256","indexed":false},{"type":"uint256","name":"_noAffiliatePercent","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"StartStaking","inputs":[{"type":"address","name":"staker","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"uint256","name":"time","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"WithdrawRequest","inputs":[{"type":"address","name":"staker","internalType":"address","indexed":false},{"type":"uint256","name":"alignedTime","internalType":"uint256","indexed":false},{"type":"uint256","name":"stakedAmount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"WithdrawStake","inputs":[{"type":"address","name":"staker","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"uint256","name":"reward","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_LIMIT","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"SOY_TOKEN","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"TIME_RESOLUTION","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"accumulatedRewardPerShare","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"affiliatePercent","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"atTime","internalType":"uint256"},{"type":"uint256","name":"balanceReduceOrRewardPerShare","internalType":"uint256"}],"name":"balances","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"bonusToken","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"buyBonus","inputs":[{"type":"uint256","name":"bonus","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"enableStaking","inputs":[{"type":"bool","name":"enable","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getAllocationX1000","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"}],"name":"getBonusPrice","inputs":[{"type":"uint256","name":"bonus","internalType":"uint256"},{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"getBonusPrices","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getRewardPerSecond","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"globalFarm","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isEnabled","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lastRewardTimestamp","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lockTime","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"noAffiliatePercent","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"notifyRewardAmount","inputs":[{"type":"uint256","name":"reward","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"userReward","internalType":"uint256"}],"name":"pendingReward","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"rescueTokens","inputs":[{"type":"address","name":"_token","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setAffiliatePercentage","inputs":[{"type":"uint256","name":"_affiliatePercent","internalType":"uint256"},{"type":"uint256","name":"_noAffiliatePercent","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBonusPrices","inputs":[{"type":"uint256[]","name":"bonusPrices","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBonusToken","inputs":[{"type":"address","name":"_bonusToken","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardPerSharePaid","internalType":"uint256"},{"type":"uint64","name":"endTime","internalType":"uint64"},{"type":"uint64","name":"index","internalType":"uint64"},{"type":"uint64","name":"bonus","internalType":"uint64"},{"type":"uint32","name":"affiliatePercent","internalType":"uint32"},{"type":"uint32","name":"noAffiliatePercent","internalType":"uint32"},{"type":"address","name":"affiliate","internalType":"address"}],"name":"staker","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startIndex","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"tokenReceived","inputs":[{"type":"address","name":"_from","internalType":"address"},{"type":"uint256","name":"_value","internalType":"uint256"},{"type":"bytes","name":"_data","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalShares","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalStaked","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"update","inputs":[{"type":"uint256","name":"maxRecords","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdrawRequest","inputs":[]}]
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
        console.log("useStakingAPR error:", err)
      }

      console.log(aprs)

      setMaxApr(Math.max(...aprs))
    }
    fetchApr()
  }, [])

  return maxApr
}

/*
// logic copied from soy-finance-api /////////////////////

// GlobalFarm Contract
const globalFarmAddress = "0x64Fa36ACD0d13472FD786B03afC9C52aD5FCf023"
const localFarmsABI  = {"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"farmAddress","internalType":"address"},{"type":"uint256","name":"multiplier","internalType":"uint256"},{"type":"uint256","name":"lastPayment","internalType":"uint256"}],"name":"localFarms","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]}
const totalMultiplierABI = {"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalMultipliers","inputs":[]}

// SOY-LP Contract
const getReservesABI = {"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint112","name":"_reserve0","internalType":"uint112"},{"type":"uint112","name":"_reserve1","internalType":"uint112"},{"type":"uint32","name":"_blockTimestampLast","internalType":"uint32"}],"name":"getReserves","inputs":[],"constant":true}

// SoyStaking Contract
const totalStakingAmountABI = {"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"TotalStakingAmount","inputs":[]}


export const useStakingAPR = () => {
  const [apr, setApr] = useState(0)

  useEffect(() => {
    const fetchApr = async () => {
      try { // @ts-ignore
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

        setApr(stakingAPR)
      } catch(err) {
        console.log("useStakingAPR error:", err)
      }
    }
    fetchApr()
  }, [])

  return apr
}

/*
let priceList = {}
const coinGeckoApiIDs = {
    'SOY': 'soy-finance',
    'WCLO': 'callisto',
    'CLOE': false,
    'BUSDT': 'tether',
    'ccETC': 'ethereum-classic',
    'ccETH': 'ethereum',
    'ccBNB': 'binancecoin',
    'ccCake': 'pancakeswap-token',
    'ccTWT': 'trust-wallet-token',
    'ccWSG': 'wall-street-games',
    'ccREEF': 'reef-finance',
    'ccBAKE': 'bakerytoken',
    'ccSHIBA': 'shiba-inu',
    'ccRACA': 'radio-caca',
    'ccLINA': 'linear',
    'ccTONCOIN': false,
    'ccXMS': 'mars-ecosystem-token',
    'ccBTT': 'bittorrent',
    'ccFTM': 'fantom',
    'ccANTEX': 'antex',
    'ccZoo': 'zoo-crypto-world',
    'ccBCOIN': 'bomber-coin',
    'ccBBT': 'bitbook-token'
}
*/