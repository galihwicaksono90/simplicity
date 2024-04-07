"use client"
import { useRef } from "react"
import { Text, Title } from "@/components/ui/"
import { IconCircleCheck } from "@tabler/icons-react"
import Carousel from "./Carousel"
import { cn } from "@/lib/utils"
import { useLazyLoader } from "@/lib/hooks"

import slide1 from "../../../public/slide1.jpeg"
import slide2 from "../../../public/slide2.jpeg"
import slide3 from "../../../public/slide3.jpeg"
import slide4 from "../../../public/slide4.jpeg"
import slide5 from "../../../public/slide5.jpeg"
import slide7 from "../../../public/slide7.jpeg"

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide7,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide7,
]

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center gap-2">
      <IconCircleCheck className="text-main" />
      <Text>{children}</Text>
    </li>
  )
}

const WhatWeDo = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible] = useLazyLoader({
    elementRef: ref,
    threshold: 0.5,
    freezeOnceVisible: true
  })
  return (
    <section className="flex items-center justify-center flex-col py-32" id="whatwedo" ref={ref}>
      <div className={cn("flex items-center justify-center flex-col gap-y-6 max-w-5xl translate-y-8 opacity-0 transition-all",
        isVisible ? "translate-y-0 opacity-100" : "")}>
        <Title className="text-main">What We Do</Title>
        <Text className="text-center">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit.
        </Text>
        <ul className="flex gap-8">
          <div className="flex flex-col gap-4">
            <ListItem>Workpermit Process <br />(Application / Renewal / Cancellation)</ListItem>
            <ListItem>Direct Hiring Process</ListItem>
            <ListItem>Purchase of insurance</ListItem>
            <ListItem>Renewal of Passport</ListItem>
          </div>
          <div className="flex flex-col gap-4">
            <ListItem>Renewal of Work Permit</ListItem>
            <ListItem>Maid Training & Development(Basic)</ListItem>
            <ListItem>Repatreation Service</ListItem>
          </div>
        </ul>
      </div>
      <div className="h-20"></div>
      <Carousel options={{ loop: true, dragFree: true }} slides={slides} />
    </section>
  )
}

export default WhatWeDo
