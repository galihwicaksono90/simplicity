import { Card, Text } from "@/components/ui"
import { IconStarFilled } from "@tabler/icons-react"

export type CardProps = {
  text: string
  avatar: string,
  rating: 1 | 2 | 3 | 4 | 5
  name: string
}

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(rating)].map((_, i) => (
        <IconStarFilled key={i} />
      ))}
    </div>
  )
}

const TestimonyCard = ({ text, name, avatar, rating }: CardProps) => {
  return (
    <div className="h-[500px]"><Card className="relative bg-peach relative pb-[180px] pt-16">
      <Text className="text-xl italic font-light text-center">&ldquo;{text}&rdquo;</Text>
      <Card className="absolute left-1/2 bottom-[-200px] sm:bottom-[-250px] w-[200px] sm:w-[333px] flex flex-col items-center gap-4 translate-x-[-50%] translate-y-[-50%] ">
        <div className="rounded-full bg-orange h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] overflow-hidden relative">
          <img src={avatar} alt="testimonial 1" />
        </div>
        <div className="h-[2px] bg-foreground w-full" />
        <Text className="font-bold">{name}</Text>
        <Rating rating={rating} />
      </Card>
    </Card></div>
  )
}

export default TestimonyCard
