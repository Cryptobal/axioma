import type { MetadataRoute } from 'next'
import { listMDX } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://lx3.ai'
  const routes = ['', '/servicios', '/industrias', '/casos', '/quienes-somos', '/blog', '/contacto']
  const base = routes.map((route) => ({ url: `${url}${route}`, lastModified: new Date() }))
  const blogs = await listMDX('blog')
  const casos = await listMDX('casos')
  const blogUrls = blogs.map((p) => ({ url: `${url}/blog/${p.slug}`, lastModified: new Date() }))
  const caseUrls = casos.map((c) => ({ url: `${url}/casos/${c.slug}`, lastModified: new Date() }))
  const industries = ['seguridad-privada','logistica','retail','construccion','servicios-profesionales','salud'].map((s) => ({ url: `${url}/industrias/${s}`, lastModified: new Date() }))
  return [...base, ...blogUrls, ...caseUrls, ...industries]
}


