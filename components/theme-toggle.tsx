"use client"
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = (mounted ? resolvedTheme : undefined) === 'dark'
  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      aria-pressed={isDark}
      title={isDark ? 'Tema oscuro' : 'Tema claro'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-xl border p-2 transition-colors border-zinc-900/10 bg-zinc-900/5 hover:bg-zinc-900/10 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:hover:bg-zinc-50/10"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}


