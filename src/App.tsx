import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ResetCSS from 'components/ResetCSS'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/PageLoader'

import GlobalStyle from 'style/Global'
import history from './routerHistory'

const Home = lazy(() => import('./pages/Home'))
const Safelist = lazy(() => import('./pages/ContentPages/Safelist'))
const Tokenomic = lazy(() => import('./pages/ContentPages/Tokenomics'))
const Roadmap = lazy(() => import('./pages/Roadmap'))

const App: React.FC = () => {
  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/safelist" exact>
            <Safelist />
          </Route>
          <Route path="/tokenomic" exact>
            <Tokenomic />
          </Route>
          <Route path="/roadmap" exact>
            <Roadmap />
          </Route>
        </Switch>
      </SuspenseWithChunkError>
    </Router>
  )
}

export default React.memo(App)
