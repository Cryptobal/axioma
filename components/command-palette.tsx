"use client"
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'

const items = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Industrias', href: '/industrias' },
  { label: 'Casos', href: '/casos' },
  { label: 'Sobre nosotros', href: '/sobre-nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/40" onClick={() => setOpen(false)} />
      )}
      <Command.Dialog open={open} onOpenChange={setOpen} label="Buscar" className="fixed left-1/2 top-24 z-[61] w-[90vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-zinc-100 shadow-card">
        <Command.Input autoFocus value={query} onValueChange={setQuery} placeholder="Buscar páginas…" className="w-full border-b border-white/10 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-zinc-500" />
        <Command.List className="max-h-[50vh] overflow-auto">
          <Command.Empty className="p-4 text-sm text-zinc-500">Sin resultados</Command.Empty>
          {filtered.map((i) => (
            <Command.Item
              key={i.href}
              onSelect={() => {
                setOpen(false)
                router.push(i.href as any)
              }}
              className="cursor-pointer px-4 py-2 text-sm data-[selected=true]:bg-white/10"
            >
              {i.label}
            </Command.Item>
          ))}
        </Command.List>
      </Command.Dialog>
    </div>
  )
}


