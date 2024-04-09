"use client"
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const Header = () => {
  const [navPosition, setNavPosition] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    if (window.scrollY > 40) {
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
    <header className={cn("bg-white h-16 flex justify-center items-center fixed top-0 left-0 right-0 z-10 transition-all ease-in-out ",
      navPosition ? "drop-shadow-lg h-20" : ""
    )}>
      <div className={cn("flex justify-center w-full max-w-[1000px] py-10", navPosition ? "justify-between" : "")} >
        <div className={cn("relative h-full w-[250px]", navPosition ? "inline" : "hidden")}>
          <img src="/logosmall.png" alt="logo" />
        </div>
        <ul className="flex gap-4 font-bold items-center">
          <Link href="#whatwedo"><li>What We Do</li></Link>
          <Link href="#socialmedias"><li>Social Medias</li></Link>
          <Link href="#contactus"><li>Contact Us</li></Link>
        </ul></div>
    </header>
  )
}

export default Header

