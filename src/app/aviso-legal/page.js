export const metadata = {
  title: 'Aviso Legal y Descargo de Responsabilidad',
  description:
    'Aviso legal y descargo de responsabilidad de Infinity Solutions of Roxbury LLC. Información importante sobre los límites de nuestros servicios de taxes, crédito y documentos migratorios.',
}

export default function AvisoLegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Aviso Legal y Descargo de Responsabilidad</h1>
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
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6">
              <p className="font-bold text-amber-900 mb-2">Aviso Importante</p>
              <p className="text-amber-800">
                Este documento contiene información legal crítica sobre los alcances y limitaciones
                de los servicios de Infinity Solutions of Roxbury LLC. Lee cuidadosamente antes de
                contratar cualquier servicio.
              </p>
            </div>

            {/* General */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                1. Aviso General
              </h2>
              <p>
                El contenido de este sitio web, incluyendo artículos, descripciones de servicios,
                guías y cualquier otro material, se proporciona exclusivamente con fines informativos
                y no constituye asesoría legal, fiscal, financiera o de ningún otro tipo de naturaleza
                profesional regulada.
              </p>
              <p className="mt-3">
                Infinity Solutions of Roxbury LLC es una empresa de servicios profesionales de
                preparación de documentos y consultoría administrativa. No somos abogados, contadores
                públicos certificados (CPA) en todas las áreas, ni representantes legales. La
                información proporcionada en este sitio no reemplaza la consulta con un profesional
                habilitado en el área específica que requieras.
              </p>
            </section>

            {/* Immigration - CRITICAL */}
            <section>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-red-700 stroke-2 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  2. Servicios de Documentos Migratorios — Aviso Crítico
                </h2>
                <div className="space-y-3 text-red-900 text-sm">
                  <p>
                    <strong>Infinity Solutions of Roxbury LLC NO es una firma de abogados y NO
                    proporciona asesoría legal de inmigración.</strong>
                  </p>
                  <p>
                    Nuestros servicios en esta área se limitan estrictamente a la orientación
                    administrativa y la preparación y organización de documentos. No representamos
                    a clientes ante el Servicio de Ciudadanía e Inmigración de los Estados Unidos
                    (USCIS), ningún tribunal de inmigración ni ninguna agencia gubernamental.
                  </p>
                  <p>
                    No estamos autorizados para dar consejos legales de inmigración, interpretar
                    leyes de inmigración ni predecir resultados de casos de inmigración.
                  </p>
                  <p>
                    <strong>Si tu caso requiere representación legal o asesoría jurídica en
                    materia de inmigración, te recomendamos consultar con un abogado de
                    inmigración debidamente licenciado.</strong>
                  </p>
                  <p>
                    El uso de nuestros servicios de preparación de documentos no garantiza
                    la aprobación de ninguna solicitud, petición o trámite migratorio.
                    Los resultados dependen exclusivamente de las decisiones de las autoridades
                    competentes.
                  </p>
                </div>
              </div>
            </section>

            {/* Tax services */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                3. Servicios de Preparación de Impuestos (Taxes)
              </h2>
              <ul className="list-disc list-inside space-y-2.5 ml-2">
                <li>
                  <strong>No garantizamos resultados específicos</strong> en cuanto al monto de
                  reembolso ni al resultado de tu declaración de impuestos.
                </li>
                <li>
                  El cliente es <strong>exclusivamente responsable</strong> de la veracidad,
                  exactitud y completitud de toda la información, documentación e ingresos
                  reportados. Infinity Solutions of Roxbury LLC no se hace responsable de las
                  consecuencias derivadas de información incorrecta, incompleta o fraudulenta
                  proporcionada por el cliente.
                </li>
                <li>
                  Nuestros servicios de preparación de impuestos se basan en la información que
                  el cliente nos proporciona. No realizamos auditorías independientes de los
                  documentos del cliente.
                </li>
                <li>
                  Ante cualquier notificación, carta o auditoría del IRS o autoridad fiscal estatal,
                  el cliente debe comunicárnoslo de inmediato. La respuesta a auditorías puede
                  requerir servicios adicionales.
                </li>
                <li>
                  Las leyes fiscales cambian frecuentemente. Aunque nos mantenemos actualizados,
                  recomendamos verificar con el IRS o un CPA cualquier situación tributaria
                  compleja o fuera de lo ordinario.
                </li>
              </ul>
            </section>

            {/* Credit repair */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                4. Servicios de Reparación de Crédito
              </h2>
              <ul className="list-disc list-inside space-y-2.5 ml-2">
                <li>
                  <strong>No garantizamos un puntaje de crédito específico</strong> ni un
                  resultado determinado. Los resultados varían según el historial individual,
                  las decisiones de los bureaus de crédito y las circunstancias particulares
                  de cada cliente.
                </li>
                <li>
                  De conformidad con la <strong>Credit Repair Organizations Act (CROA)</strong>,
                  informamos que: tienes derecho a disputar información inexacta en tu reporte
                  de crédito directamente con los bureaus de crédito de forma gratuita.
                </li>
                <li>
                  No podemos eliminar información negativa que sea correcta, precisa y verificable
                  de tu historial crediticio. Solo podemos disputar ítems que sean incorrectos,
                  desactualizados o no verificables conforme a la ley.
                </li>
                <li>
                  Los resultados del proceso de reparación de crédito <strong>no son inmediatos</strong>.
                  El tiempo requerido varía según la complejidad del historial y la respuesta de
                  los bureaus y acreedores.
                </li>
                <li>
                  Ninguna estrategia de crédito está garantizada para funcionar en todos los casos.
                  Proporcionamos orientación profesional basada en mejores prácticas, sin promesas
                  de resultados específicos.
                </li>
              </ul>
            </section>

            {/* Bookkeeping / Payroll */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                5. Servicios de Bookkeeping y Payroll
              </h2>
              <ul className="list-disc list-inside space-y-2.5 ml-2">
                <li>
                  La precisión de nuestros servicios de contabilidad y nómina depende directamente
                  de la información y documentos que el cliente nos proporcione en tiempo y forma.
                </li>
                <li>
                  El cliente es responsable de revisar y aprobar los reportes y declaraciones que
                  preparamos antes de su presentación o uso oficial.
                </li>
                <li>
                  Cualquier multa, penalidad o consecuencia derivada de errores en información
                  proporcionada por el cliente o de su falta de aprobación oportuna de los
                  documentos preparados será responsabilidad del cliente.
                </li>
              </ul>
            </section>

            {/* General disclaimer */}
            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                6. Información Solo con Fines Informativos
              </h2>
              <p>
                Toda la información publicada en este sitio web, incluyendo artículos, guías,
                descripciones de servicios y respuestas a preguntas frecuentes, tiene carácter
                meramente informativo y general. No debe interpretarse como asesoría legal,
                fiscal, contable, financiera ni de ningún tipo de naturaleza profesional para
                situaciones individuales específicas.
              </p>
              <p className="mt-3">
                Para obtener orientación aplicable a tu situación particular, te invitamos a
                contactarnos directamente para una consulta personalizada.
              </p>
            </section>

            {/* Contact */}
            <div className="bg-navy-900 rounded-xl p-7 text-white">
              <h2 className="text-lg font-bold mb-3">¿Tienes preguntas sobre este aviso?</h2>
              <p className="text-gray-300 text-sm mb-4">
                Si tienes dudas sobre los alcances de nuestros servicios o sobre este aviso legal,
                contáctanos antes de iniciar cualquier proceso:
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
