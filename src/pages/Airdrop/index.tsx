import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'hooks/getLibrary'
import AirdropContent from './AirdropContent'

const Airdrop = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AirdropContent />
    </Web3ReactProvider>
  )
}

export default Airdrop
