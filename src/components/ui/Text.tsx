import * as React from "react"
import { cn } from "@/lib/utils"

const Text = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("text-2xl", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export default Text
