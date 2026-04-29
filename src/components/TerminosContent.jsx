'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const content = {
  es: {
    intro: (
      <p>
        Los presentes Términos y Condiciones ("Términos") rigen el acceso y uso del sitio web
        de <strong>Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services</strong> (en adelante "la Empresa", "nosotros"),
        con domicilio en 1 West Cottage Street, Roxbury, MA 02119. Al acceder o utilizar nuestro
        sitio web y servicios, confirmas que has leído, entendido y aceptado estos Términos en
        su totalidad.
      </p>
    ),
    introNote: 'Si no estás de acuerdo con alguna parte de estos Términos, te pedimos que no utilices nuestro sitio web ni nuestros servicios.',
    sections: [
      {
        title: '1. Uso del sitio web',
        body: (
          <>
            <p className="mb-3">Al utilizar este sitio web, aceptas que lo harás únicamente con propósitos legales y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso del sitio por parte de otros.</p>
            <p className="mb-3">Queda expresamente prohibido:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Usar el sitio para cualquier propósito ilegal o fraudulento</li>
              <li>Intentar acceder sin autorización a nuestros sistemas o datos</li>
              <li>Transmitir virus, malware u otro código malicioso</li>
              <li>Copiar, reproducir o distribuir contenido del sitio sin autorización escrita</li>
              <li>Usar el sitio para enviar comunicaciones no solicitadas (spam)</li>
              <li>Suplantar la identidad de otra persona o entidad</li>
              <li>Interferir con el funcionamiento normal del sitio web</li>
            </ul>
          </>
        ),
      },
      {
        title: '2. Descripción de servicios',
        body: (
          <>
            <p>Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services ofrece servicios profesionales de preparación de impuestos (taxes individuales y corporativos), contabilidad (bookkeeping), gestión de nómina (payroll), reparación de crédito y consultoría y preparación de documentos administrativos relacionados con trámites migratorios.</p>
            <p className="mt-3">La descripción de servicios en nuestro sitio web es de carácter informativo. Los alcances específicos de cada servicio serán acordados por escrito o verbalmente al inicio de cada relación contractual. La Empresa se reserva el derecho de modificar, suspender o discontinuar cualquier servicio sin previo aviso.</p>
          </>
        ),
      },
      {
        title: '3. Exactitud de la información',
        body: (
          <p>El contenido de este sitio web se proporciona únicamente con fines informativos generales. Aunque nos esforzamos por mantener la información actualizada y precisa, no garantizamos su exactitud, integridad o vigencia en todo momento. La Empresa no se responsabiliza por errores u omisiones en el contenido del sitio, ni por las consecuencias de confiar en dicha información sin verificación profesional adecuada.</p>
        ),
      },
      {
        title: '4. Limitación de responsabilidad',
        body: (
          <>
            <p className="mb-3">En la máxima medida permitida por la ley aplicable, Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services no será responsable por:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Daños directos, indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso de nuestro sitio web o servicios</li>
              <li>Pérdidas de datos, ingresos, ganancias o negocios</li>
              <li>Errores, inexactitudes u omisiones en el contenido del sitio</li>
              <li>Interrupciones o fallas técnicas del sitio web</li>
              <li>Acciones de terceros en relación con el uso de nuestros servicios</li>
              <li>Información incorrecta o incompleta proporcionada por el cliente que afecte el resultado del servicio</li>
            </ul>
            <p className="mt-3">La responsabilidad máxima de la Empresa en cualquier circunstancia no excederá el monto efectivamente pagado por el cliente por el servicio específico que dio origen al reclamo.</p>
          </>
        ),
      },
      {
        title: '5. Responsabilidad del cliente',
        body: (
          <>
            <p className="mb-3">El cliente reconoce y acepta que:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Es responsable de la veracidad, exactitud y completitud de toda la información y documentación que proporcione a la Empresa</li>
              <li>Cualquier consecuencia derivada de información falsa, incompleta o incorrecta proporcionada por el cliente es responsabilidad exclusiva del mismo</li>
              <li>Debe comunicar cualquier cambio en su situación que pueda afectar el servicio contratado</li>
            </ul>
          </>
        ),
      },
      {
        title: '6. Propiedad intelectual',
        body: (
          <p>Todo el contenido de este sitio web, incluyendo pero no limitado a textos, imágenes, logotipos, gráficos, diseños, íconos y código, es propiedad de Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services o de sus respectivos titulares, y está protegido por las leyes de derechos de autor y propiedad intelectual aplicables en los Estados Unidos. Queda prohibida su reproducción, distribución o uso no autorizado sin consentimiento previo y por escrito de la Empresa.</p>
        ),
      },
      {
        title: '7. Links a sitios de terceros',
        body: (
          <p>Nuestro sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para tu conveniencia. La Empresa no tiene control sobre el contenido de esos sitios y no asume responsabilidad alguna por su contenido, políticas de privacidad o prácticas.</p>
        ),
      },
      {
        title: '8. Terminación de servicios',
        body: (
          <p>La Empresa se reserva el derecho de suspender o terminar la prestación de servicios a cualquier cliente que incumpla estos Términos, proporcione información fraudulenta, o cuya conducta sea considerada inapropiada o contraria a la ley. En caso de terminación, el cliente será notificado y se le reembolsará de forma proporcional por servicios no prestados, según corresponda.</p>
        ),
      },
      {
        title: '9. Jurisdicción y ley aplicable',
        body: (
          <p>Estos Términos y Condiciones se rigen por las leyes del Estado de Massachusetts, Estados Unidos de América. Cualquier disputa que surja en relación con estos Términos o los servicios prestados se resolverá en los tribunales competentes del condado de Suffolk, Massachusetts, y ambas partes se someten expresamente a dicha jurisdicción.</p>
        ),
      },
      {
        title: '10. Resolución de disputas',
        body: (
          <p>Ante cualquier discrepancia o reclamo, las partes se comprometen a intentar resolver la situación de buena fe mediante comunicación directa como primer paso. Si no se alcanza una solución satisfactoria en un plazo razonable, la disputa podrá someterse a mediación antes de iniciar cualquier proceso judicial formal.</p>
        ),
      },
      {
        title: '11. Modificaciones a los Términos',
        body: (
          <p>La Empresa se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigencia desde su publicación en el sitio web. El uso continuo de nuestros servicios tras la publicación de cambios constituye la aceptación de los Términos actualizados.</p>
        ),
      },
      {
        title: '12. Comunicaciones electrónicas (CAN-SPAM Act)',
        body: (
          <p>Cumplimos con la Ley CAN-SPAM de Estados Unidos. Si deseas dejar de recibir comunicaciones por correo electrónico de nuestra parte, puedes solicitarlo en cualquier momento enviando un correo a{' '}<a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">info@infinityssinc.com</a>{' '}con el asunto "Cancelar suscripción". Procesaremos tu solicitud en un plazo máximo de 10 días hábiles.</p>
        ),
      },
      {
        title: '13. Términos y Condiciones de SMS',
        body: (
          <>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-5">
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Aviso CAN-SPAM</p>
              <p className="text-amber-900 text-sm">Este servicio es exclusivamente para comunicaciones de servicio no comerciales. <strong>No enviamos comunicaciones con fines de marketing, publicidad ni promoción.</strong></p>
            </div>
            <p className="mb-4">Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services envía mensajes SMS no comerciales relacionados con recordatorios de citas, servicios de taxes, actualizaciones de ITIN, actualizaciones del estado de documentos y soporte al cliente.</p>
            <p className="mb-4">La frecuencia de mensajes varía. Pueden aplicar tarifas de mensajes y datos.</p>
            <p className="mb-4">Puedes responder STOP en cualquier momento para dejar de recibir mensajes SMS. Para asistencia, responde HELP o contáctanos al <a href="tel:6176698210" className="text-gold-600 font-semibold">617-669-8210</a> o <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">info@infinityssinc.com</a>.</p>
            <p className="mb-4">El consentimiento para SMS no es una condición de compra.</p>
            <p className="mb-4">Los datos y el consentimiento de SMS no serán vendidos, compartidos ni alquilados a terceros con fines de marketing o promoción.</p>
            <p>Política de Privacidad: <a href="/privacy" className="text-gold-600 font-semibold hover:underline">https://www.infinityssinc.com/privacy</a></p>
          </>
        ),
      },
    ],
    contactTitle: 'Contacto',
    contactDesc: 'Para preguntas sobre estos Términos y Condiciones:',
  },

  en: {
    intro: (
      <p>
        These Terms and Conditions ("Terms") govern access to and use of the website of{' '}
        <strong>Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services</strong> (hereinafter "the Company," "we," or "us"),
        located at 1 West Cottage Street, Roxbury, MA 02119. By accessing or using our website and
        services, you confirm that you have read, understood, and accepted these Terms in their entirety.
      </p>
    ),
    introNote: 'If you do not agree with any part of these Terms, please do not use our website or services.',
    sections: [
      {
        title: '1. Use of the Website',
        body: (
          <>
            <p className="mb-3">By using this website, you agree to do so only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use of the site.</p>
            <p className="mb-3">The following are expressly prohibited:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Using the site for any illegal or fraudulent purpose</li>
              <li>Attempting unauthorized access to our systems or data</li>
              <li>Transmitting viruses, malware, or other malicious code</li>
              <li>Copying, reproducing, or distributing site content without written authorization</li>
              <li>Using the site to send unsolicited communications (spam)</li>
              <li>Impersonating another person or entity</li>
              <li>Interfering with the normal operation of the website</li>
            </ul>
          </>
        ),
      },
      {
        title: '2. Description of Services',
        body: (
          <>
            <p>Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services provides professional services including individual and corporate tax preparation, bookkeeping, payroll management, credit repair, and consulting and administrative document preparation related to immigration matters.</p>
            <p className="mt-3">The service descriptions on our website are for informational purposes only. The specific scope of each service will be agreed upon in writing or verbally at the start of each contractual relationship. The Company reserves the right to modify, suspend, or discontinue any service without prior notice.</p>
          </>
        ),
      },
      {
        title: '3. Accuracy of Information',
        body: (
          <p>The content of this website is provided for general informational purposes only. While we strive to keep information current and accurate, we do not guarantee its accuracy, completeness, or timeliness at all times. The Company is not responsible for errors or omissions in site content, or for consequences arising from reliance on that information without adequate professional verification.</p>
        ),
      },
      {
        title: '4. Limitation of Liability',
        body: (
          <>
            <p className="mb-3">To the maximum extent permitted by applicable law, Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services shall not be liable for:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our website or services</li>
              <li>Loss of data, revenue, profits, or business</li>
              <li>Errors, inaccuracies, or omissions in site content</li>
              <li>Technical interruptions or failures of the website</li>
              <li>Actions of third parties in connection with the use of our services</li>
              <li>Incorrect or incomplete information provided by the client that affects the service outcome</li>
            </ul>
            <p className="mt-3">The Company's maximum liability in any circumstance shall not exceed the amount actually paid by the client for the specific service that gave rise to the claim.</p>
          </>
        ),
      },
      {
        title: '5. Client Responsibility',
        body: (
          <>
            <p className="mb-3">The client acknowledges and agrees that:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>They are responsible for the truthfulness, accuracy, and completeness of all information and documentation provided to the Company</li>
              <li>Any consequences arising from false, incomplete, or incorrect information provided by the client are the client's sole responsibility</li>
              <li>They must communicate any changes in their situation that may affect the contracted service</li>
            </ul>
          </>
        ),
      },
      {
        title: '6. Intellectual Property',
        body: (
          <p>All content on this website, including but not limited to text, images, logos, graphics, designs, icons, and code, is the property of Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services or its respective owners, and is protected by applicable US copyright and intellectual property laws. Reproduction, distribution, or unauthorized use without prior written consent from the Company is prohibited.</p>
        ),
      },
      {
        title: '7. Links to Third-Party Sites',
        body: (
          <p>Our site may contain links to third-party websites. These links are provided solely for your convenience. The Company has no control over the content of those sites and assumes no responsibility for their content, privacy policies, or practices.</p>
        ),
      },
      {
        title: '8. Termination of Services',
        body: (
          <p>The Company reserves the right to suspend or terminate service to any client who violates these Terms, provides fraudulent information, or whose conduct is deemed inappropriate or unlawful. In the event of termination, the client will be notified and proportionally refunded for services not rendered, as applicable.</p>
        ),
      },
      {
        title: '9. Jurisdiction and Applicable Law',
        body: (
          <p>These Terms and Conditions are governed by the laws of the State of Massachusetts, United States of America. Any dispute arising in connection with these Terms or the services provided shall be resolved in the competent courts of Suffolk County, Massachusetts, and both parties expressly submit to that jurisdiction.</p>
        ),
      },
      {
        title: '10. Dispute Resolution',
        body: (
          <p>In the event of any discrepancy or claim, the parties agree to attempt to resolve the situation in good faith through direct communication as a first step. If a satisfactory resolution is not reached within a reasonable time, the dispute may be submitted to mediation before initiating any formal legal proceedings.</p>
        ),
      },
      {
        title: '11. Modifications to the Terms',
        body: (
          <p>The Company reserves the right to modify these Terms at any time. Modifications will take effect upon publication on the website. Your continued use of our services after changes are published constitutes acceptance of the updated Terms.</p>
        ),
      },
      {
        title: '12. Electronic Communications (CAN-SPAM Act)',
        body: (
          <p>We comply with the US CAN-SPAM Act. If you wish to stop receiving email communications from us, you may request this at any time by emailing{' '}<a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">info@infinityssinc.com</a>{' '}with the subject line "Unsubscribe." We will process your request within a maximum of 10 business days.</p>
        ),
      },
      {
        title: '13. SMS Terms and Conditions',
        body: (
          <>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-5">
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">CAN-SPAM Notice</p>
              <p className="text-amber-900 text-sm">This service is for non-marketing, service-related communications only. <strong>We do not send communications for marketing, advertising, or promotional purposes.</strong></p>
            </div>
            <p className="mb-4">Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services sends non-marketing SMS messages related to appointment reminders, tax services, ITIN updates, document status updates, and customer support.</p>
            <p className="mb-4">Message frequency varies. Message and data rates may apply.</p>
            <p className="mb-4">You can reply STOP at any time to opt out of receiving SMS messages. For assistance, reply HELP or contact us at <a href="tel:6176698210" className="text-gold-600 font-semibold">617-669-8210</a> or <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">info@infinityssinc.com</a>.</p>
            <p className="mb-4">SMS consent is not a condition of purchase.</p>
            <p className="mb-4">SMS opt-in data and consent will not be sold, shared, or rented to third parties for marketing or promotional purposes.</p>
            <p>Privacy Policy: <a href="/privacy" className="text-gold-600 font-semibold hover:underline">https://www.infinityssinc.com/privacy</a></p>
          </>
        ),
      },
    ],
    contactTitle: 'Contact',
    contactDesc: 'For questions about these Terms and Conditions:',
  },
}

export default function TerminosContent() {
  const { lang } = useLanguage()
  const c = content[lang] || content.es

  return (
    <div className="space-y-10 text-gray-700 text-sm leading-relaxed">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        {c.intro}
        <p className="mt-3">{c.introNote}</p>
      </div>

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
          <p><strong className="text-white">Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services</strong></p>
          <p>1 West Cottage Street, Roxbury, MA 02119</p>
          <p><a href="tel:6176698210" className="text-gold-400 hover:underline">617-669-8210</a></p>
          <p><a href="mailto:info@infinityssinc.com" className="text-gold-400 hover:underline">info@infinityssinc.com</a></p>
        </div>
      </div>
    </div>
  )
}
