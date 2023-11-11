import { IMovies } from "../../types/movies"

export const getMovies = async (): Promise<IMovies> => {
  const res = await fetch("../../../mock/movies//movieList.json")
  const data = await res.json()

  return data
}
