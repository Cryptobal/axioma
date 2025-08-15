## Adopción de tokens Gard en LX3

Fuente: `https://gard.cl/` — fecha: 2025-01-14.

### Tokens registrados
- Colores: `bg.default|section|dark*`, `fg.primary|muted`, `accent.brand|brandHover|orange`, `border.subtle|dark`.
- Tipografía: `Inter` (base), `Space Grotesk` (heading). Escala h1–small según reporte.
- Espaciado: xs..3xl, Radio: 8/10/12/16, Sombras: sm/md/lg, Breakpoints: sm..2xl.

### Variables CSS añadidas
Definidas en `app/globals.css` como `--color-*`, `--shadow-*`, `--radius-*` y `--gard-focus-ring`.
Se mantienen alias de compat: `--primary`, `--primary-foreground`, `--ring`.

### Mapeo Tailwind
Extendido en `tailwind.config.ts` en `colors.accent|fg|surface|border|ring`, `boxShadow.sm|md|lg`, `borderRadius.sm|md|lg`.

### Correcciones de contraste
- Caso: botón/acento naranja con texto blanco no cumple AA.
  - Par original: `bg #FF6B35` sobre `fg #FFFFFF` → ratio 3.2 (Fail AA).
  - Ajuste aplicado: se introduce `--color-accent-orange-aa: #C2410C` (misma familia de tono, menor luminosidad). El componente `Button` usa `accent-orangeAa` para fondo.
  - Nuevo par: `bg #C2410C` sobre `fg #FFFFFF` → ratio ≥ 4.5 (Pass AA).
  - Delta: `#FF6B35 → #C2410C`.

### Notas
- En modo oscuro, `--color-bg-default` referencia `--color-bg-dark` y se eleva contraste de `--color-fg-primary` a `#F1F5F9`.
- Si un token no existe, se usa el más cercano y se documenta aquí.


