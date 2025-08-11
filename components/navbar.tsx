"use client"
import Link from 'next/link'
import type { Route } from 'next'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { useEffect, useState } from 'react'
import { CommandPalette } from '@/components/command-palette'

type NavLink = { href: Route; label: string }

const links: NavLink[] = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/industrias', label: 'Industrias' },
  { href: '/casos', label: 'Casos' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
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
          className={`relative rounded-2xl px-4 py-3 flex items-center justify-between border text-zinc-100 transition-colors ${
            scrolled ? 'bg-zinc-900/90 border-white/10 backdrop-blur-xl' : 'bg-zinc-900/70 border-white/10 backdrop-blur-xl'
          }`}
        >
          <Link href="/" className="font-medium tracking-tight text-zinc-100">
            Axima
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm hover:text-primary transition-colors ${pathname === l.href ? 'text-primary' : 'text-zinc-300'}`}
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
            className="md:hidden rounded-xl p-2 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
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
                  <div className="glass rounded-2xl px-4 py-4 mx-0 flex flex-col gap-3">
                    {links.map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-200">
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


