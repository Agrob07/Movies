import React, { useState } from "react"
import NavbarMenu from "./NavbarMenu"

const NavBar = () => {
  const [show, setShow] = useState(false)

  const handleMouseOver = () => {
    setTimeout(() => {
      setShow(!show)
    }, 400)
  }

  const handleMouseOut = () => {
    setShow(false)
  }

  return (
    <>
      {!show && (
        <div
          id="wrapper"
          className="h-full flex justify-center items-center absolute bg-transparent z-10  transition delay-500 duration-300 ease-in-out "
          onMouseOver={handleMouseOver}
        >
          <div className="h-1/2 w-12 flex flex-col items-center gap-8 ">
            <img
              src="../../../public/assets/icons/ICON - Search.png"
              alt="Icon"
            />
            <img src="../../../public/assets/icons/Group 46.png" alt="Icon" />
            <img src="../../../public/assets/icons/Group 56.png" alt="Icon" />
            <img src="../../../public/assets/icons/Group 54.png" alt="Icon" />
            <img src="../../../public/assets/icons/Group 53.png" alt="Icon" />
            <img src="../../../public/assets/icons/Group 47.png" alt="Icon" />
          </div>
        </div>
      )}
      {show && (
        <div className=" absolute bg-transparent  text-white z-10 animate-pulse transition delay-900 duration-500 ease-in-out ">
          <NavbarMenu></NavbarMenu>
        </div>
      )}
    </>
  )
}

export default NavBar
