import { Title, Text } from "@/components/ui"
import heroImage from "../../../public/hero.png"
import logoLarge from "../../../public/logolarge.png"

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="flex max-w-[1000px] flex-col justify-between items-center gap-12 px-8 text-center lg:flex-row lg:text-left">
        <div className="flex flex-2 flex-col gap-8 items-center lg:items-start">
          <div className="relative px-4">
            <img src="/logolarge.png" alt="main logo" />
          </div>
          <Title className="font-extrabold">We help to provide reliable <span className="text-main">helpers</span> to customers for their daily <span className="text-main">activities</span></Title>
          <Text>At the end of the day, <span className="font-bold">everyone</span> deserve a <span className="font-bold">happy life!</span>  </Text>
        </div>
        <div className="flex-auto min-w-60">
          <img src="/hero.png" alt='hero image' />
        </div>
      </div>
    </section>
  )
}

export default Hero
