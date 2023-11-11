import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from "swiper/core"
import { Navigation, Pagination, Autoplay, Virtual } from "swiper/modules"
import useMovies from "../../lib/hooks/useMovies"

import MovieBox from "./MovieBox"

import "swiper/swiper-bundle.css"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual])

const MovieSwiper = () => {
  const { trending } = useMovies()

  return (
    <>
      <p className="flex justify-start lace-self-end tex-sm font-normal	 font-serif">
        Trending Now
      </p>
      <Swiper
        id="swiper"
        virtual
        slidesPerView={8}
        spaceBetween={30}
        onReachEnd={() => {
          console.log("reach end")
        }}
        navigation
        pagination
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          780: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 8,
          },
        }}
        className="w-full"
      >
        {trending.map((movie) => (
          <SwiperSlide key={movie.Id} className="text-white w-80 h-fit">
            <MovieBox movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default MovieSwiper
