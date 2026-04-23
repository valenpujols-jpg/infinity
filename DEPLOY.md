# Guía de Despliegue — Infinity Solutions Services Inc

## Requisitos previos
- Node.js 18+ instalado
- Cuenta en Vercel (gratis) o Netlify

---

## 1. Instalar y correr localmente

```bash
cd "infinity web"
npm install
npm run dev
```

Abre http://localhost:3000 para ver el sitio.

---

## 2. Opciones de Hosting (Recomendación)

### OPCIÓN A: Vercel (RECOMENDADO)
**Por qué:** Es la plataforma oficial de Next.js. Gratis para proyectos pequeños, rápida, sin configuración.

1. Ve a https://vercel.com y crea una cuenta gratuita
2. Conecta tu repositorio de GitHub (o sube el proyecto)
3. Vercel lo detecta como Next.js automáticamente
4. Haz clic en "Deploy" — listo en menos de 2 minutos

### OPCIÓN B: Netlify
Similar a Vercel pero requiere configurar el adaptador de Next.js.

### OPCIÓN C: Hosting tradicional (cPanel / GoDaddy Hosting)
No recomendado para Next.js. Si ya tienes hosting en GoDaddy y quieres usarlo, necesitarías convertir el proyecto a exportación estática, lo cual limita funcionalidades.

---

## 3. Conectar tu dominio de GoDaddy

### Si usas Vercel:

1. En tu dashboard de Vercel → Settings → Domains
2. Agrega tu dominio (ej: infinityssinc.com)
3. Vercel te dará registros DNS para configurar

### En GoDaddy DNS:
Ve a GoDaddy → Mis Productos → DNS → Administrar DNS de tu dominio

Agrega estos registros:

| Tipo  | Nombre | Valor                      |
|-------|--------|----------------------------|
| A     | @      | 76.76.21.21                |
| CNAME | www    | cname.vercel-dns.com       |

(Vercel te da los valores exactos en su panel)

Los cambios DNS pueden tardar entre 1-48 horas en propagarse.

---

## 4. Formulario de contacto (Activar)

El formulario actualmente simula el envío. Para hacerlo funcional:

### Con Formspree (gratis hasta 50 envíos/mes):
1. Ve a https://formspree.io
2. Crea una cuenta y un nuevo formulario
3. Copia tu endpoint (ej: https://formspree.io/f/xyzabc)
4. Abre `src/components/ContactForm.jsx`
5. Busca el comentario "INTEGRACIÓN CON FORMSPREE"
6. Reemplaza el setTimeout de simulación con:

```js
const res = await fetch('https://formspree.io/f/TU_ID_AQUI', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setSubmitted(true)
```

### Con Netlify Forms (si usas Netlify):
Agrega `data-netlify="true"` al `<form>` y Netlify lo captura automáticamente.

---

## 5. Google Maps en la página de Contacto

El mapa requiere una API key gratuita de Google:
1. Ve a https://console.cloud.google.com
2. Crea un proyecto → Habilita "Maps Embed API"
3. Genera una API key
4. En `src/app/contacto/page.js`, reemplaza `AIzaSyD-placeholder` con tu key real

---

## 6. Automatizaciones futuras recomendadas

- **Formulario + CRM:** Conectar Formspree con Zapier → Google Sheets o HubSpot
- **WhatsApp automático:** Usar WATI o Twilio para respuestas automáticas
- **Calendario de citas:** Integrar Calendly (gratuito) con botón en el sitio
- **Email marketing:** Conectar formulario con Mailchimp para seguimiento de leads
- **Chat en vivo:** Integrar Tawk.to (gratuito) para chat en tiempo real

---

## 7. SEO y Analytics

- Agrega Google Analytics: crea una propiedad en analytics.google.com y agrega el script en `src/app/layout.js`
- Google Search Console: verifica tu dominio para monitorear posicionamiento
- El sitio ya incluye meta titles, descriptions y Open Graph configurados

---

## Soporte

Para cualquier pregunta técnica sobre el despliegue o el código, consulta:
- Documentación Next.js: https://nextjs.org/docs
- Documentación Vercel: https://vercel.com/docs
