import { Title, Text } from "@/components/ui"
import TestimonyCarousel from "./TestimonyCarousel"
import { testimonials } from "./testimonials"

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-8 items-center py-16">
      <Title className="text-main">What Customers say about Simplicity</Title>
      <Text>For 18 years we have helped you make home a clean, relaxing refuge</Text>
      <TestimonyCarousel slides={testimonials} options={{ loop: true }} />
    </section>
  )
}

export default Testimonials 
