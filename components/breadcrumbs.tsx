"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

function toTitle(segment: string) {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const parts = pathname.split('/').filter(Boolean)
  const crumbs = parts.map((part, i) => {
    const href = '/' + parts.slice(0, i + 1).join('/')
    return { href, label: toTitle(part) }
  })
  if (crumbs.length === 0) return null
  return (
    <nav aria-label="breadcrumbs" className="text-sm text-zinc-400 flex items-center gap-2">
      <Link href="/" className="hover:text-primary">Inicio</Link>
      {crumbs.map((c) => (
        <span key={c.href} className="flex items-center gap-2">
          <ChevronRight className="size-3.5 opacity-50" />
          <Link href={c.href as any} className="hover:text-primary">{c.label}</Link>
        </span>
      ))}
    </nav>
  )
}


