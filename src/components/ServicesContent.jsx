'use client'

import { CheckCircle } from 'lucide-react'
import CTA from '@/components/CTA'
import { useLanguage } from '@/contexts/LanguageContext'

const immigrationIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)
const individualTaxIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
)
const corporateTaxIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg>
)
const bookkeepingIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
)
const payrollIcon = (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75" />
  </svg>
)

const data = {
  es: {
    heroTag: 'Lo que ofrecemos',
    heroTitle: 'Nuestros Servicios Profesionales',
    heroSubtitle: 'Soluciones completas para individuos y negocios en Boston, MA. Atención en español, proceso claro y resultados reales.',
    requestBtn: 'Solicitar este servicio',
    includesTitle: '¿Qué incluye?',
    idealTitle: '¿Para quién es ideal?',
    services: [
      {
        id: 'immigration',
        title: 'Consultoría y Preparación de Documentos Migratorios',
        icon: immigrationIcon,
        description: 'En Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services ofrecemos orientación y preparación de documentos para diversos trámites migratorios de forma organizada, clara y profesional. Nuestro equipo te acompaña en cada etapa del proceso administrativo, asegurándonos de que toda tu documentación esté completa y correctamente presentada.',
        benefits: [
          'Revisión completa de tu situación y documentos actuales',
          'Orientación clara y paso a paso en el proceso',
          'Organización y preparación de documentación requerida',
          'Acompañamiento durante todo el proceso',
          'Comunicación en español para mayor claridad',
          'Confidencialidad absoluta en tu información',
        ],
        audience: 'Inmigrantes que necesitan orientación en trámites administrativos, actualización de estatus, renovaciones de documentos y otros procesos migratorios.',
        note: 'Nota: Nuestros servicios son de consultoría y preparación documental. No somos abogados de inmigración ni brindamos representación legal.',
      },
      {
        id: 'individual-taxes',
        title: 'Preparación de Taxes Individuales',
        icon: individualTaxIcon,
        description: 'Preparamos tu declaración de impuestos federal y estatal con precisión y cuidado. Analizamos cada deducción posible para maximizar tu reembolso legalmente. Ya seas empleado, trabajador independiente (1099) o propietario de un pequeño negocio, te ayudamos a cumplir con el IRS sin estrés.',
        benefits: [
          'Preparación de declaración federal y estatal',
          'Identificación de todas las deducciones legales disponibles',
          'Manejo de formularios W-2, 1099, ITIN y más',
          'Maximización legal de tu reembolso',
          'Revisión antes de envío para evitar errores',
          'Apoyo ante preguntas o cartas del IRS',
        ],
        audience: 'Empleados, trabajadores independientes, personas con múltiples fuentes de ingreso, y quienes necesitan ITIN o tienen deudas con el IRS.',
      },
      {
        id: 'corporate-taxes',
        title: 'Preparación de Taxes Corporativos',
        icon: corporateTaxIcon,
        description: 'Ofrecemos preparación completa de impuestos para LLC, S-Corp, C-Corp, partnerships y otros tipos de entidades comerciales. Nuestros especialistas entienden la estructura fiscal de los negocios en Massachusetts y trabajan para minimizar tu carga tributaria dentro del marco legal.',
        benefits: [
          'Declaraciones para LLC, S-Corp, C-Corp y partnerships',
          'Cumplimiento con regulaciones de IRS y estado de MA',
          'Identificación de deducciones empresariales',
          'Conciliación y revisión de estados financieros',
          'Planificación fiscal para el siguiente año',
          'Asesoría en estructura del negocio para beneficios fiscales',
        ],
        audience: 'Dueños de LLC, S-Corp, C-Corp, partnerships y cualquier entidad comercial registrada que necesite cumplir con sus obligaciones fiscales anuales.',
      },
      {
        id: 'bookkeeping',
        title: 'Bookkeeping (Contabilidad)',
        icon: bookkeepingIcon,
        description: 'Mantenemos la contabilidad de tu negocio organizada, actualizada y lista para cualquier revisión. Con nuestro servicio de bookkeeping mensual, sabrás exactamente cómo están tus finanzas, podrás tomar mejores decisiones y estarás preparado para la temporada de taxes sin sorpresas.',
        benefits: [
          'Registro mensual de ingresos y gastos',
          'Conciliación bancaria mensual',
          'Reportes financieros mensuales claros (P&L, balance)',
          'Categorización correcta de transacciones',
          'Preparación de datos para declaración anual de taxes',
          'Integración con QuickBooks o plataformas similares',
        ],
        audience: 'Pequeños y medianos negocios, freelancers, restaurantes, salones, tiendas y cualquier empresa que necesite tener sus finanzas organizadas y al día.',
      },
      {
        id: 'payroll',
        title: 'Payroll (Nómina)',
        icon: payrollIcon,
        description: 'Gestionamos el proceso completo de nómina de tu empresa: cálculo de salarios, deducciones, pagos y cumplimiento de todas las obligaciones fiscales con el IRS y el estado de Massachusetts. Tú te enfocas en tu negocio, nosotros nos encargamos de que tus empleados cobren correctamente y a tiempo.',
        benefits: [
          'Procesamiento semanal, quincenal o mensual de nómina',
          'Cálculo de impuestos de nómina (federal, estatal, FICA)',
          'Emisión de cheques o transferencias directas',
          'Preparación de formularios W-2 y 941',
          'Cumplimiento con regulaciones de Massachusetts',
          'Reporte de nuevos empleados al estado',
        ],
        audience: 'Cualquier empleador con uno o más empleados en Massachusetts que necesite gestionar su nómina de forma correcta, oportuna y en cumplimiento con la ley.',
      },
    ],
  },
  en: {
    heroTag: 'What we offer',
    heroTitle: 'Our Professional Services',
    heroSubtitle: 'Complete solutions for individuals and businesses in Boston, MA. Bilingual service, clear process, real results.',
    requestBtn: 'Request this service',
    includesTitle: "What's included?",
    idealTitle: 'Who is it ideal for?',
    services: [
      {
        id: 'immigration',
        title: 'Immigration Document Consulting & Preparation',
        icon: immigrationIcon,
        description: 'At Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services we offer guidance and document preparation for various immigration administrative processes in an organized, clear and professional manner. Our team accompanies you at every stage of the administrative process, ensuring all your documentation is complete and correctly presented.',
        benefits: [
          'Full review of your current situation and documents',
          'Clear, step-by-step guidance through the process',
          'Organization and preparation of required documentation',
          'Accompaniment throughout the entire process',
          'Communication in Spanish for greater clarity',
          'Absolute confidentiality of your information',
        ],
        audience: 'Immigrants who need guidance with administrative procedures, status updates, document renewals and other immigration processes.',
        note: 'Note: Our services are consulting and document preparation only. We are not immigration attorneys and do not provide legal representation.',
      },
      {
        id: 'individual-taxes',
        title: 'Individual Tax Preparation',
        icon: individualTaxIcon,
        description: 'We prepare your federal and state tax return with precision and care. We analyze every possible deduction to maximize your refund legally. Whether you are an employee, self-employed (1099) or a small business owner, we help you comply with the IRS without stress.',
        benefits: [
          'Federal and state return preparation',
          'Identification of all available legal deductions',
          'Handling of W-2, 1099, ITIN forms and more',
          'Legal maximization of your refund',
          'Review before submission to avoid errors',
          'Support with IRS questions or letters',
        ],
        audience: 'Employees, self-employed workers, people with multiple income sources, and those who need an ITIN or have IRS debts.',
      },
      {
        id: 'corporate-taxes',
        title: 'Corporate Tax Preparation',
        icon: corporateTaxIcon,
        description: 'We offer complete tax preparation for LLCs, S-Corps, C-Corps, partnerships and other types of business entities. Our specialists understand the tax structure of businesses in Massachusetts and work to minimize your tax burden within the legal framework.',
        benefits: [
          'Returns for LLC, S-Corp, C-Corp and partnerships',
          'Compliance with IRS and Massachusetts state regulations',
          'Identification of business deductions',
          'Reconciliation and review of financial statements',
          'Tax planning for the following year',
          'Business structure advice for tax benefits',
        ],
        audience: 'Owners of LLCs, S-Corps, C-Corps, partnerships and any registered business entity that needs to meet its annual tax obligations.',
      },
      {
        id: 'bookkeeping',
        title: 'Bookkeeping (Accounting)',
        icon: bookkeepingIcon,
        description: 'We keep your business accounting organized, up to date and ready for any review. With our monthly bookkeeping service, you will know exactly how your finances are doing, make better decisions and be prepared for tax season without surprises.',
        benefits: [
          'Monthly recording of income and expenses',
          'Monthly bank reconciliation',
          'Clear monthly financial reports (P&L, balance sheet)',
          'Correct categorization of transactions',
          'Data preparation for annual tax return',
          'Integration with QuickBooks or similar platforms',
        ],
        audience: 'Small and medium businesses, freelancers, restaurants, salons, stores and any company that needs to keep its finances organized and up to date.',
      },
      {
        id: 'payroll',
        title: 'Payroll Services',
        icon: payrollIcon,
        description: 'We manage your company\'s complete payroll process: salary calculations, deductions, payments and compliance with all tax obligations with the IRS and the state of Massachusetts. You focus on your business, we make sure your employees are paid correctly and on time.',
        benefits: [
          'Weekly, biweekly or monthly payroll processing',
          'Payroll tax calculation (federal, state, FICA)',
          'Check issuance or direct deposit coordination',
          'Preparation of W-2 and 941 forms',
          'Compliance with Massachusetts regulations',
          'New employee reporting to the state',
        ],
        audience: 'Any employer with one or more employees in Massachusetts who needs to manage their payroll correctly, on time and in compliance with the law.',
      },
    ],
  },
}

export default function ServicesContent() {
  const { lang } = useLanguage()
  const d = data[lang] || data.es

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">{d.heroTag}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">{d.heroTitle}</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">{d.heroSubtitle}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {d.services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid md:grid-cols-5 gap-10 items-start"
            >
              {/* Icon + title column */}
              <div className={`md:col-span-2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="sticky top-28 bg-navy-900 rounded-2xl p-8 text-center shadow-xl">
                  <div className="w-16 h-16 bg-gold-500 rounded-xl flex items-center justify-center mx-auto mb-5 text-white">
                    {service.icon}
                  </div>
                  <h2 className="text-white font-bold text-xl leading-tight mb-4">{service.title}</h2>
                  <a
                    href="tel:6176698210"
                    className="inline-flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm"
                  >
                    {d.requestBtn}
                  </a>
                </div>
              </div>

              {/* Content column */}
              <div className={`md:col-span-3 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <h3 className="font-bold text-navy-900 text-base mb-3">{d.includesTitle}</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-600 text-sm">
                      <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-4">
                  <p className="text-sm font-semibold text-navy-900 mb-1">{d.idealTitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.audience}</p>
                </div>

                {service.note && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs text-amber-800 leading-relaxed">{service.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
