import type { MetadataRoute } from 'next'
import { listMDX } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lx3.ai'
  const routes = [
    '',
    '/transformacion-digital-pymes',
    '/servicios',
    '/servicios/erp-modular-nube',
    '/servicios/integracion-sistemas',
    '/servicios/automatizacion-ia',
    '/servicios/aplicaciones-internas',
    '/industrias',
    '/casos',
    '/blog',
    '/recursos',
    '/quienes-somos',
    '/contacto',
    '/privacidad',
    '/terminos',
  ]
  const base = routes.map((route) => ({ url: `${url}${route}`, lastModified: new Date() }))
  const blogs = await listMDX('blog')
  const casos = await listMDX('casos')
  const blogUrls = blogs.map((p) => ({ url: `${url}/blog/${p.slug}`, lastModified: new Date() }))
  const caseUrls = casos.map((c) => ({ url: `${url}/casos/${c.slug}`, lastModified: new Date() }))
  const industries = ['logistica','retail','servicios-profesionales','seguridad-privada','construccion','salud'].map((s) => ({ url: `${url}/industrias/${s}`, lastModified: new Date() }))
  return [...base, ...blogUrls, ...caseUrls, ...industries]
}


