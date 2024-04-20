"use client"
import { useRef } from "react"
import { Title, Text } from "@/components/ui"
import TestimonyCarousel from "./TestimonyCarousel"
import { testimonials } from "./testimonials"
import { cn } from "@/lib/utils"
import { useLazyLoader } from "@/lib/hooks"

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible] = useLazyLoader({
    elementRef: ref,
    threshold: 0.5,
    freezeOnceVisible: true
  })

  return (
    <section className={cn("flex flex-col gap-16 items-center py-16 translate-y-8 opacity-0 transition-all ease-in-out px-16 text-center ", isVisible ? "translate-y-0 opacity-100" : "")} ref={ref}>
      <Title className="text-main">What Customers say about Simplicity</Title>
      <TestimonyCarousel slides={testimonials} options={{ loop: true }} />
    </section>
  )
}

export default Testimonials 

