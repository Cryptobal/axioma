import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

export type MDXFrontmatter = {
  title: string
  description?: string
  date?: string
  tags?: string[]
  industry?: string
  stack?: string[]
  metrics?: { label: string; value: string }[]
}

const ROOT = process.cwd()

export async function readMDXFile(dir: 'blog' | 'casos', slug: string) {
  const fullPath = path.join(ROOT, 'content', dir, `${slug}.mdx`)
  const raw = await fs.readFile(fullPath, 'utf8')
  const { content, data } = matter(raw)
  const frontmatter = data as MDXFrontmatter
  const headings = Array.from(content.matchAll(/^###?\s+(.+)$/gm)).map((m) => m[1])
  const source = (
    <MDXRemote
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypeSlug], [rehypeAutolinkHeadings, { behavior: 'append' }]],
        },
      }}
    />
  )
  return { frontmatter, source, headings }
}

export async function listMDX(dir: 'blog' | 'casos') {
  const contentDir = path.join(ROOT, 'content', dir)
  const files = await fs.readdir(contentDir)
  const slugs = files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''))
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(contentDir, `${slug}.mdx`)
      const raw = await fs.readFile(fullPath, 'utf8')
      const { data } = matter(raw)
      return { slug, ...(data as MDXFrontmatter) }
    })
  )
  items.sort((a, b) => (b.date?.localeCompare(a.date || '') || 0))
  return items
}


