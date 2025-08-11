import { readMDXFile, listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await listMDX('blog')
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { frontmatter } = await readMDXFile('blog', params.slug)
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { frontmatter, source } = await readMDXFile('blog', params.slug)
  return (
    <div className="container-max prose prose-invert">
      <h1>{frontmatter.title}</h1>
      {source}
    </div>
  )
}


