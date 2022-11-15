import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@callisto-enterprise/soy-uikit2'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/PageLoader'

import GlobalStyle from 'style/Global'
import history from './routerHistory'

const Home = lazy(() => import('./pages/Home')) // done
const Safelist = lazy(() => import('./pages/Safelist')) // done
const Tokenomic = lazy(() => import('./pages/Tokenomics')) // done
const Roadmap = lazy(() => import('./pages/Roadmap')) // done
const Airdrop = lazy(() => import('./pages/Airdrop')) // done

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
          <Route path="/airdrop" exact>
            <Airdrop />
          </Route>
        </Switch>
      </SuspenseWithChunkError>
    </Router>
  )
}

export default React.memo(App)
