import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = 'https://www.axima.com'
  const routes = ['', '/servicios', '/industrias', '/casos', '/sobre-nosotros', '/blog', '/contacto']
  return routes.map((route) => ({ url: `${url}${route}`, lastModified: new Date() }))
}


