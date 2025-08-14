### Resumen Lighthouse (Fase 0)

Intento de ejecución headless local fallido (posible falta de Chrome en entorno). Se adjunta plan para CI y placeholders de métricas a completar con PageSpeed Insights.

#### Plan de medición (recomendado)

- Ejecutar Lighthouse CI en GitHub Actions/Vercel preview con 3 runs y mediana.
- Capturar Core Web Vitals de PSI (Móvil y Desktop): LCP, INP, CLS.

#### Placeholders de resultados (llenar con PSI)

- Performance: —
- Accessibility: —
- Best Practices: —
- SEO: —
- LCP: — ms
- INP: — ms
- CLS: —

#### Hallazgos preliminares (por inspección)

- LCP probable: imagen hero (Next/Image con `fetchPriority=high`) → OK; considerar `priority` explícito y `preload` de `og:image` si se usa en above-the-fold.
- INP: navegación simple, baja interacción pesada; vigilar bundles JS (`/_next/static/chunks/...`).
- CLS: layout estable; revisar chips/cards con efectos para evitar shifts.

#### Referencias

- Lighthouse: `https://developer.chrome.com/docs/lighthouse/overview/`
- Core Web Vitals: `https://web.dev/articles/vitals`
- INP: `https://web.dev/articles/inp`

