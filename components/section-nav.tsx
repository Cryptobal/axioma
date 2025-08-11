"use client"
import { useEffect, useState } from 'react'

type Item = { id: string; label: string }

export function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    items.forEach((i) => {
      const el = document.getElementById(i.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [items])

  return (
    <nav className="sticky top-24 hidden md:block">
      <div className="glass rounded-2xl p-4">
        <div className="text-sm font-medium">Índice</div>
        <ul className="mt-2 space-y-2 text-sm">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className={active === i.id ? 'text-primary' : 'text-zinc-400 hover:text-zinc-200'}>
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}


