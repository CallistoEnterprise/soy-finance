import { LanguageProvider } from 'contexts/Localization'
import React from 'react'
import { ModalProvider } from 'styled-react-modal'
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <ModalProvider>{children}</ModalProvider>
      </LanguageProvider>
    </ThemeContextProvider>
  )
}

export default Providers
