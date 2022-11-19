import { LanguageProvider } from 'contexts/Localization'
import React from 'react'
import { Provider } from 'react-redux'
import { ModalProvider } from 'styled-react-modal'
import store from './store'
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <LanguageProvider>
          <ModalProvider>{children}</ModalProvider>
        </LanguageProvider>
      </ThemeContextProvider>
    </Provider>
  )
}

export default Providers
