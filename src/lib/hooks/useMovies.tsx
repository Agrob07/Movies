import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  getMoviesAsync,
  selectFeatured,
  selectOpacity,
  selectTrending,
} from "../../redux/slices/moviesSlice"
import { IMovieItem } from "../../types/movies"
import getFromSessionStorage from "../helpers/getFromSessionStorage"

const selectedMovieIdList = [
  ...new Set(getFromSessionStorage("selectedMovieIdList")),
]

const useMovies = () => {
  const dispatch = useAppDispatch()
  const featured = useAppSelector(selectFeatured)
  const trending = useAppSelector(selectTrending)
  const opacity = useAppSelector(selectOpacity)

  const sortedAndFixSizedTrending = useMemo(() => {
    const temp = [...trending]

    const sortedByDateAndSelection = selectedMovieIdList.length
      ? temp
      : temp
          .sort(
            (a: IMovieItem, b: IMovieItem) =>
              new Date(b.Date).getTime() - new Date(a.Date).getTime(),
          )
          .slice(0, 50)

    return sortedByDateAndSelection
  }, [trending])

  useEffect(() => {
    if (!trending.length) {
      dispatch(getMoviesAsync())
    }
  }, [dispatch, trending.length])

  return { featured, trending: sortedAndFixSizedTrending, opacity }
}

export default useMovies
