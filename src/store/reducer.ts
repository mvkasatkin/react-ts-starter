import { history } from 'store/history'
import { initialState } from 'store/state'
import { AnyAction, combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { IAppState } from 'store'

export const APP_NEXT_STATE = '@APP'
export const APP_NEXT_STATE_INTERNAL = '@INTERNAL'

const appReducer = (state: IAppState = initialState, action: AnyAction) =>
  action.type.substr(0, 4) === APP_NEXT_STATE ? action.state : state

const internalReducer = (state: TObjectAny = {}, action: AnyAction) =>
  action.type === APP_NEXT_STATE_INTERNAL ? action.state : state

export const rootReducer = combineReducers({
  app: appReducer,
  internal: internalReducer,
  router: connectRouter(history),
})
