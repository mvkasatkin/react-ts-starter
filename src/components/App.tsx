import 'assets/scss/base.scss'
import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Routes } from 'components/Routes'

export const App = React.memo(() => (
  <Provider store={store}>
    <Routes />
  </Provider>
))
