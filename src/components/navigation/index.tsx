import React from "react"
import { useAppDispatch } from "../../redux/hooks"
import { setBgOpacity } from "../../redux/slices/moviesSlice"
import useMovies from "../../lib/hooks/useMovies"

export default function NavBar() {
  const dispatch = useAppDispatch()

  const { opacity } = useMovies()

  const handleHover = () => {
    dispatch(setBgOpacity(0.9))
  }

  const handleBlur = () => {
    dispatch(setBgOpacity(1))
  }

  return (
    <div
      className="absolute h-full flex flex-col justify-center items-start p-4 z-10 hover:w-1/3 transition-all duration-400 bg-gradient-to-r from-black via-black shadow-2xl border-none "
      onMouseOver={handleHover}
      onMouseOut={handleBlur}
    >
      <div
        className={`flex items-center ${
          opacity < 1 ? "visible " : "invisible"
        } justify-self-start text-white h-1/4`}
      >
        <div className="w-12 cursor-pointer  border-2 border-transparent ">
          <img
            className="rounded h-10 w-10 object-cover"
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
            alt="logo"
          />
        </div>
        <p className="text-xl ml-2 cursor-pointer">Daniela</p>
      </div>
      <div className="flex text-white justify-self-center">
        <ul className="  p-2 shadow mt-8 md:mt-8 ">
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <img
                src="../../../public/assets/icons/ICON - Search.png"
                alt="Icon"
              />
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <img src="../../../public/assets/icons/Group 46.png" alt="Icon" />
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <img src="../../../public/assets/icons/Group 56.png" alt="Icon" />
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <img src="../../../public/assets/icons/Group 54.png" alt="Icon" />
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <img src="../../../public/assets/icons/Group 53.png" alt="Icon" />
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <img src="../../../public/assets/icons/Group 47.png" alt="Icon" />
            </div>
          </li>
        </ul>
        <ul
          className={` p-2 shadow mt-8 md:mt-8 ${
            opacity < 1 ? "visible " : "hidden"
          }`}
        >
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <span className="ml-2 font-bol text-xl">Search</span>
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <span className="ml-2 font-bol text-xl">Home</span>
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <span className="ml-2 font-bol text-xl break-keep">TV Shows</span>
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <span className="ml-2 font-bol text-xl">Movies</span>
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <span className="ml-2 font-bol text-xl">Genres</span>
            </div>
          </li>
          <li className="flex   cursor-pointer hover:bg-blue-500/50 text-white-600  mt-2 py-2 hover:rounded-lg ">
            <div className="flex gap-6  items-center justify-center">
              <span className="ml-2 font-bol text-xl">Watch Later</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`mt-20  flex flex-col items-start gap-2 ${
          opacity < 1 ? "visible " : "invisible"
        } justify-self-end `}
      >
        <p className="text-gray-500 cursor-pointer hover:text-gray-400">
          Language
        </p>
        <p className="text-gray-500 cursor-pointer hover:text-gray-400">
          Get Help
        </p>
        <p className="text-gray-500 cursor-pointer hover:text-gray-400">Exit</p>
      </div>
    </div>
  )
}
