"use client"

import { Card, Text } from "@/components/ui"
import TestimonyCard, { CardProps } from "./TestimonyCard"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

import "./TestimonyCarousel.css"

type Props = {
  slides: CardProps[]
  options?: EmblaOptionsType
}

const TestimonyCarousel = ({ slides, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const onPrev = () => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }
  const onNext = () => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }
  return (
    <div className="testimony">
      <div className="testimony__viewport" ref={emblaRef}>
        <div className="testimony__container">
          {slides.map((slide, index) => (
            <div className="testimony__slide" key={index}>
              <TestimonyCard {...slide} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 bottom-0 flex justify-between z-10">
        <button onClick={onPrev}>
          <IconChevronLeft className="h-[48px] w-[48px]" />
        </button>
      </div>

      <div className="absolute top-0 right-0 bottom-0 flex justify-between z-10">
        <button onClick={onNext}>
          <IconChevronRight className="h-[48px] w-[48px]" />
        </button>
      </div>
    </div>
  )
}

export default TestimonyCarousel
