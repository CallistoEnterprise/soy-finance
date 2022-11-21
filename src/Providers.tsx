import { LanguageProvider } from 'contexts/Localization'
import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { ModalProvider } from 'styled-react-modal'
import { getLibrary } from './hooks/getLibrary'
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeContextProvider>
        <LanguageProvider>
          <ModalProvider>{children}</ModalProvider>
        </LanguageProvider>
      </ThemeContextProvider>
    </Web3ReactProvider>
  )
}

export default Providers
