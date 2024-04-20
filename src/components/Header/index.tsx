"use client"
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { IconMenu2, IconX } from "@tabler/icons-react"

const Header = () => {
  const [navPosition, setNavPosition] = useState<boolean>(false);
  const [open, setOpen] = useState(false)

  const onScroll = useCallback(() => {
    if (window.scrollY > 80) {
      setNavPosition(true);
    } else {
      setNavPosition(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <header className={cn("bg-white h-16 flex  justify-center items-center fixed top-0 left-0 right-0 transition-all ease-in-out px-8 z-20",
        navPosition ? "drop-shadow-lg h-36 sm:h-24" : ""
      )}>
        <div className={cn("flex justify-center items-center w-full max-w-[1000px] gap-8", navPosition ? "justify-between" : "justify-end")} >
          <div className={cn("relative h-full w-[250px]", navPosition ? "inline" : "hidden")}>
            <img src="/logosmall.png" alt="logo" />
          </div>
          <button className="flex lg:hidden" onClick={() => setOpen(o => !o)}>{open ? <IconX /> : <IconMenu2 />}</button>
          <ul className="gap-4 font-bold items-center hidden lg:flex">
            <Link href="#whatwedo"><li>What We Do</li></Link>
            <Link href="#socialmedias"><li>Social Medias</li></Link>
            <Link href="#contactus"><li>Contact Us</li></Link>
          </ul>
        </div>
      </header>
      <div className={cn("w-0 h-screen bg-white fixed top-0 bottom-0 right-0 z-10 block lg:hidden", open ? "w-96" : "w-0")}>
        <ul className="gap-16 font-bold items-center flex flex-col py-64 text-2xl block lg:hidden">
          <Link href="#whatwedo" className={cn(open ? "block" : "hidden")}><li>What We Do</li></Link>
          <Link href="#socialmedias" className={cn(open ? "block" : "hidden")}><li>Social Medias</li></Link>
          <Link href="#contactus" className={cn(open ? "block" : "hidden")}> <li>Contact Us</li></Link>
        </ul>
      </div>
    </>
  )
}

export default Header

