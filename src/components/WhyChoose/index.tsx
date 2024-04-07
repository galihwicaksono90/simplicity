import { ReactNode } from "react"
import Image from "next/image"
import background from "../../../public/whyChoose.png"
import { Text, Title, Card } from "@/components/ui"
import { IconAward as Icon1, IconThumbUp as Icon2, IconCheckupList as Icon3, IconHeartHandshake as Icon4, IconMoodHappy as Icon5 } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

const cardItems = [
  {
    text: "We have 18 years experience in Domestic helpers business.",
    icon: <Icon1 className="text-secondary h-[90px] w-auto stroke-1" />,
    span: 2
  },
  {
    text: "Your queries are relevant.",
    icon: <Icon2 className="text-secondary h-[90px] w-auto stroke-1" />,
    span: 2
  },
  {
    text: "We ensure your request are delivered.",
    icon: <Icon3 className="text-secondary h-[90px] w-auto stroke-1" />,
    span: 2
  },
  {
    text: "We built great relationship with customers.",
    icon: <Icon4 className="text-secondary h-[90px] w-auto stroke-1" />,
    span: 3
  },
  {
    text: "We are commited to our customer request & take pride to fulfill their request",
    icon: <Icon5 className="text-secondary h-[90px] w-auto stroke-1" />,
    span: 3
  },
]

const WhyChoose = () => {
  return (
    <section className="relative flex items-center justify-center h-[1000px] my-32" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", }}>
      <div className="absolute -z-50 top-0 right-0 h-full overflow-hidden" >
        <Image src={background} alt="background" className="h-full" />
      </div>
      <div className="flex flex-col  gap-16">
        <div className="flex flex-col text-center  items-center gap-4">
          <Title className="text-white">Why choose Simplicity</Title>
          <Text className="text-white">The only maid service that cleans your home and runs your errands for you</Text>
        </div>
        <div className="grid grid-cols-6 gap-4 max-w-[974px]">
          <CardItem className={"col-span-2"}>
            <div className="relative">
              <span className="absolute top-[17px] left-[30px] text-secondary text-3xl">18</span>
              <Icon1 className="text-secondary h-[90px] w-auto stroke-1" />
            </div>
            <Text>We have 18 years experience in Domestic helpers business.</Text>
          </CardItem>
          <CardItem className={"col-span-2"}>
            <Icon2 className="text-secondary h-[90px] w-auto stroke-1" />
            <Text>Your queries are relevant.</Text>
          </CardItem>
          <CardItem  className={"col-span-2"}>
            <Icon3 className="text-secondary h-[90px] w-auto stroke-1" />
            <Text>We ensure your request are delivered.</Text>
          </CardItem>
          <CardItem  className={"col-span-3"}>
            <Icon4 className="text-secondary h-[90px] w-auto stroke-1" />
            <Text>We built great relationship with customers.</Text>
          </CardItem>
          <CardItem  className={"col-span-3"}>
            <Icon5 className="text-secondary h-[90px] w-auto stroke-1" />
            <Text>We are commited to our customer request & take pride to fulfill their request</Text>
          </CardItem>
        </div>   
      </div>
    </section >
  )
}

type CardItemProps = {
  children: ReactNode
  className?: string
}
const CardItem = ({ children, className }: CardItemProps) => {
  return (
    <Card className={cn("flex flex-col items-center gap-8 text-foreground font-bold text-center h-[330px]", className)}>
      {children}
    </Card>
  )
}

export default WhyChoose
