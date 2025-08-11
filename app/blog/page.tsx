import Link from 'next/link'
import { listMDX } from '@/lib/mdx'

export default async function Page() {
  const posts = await listMDX('blog')
  return (
    <div className="container-max">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link className="text-primary" href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


