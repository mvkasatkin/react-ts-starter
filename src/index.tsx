import 'core-js/es/weak-set'
import 'core-js/es/promise'
import 'core-js/es/array/find'
import 'core-js/es/array/from'
import 'core-js/es/string/ends-with'
import 'core-js/es/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import { bootstrap } from 'Bootstrap'
import 'base/utils/Logger'
import { App } from './components/App'
import { AppContainer } from 'react-hot-loader'

const root = document.getElementById('root') as HTMLElement

bootstrap
  .init()
  .then(() => ReactDOM.render(<AppContainer><App /></AppContainer>, root))
  .catch(window.logger.error)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').App
    ReactDOM.render(<AppContainer><NextApp /></AppContainer>, root)
  })
}
