import { LanguageProvider } from 'contexts/Localization'
import React from 'react'
import { Provider } from 'react-redux'
import { Web3ReactProvider } from '@web3-react/core'
import { ModalProvider } from 'styled-react-modal'
import { getLibrary } from './hooks/getLibrary'
import store from './store'
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeContextProvider>
          <LanguageProvider>
            <ModalProvider>{children}</ModalProvider>
          </LanguageProvider>
        </ThemeContextProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
