import React from 'react'
import { store } from 'store'
import { APP_NEXT_STATE_INTERNAL } from 'store/reducer'
import { useOnMount } from './useOnMount'

function updateState(state: TObjectAny) {
  store.dispatch({ state, type: APP_NEXT_STATE_INTERNAL })
}

export function useReduxState<T>(key: string, initialValue: T, reset = false): [T, (value: T) => void] {
  const storeValue: T = store.getState().internal[key]
  const startValue: T = storeValue === undefined || reset ? initialValue : storeValue
  const [value, setValue] = React.useState(startValue)

  const setter = React.useCallback((value: T) => {
    const nextState = { ...store.getState().internal, [key]: value }
    updateState(nextState)
  }, [key])

  useOnMount(() => {
    if (storeValue === undefined || reset) {
      setter(initialValue)
    }

    let currentValue = value
    return store.subscribe(() => {
      const nextValue = store.getState().internal[key]
      if (nextValue !== currentValue) {
        currentValue = nextValue
        setValue(nextValue)
      }
    })
  })

  return [value, setter]
}
