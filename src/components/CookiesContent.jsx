'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const cookieTypes = {
  es: [
    {
      type: 'Cookies estrictamente necesarias',
      tag: 'Siempre activas',
      tagColor: 'bg-green-100 text-green-700',
      description: 'Son esenciales para el funcionamiento básico del sitio web. Sin estas cookies, el sitio no puede funcionar correctamente. Incluyen cookies de sesión y seguridad. No pueden desactivarse.',
    },
    {
      type: 'Cookies de rendimiento y analíticas',
      tag: 'Opcionales',
      tagColor: 'bg-blue-100 text-blue-700',
      description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio, qué páginas visitan con más frecuencia y si reciben mensajes de error. Esta información nos permite mejorar el funcionamiento del sitio. Pueden incluir servicios como Google Analytics. Toda la información recopilada es anónima y agregada.',
    },
    {
      type: 'Cookies de funcionalidad',
      tag: 'Opcionales',
      tagColor: 'bg-blue-100 text-blue-700',
      description: 'Permiten que el sitio recuerde las elecciones que realizas (como tu idioma preferido) y te ofrezca funciones mejoradas y más personalizadas. La información que recopilan estas cookies puede ser anonimizada.',
    },
    {
      type: 'Cookies de marketing y publicidad',
      tag: 'Opcionales',
      tagColor: 'bg-purple-100 text-purple-700',
      description: 'Pueden ser utilizadas para mostrarte anuncios relevantes en otros sitios web que visites. Se basan en identificar tu navegador y dispositivo. Si las desactivas, seguirás viendo anuncios, pero serán menos relevantes para ti.',
    },
  ],
  en: [
    {
      type: 'Strictly Necessary Cookies',
      tag: 'Always active',
      tagColor: 'bg-green-100 text-green-700',
      description: 'These are essential for the basic functioning of the website. Without these cookies, the site cannot function properly. They include session and security cookies and cannot be disabled.',
    },
    {
      type: 'Performance & Analytics Cookies',
      tag: 'Optional',
      tagColor: 'bg-blue-100 text-blue-700',
      description: 'These help us understand how visitors interact with our site, which pages they visit most frequently, and whether they receive error messages. This information allows us to improve the site. They may include services like Google Analytics. All collected information is anonymous and aggregated.',
    },
    {
      type: 'Functionality Cookies',
      tag: 'Optional',
      tagColor: 'bg-blue-100 text-blue-700',
      description: 'These allow the site to remember choices you make (such as your preferred language) and offer enhanced, more personalized features. The information collected by these cookies may be anonymized.',
    },
    {
      type: 'Marketing & Advertising Cookies',
      tag: 'Optional',
      tagColor: 'bg-purple-100 text-purple-700',
      description: 'These may be used to show you relevant ads on other websites you visit. They are based on identifying your browser and device. If you disable them, you will still see ads, but they will be less relevant to you.',
    },
  ],
}

const content = {
  es: {
    sections: [
      {
        title: '1. ¿Qué son las cookies?',
        body: (
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, teléfono, tablet) cuando visitas un sitio web. Estas permiten que el sitio recuerde información sobre tu visita, como tu idioma preferido o la última página que visitaste, lo que facilita tu próxima visita y hace que el sitio sea más útil para ti.</p>
        ),
      },
      {
        title: '2. ¿Qué tipos de cookies utilizamos?',
        isCookieTypes: true,
      },
      {
        title: '3. Cookies de terceros',
        body: (
          <>
            <p className="mb-3">En algunos casos, podemos utilizar cookies proporcionadas por terceros de confianza. Entre ellos pueden figurar:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong>Google Analytics:</strong> Para análisis de tráfico web anónimo</li>
              <li><strong>Google Maps:</strong> Para mostrar mapas en la página de contacto</li>
              <li><strong>Meta (Facebook/Instagram):</strong> Si usamos píxeles de seguimiento para publicidad</li>
              <li><strong>Formspree / servicios de formularios:</strong> Para el procesamiento de formularios de contacto</li>
            </ul>
            <p className="mt-3">Estas cookies están sujetas a las políticas de privacidad de sus respectivos proveedores, sobre las cuales no tenemos control. Te recomendamos revisar las políticas de privacidad de dichos terceros.</p>
          </>
        ),
      },
      {
        title: '4. Cómo gestionar y desactivar las cookies',
        isBrowserList: true,
        intro: 'Puedes controlar y/o eliminar las cookies a través de la configuración de tu navegador. A continuación te mostramos cómo hacerlo en los navegadores más comunes:',
        note: 'Ten en cuenta que si deshabilitas las cookies, es posible que algunas funciones del sitio no operen correctamente.',
      },
      {
        title: '5. Cambios a esta política',
        body: (
          <p>Podemos actualizar esta Política de Cookies periódicamente. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente. Te recomendamos revisarla regularmente para mantenerte informado.</p>
        ),
      },
    ],
    contactTitle: 'Contacto',
    contactDesc: 'Si tienes preguntas sobre el uso de cookies en nuestro sitio:',
  },

  en: {
    sections: [
      {
        title: '1. What Are Cookies?',
        body: (
          <p>Cookies are small text files stored on your device (computer, phone, tablet) when you visit a website. They allow the site to remember information about your visit, such as your preferred language or the last page you visited, making your next visit easier and the site more useful to you.</p>
        ),
      },
      {
        title: '2. What Types of Cookies Do We Use?',
        isCookieTypes: true,
      },
      {
        title: '3. Third-Party Cookies',
        body: (
          <>
            <p className="mb-3">In some cases, we may use cookies provided by trusted third parties. These may include:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong>Google Analytics:</strong> For anonymous web traffic analysis</li>
              <li><strong>Google Maps:</strong> To display maps on the contact page</li>
              <li><strong>Meta (Facebook/Instagram):</strong> If we use tracking pixels for advertising</li>
              <li><strong>Formspree / form services:</strong> For processing contact form submissions</li>
            </ul>
            <p className="mt-3">These cookies are subject to the privacy policies of their respective providers, over which we have no control. We recommend reviewing the privacy policies of those third parties.</p>
          </>
        ),
      },
      {
        title: '4. How to Manage and Disable Cookies',
        isBrowserList: true,
        intro: 'You can control and/or delete cookies through your browser settings. Here is how to do it in the most common browsers:',
        note: 'Please note that if you disable cookies, some features of the site may not function correctly.',
      },
      {
        title: '5. Changes to This Policy',
        body: (
          <p>We may update this Cookie Policy periodically. Any changes will be posted on this page with the corresponding update date. We recommend checking this page regularly to stay informed.</p>
        ),
      },
    ],
    contactTitle: 'Contact',
    contactDesc: 'If you have questions about the use of cookies on our site:',
  },
}

const browsers = [
  { browser: 'Google Chrome', url: 'support.google.com/chrome/answer/95647' },
  { browser: 'Mozilla Firefox', url: 'support.mozilla.org/kb/cookies-information-websites-store-on-your-computer' },
  { browser: 'Safari (Mac)', url: 'support.apple.com/guide/safari/manage-cookies-sfri11471' },
  { browser: 'Microsoft Edge', url: 'support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge' },
]

export default function CookiesContent() {
  const { lang } = useLanguage()
  const c = content[lang] || content.es
  const types = cookieTypes[lang] || cookieTypes.es

  return (
    <div className="space-y-10 text-gray-700 text-sm leading-relaxed">
      {c.sections.map((s) => {
        if (s.isCookieTypes) {
          return (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">{s.title}</h2>
              <div className="space-y-5">
                {types.map((ct) => (
                  <div key={ct.type} className="border border-gray-100 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-navy-900">{ct.type}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${ct.tagColor}`}>{ct.tag}</span>
                    </div>
                    <p className="text-gray-600">{ct.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        }
        if (s.isBrowserList) {
          return (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">{s.title}</h2>
              <p className="mb-4">{s.intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {browsers.map((b) => (
                  <div key={b.browser} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="font-semibold text-navy-900 text-xs mb-1">{b.browser}</p>
                    <p className="text-gray-500 text-xs break-all">{b.url}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">{s.note}</p>
            </section>
          )
        }
        return (
          <section key={s.title}>
            <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">{s.title}</h2>
            {s.body}
          </section>
        )
      })}

      <div className="bg-navy-900 rounded-xl p-7 text-white">
        <h2 className="text-lg font-bold mb-3">{c.contactTitle}</h2>
        <p className="text-gray-300 text-sm mb-4">{c.contactDesc}</p>
        <div className="space-y-1.5 text-sm text-gray-300">
          <p><strong className="text-white">Infinity Solutions of Roxbury LLC</strong></p>
          <p>1 West Cottage Street, Roxbury, MA 02119</p>
          <p><a href="tel:6176698210" className="text-gold-400 hover:underline">617-669-8210</a></p>
          <p><a href="mailto:info@infinityssinc.com" className="text-gold-400 hover:underline">info@infinityssinc.com</a></p>
        </div>
      </div>
    </div>
  )
}
