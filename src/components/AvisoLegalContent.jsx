'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const content = {
  es: {
    alertTitle: 'Aviso Importante',
    alertBody: 'Este documento contiene información legal crítica sobre los alcances y limitaciones de los servicios de Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services. Lee cuidadosamente antes de contratar cualquier servicio.',
    sections: [
      {
        title: '1. Aviso General',
        body: (
          <>
            <p>El contenido de este sitio web, incluyendo artículos, descripciones de servicios, guías y cualquier otro material, se proporciona exclusivamente con fines informativos y no constituye asesoría legal, fiscal, financiera o de ningún otro tipo de naturaleza profesional regulada.</p>
            <p className="mt-3">Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services es una empresa de servicios profesionales de preparación de documentos y consultoría administrativa. No somos abogados, contadores públicos certificados (CPA) en todas las áreas, ni representantes legales. La información proporcionada en este sitio no reemplaza la consulta con un profesional habilitado en el área específica que requieras.</p>
          </>
        ),
      },
      {
        title: '2. Servicios de Documentos Migratorios — Aviso Crítico',
        isCritical: true,
        body: (
          <div className="space-y-3 text-red-900 text-sm">
            <p><strong>Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services NO es una firma de abogados y NO proporciona asesoría legal de inmigración.</strong></p>
            <p>Nuestros servicios en esta área se limitan estrictamente a la orientación administrativa y la preparación y organización de documentos. No representamos a clientes ante el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS), ningún tribunal de inmigración ni ninguna agencia gubernamental.</p>
            <p>No estamos autorizados para dar consejos legales de inmigración, interpretar leyes de inmigración ni predecir resultados de casos de inmigración.</p>
            <p><strong>Si tu caso requiere representación legal o asesoría jurídica en materia de inmigración, te recomendamos consultar con un abogado de inmigración debidamente licenciado.</strong></p>
            <p>El uso de nuestros servicios de preparación de documentos no garantiza la aprobación de ninguna solicitud, petición o trámite migratorio. Los resultados dependen exclusivamente de las decisiones de las autoridades competentes.</p>
          </div>
        ),
      },
      {
        title: '3. Servicios de Preparación de Impuestos (Taxes)',
        body: (
          <ul className="list-disc list-inside space-y-2.5 ml-2">
            <li><strong>No garantizamos resultados específicos</strong> en cuanto al monto de reembolso ni al resultado de tu declaración de impuestos.</li>
            <li>El cliente es <strong>exclusivamente responsable</strong> de la veracidad, exactitud y completitud de toda la información, documentación e ingresos reportados. Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services no se hace responsable de las consecuencias derivadas de información incorrecta, incompleta o fraudulenta proporcionada por el cliente.</li>
            <li>Nuestros servicios de preparación de impuestos se basan en la información que el cliente nos proporciona. No realizamos auditorías independientes de los documentos del cliente.</li>
            <li>Ante cualquier notificación, carta o auditoría del IRS o autoridad fiscal estatal, el cliente debe comunicárnoslo de inmediato. La respuesta a auditorías puede requerir servicios adicionales.</li>
            <li>Las leyes fiscales cambian frecuentemente. Aunque nos mantenemos actualizados, recomendamos verificar con el IRS o un CPA cualquier situación tributaria compleja o fuera de lo ordinario.</li>
          </ul>
        ),
      },
      {
        title: '4. Servicios de Reparación de Crédito',
        body: (
          <ul className="list-disc list-inside space-y-2.5 ml-2">
            <li><strong>No garantizamos un puntaje de crédito específico</strong> ni un resultado determinado. Los resultados varían según el historial individual, las decisiones de los bureaus de crédito y las circunstancias particulares de cada cliente.</li>
            <li>De conformidad con la <strong>Credit Repair Organizations Act (CROA)</strong>, informamos que: tienes derecho a disputar información inexacta en tu reporte de crédito directamente con los bureaus de crédito de forma gratuita.</li>
            <li>No podemos eliminar información negativa que sea correcta, precisa y verificable de tu historial crediticio. Solo podemos disputar ítems que sean incorrectos, desactualizados o no verificables conforme a la ley.</li>
            <li>Los resultados del proceso de reparación de crédito <strong>no son inmediatos</strong>. El tiempo requerido varía según la complejidad del historial y la respuesta de los bureaus y acreedores.</li>
            <li>Ninguna estrategia de crédito está garantizada para funcionar en todos los casos. Proporcionamos orientación profesional basada en mejores prácticas, sin promesas de resultados específicos.</li>
          </ul>
        ),
      },
      {
        title: '5. Servicios de Bookkeeping y Payroll',
        body: (
          <ul className="list-disc list-inside space-y-2.5 ml-2">
            <li>La precisión de nuestros servicios de contabilidad y nómina depende directamente de la información y documentos que el cliente nos proporcione en tiempo y forma.</li>
            <li>El cliente es responsable de revisar y aprobar los reportes y declaraciones que preparamos antes de su presentación o uso oficial.</li>
            <li>Cualquier multa, penalidad o consecuencia derivada de errores en información proporcionada por el cliente o de su falta de aprobación oportuna de los documentos preparados será responsabilidad del cliente.</li>
          </ul>
        ),
      },
      {
        title: '6. Información Solo con Fines Informativos',
        body: (
          <>
            <p>Toda la información publicada en este sitio web, incluyendo artículos, guías, descripciones de servicios y respuestas a preguntas frecuentes, tiene carácter meramente informativo y general. No debe interpretarse como asesoría legal, fiscal, contable, financiera ni de ningún tipo de naturaleza profesional para situaciones individuales específicas.</p>
            <p className="mt-3">Para obtener orientación aplicable a tu situación particular, te invitamos a contactarnos directamente para una consulta personalizada.</p>
          </>
        ),
      },
    ],
    contactTitle: '¿Tienes preguntas sobre este aviso?',
    contactDesc: 'Si tienes dudas sobre los alcances de nuestros servicios o sobre este aviso legal, contáctanos antes de iniciar cualquier proceso:',
  },

  en: {
    alertTitle: 'Important Notice',
    alertBody: 'This document contains critical legal information about the scope and limitations of Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services services. Please read carefully before engaging any service.',
    sections: [
      {
        title: '1. General Notice',
        body: (
          <>
            <p>The content of this website, including articles, service descriptions, guides, and any other material, is provided exclusively for informational purposes and does not constitute legal, tax, financial, or any other type of regulated professional advice.</p>
            <p className="mt-3">Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services is a professional document preparation and administrative consulting company. We are not attorneys, Certified Public Accountants (CPAs) in all areas, or legal representatives. The information provided on this site does not replace consultation with a licensed professional in the specific area you require.</p>
          </>
        ),
      },
      {
        title: '2. Immigration Document Services — Critical Notice',
        isCritical: true,
        body: (
          <div className="space-y-3 text-red-900 text-sm">
            <p><strong>Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services is NOT a law firm and does NOT provide immigration legal advice.</strong></p>
            <p>Our services in this area are strictly limited to administrative guidance and document preparation and organization. We do not represent clients before US Citizenship and Immigration Services (USCIS), any immigration court, or any government agency.</p>
            <p>We are not authorized to provide immigration legal advice, interpret immigration laws, or predict immigration case outcomes.</p>
            <p><strong>If your case requires legal representation or legal advice in immigration matters, we strongly recommend consulting a duly licensed immigration attorney.</strong></p>
            <p>The use of our document preparation services does not guarantee the approval of any immigration application, petition, or process. Results depend exclusively on the decisions of the competent authorities.</p>
          </div>
        ),
      },
      {
        title: '3. Tax Preparation Services',
        body: (
          <ul className="list-disc list-inside space-y-2.5 ml-2">
            <li><strong>We do not guarantee specific results</strong> regarding refund amounts or the outcome of your tax return.</li>
            <li>The client is <strong>solely responsible</strong> for the truthfulness, accuracy, and completeness of all information, documentation, and income reported. Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services is not responsible for consequences arising from incorrect, incomplete, or fraudulent information provided by the client.</li>
            <li>Our tax preparation services are based on the information the client provides. We do not independently audit client documents.</li>
            <li>Upon receiving any IRS or state tax authority notice, letter, or audit, the client must notify us immediately. Responding to audits may require additional services.</li>
            <li>Tax laws change frequently. While we stay current, we recommend consulting the IRS or a CPA for any complex or unusual tax situation.</li>
          </ul>
        ),
      },
      {
        title: '4. Credit Repair Services',
        body: (
          <ul className="list-disc list-inside space-y-2.5 ml-2">
            <li><strong>We do not guarantee a specific credit score</strong> or a particular outcome. Results vary based on individual credit history, credit bureau decisions, and each client's particular circumstances.</li>
            <li>In accordance with the <strong>Credit Repair Organizations Act (CROA)</strong>, we inform you that: you have the right to dispute inaccurate information in your credit report directly with the credit bureaus at no cost.</li>
            <li>We cannot remove negative information that is correct, accurate, and verifiable from your credit history. We can only dispute items that are incorrect, outdated, or unverifiable under the law.</li>
            <li>Credit repair results are <strong>not immediate</strong>. The time required varies based on the complexity of your credit history and the response of bureaus and creditors.</li>
            <li>No credit strategy is guaranteed to work in every case. We provide professional guidance based on best practices, without promises of specific results.</li>
          </ul>
        ),
      },
      {
        title: '5. Bookkeeping & Payroll Services',
        body: (
          <ul className="list-disc list-inside space-y-2.5 ml-2">
            <li>The accuracy of our bookkeeping and payroll services depends directly on the information and documents the client provides to us on time.</li>
            <li>The client is responsible for reviewing and approving the reports and filings we prepare before their official submission or use.</li>
            <li>Any fines, penalties, or consequences resulting from errors in client-provided information or the client's failure to timely approve prepared documents shall be the client's responsibility.</li>
          </ul>
        ),
      },
      {
        title: '6. Information for Informational Purposes Only',
        body: (
          <>
            <p>All information published on this website, including articles, guides, service descriptions, and answers to frequently asked questions, is purely for general informational purposes. It should not be interpreted as legal, tax, accounting, financial, or any type of professional advice for specific individual situations.</p>
            <p className="mt-3">For guidance applicable to your particular situation, we invite you to contact us directly for a personalized consultation.</p>
          </>
        ),
      },
    ],
    contactTitle: 'Questions About This Notice?',
    contactDesc: 'If you have questions about the scope of our services or this legal disclaimer, please contact us before starting any process:',
  },
}

export default function AvisoLegalContent() {
  const { lang } = useLanguage()
  const c = content[lang] || content.es

  return (
    <div className="space-y-10 text-gray-700 text-sm leading-relaxed">
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6">
        <p className="font-bold text-amber-900 mb-2">{c.alertTitle}</p>
        <p className="text-amber-800">{c.alertBody}</p>
      </div>

      {c.sections.map((s) =>
        s.isCritical ? (
          <section key={s.title}>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-red-700 stroke-2 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                {s.title}
              </h2>
              {s.body}
            </div>
          </section>
        ) : (
          <section key={s.title}>
            <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">{s.title}</h2>
            {s.body}
          </section>
        )
      )}

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
