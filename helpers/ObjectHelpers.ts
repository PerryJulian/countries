export const getFirstKey = (obj: any) => {
  const keys = Object.keys(obj)
  return keys[0]
}

export const getLastKey = (obj: any) => {
  const keys = Object.keys(obj)
  return keys[keys.length - 1]
}
