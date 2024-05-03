import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-satoshi-bold transition-all duration-500 overflow-hidden",
  {
    variants: {
      variant: {
        /* TODO: Add the correct animation on hover */
        default: "bg-gradient-to-r from-blue to-purple hover:to-blue",
        outline: "border-2 border-white hover:bg-blue hover:border-blue",
      },
      size: {
        default: "h-11 px-[30px] pt-[11px] pb-[13px]",
        lg: "h-[54px] px-8 pt-4 pb-[18px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        data-content={props.children}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
