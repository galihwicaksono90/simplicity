"use client"

import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import "./Carousel.css"

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, slides } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ])


  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    // setIsPlaying(autoScroll.isPlaying())
    // emblaApi
    //   .on('autoScroll:play', () => setIsPlaying(true))
    //   .on('autoScroll:stop', () => setIsPlaying(false))
    //   .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            slides.map((s, idx) => (
              <div className="embla__slide overflow-hidden h-160" key={idx}>
                <img src={s} alt="simplicity 1" className="w-full h-full object-cover" />
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default EmblaCarousel
