const getFromSessionStorage = (key: string) => {
  const data = sessionStorage.getItem(key) as string
  return JSON.parse(data)
}

export default getFromSessionStorage
