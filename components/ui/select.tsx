"use client"
import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Select({ children, ...props }: SelectPrimitive.SelectProps) {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
}

export function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="ml-2 size-4 opacity-80" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export const SelectValue = SelectPrimitive.Value

export function SelectContent({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn('z-50 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 text-zinc-100 shadow-card', className)}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-lg px-2 py-2 text-sm outline-none data-[highlighted]:bg-white/10',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-3" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}


