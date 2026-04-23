export const metadata = {
  title: 'Términos y Condiciones',
  description:
    'Términos y Condiciones de uso del sitio web y servicios de Infinity Solutions Services Inc, Boston, MA.',
}

export default function TerminosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Términos y Condiciones</h1>
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

            {/* Intro */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p>
                Los presentes Términos y Condiciones ("Términos") rigen el acceso y uso del sitio web
                de <strong>Infinity Solutions Services Inc</strong> (en adelante "la Empresa", "nosotros"),
                con domicilio en 1 W Cottage Street, Boston, MA 02125. Al acceder o utilizar nuestro
                sitio web y servicios, confirmas que has leído, entendido y aceptado estos Términos en
                su totalidad.
              </p>
              <p className="mt-3">
                Si no estás de acuerdo con alguna parte de estos Términos, te pedimos que no utilices
                nuestro sitio web ni nuestros servicios.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                1. Uso del sitio web
              </h2>
              <p className="mb-3">
                Al utilizar este sitio web, aceptas que lo harás únicamente con propósitos legales
                y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso
                del sitio por parte de otros.
              </p>
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
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                2. Descripción de servicios
              </h2>
              <p>
                Infinity Solutions Services Inc ofrece servicios profesionales de preparación de
                impuestos (taxes individuales y corporativos), contabilidad (bookkeeping), gestión
                de nómina (payroll), reparación de crédito y consultoría y preparación de documentos
                administrativos relacionados con trámites migratorios.
              </p>
              <p className="mt-3">
                La descripción de servicios en nuestro sitio web es de carácter informativo. Los
                alcances específicos de cada servicio serán acordados por escrito o verbalmente al
                inicio de cada relación contractual. La Empresa se reserva el derecho de modificar,
                suspender o discontinuar cualquier servicio sin previo aviso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                3. Exactitud de la información
              </h2>
              <p>
                El contenido de este sitio web se proporciona únicamente con fines informativos
                generales. Aunque nos esforzamos por mantener la información actualizada y precisa,
                no garantizamos su exactitud, integridad o vigencia en todo momento. La Empresa no
                se responsabiliza por errores u omisiones en el contenido del sitio, ni por las
                consecuencias de confiar en dicha información sin verificación profesional adecuada.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                4. Limitación de responsabilidad
              </h2>
              <p className="mb-3">
                En la máxima medida permitida por la ley aplicable, Infinity Solutions Services Inc
                no será responsable por:
              </p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Daños directos, indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso de nuestro sitio web o servicios</li>
                <li>Pérdidas de datos, ingresos, ganancias o negocios</li>
                <li>Errores, inexactitudes u omisiones en el contenido del sitio</li>
                <li>Interrupciones o fallas técnicas del sitio web</li>
                <li>Acciones de terceros en relación con el uso de nuestros servicios</li>
                <li>Información incorrecta o incompleta proporcionada por el cliente que afecte el resultado del servicio</li>
              </ul>
              <p className="mt-3">
                La responsabilidad máxima de la Empresa en cualquier circunstancia no excederá el
                monto efectivamente pagado por el cliente por el servicio específico que dio origen
                al reclamo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                5. Responsabilidad del cliente
              </h2>
              <p className="mb-3">
                El cliente reconoce y acepta que:
              </p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Es responsable de la veracidad, exactitud y completitud de toda la información y documentación que proporcione a la Empresa</li>
                <li>Cualquier consecuencia derivada de información falsa, incompleta o incorrecta proporcionada por el cliente es responsabilidad exclusiva del mismo</li>
                <li>Debe comunicar cualquier cambio en su situación que pueda afectar el servicio contratado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                6. Propiedad intelectual
              </h2>
              <p>
                Todo el contenido de este sitio web, incluyendo pero no limitado a textos, imágenes,
                logotipos, gráficos, diseños, íconos y código, es propiedad de Infinity Solutions
                Services Inc o de sus respectivos titulares, y está protegido por las leyes de
                derechos de autor y propiedad intelectual aplicables en los Estados Unidos. Queda
                prohibida su reproducción, distribución o uso no autorizado sin consentimiento
                previo y por escrito de la Empresa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                7. Links a sitios de terceros
              </h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios web de terceros. Estos enlaces se
                proporcionan únicamente para tu conveniencia. La Empresa no tiene control sobre
                el contenido de esos sitios y no asume responsabilidad alguna por su contenido,
                políticas de privacidad o prácticas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                8. Terminación de servicios
              </h2>
              <p>
                La Empresa se reserva el derecho de suspender o terminar la prestación de servicios
                a cualquier cliente que incumpla estos Términos, proporcione información fraudulenta,
                o cuya conducta sea considerada inapropiada o contraria a la ley. En caso de
                terminación, el cliente será notificado y se le reembolsará de forma proporcional
                por servicios no prestados, según corresponda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                9. Jurisdicción y ley aplicable
              </h2>
              <p>
                Estos Términos y Condiciones se rigen por las leyes del Estado de Massachusetts,
                Estados Unidos de América. Cualquier disputa que surja en relación con estos
                Términos o los servicios prestados se resolverá en los tribunales competentes
                del condado de Suffolk, Massachusetts, y ambas partes se someten expresamente
                a dicha jurisdicción.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                10. Resolución de disputas
              </h2>
              <p>
                Ante cualquier discrepancia o reclamo, las partes se comprometen a intentar resolver
                la situación de buena fe mediante comunicación directa como primer paso. Si no se
                alcanza una solución satisfactoria en un plazo razonable, la disputa podrá someterse
                a mediación antes de iniciar cualquier proceso judicial formal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                11. Modificaciones a los Términos
              </h2>
              <p>
                La Empresa se reserva el derecho de modificar estos Términos en cualquier momento.
                Las modificaciones entrarán en vigencia desde su publicación en el sitio web. El
                uso continuo de nuestros servicios tras la publicación de cambios constituye la
                aceptación de los Términos actualizados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                12. Comunicaciones electrónicas (CAN-SPAM Act)
              </h2>
              <p>
                Cumplimos con la Ley CAN-SPAM de Estados Unidos. Si te has suscrito a comunicaciones
                de nuestra parte, puedes darte de baja en cualquier momento enviando un correo a{' '}
                <a href="mailto:info@infinityssinc.com" className="text-gold-600 font-semibold">
                  info@infinityssinc.com
                </a>{' '}
                con el asunto "Cancelar suscripción". Procesaremos tu solicitud en un plazo máximo
                de 10 días hábiles.
              </p>
            </section>

            {/* Contact box */}
            <div className="bg-navy-900 rounded-xl p-7 text-white">
              <h2 className="text-lg font-bold mb-3">Contacto</h2>
              <p className="text-gray-300 text-sm mb-4">
                Para preguntas sobre estos Términos y Condiciones:
              </p>
              <div className="space-y-1.5 text-sm text-gray-300">
                <p><strong className="text-white">Infinity Solutions Services Inc</strong></p>
                <p>1 W Cottage Street, Boston, MA 02125</p>
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
