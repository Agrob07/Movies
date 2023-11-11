import React, { useEffect, useState } from "react"
import useMovies from "../../lib/hooks/useMovies"

const VideoPlayerBG = () => {
  const [delay, setDelay] = useState(false)
  const { featured } = useMovies()

  useEffect(() => {
    setTimeout(() => setDelay(!delay), 3000)
  }, [delay])
  return delay ? (
    <video
      src={featured.VideoUrl}
      className="fixed top-0 left-0 w-screen h-screen object-fill"
      muted
      autoPlay
    ></video>
  ) : (
    <></>
  )
}

export default VideoPlayerBG
