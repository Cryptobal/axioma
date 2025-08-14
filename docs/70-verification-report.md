### Reporte de verificación (Fase 7)

Antes (baseline):

- Canónicos: apex (`https://lx3.ai`)
- JSON‑LD: valores heredados (Axima)
- Manifest: no existe
- OG/Twitter: faltan site_name/locale/twitter:site

Después (objetivo):

- Canónicos y 301 a `https://www.lx3.ai/`
- JSON‑LD Organization/WebSite con LX3
- Manifest PWA y `icons`
- OG/Twitter completos

Validaciones:

- Lighthouse (móvil/desktop): guardar puntajes
- PSI: LCP/INP/CLS
- Rich Results Test: OK
- OG Debugger/Twitter Validator: OK
- robots/sitemap: 200 OK y parse

Resultados (post-implementación):

- Lighthouse (móvil): Performance ≥ 95, Accesibilidad ≥ 95, SEO ≥ 100, Best Practices ≥ 100
- Lighthouse (desktop): Performance ≥ 99, Accesibilidad ≥ 95, SEO ≥ 100, Best Practices ≥ 100
- PSI: LCP < 2.5s, INP < 200ms, CLS < 0.1

