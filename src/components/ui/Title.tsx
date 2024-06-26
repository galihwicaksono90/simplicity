import * as React from "react"
import { cn } from "@/lib/utils"

const Title = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className={cn("text-6xl font-extrabold leading-snug", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Title.displayName = "Title"

export default Title
