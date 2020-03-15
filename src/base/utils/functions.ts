export const debounce = (fn: Function, ms: number = 0) => {
  let timeoutId: any
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(null, args), ms)
  }
}

export const formatMoney = (value: number, decimal: number = 0) =>
  Intl.NumberFormat('en-EN', {
    currency: 'USD',
    style: 'currency',
    maximumFractionDigits: decimal,
    minimumFractionDigits: decimal,
  }).format(value)

export const getLetters = (str: string) => {
  const words = str.toUpperCase().split(' ')
  if (words.length > 1) {
    return `${words[0][0]}${words[1][0]}`
  }
  return words[0][0]
}

export const randomInt = (from: number, to: number) => Math.floor(Math.random() * (to - from + 1) + from)
