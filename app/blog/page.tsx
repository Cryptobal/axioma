import Link from 'next/link'
import { listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { Card } from '@/components/ui/card'
import { CalendarDays, Tag, Database, Workflow, Sparkles, Boxes } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ideas prácticas sobre automatización, ERP, APIs e IA aplicada.',
}

export default async function Page() {
  const posts = await listMDX('blog')
  const allTags = Array.from(new Set(posts.flatMap((p: any) => p.tags || [])))
  return (
    <div className="container-max">
      <Script id="ld-blog" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Blog' }) }} />
      <PageHeader title="Blog — LX3" subtitle="Ideas prácticas sobre automatización, ERP, APIs e IA aplicada." />
      {allTags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {allTags.map((t) => (
            <Link key={t} href={`#tag-${t}`} className="rounded-xl border border-zinc-900/10 bg-zinc-900/5 px-2 py-0.5 text-[12px] text-zinc-700 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:text-zinc-200">
              {t}
            </Link>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {posts.map((p) => (
          <Card key={p.slug} className="overflow-hidden">
            <div className="relative h-20 md:h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 inline-flex items-center justify-center rounded-2xl bg-primary/15 text-primary/70 ring-1 ring-primary/20 p-2 md:p-3">
                {/* Ícono por tema simple según tags */}
                {Array.isArray(p.tags) && p.tags.some((t: string) => /erp|data|datos/i.test(t)) ? (
                  <Database className="size-7 md:size-8" />
                ) : Array.isArray(p.tags) && p.tags.some((t: string) => /workflow|proceso|automat/i.test(t)) ? (
                  <Workflow className="size-7 md:size-8" />
                ) : Array.isArray(p.tags) && p.tags.some((t: string) => /ia|llm|ml/i.test(t)) ? (
                  <Sparkles className="size-7 md:size-8" />
                ) : (
                  <Boxes className="size-7 md:size-8" />
                )}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <Link href={`/blog/${p.slug}`} className="font-medium hover:text-primary block">{p.title}</Link>
              {p.description ? (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{p.description}</p>
              ) : null}
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1"><CalendarDays className="size-3.5" /> {p.date || '—'}</span>
                {Array.isArray(p.tags) && p.tags.slice(0, 2).map((t) => (
                  <span key={t} className="inline-flex items-center gap-1"><Tag className="size-3.5" /> {t}</span>
                ))}
              </div>
              <div className="mt-4">
                <Link href={`/blog/${p.slug}`} className="text-primary text-sm">Leer artículo →</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}


