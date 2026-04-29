export const metadata = {
  title: 'Política de Cookies',
  description:
    'Política de Cookies de Infinity Solutions of Roxbury LLC. Conoce qué cookies usamos y cómo gestionarlas.',
}

export default function CookiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Política de Cookies</h1>
          <p className="text-gray-300 text-sm">Última actualización: Abril 2025</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                1. ¿Qué son las cookies?
              </h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                (computadora, teléfono, tablet) cuando visitas un sitio web. Estas permiten que
                el sitio recuerde información sobre tu visita, como tu idioma preferido o la
                última página que visitaste, lo que facilita tu próxima visita y hace que el
                sitio sea más útil para ti.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                2. ¿Qué tipos de cookies utilizamos?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    type: 'Cookies estrictamente necesarias',
                    tag: 'Siempre activas',
                    tagColor: 'bg-green-100 text-green-700',
                    description:
                      'Son esenciales para el funcionamiento básico del sitio web. Sin estas cookies, el sitio no puede funcionar correctamente. Incluyen cookies de sesión y seguridad. No pueden desactivarse.',
                  },
                  {
                    type: 'Cookies de rendimiento y analíticas',
                    tag: 'Opcionales',
                    tagColor: 'bg-blue-100 text-blue-700',
                    description:
                      'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio, qué páginas visitan con más frecuencia y si reciben mensajes de error. Esta información nos permite mejorar el funcionamiento del sitio. Pueden incluir servicios como Google Analytics. Toda la información recopilada es anónima y agregada.',
                  },
                  {
                    type: 'Cookies de funcionalidad',
                    tag: 'Opcionales',
                    tagColor: 'bg-blue-100 text-blue-700',
                    description:
                      'Permiten que el sitio recuerde las elecciones que realizas (como tu idioma preferido) y te ofrezca funciones mejoradas y más personalizadas. La información que recopilan estas cookies puede ser anonimizada.',
                  },
                  {
                    type: 'Cookies de marketing y publicidad',
                    tag: 'Opcionales',
                    tagColor: 'bg-purple-100 text-purple-700',
                    description:
                      'Pueden ser utilizadas para mostrarte anuncios relevantes en otros sitios web que visites. Se basan en identificar tu navegador y dispositivo. Si las desactivas, seguirás viendo anuncios, pero serán menos relevantes para ti.',
                  },
                ].map((c) => (
                  <div key={c.type} className="border border-gray-100 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-navy-900">{c.type}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${c.tagColor}`}>
                        {c.tag}
                      </span>
                    </div>
                    <p className="text-gray-600">{c.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                3. Cookies de terceros
              </h2>
              <p className="mb-3">
                En algunos casos, podemos utilizar cookies proporcionadas por terceros de confianza.
                Entre ellos pueden figurar:
              </p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico web anónimo</li>
                <li><strong>Google Maps:</strong> Para mostrar mapas en la página de contacto</li>
                <li><strong>Meta (Facebook/Instagram):</strong> Si usamos píxeles de seguimiento para publicidad</li>
                <li><strong>Formspree / servicios de formularios:</strong> Para el procesamiento de formularios de contacto</li>
              </ul>
              <p className="mt-3">
                Estas cookies están sujetas a las políticas de privacidad de sus respectivos
                proveedores, sobre las cuales no tenemos control. Te recomendamos revisar las
                políticas de privacidad de dichos terceros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                4. Cómo gestionar y desactivar las cookies
              </h2>
              <p className="mb-4">
                Puedes controlar y/o eliminar las cookies a través de la configuración de tu
                navegador. A continuación te mostramos cómo hacerlo en los navegadores más comunes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { browser: 'Google Chrome', url: 'support.google.com/chrome/answer/95647' },
                  { browser: 'Mozilla Firefox', url: 'support.mozilla.org/kb/cookies-information-websites-store-on-your-computer' },
                  { browser: 'Safari (Mac)', url: 'support.apple.com/guide/safari/manage-cookies-sfri11471' },
                  { browser: 'Microsoft Edge', url: 'support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge' },
                ].map((b) => (
                  <div key={b.browser} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <p className="font-semibold text-navy-900 text-xs mb-1">{b.browser}</p>
                    <p className="text-gray-500 text-xs break-all">{b.url}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Ten en cuenta que si deshabilitas las cookies, es posible que algunas funciones
                del sitio no operen correctamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                5. Cambios a esta política
              </h2>
              <p>
                Podemos actualizar esta Política de Cookies periódicamente. Cualquier cambio
                será publicado en esta página con la fecha de actualización correspondiente.
                Te recomendamos revisarla regularmente para mantenerte informado.
              </p>
            </section>

            <div className="bg-navy-900 rounded-xl p-7 text-white">
              <h2 className="text-lg font-bold mb-3">Contacto</h2>
              <p className="text-gray-300 text-sm mb-4">
                Si tienes preguntas sobre el uso de cookies en nuestro sitio:
              </p>
              <div className="space-y-1.5 text-sm text-gray-300">
                <p><strong className="text-white">Infinity Solutions of Roxbury LLC</strong></p>
                <p>1 West Cottage Street, Roxbury, MA 02119</p>
                <p><a href="tel:6176698210" className="text-gold-400 hover:underline">617-669-8210</a></p>
                <p><a href="mailto:info@infinityssinc.com" className="text-gold-400 hover:underline">info@infinityssinc.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
