'use client';

import Image from "next/image"
import Link from "next/link"
import Button from "../core/Button"
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import ButtonFull from "../core/ButtonFull";
import { usePathname } from "next/navigation";
import { FaSun, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname()

  const [nav, setNav] = useState(false)

  const topNavRemider = ["/home"]




  return (
    <> 
     
      {/* Navbar Desktop*/}  
      <div className="hidden lg:flex justify-between items-center w-full h-[125px] container">
        <div className="relative w-[150px] h-[150px]">
          <Link href="/">
            <Image 
              src="/images/logo-nav.png"
              alt="logo"
              fill={true}
              className="invert"
            />
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex gap-6 text-lg">
            <Link href="/#">Home</Link>
            <Link href="/#algoritma">Project</Link>
            <Link href="/#about">About Me</Link>
            <Link href="/#contact">Contact Us</Link>
          </div>
        </div>
      </div>
      {/*End Navbar Desktop*/}



      {/* Hamburger On Mobile  */}
        <div className="fixed flex justify-between items-center w-full h-[125px] lg:hidden border-b border-theme px-[25px] bg-white z-10">
          <div className="relative w-[90px] h-[90px]">
            <Link href="/">
              <Image 
                src="/images/logo-nav.png"
                alt="logo"
                fill={true}
                className="invert"
              />
            </Link>
          </div>
          {nav ? 
            <AiOutlineClose size={30} onClick={() => setNav(!nav)} className="text-theme" />
          : <AiOutlineMenu size={30} onClick={() => setNav(!nav)} className="text-theme" />
          }
        </div>
      {/* End Hamburger On Mobile  */}

      {/* Dropdown Menu Mobile */}
      <div className={
        nav ?
          "fixed lg:hidden top-[125px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
        :
          "fixed lg:hidden top-[-200%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
      }>
        <div className="w-full h-full px-[25px]">
          <ul className="space-y-5 text-lg my-6 px-1" onClick={() => setNav(!nav)}>
            <li><Link href="/#">Home</Link></li>
            <li><Link href="/#algoritma">Project</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#contact">Contact Us</Link></li>
          </ul>

        </div>
      </div> 
      {/* End Dropdown Menu Mobile */}

    </>
  )
}

export default Navbar
