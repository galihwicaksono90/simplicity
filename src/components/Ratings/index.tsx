"use client"
import { useRef } from "react"
import { Title, Text } from "@/components/ui"
import { cn } from "@/lib/utils"
import { useLazyLoader } from "@/lib/hooks"
import Link from "next/link"

const Ratings = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible] = useLazyLoader({
    elementRef: ref,
    threshold: 0.5,
    freezeOnceVisible: true
  })
  return (

    <section className={cn("flex flex-col gap-16 items-center py-16 translate-y-8 opacity-0 transition-all ease-in-out px-16 text-center ", isVisible ? "translate-y-0 opacity-100" : "")} ref={ref}>
      <Title className="text-main">What Customers say about Simplicity</Title>
      <Link target="_blank" href="https://www.google.com/maps/place/Simplicity+Employment+Agency/@1.4346207,103.8439003,17z/data=!4m8!3m7!1s0x31da157bb0f3c127:0x99e18632fa6653d1!8m2!3d1.4346207!4d103.8439003!9m1!1b1!16s%2Fg%2F11vz491b9_?entry=ttu">
        <div className="py-32">
          <img src="/reviews.png" alt="google reviews" />
        </div>
      </Link>

      <Link target="_blank" href="https://g.page/r/CdFTZvoyhuGZEB0/review">
        <Title className="text-3xl underline">Submit your review</Title>
      </Link>
    </section>
  )
}

export default Ratings

