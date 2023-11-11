import VideoPlayerBG from "../../components/bg-video/VideoPlayerBG"
import MovieItem from "../../components/movie"
import TrendingMovies from "../../components/trending-movies/TrendingMovies"
import useMovies from "../../lib/hooks/useMovies"

const Home = () => {
  const { featured } = useMovies()

  return (
    <div
      style={{
        backgroundImage: `url("../../../public/assets/${featured.CoverImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen flex flex-col  justify-evenly p-4 pl-72  bg-main-cover bg-cover bg-center font-bold relative"
    >
      {featured.VideoUrl && <VideoPlayerBG />}
      <MovieItem />
      <TrendingMovies />
    </div>
  )
}

export default Home
