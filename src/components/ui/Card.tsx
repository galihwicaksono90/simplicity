import { cn } from "@/lib/utils"

type CardProps = {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className, ...props }: CardProps) => {

  return (
    <div className={cn("rounded-2xl bg-white p-6 shadow", className)} {...props} >
      {children}
    </div>

  )
}

export default Card
