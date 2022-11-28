import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import ResetCSS from 'components/ResetCSS'
import App from './App'
import GlobalStyle from './style/Global'
import Providers from './Providers'
import 'inter-ui'
import './App.scss'

ReactDOM.render(
  <StrictMode>
    <Providers>
      <ResetCSS />
      <GlobalStyle />
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root'),
)
