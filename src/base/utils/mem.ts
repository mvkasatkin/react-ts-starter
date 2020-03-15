import React, { ComponentType } from 'react'

const compare = (prevProps: TObjectAny, props: TObjectAny) => {
  const keys = Object.keys(props)
  for (const key of keys) {
    if (typeof props[key] !== 'function' && prevProps[key] !== props[key]) {
      return false
    }
  }
  return true
}

export function mem<T extends ComponentType<any>>(component: T) {
  return React.memo(component, compare)
}
