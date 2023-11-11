import { useCallback } from "react"
import { IMovieItem } from "../../types/movies"
import { useAppDispatch } from "../../redux/hooks"
import { reorderTrending, setFeatured } from "../../redux/slices/moviesSlice"
import saveToSessionStorage from "../../lib/helpers/saveToSessionStorage"
import getFromSessionStorage from "../../lib/helpers/getFromSessionStorage"

interface IProps {
  movie: IMovieItem
}

const MovieBox = ({ movie }: IProps) => {
  const dispatch = useAppDispatch()

  const handleSwipeClick = useCallback(() => {
    const selectedList = getFromSessionStorage("selectedMovieIdList") || []
    const newList = [...selectedList, movie.Id]
    saveToSessionStorage("selectedMovieIdList", JSON.stringify(newList))
    dispatch(setFeatured(movie))
    dispatch(reorderTrending(movie))
  }, [dispatch, movie])

  return (
    <div onClick={handleSwipeClick}>
      <img src={`./assets/${movie.CoverImage}`} alt={movie.Title} />
    </div>
  )
}

export default MovieBox
