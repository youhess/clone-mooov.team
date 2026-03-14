import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import Button from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'bg-black text-white hover:bg-black/85',
        ghost: 'bg-transparent text-current hover:bg-black/5',
        outline: 'border border-black/18 bg-transparent text-black hover:border-black hover:bg-black hover:text-white',
        inverted: 'bg-white text-black hover:bg-white/92',
      },
      size: {
        default: 'h-12 px-6',
        sm: 'h-10 px-4 text-xs tracking-[0.08em] uppercase',
        lg: 'h-14 px-7 text-base',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

export { Button }
