import produce from 'immer'
import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { IAppState as IntAppState, IState as IntState, initialState } from './state'
import { rootReducer, APP_NEXT_STATE } from './reducer'
import { history } from './history'

const enhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(routerMiddleware(history)))
    : applyMiddleware(routerMiddleware(history))

const store: Store<IState> = createStore(rootReducer, {}, enhancers)

const appGetState = () => store.getState().app
const appNextState = (state: IAppState, comment: string) => {
  store.dispatch({ state, type: `${APP_NEXT_STATE}: ${comment}` })
}
const appUpdateState = (producer: (s: IAppState) => void, comment: string) => {
  appNextState(
    produce(appGetState(), s => {
      producer(s)
    }),
    comment
  )
}

if (module.hot) {
  module.hot.accept('./reducer', () => {
    store.replaceReducer(rootReducer as any)
  })
}

export { store, history, initialState, appGetState, appNextState, appUpdateState }
export type IState = IntState
export type IAppState = IntAppState
