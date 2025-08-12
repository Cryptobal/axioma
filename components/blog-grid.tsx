"use client"
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { CalendarDays, Tag, Database, Workflow, Sparkles, Boxes } from 'lucide-react'
import { useMemo, useState } from 'react'

type Post = {
  slug: string
  title: string
  description?: string
  date?: string
  tags?: string[]
}

function pickIcon(tags?: string[]) {
  if (!tags) return Boxes
  const t = tags.join(' ').toLowerCase()
  if (/(erp|data|datos)/.test(t)) return Database
  if (/(workflow|proceso|automat)/.test(t)) return Workflow
  if (/(ia|llm|ml|ai)/.test(t)) return Sparkles
  return Boxes
}

export function BlogGrid({ posts }: { posts: Post[] }) {
  const allTags = useMemo(() => Array.from(new Set(posts.flatMap((p) => p.tags || []))), [posts])
  const [active, setActive] = useState<string>('Todos')
  const filtered = useMemo(() => (active === 'Todos' ? posts : posts.filter((p) => (p.tags || []).includes(active))), [active, posts])

  return (
    <div>
      {allTags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {['Todos', ...allTags].map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-xl border px-2 py-0.5 text-[12px] transition-colors ${
                active === t
                  ? 'border-primary/30 bg-primary/15 text-primary'
                  : 'border-zinc-900/10 bg-zinc-900/5 text-zinc-700 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:text-zinc-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filtered.map((p) => {
          const Icon = pickIcon(p.tags)
          return (
            <Card key={p.slug} className="overflow-hidden">
              <div className="relative h-20 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center justify-center rounded-2xl bg-primary/15 text-primary/70 ring-1 ring-primary/20 p-2 md:p-3">
                  <Icon className="size-7 md:size-8" />
                </span>
              </div>
              <div className="p-5 md:p-6">
                <Link href={`/blog/${p.slug}`} className="font-medium hover:text-primary block">{p.title}</Link>
                {p.description ? (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{p.description}</p>
                ) : null}
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1"><CalendarDays className="size-3.5" /> {p.date || '—'}</span>
                  {(p.tags || []).slice(0, 2).map((t) => (
                    <span key={t} className="inline-flex items-center gap-1"><Tag className="size-3.5" /> {t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href={`/blog/${p.slug}`} className="text-primary text-sm">Leer artículo →</Link>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}


