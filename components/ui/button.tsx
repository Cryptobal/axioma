"use client"
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gard-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-accent-brand)] text-white shadow-md hover:scale-[1.05] hover:bg-[var(--color-accent-brand-hover)]',
        primary:
          'bg-[var(--color-accent-brand)] text-white shadow-md hover:scale-[1.05] hover:bg-[var(--color-accent-brand-hover)]',
        secondary:
          'bg-[#1E3A8A] text-white shadow-md hover:scale-[1.05] hover:bg-[color-mix(in_oklab,#1E3A8A_85%,#000_15%)]',
        outline:
          'border-2 border-[var(--color-accent-brand)] bg-transparent text-[var(--color-accent-brand)] hover:scale-[1.05] hover:bg-[color-mix(in_oklab,var(--color-accent-brand)_10%,transparent)]',
        ghost:
          'bg-transparent text-[var(--color-accent-brand)] hover:scale-[1.03] hover:bg-[color-mix(in_oklab,var(--color-accent-brand)_10%,transparent)]',
        accent:
          'bg-accent-orangeAa text-white shadow-md hover:scale-[1.05] hover:bg-[color-mix(in_oklab,var(--color-accent-orange-aa)_90%,#000_10%)]',
        link: 'text-[var(--color-accent-brand)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-[36px] rounded-xl px-3 text-[14px]',
        md: 'h-[40px] rounded-xl px-4 text-[14px]',
        lg: 'h-[44px] rounded-2xl px-8 text-[16px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }


