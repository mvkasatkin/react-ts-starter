import * as React from 'react'
import { history } from 'store'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { ViewIndex } from './views/ViewIndex'

export const Routes = React.memo(() => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={ViewIndex} />
    </Switch>
  </ConnectedRouter>
))
