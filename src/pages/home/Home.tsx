import VideoPlayerBG from "../../components/bg-video/VideoPlayerBG"
import MovieItem from "../../components/movie"
import TrendingMovies from "../../components/trending-movies/TrendingMovies"
import useMovies from "../../lib/hooks/useMovies"

const Home = () => {
  const { featured, opacity } = useMovies()

  console.log({ opacity })

  return (
    <div
      style={{
        backgroundImage: `url("../../../public/assets/${featured.CoverImage}")`,
        backgroundSize: "fill",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "fill",
        opacity,
      }}
      className={`w-screen h-screen flex flex-col  justify-evenly p-4 pl-36  bg-cover bg-center  bg-no-repeat font-bold relative `}
    >
      {featured.VideoUrl && <VideoPlayerBG />}
      <MovieItem />
      <TrendingMovies />
    </div>
  )
}

export default Home
