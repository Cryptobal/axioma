### Tech stack detectado (heurísticas Fase 0)

- **Framework**: Next.js (App Router). Evidencias: rutas `/_next/static/...`, streaming RSC, componentes `app/(site)`.
- **Runtime/Hosting**: Vercel. Evidencias: cabeceras `server: Vercel`, `x-vercel-id`, `x-vercel-cache: HIT`.
- **CDN**: Vercel Edge + `cache-control: public, must-revalidate`.
- **Analytics/Tagging**: Google Tag Manager (`GTM-P3MPQBTJ`).
- **CSS**: Tailwind (clases utilitarias y `globals.css`).
- **Imágenes**: Next/Image con `srcSet` y `fetchPriority="high"` (hero LCP).
- **Fuentes**: WOFF2 preloaded.
- **SEO helper**: `components/seo.tsx` usa `next-seo` (`DefaultSeo`) con `lib/seo`.

### Observaciones

- `manifest.json` no existe (respuesta HTML 404). Recomendación: publicar manifest PWA básico.
- JSON‑LD mezclado: aparece `Organization` y `WebSite` con valores de "Axima" (boilerplate). Debe corregirse a **LX3** y `https://www.lx3.ai`.

### Cabeceras relevantes

Ejemplo `home.headers.txt`:

```text
server: Vercel
cache-control: public, max-age=0, must-revalidate
x-vercel-cache: HIT
content-type: text/html; charset=utf-8
strict-transport-security: max-age=63072000
```

### Acciones recomendadas (alta prioridad)

- Unificar dominio preferido (`www.lx3.ai`) y canónicos; configurar 301.
- Arreglar JSON‑LD de marca/sitio y agregar BreadcrumbList global.
- Completar OG/Twitter (`og:site_name`, `og:locale`, `twitter:site`).
- Publicar `manifest.json` y `icons` PWA.

