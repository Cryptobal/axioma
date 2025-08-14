### Inventario técnico inicial (Fase 0)

- **Dominio auditado**: `https://lx3.ai` (apex). Recomendación: unificar en `https://www.lx3.ai` con 301 y usarlo en canónicos.
- **Fecha/hora**: generado automáticamente.

### Árbol de URLs conocidas

Fuente: `robots.txt` y `sitemap.xml` + enlaces internos extraídos de `home.html`.

- Home: `/`
- Secciones: `/servicios`, `/industrias`, `/casos`, `/quienes-somos`, `/blog`, `/contacto`, `/terminos`, `/privacidad`
- Casos: `/casos/finanzas-flujo-caja-ia`, `/casos/erp-logistica`, `/casos/retail-pricing-reposicion`, `/casos/payroll-automatizado`, `/casos/seguridad-operativa-turnos`, `/casos/logistica-erp-orquestacion`
- Industrias: `/industrias/seguridad-privada`, `/industrias/logistica`, `/industrias/retail`, `/industrias/construccion`, `/industrias/servicios-profesionales`, `/industrias/salud`
- Blog: `/blog/primer-post`, `/blog/kpis-roi-automatizacion`, `/blog/integrar-erp-apis-modernas`, `/blog/mvp-90-dias-ia`

### Meta‑tags detectados en Home

Archivo base: `docs/raw/home.html` (extracción del `<head>` real renderizado por Next.js/App Router).

- `<title>`: "Automatización y software a medida con IA | LX3"
- `<meta name="description">`: texto presente y orientado a software a medida con IA, PyMEs y diagnóstico.
- `<link rel="canonical" href="https://lx3.ai">` (apex, sin `www`)
- Robots: `index, follow`; `googlebot` con directivas avanzadas (OK)
- Open Graph: `og:title`, `og:description`, `og:url`, `og:type=website` (falta `og:site_name` y `og:locale`)
- Twitter: `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image` (OK; falta `twitter:site`)
- `keywords` presente (no aporta valor moderno → se puede eliminar)
- JSON‑LD: se observa inyección de `WebPage` y además, en el stream, un script `Organization` con valores de "Axima" (nombre/URL) heredado del boilerplate. Impacto alto: datos estructurados de marca incorrectos.

Snippet observado (resumido):

```html
<title>Automatización y software a medida con IA | LX3</title>
<meta name="description" content="Desarrollamos software a medida con IA..." />
<link rel="canonical" href="https://lx3.ai" />
<meta property="og:title" content="Automatización y software a medida con IA" />
<meta property="og:description" content="Desarrollamos software a medida con IA..." />
<meta property="og:url" content="https://lx3.ai" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

### Recursos y assets críticos

- Fuente precargada: `/_next/static/media/e4af272ccee01ff0-s.p.woff2` (link rel=preload, `as=font`, `crossorigin`)
- CSS: `/_next/static/css/faf6e8a025010d2e.css`
- Chunks JS: múltiples bajo `/_next/static/chunks/...`
- Imagen hero responsive (Next/Image) con `fetchPriority="high"` (buena práctica para LCP)
- GTM presente (noscript iframe): `GTM-P3MPQBTJ`
- Favicon: `/favicon.ico` responde (cabeceras OK)
- Manifest: `/manifest.json` devuelve HTML (404 enmascarado) → falta manifest real

### Robots y Sitemap

- `robots.txt`
  - `Allow: /`
  - `Disallow: /api/`, `Disallow: /admin/`
  - `Host: https://lx3.ai` (no utilizado por Google; se puede omitir)
  - `Sitemap: https://lx3.ai/sitemap.xml`

- `sitemap.xml`
  - URLs: Home, secciones principales, industrias, casos y posts. `lastmod` presentes.

### Enlaces internos extraídos (home)

Ver `docs/raw/links.txt` (17 entradas únicas). Principales: `/servicios`, `/industrias`, `/casos`, `/quienes-somos`, `/blog`, `/contacto`, `/?segment=pymes`.

### Hallazgos clave (resumen)

- Canónico en apex sin `www`; definir dominio preferido (301 + canónicos consistentes).
- Datos estructurados de marca heredan valores de "Axima" → corregir a **LX3** y URL del dominio real.
- Falta `og:site_name`, `og:locale` y `twitter:site` → añadir.
- `manifest.json` inexistente → crear manifest mínimo PWA.
- Accesibilidad: estructura semántica adecuada; revisar contraste en chips/vidrios (AA).

### Referencias

- Google Search Central: "SEO basics" y canónicos: `https://developers.google.com/search/docs/fundamentals/seo-starter-guide`
- web.dev Meta/OG/Twitter: `https://web.dev/learn/html/metadata/`
- Open Graph protocol: `https://ogp.me/`
- Twitter Cards: `https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image`
- robots.txt: `https://developers.google.com/search/docs/crawling-indexing/robots/intro`
- Sitemaps: `https://www.sitemaps.org/protocol.html`

