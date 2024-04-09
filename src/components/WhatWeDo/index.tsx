"use client"
import { useRef } from "react"
import { Text, Title } from "@/components/ui/"
import { IconCircleCheck } from "@tabler/icons-react"
import Carousel from "./Carousel"
import { cn } from "@/lib/utils"
import { useLazyLoader } from "@/lib/hooks"

const slides = [
  "/slide1.jpeg",
  "/slide2.jpeg",
  "/slide3.jpeg",
  "/slide4.jpeg",
  "/slide5.jpeg",
  "/slide7.jpeg",
  "/slide1.jpeg",
  "/slide2.jpeg",
  "/slide3.jpeg",
  "/slide4.jpeg",
  "/slide5.jpeg",
  "/slide7.jpeg",
]

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center gap-2">
      <IconCircleCheck className="text-main w-16" />
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
    <section className="flex items-center justify-center flex-col py-32 " id="whatwedo" ref={ref}>
      <div className={cn("flex items-center justify-center flex-col gap-y-6 max-w-5xl translate-y-8 opacity-0 transition-all px-16",
        isVisible ? "translate-y-0 opacity-100" : "")}>
        <Title className="text-main text-center">What We Do</Title>
        <Text className="text-center">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit.
        </Text>
        <ul className="flex gap-8 flex-col justify-start md:flex-row ">
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
      <div className="h-">
        <Carousel options={{ loop: true, dragFree: true }} slides={slides} />
      </div>
    </section>
  )
}

export default WhatWeDo
