import { useQueryHash } from './useQueryHash'

export function useQueryHashValue<T>(key: string, defaultValue: T): [T, (v: T) => void] {
  const [queryHash, setQueryHash] = useQueryHash()
  const queryHashValue = queryHash[key] || defaultValue

  const setQueryHashValue = (value: T) => {
    if (queryHashValue !== value) {
      setQueryHash({ ...queryHash, [key]: value })
    }
  }

  return [queryHashValue, setQueryHashValue]
}
