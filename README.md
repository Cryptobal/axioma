# Axima

Proyecto Next.js 14 (App Router) con TypeScript, TailwindCSS, shadcn/ui, Framer Motion, next-themes, MDX y next-seo.

## Desarrollo

```bash
npm i
npm run dev
```

## Scripts
- `dev`: servidor de desarrollo
- `build`: compilación de producción
- `start`: servidor de producción
- `lint`: reglas Next
- `type-check`: comprobación TypeScript

## Entorno
- `NEXT_PUBLIC_SITE_URL=https://www.axima.com`

## Tailwind
- Config en `tailwind.config.ts`
- Estilos globales en `app/globals.css`

## SEO
- `app/robots.ts` y `app/sitemap.ts`
- Usa `metadata` en layouts/páginas

## MDX
- Posts en `content/blog/*.mdx`
- Casos en `content/casos/*.mdx`

## CI
- Workflow `CI`: lint, type-check y build en cada push/PR (`.github/workflows/ci.yml`)

## Vercel Preview
- Workflow `Vercel Preview` despliega cada PR a un preview.
- Configurar secretos del repositorio:
  - `VERCEL_TOKEN`
  - `VERCEL_ORG_ID`
  - `VERCEL_PROJECT_ID`


