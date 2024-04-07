import { Title, Text } from "@/components/ui"
import heroImage from "../../../public/hero.png"
import Image from "next/image"
import logoLarge from "../../../public/logolarge.png"

import logoSmall from "../../../public/logosmall.png"

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="flex max-w-[1000px] justify-between items-center gap-12">
        <div className="flex flex-1 flex-col gap-8">
          <div className="relative">
            <Image src={logoLarge} alt="main logo" />
          </div>
          <Title className="font-extrabold ">We help to provide reliable <span className="text-main">helpers</span> to customers for their daily <span className="text-main">activities</span></Title>
          <Text>At the end of the day, <span className="font-bold">everyone</span> deserve a <span className="font-bold">happy life!</span>  </Text>
        </div>
        <div className="span-relative">
          <Image src={heroImage} alt="hero image" width={300} />
        </div>
      </div>
    </section>
  )
}

export default Hero
