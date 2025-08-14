### Plan de Performance y CWV (Fase 4)

#### Quick wins (72h)

- Verificar `priority` en Next/Image del hero (ya tiene `fetchPriority=high`).
- Preload de CSS crítico (ya servido por Next). Revisar tamaño del CSS global.
- Reducir `keywords` meta y scripts innecesarios.
- Servir `manifest.json` real y `icons` (no impacto directo CWV, pero DX/PWA).

#### Corto plazo (1–2 semanas)

- Bundle analysis (Next.js `ANALYZE=true`) y code‑splitting de componentes no críticos.
- Preconnect a dominios externos si aplica (GTM/analytics). Evitar bloqueos.
- Revisión de fuentes: `font-display: swap` (Next/fonts o CSS).

#### Mediano plazo (3–6 semanas)

- Imagen social `og:image` optimizada y cacheable.
- Medición continua con Lighthouse CI y alertas de LCP/INP.

#### Métricas objetivo

- LCP < 2.5 s (móvil), INP < 200 ms, CLS < 0.1.

