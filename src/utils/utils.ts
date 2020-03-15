export const parseDate = (value: any): Date | null => {
  if (value === null || value === 0) {
    return null
  }
  const time = isNaN(value) ? Date.parse(value) : value
  return isNaN(time) ? null : new Date(time)
}
