import React from "react"
import Controls from "./Controls"
import useMovies from "../../lib/hooks/useMovies"

const IMovieItem = () => {
  const { featured } = useMovies()
  const {
    Category,
    Title,
    TitleImage,
    Description,
    ReleaseYear,
    MpaRating,
    Duration,
  } = featured

  return (
    <div className=" w-1/2 flex flex-col items-start gap-2 text-white">
      <span>{Category}</span>
      <img src={`./assets/${TitleImage}`} alt={Title} />
      <div className=" w-1/3 flex justify-around">
        <span>{ReleaseYear}</span>
        <span>{MpaRating}</span>
        <span>{Duration}</span>
      </div>
      <span>{Description}</span>
      <Controls />
    </div>
  )
}

export default IMovieItem
