### Preload/prioridad de LCP (Hero)

- Asegurar que la imagen del hero use `priority` (Next/Image) además de `fetchPriority="high"`.

Ejemplo:

```tsx
<Image alt="Visual de datos y automatización" src={heroSrc} fill priority fetchPriority="high" />
```

Rationale: Mejora LCP; ver web.dev/image-prioritization.

