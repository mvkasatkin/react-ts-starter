import React, { useState, useEffect, useRef } from 'react'

function useTimeout(callback: Function, delay: number = 0) {
  const savedCallback = useRef<Function>()
  useEffect(
    () => {
      savedCallback.current = callback
    },
    [callback]
  )
  useEffect(
    () => {
      function tick() {
        if (typeof savedCallback.current === 'function') {
          savedCallback.current()
        }
      }
      if (delay !== null) {
        const id = setTimeout(tick, delay)
        return () => clearTimeout(id)
      }
      return () => {}
    },
    [delay]
  )
}

export default useTimeout
