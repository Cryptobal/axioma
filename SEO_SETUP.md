# Configuración SEO y Google Tag Manager para LX3

## 1. Google Search Console

### Paso 1: Crear cuenta
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad: `https://lx3.ai`
3. Verifica la propiedad usando uno de estos métodos:
   - **HTML tag**: Copia el código de verificación
   - **DNS record**: Agrega el registro TXT
   - **Google Analytics**: Si ya tienes GA4 conectado

### Paso 2: Configurar verificación
1. Copia el código de verificación (ej: `google-site-verification: google1234567890.html`)
2. Agrega la variable de entorno:
   ```
   NEXT_PUBLIC_GOOGLE_VERIFICATION=google1234567890
   ```

## 2. Google Analytics 4 (GA4)

### Paso 1: Crear cuenta
1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una nueva propiedad: "LX3 Website"
3. Configura el flujo de datos para web
4. Copia el ID de medición (G-XXXXXXXXXX)

### Paso 2: Configurar
1. Agrega la variable de entorno:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

## 3. Google Tag Manager (GTM)

### Paso 1: Crear cuenta
1. Ve a [Google Tag Manager](https://tagmanager.google.com)
2. Crea una nueva cuenta: "LX3"
3. Crea un nuevo contenedor: "LX3 Website"
4. Copia el ID del contenedor (GTM-XXXXXXX)

### Paso 2: Configurar
1. Agrega la variable de entorno:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

### Paso 3: Configurar tags en GTM
1. **Google Analytics 4**: Crea un tag GA4 con tu ID de medición
2. **Eventos personalizados**: Configura eventos para:
   - Clicks en formulario de contacto
   - Navegación a casos de estudio
   - Descargas de recursos
   - Tiempo en página

## 4. Variables de Entorno

Crea un archivo `.env.local` con:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=google1234567890

# Resend Email
RESEND_API_KEY=re_xxxxxxxxxxxx

# Site URL
NEXT_PUBLIC_SITE_URL=https://lx3.ai
```

## 5. Configuración en Vercel

### Variables de entorno en producción:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega todas las variables del `.env.local`

## 6. Verificación

### Después del deploy:
1. **Google Search Console**: 
   - Envía el sitemap: `https://lx3.ai/sitemap.xml`
   - Solicita indexación de páginas principales

2. **Google Analytics**:
   - Verifica que los datos lleguen en tiempo real
   - Configura objetivos (conversiones)

3. **Google Tag Manager**:
   - Usa el modo de vista previa para verificar tags
   - Verifica que los eventos se disparen correctamente

## 7. Optimización SEO Adicional

### Meta tags ya configurados:
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Robots.txt
- ✅ Sitemap.xml
- ✅ JSON-LD Schema

### Próximos pasos:
1. **Contenido**: Asegúrate de que cada página tenga contenido único y valioso
2. **Velocidad**: Optimiza imágenes y código
3. **Mobile-first**: Ya configurado
4. **Enlaces internos**: Asegúrate de que las páginas estén bien conectadas

## 8. Monitoreo

### Herramientas recomendadas:
- **Google Search Console**: Para indexación y errores
- **Google Analytics**: Para tráfico y comportamiento
- **Google PageSpeed Insights**: Para velocidad
- **Screaming Frog**: Para auditoría técnica completa

## 9. Comandos útiles

```bash
# Verificar que las variables estén cargadas
npm run dev

# Build para producción
npm run build

# Verificar sitemap
curl https://lx3.ai/sitemap.xml

# Verificar robots.txt
curl https://lx3.ai/robots.txt
```

## 10. Troubleshooting

### Si no aparecen los datos en GA:
1. Verifica que el ID de medición sea correcto
2. Asegúrate de que no haya bloqueadores de anuncios
3. Verifica que el código se cargue en la consola del navegador

### Si GTM no funciona:
1. Verifica el ID del contenedor
2. Usa el modo de vista previa de GTM
3. Verifica que no haya errores en la consola

### Si no se indexa en Google:
1. Verifica que el robots.txt permita indexación
2. Envía el sitemap manualmente
3. Solicita indexación de URLs importantes
