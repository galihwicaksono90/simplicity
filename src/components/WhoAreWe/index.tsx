"use client"

import React, { useRef } from 'react'
import { Text, Title } from "@/components/ui"
import { cn } from "@/lib/utils"
import { useLazyLoader } from "@/lib/hooks"

import background from "../../../public/whoAreWe.png"

type AvatarData = { photo: string, name: string, position: string }

const people: AvatarData[] = [
  {
    photo: "/photo1.png",
    name: "Roswida",
    position: "Director & Partner"
  },
  {
    photo: "/photo3.png",
    name: "Ahmad Nizal",
    position: "Founder"
  },
  {
    photo: "/photo2.png",
    name: "Kusmiawati Rahmat",
    position: "Founder"
  },
]

const Photo = ({ photo, name, position }: { photo: string, name: string, position: string }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="rounded-2xl h-[300px] w-[300px] overflow-hidden relative">
        <img src={photo} alt="Who are we" />
      </div>
      <div className="flex flex-col gap-2">
        <Text className="font-bold">{name}</Text>
        <Text>{position}</Text>
      </div>
    </div>
  )
}



const WhoAreWe = () => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible] = useLazyLoader({
    elementRef,
    threshold: 0.5,
    freezeOnceVisible: true
  })
  return (
    <section className="why-choose relative flex items-center justify-center h-[1000px] my-32 bg-[url('/whoAreWe.png')]">
      <div className="absolute -z-50 top-0 right-0 h-full overflow-hidden" >
        <img src="/whoAreWe.png" alt="background" className="h-full" />
      </div>
      <div className={cn("flex flex-col text-white text-center gap-16 translate-y-8 opacity-0 transition-all ease-in-out", isVisible ? "translate-y-0 opacity-100" : "")} ref={elementRef}>
        <Title>Who Are We?</Title>
        <div className="flex gap-16">
          {people.map((p, i) => (
            <Photo {...p} key={i} />
          ))}

        </div>
      </div>
    </section>
  )
}

export default WhoAreWe
