"use client"
import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { cn } from '@/lib/utils'

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <ToastPrimitive.Provider>{children}<ToastPrimitive.Viewport className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] outline-none" /></ToastPrimitive.Provider>
}

export function Toast({ title, description, open, onOpenChange }: { title: string; description?: string; open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <ToastPrimitive.Root open={open} onOpenChange={onOpenChange} className={cn('glass rounded-2xl p-4 data-[state=open]:animate-in data-[state=closed]:animate-out')}>
      <ToastPrimitive.Title className="text-sm font-medium">{title}</ToastPrimitive.Title>
      {description ? <ToastPrimitive.Description className="text-xs text-zinc-400 mt-1">{description}</ToastPrimitive.Description> : null}
    </ToastPrimitive.Root>
  )
}


