"use client"
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = (mounted ? resolvedTheme : 'dark') === 'dark'
  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      aria-pressed={isDark}
      title={isDark ? 'Tema oscuro' : 'Tema claro'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-xl border p-2 transition-colors border-black/10 bg-black/5 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}


