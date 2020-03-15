export const initialState = {
}

export type IAppState = typeof initialState
export interface IState {
  app: IAppState
  internal: TObjectAny
}
