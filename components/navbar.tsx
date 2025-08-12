"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { useEffect, useState } from 'react'
import { CommandPalette } from '@/components/command-palette'
import { Logo } from '@/components/logo'

type NavLink = { href: string; label: string }

const links: NavLink[] = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/industrias', label: 'Industrias' },
  { href: '/casos', label: 'Casos' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-max">
        <div
          className={`relative rounded-2xl px-4 py-3 flex items-center justify-between border transition-colors ${
            scrolled
              ? 'bg-white/70 border-zinc-900/10 text-zinc-900 backdrop-blur-xl dark:bg-zinc-900/70 dark:border-zinc-50/10 dark:text-zinc-100'
              : 'bg-white/50 border-zinc-900/10 text-zinc-900 backdrop-blur-xl dark:bg-zinc-900/50 dark:border-zinc-50/10 dark:text-zinc-100'
          }`}
        >
          <Link href="/" className="flex items-center gap-2 font-medium tracking-tight">
            <Logo className="h-5 w-auto text-primary" />
            <span className="sr-only">LX3</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href as any}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === l.href ? 'text-primary' : 'text-zinc-500 dark:text-zinc-300'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contacto">Agenda diagnóstico</Link>
            </Button>
          </div>
          <button
            className="md:hidden rounded-xl p-2 hover:bg-zinc-900/5 dark:hover:bg-zinc-50/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <motion.span initial={false} animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </motion.span>
          </button>
          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="md:hidden absolute left-0 right-0 top-full"
              >
                <div className="pt-2">
                  <div className="rounded-2xl px-4 py-4 mx-0 flex flex-col gap-3 border backdrop-blur-xl bg-white/85 dark:bg-zinc-900/90 border-zinc-900/10 dark:border-zinc-50/10">
                    {links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href as any}
                        onClick={() => setOpen(false)}
                        className="text-zinc-700 dark:text-zinc-100"
                      >
                        {l.label}
                      </Link>
                    ))}
                    <Button asChild className="mt-2">
                      <Link href="/contacto">Agenda diagnóstico</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <CommandPalette />
        </div>
      </div>
    </header>
  )
}


