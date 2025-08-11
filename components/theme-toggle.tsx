"use client"
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme !== 'light'
  return (
    <button
      aria-label="Cambiar tema"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}


