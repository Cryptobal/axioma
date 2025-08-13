# Configuración en Vercel para LX3

## Variables de Entorno en Vercel

Ve a tu proyecto en Vercel y configura estas variables:

### 1. Ir a Vercel Dashboard
1. Ve a [vercel.com](https://vercel.com)
2. Selecciona tu proyecto LX3
3. Ve a **Settings** → **Environment Variables**

### 2. Agregar Variables

Agrega estas variables una por una:

| Variable | Valor | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-P15709Y4Z1` | Production, Preview, Development |
| `NEXT_PUBLIC_GTM_ID` | `GTM-P3MPQBTJ` | Production, Preview, Development |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | `tu-codigo-de-verificacion` | Production, Preview, Development |
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | `https://lx3.ai` | Production, Preview, Development |

### 3. Redeploy

Después de agregar las variables:
1. Ve a **Deployments**
2. Haz click en **Redeploy** en el último deployment
3. O haz un nuevo commit y push

### 4. Verificar

Una vez deployado, verifica que:

1. **Google Analytics**: Ve a GA4 → Reports → Realtime → Users
2. **Google Tag Manager**: Usa el modo Preview para verificar tags
3. **Google Search Console**: Verifica que la propiedad esté confirmada

## Comandos para verificar localmente

```bash
# Verificar que las variables se cargan
npm run dev

# Build para producción
npm run build

# Verificar que no hay errores
npm run lint
```

## Troubleshooting

### Si no aparecen datos en GA:
- Verifica que el ID `G-P15709Y4Z1` sea correcto
- Asegúrate de que no haya bloqueadores de anuncios
- Revisa la consola del navegador por errores

### Si GTM no funciona:
- Verifica que el ID `GTM-P3MPQBTJ` sea correcto
- Usa el modo Preview de GTM
- Verifica que no haya errores en la consola

### Si no se indexa en Google:
- Verifica que el robots.txt permita indexación
- Envía el sitemap manualmente a Google Search Console
- Solicita indexación de URLs importantes
