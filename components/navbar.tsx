"use client"
import Link from 'next/link'
import type { Route } from 'next'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'

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

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-max">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-medium tracking-tight text-zinc-100">
            Axima
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm hover:text-primary transition-colors ${
                  pathname === l.href ? 'text-primary' : 'text-zinc-300'
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
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden">
          <div className="container-max -mt-6">
            <div className="glass rounded-2xl px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-200"
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
      )}
    </header>
  )
}


