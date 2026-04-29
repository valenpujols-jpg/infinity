'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const content = {
  es: {
    intro: (
      <>
        <p>
          En <strong>Infinity Solutions of Roxbury LLC</strong> ("la Empresa", "nosotros", "nuestro"),
          con domicilio en 1 West Cottage Street, Roxbury, MA 02119, nos comprometemos a proteger
          la privacidad y seguridad de la información personal que nos confías. Esta Política de
          Privacidad explica qué datos recopilamos, cómo los utilizamos y los derechos que
          tienes sobre tu información.
        </p>
        <p className="mt-3">
          Al utilizar nuestro sitio web o servicios, aceptas los términos descritos en esta política.
          Si tienes alguna duda, puedes contactarnos en{' '}
          <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">
            info@infinityssinc.com
          </a>{' '}
          o al <a href="tel:6176698210" className="text-gold-600 font-semibold">617-669-8210</a>.
        </p>
      </>
    ),
    sections: [
      {
        title: '1. Información que recopilamos',
        body: (
          <>
            <p className="mb-3">Podemos recopilar los siguientes tipos de información:</p>
            <h3 className="font-bold text-navy-900 mb-2">a) Información que tú nos proporcionas directamente:</h3>
            <ul className="list-disc list-inside space-y-1.5 mb-4 ml-2">
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Dirección de correo electrónico</li>
              <li>Tipo de servicio de interés</li>
              <li>Mensajes enviados a través de nuestros formularios de contacto</li>
              <li>Información financiera o fiscal necesaria para la prestación del servicio contratado (solo cuando sea aplicable y con tu consentimiento expreso)</li>
              <li>Documentos y datos que compartes voluntariamente durante la prestación del servicio</li>
            </ul>
            <h3 className="font-bold text-navy-900 mb-2">b) Información recopilada automáticamente:</h3>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Páginas visitadas y tiempo de navegación</li>
              <li>Fuente de tráfico (cómo llegaste a nuestro sitio)</li>
              <li>Datos de cookies y tecnologías similares (ver Política de Cookies)</li>
            </ul>
          </>
        ),
      },
      {
        title: '2. Cómo utilizamos tu información',
        body: (
          <>
            <p className="mb-3">Utilizamos la información recopilada para los siguientes propósitos:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Prestar los servicios que has contratado con nosotros</li>
              <li>Comunicarnos contigo sobre el estado de tu servicio</li>
              <li>Enviarte información relevante sobre nuestros servicios (solo si lo autorizaste)</li>
              <li>Cumplir con obligaciones legales y fiscales aplicables</li>
              <li>Mejorar nuestro sitio web y la experiencia del usuario</li>
              <li>Prevenir fraudes y garantizar la seguridad de nuestros servicios</li>
            </ul>
            <p className="mt-3">
              <strong>No utilizamos tu información para fines distintos</strong> a los descritos en esta
              política sin tu consentimiento previo.
            </p>
          </>
        ),
      },
      {
        title: '3. Compartición de información con terceros',
        body: (
          <>
            <p className="mb-3">
              <strong>No vendemos, alquilamos ni comercializamos tu información personal.</strong> Sin
              embargo, podemos compartir tu información en los siguientes casos limitados:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong>Proveedores de servicios tecnológicos:</strong> Plataformas de contabilidad, CRM, software de gestión de nómina u otras herramientas necesarias para prestar nuestros servicios. Estos proveedores están obligados contractualmente a proteger tu información.</li>
              <li><strong>Autoridades gubernamentales:</strong> Cuando sea requerido por ley, orden judicial o agencias regulatorias como el IRS o el Departamento de Trabajo.</li>
              <li><strong>Con tu consentimiento expreso:</strong> Para cualquier otro propósito que requiera compartir tu información con terceros no mencionados anteriormente.</li>
            </ul>
          </>
        ),
      },
      {
        title: '4. Seguridad de la información',
        body: (
          <p>
            Implementamos medidas de seguridad técnicas y administrativas razonables para proteger
            tu información personal contra acceso no autorizado, pérdida, divulgación o alteración.
            Sin embargo, ningún sistema de transmisión de datos por internet es completamente
            seguro. Te recomendamos no compartir información altamente sensible a través de
            formularios web sin verificar que estás en un entorno seguro.
          </p>
        ),
      },
      {
        title: '5. Uso de Cookies',
        body: (
          <p>
            Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la
            experiencia de navegación, analizar el tráfico y personalizar el contenido. Puedes
            consultar nuestra{' '}
            <a href="/cookies" className="text-gold-600 hover:underline font-semibold">
              Política de Cookies
            </a>{' '}
            para más detalles y para conocer cómo gestionar tus preferencias.
          </p>
        ),
      },
      {
        title: '6. Retención de datos',
        body: (
          <p>
            Conservamos tu información personal durante el tiempo necesario para prestar los servicios
            solicitados y cumplir con nuestras obligaciones legales (incluidas las fiscales y contables,
            que pueden requerir conservación por varios años según la ley federal y estatal de
            Massachusetts). Una vez transcurrido ese período, eliminamos o anonimizamos tu información
            de forma segura.
          </p>
        ),
      },
      {
        title: '7. Tus derechos sobre tu información',
        body: (
          <>
            <p className="mb-3">Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong>Acceder</strong> a la información personal que tenemos sobre ti</li>
              <li><strong>Corregir</strong> datos inexactos o desactualizados</li>
              <li><strong>Solicitar la eliminación</strong> de tu información (cuando sea legalmente posible)</li>
              <li><strong>Retirar tu consentimiento</strong> para comunicaciones de marketing en cualquier momento</li>
              <li><strong>Presentar una queja</strong> ante la autoridad competente si consideras que tus derechos han sido vulnerados</li>
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, contáctanos en{' '}
              <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">
                info@infinityssinc.com
              </a>.
            </p>
          </>
        ),
      },
      {
        title: '8. Derechos adicionales (residentes de California — CCPA)',
        body: (
          <p>
            Si eres residente del estado de California, la Ley de Privacidad del Consumidor de
            California (CCPA) te otorga derechos adicionales, incluyendo el derecho a saber qué
            información personal recopilamos, el derecho a eliminar dicha información y el derecho
            a no ser discriminado por ejercer tus derechos de privacidad. Para ejercer estos
            derechos, contáctanos directamente.
          </p>
        ),
      },
      {
        title: '9. Menores de edad',
        body: (
          <p>
            Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos
            intencionalmente información personal de menores de edad. Si tienes conocimiento de
            que un menor ha proporcionado información a través de nuestro sitio, contáctanos
            para eliminarla de inmediato.
          </p>
        ),
      },
      {
        title: '10. Cambios a esta política',
        body: (
          <p>
            Podemos actualizar esta Política de Privacidad periódicamente. La fecha de "última
            actualización" al inicio del documento reflejará cualquier cambio. Te recomendamos
            revisar esta página regularmente. El uso continuo de nuestros servicios tras la
            publicación de cambios constituye tu aceptación de los mismos.
          </p>
        ),
      },
    ],
    contactTitle: 'Contacto — Privacidad',
    contactDesc: 'Para cualquier consulta relacionada con esta Política de Privacidad o el manejo de tu información personal, contáctanos:',
  },

  en: {
    intro: (
      <>
        <p>
          At <strong>Infinity Solutions of Roxbury LLC</strong> ("the Company," "we," "us," or "our"),
          located at 1 West Cottage Street, Roxbury, MA 02119, we are committed to protecting the
          privacy and security of the personal information you entrust to us. This Privacy Policy
          explains what data we collect, how we use it, and the rights you have over your information.
        </p>
        <p className="mt-3">
          By using our website or services, you agree to the terms described in this policy.
          If you have any questions, please contact us at{' '}
          <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">
            info@infinityssinc.com
          </a>{' '}
          or at <a href="tel:6176698210" className="text-gold-600 font-semibold">617-669-8210</a>.
        </p>
      </>
    ),
    sections: [
      {
        title: '1. Information We Collect',
        body: (
          <>
            <p className="mb-3">We may collect the following types of information:</p>
            <h3 className="font-bold text-navy-900 mb-2">a) Information you provide directly:</h3>
            <ul className="list-disc list-inside space-y-1.5 mb-4 ml-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Service of interest</li>
              <li>Messages submitted through our contact forms</li>
              <li>Financial or tax information necessary to provide the contracted service (only when applicable and with your express consent)</li>
              <li>Documents and data you voluntarily share during the service engagement</li>
            </ul>
            <h3 className="font-bold text-navy-900 mb-2">b) Information collected automatically:</h3>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>IP address</li>
              <li>Browser type and device</li>
              <li>Pages visited and time spent on site</li>
              <li>Traffic source (how you arrived at our site)</li>
              <li>Cookie data and similar technologies (see Cookie Policy)</li>
            </ul>
          </>
        ),
      },
      {
        title: '2. How We Use Your Information',
        body: (
          <>
            <p className="mb-3">We use the information collected for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Respond to your inquiries and information requests</li>
              <li>Provide the services you have contracted with us</li>
              <li>Communicate with you about the status of your service</li>
              <li>Send you relevant information about our services (only if you authorized it)</li>
              <li>Comply with applicable legal and tax obligations</li>
              <li>Improve our website and user experience</li>
              <li>Prevent fraud and ensure the security of our services</li>
            </ul>
            <p className="mt-3">
              <strong>We do not use your information for purposes other than those described</strong> in
              this policy without your prior consent.
            </p>
          </>
        ),
      },
      {
        title: '3. Sharing Information with Third Parties',
        body: (
          <>
            <p className="mb-3">
              <strong>We do not sell, rent, or trade your personal information.</strong> However,
              we may share your information in the following limited cases:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong>Technology service providers:</strong> Accounting platforms, CRM, payroll management software, or other tools necessary to provide our services. These providers are contractually bound to protect your information.</li>
              <li><strong>Government authorities:</strong> When required by law, court order, or regulatory agencies such as the IRS or Department of Labor.</li>
              <li><strong>With your express consent:</strong> For any other purpose that requires sharing your information with third parties not mentioned above.</li>
            </ul>
          </>
        ),
      },
      {
        title: '4. Information Security',
        body: (
          <p>
            We implement reasonable technical and administrative security measures to protect your
            personal information against unauthorized access, loss, disclosure, or alteration.
            However, no internet data transmission system is completely secure. We recommend not
            sharing highly sensitive information through web forms without verifying you are in
            a secure environment.
          </p>
        ),
      },
      {
        title: '5. Use of Cookies',
        body: (
          <p>
            Our website may use cookies and similar technologies to improve the browsing experience,
            analyze traffic, and personalize content. You can consult our{' '}
            <a href="/cookies" className="text-gold-600 hover:underline font-semibold">
              Cookie Policy
            </a>{' '}
            for more details and to learn how to manage your preferences.
          </p>
        ),
      },
      {
        title: '6. Data Retention',
        body: (
          <p>
            We retain your personal information for as long as necessary to provide the requested
            services and comply with our legal obligations (including tax and accounting obligations,
            which may require retention for several years under federal and Massachusetts state law).
            Once that period has passed, we securely delete or anonymize your information.
          </p>
        ),
      },
      {
        title: '7. Your Rights Over Your Information',
        body: (
          <>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong>Access</strong> the personal information we hold about you</li>
              <li><strong>Correct</strong> inaccurate or outdated data</li>
              <li><strong>Request deletion</strong> of your information (where legally possible)</li>
              <li><strong>Withdraw your consent</strong> to marketing communications at any time</li>
              <li><strong>File a complaint</strong> with the competent authority if you believe your rights have been violated</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">
                info@infinityssinc.com
              </a>.
            </p>
          </>
        ),
      },
      {
        title: '8. Additional Rights (California Residents — CCPA)',
        body: (
          <p>
            If you are a California resident, the California Consumer Privacy Act (CCPA) grants
            you additional rights, including the right to know what personal information we collect,
            the right to delete that information, and the right not to be discriminated against for
            exercising your privacy rights. To exercise these rights, please contact us directly.
          </p>
        ),
      },
      {
        title: '9. Minors',
        body: (
          <p>
            Our services are not directed at persons under 18 years of age. We do not intentionally
            collect personal information from minors. If you are aware that a minor has provided
            information through our site, please contact us to have it removed immediately.
          </p>
        ),
      },
      {
        title: '10. Changes to This Policy',
        body: (
          <p>
            We may update this Privacy Policy periodically. The "last updated" date at the top of
            this document will reflect any changes. We recommend reviewing this page regularly.
            Your continued use of our services after changes are published constitutes your
            acceptance of those changes.
          </p>
        ),
      },
    ],
    contactTitle: 'Contact — Privacy',
    contactDesc: 'For any questions regarding this Privacy Policy or how we handle your personal information, contact us:',
  },
}

export default function PrivacidadContent() {
  const { lang } = useLanguage()
  const c = content[lang] || content.es

  return (
    <div className="space-y-10 text-gray-700 text-sm leading-relaxed">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">{c.intro}</div>

      {c.sections.map((s) => (
        <section key={s.title}>
          <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">{s.title}</h2>
          {s.body}
        </section>
      ))}

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
