### Auditoría SEO On‑Page (Fase 1)

#### Resumen ejecutivo

- Dominio preferido inconsistente (canónicos a `https://lx3.ai`). Recomendado: `https://www.lx3.ai/` y 301 desde apex.
- JSON‑LD de marca con valores heredados ("Axima"). Corregir a **LX3** y URLs reales.
- Open Graph/Twitter incompletos (falta `og:site_name`, `og:locale`, `twitter:site`).
- `manifest.json` ausente (responde HTML). Crear manifest PWA.
- `meta keywords` aún presente; no aporta. Eliminar.
- Accesibilidad: revisar contraste en chips/vidrios para AA; atributos `alt` OK en hero.

#### Matriz de priorización

| Issue | Impacto | Esfuerzo | Recomendación |
| --- | --- | --- | --- |
| Canónico y 301 (www) | Alto | Bajo | Forzar `www` en CDN/Vercel y actualizar canónicos |
| JSON‑LD Organization/Website erróneo | Alto | Bajo | Reemplazar por Organization/Website de **LX3** |
| Completar OG/Twitter | Medio | Bajo | Añadir `og:site_name`, `og:locale`, `twitter:site` |
| Manifest PWA básico | Medio | Bajo | Publicar `manifest.json` e íconos |
| Eliminar `meta keywords` | Bajo | Bajo | Quitar del `<head>` |
| Contraste AA en UI | Medio | Medio | Ajustar tokens de color en Tailwind |

#### Snippets listos para implementación

1) Home `<head>` (Meta + OG + Twitter)

```html
<title>Transformación digital para PyMEs | LX3</title>
<meta name="description" content="Integración de sistemas, ERP modular en la nube, automatización con IA y apps internas para PyMEs. MVP en 30–90 días.">
<link rel="canonical" href="https://www.lx3.ai/">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Transformación digital para PyMEs | LX3">
<meta property="og:description" content="Integramos tus sistemas, automatizamos procesos y construimos ERP modular y apps internas.">
<meta property="og:url" content="https://www.lx3.ai/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="LX3">
<meta property="og:locale" content="es_CL">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@lx3_ai">
```

2) Robots base

```txt
User-agent: *
Allow: /
Sitemap: https://www.lx3.ai/sitemap.xml
```

3) Sitemap esqueleto

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.lx3.ai/</loc></url>
  <url><loc>https://www.lx3.ai/transformacion-digital-pymes</loc></url>
  <url><loc>https://www.lx3.ai/servicios/erp-modular-nube</loc></url>
  <url><loc>https://www.lx3.ai/servicios/integracion-sistemas</loc></url>
  <url><loc>https://www.lx3.ai/servicios/automatizacion-ia</loc></url>
  <url><loc>https://www.lx3.ai/servicios/aplicaciones-internas</loc></url>
  <url><loc>https://www.lx3.ai/casos</loc></url>
  <url><loc>https://www.lx3.ai/blog</loc></url>
  <url><loc>https://www.lx3.ai/contacto</loc></url>
  <url><loc>https://www.lx3.ai/quienes-somos</loc></url>
  <url><loc>https://www.lx3.ai/privacidad</loc></url>
  <url><loc>https://www.lx3.ai/terminos</loc></url>
  <!-- + páginas nuevas que se creen -->
  
</urlset>
```

4) JSON‑LD Organization (Home)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LX3",
  "url": "https://www.lx3.ai",
  "logo": "https://www.lx3.ai/opengraph-image.jpg",
  "sameAs": [
    "https://www.linkedin.com/company/lx3",
    "https://x.com/lx3_ai"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "contacto@lx3.ai",
    "areaServed": "CL"
  }]
}
```

5) Manifest mínimo

```json
{
  "name": "LX3",
  "short_name": "LX3",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#0ea5e9",
  "icons": [
    {"src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png"}
  ]
}
```

#### Notas de accesibilidad

- Verificar contraste mínimo AA en `bg-white/10` sobre fondos y `text-zinc-400`.
- Asegurar foco visible en botones y enlaces.

#### Referencias

- Google Search Central (canónicos): `https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls`
- Structured data: `https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data`
- Schema.org Organization: `https://schema.org/Organization`
- Open Graph: `https://ogp.me/`
- Twitter Cards: `https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image`
- Web App Manifest: `https://developer.mozilla.org/en-US/docs/Web/Manifest`

