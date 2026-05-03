'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import CTA from '@/components/CTA'
import { useLanguage } from '@/contexts/LanguageContext'

const faqData = {
  es: {
    heroTag: 'Preguntas frecuentes',
    heroTitle: 'Resolvemos Tus Dudas',
    heroSubtitle: 'Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios. Si no encuentras lo que buscas, contáctanos directamente.',
    moreTitle: '¿Tienes más preguntas?',
    moreSubtitle: 'Nuestro equipo está listo para responder cualquier duda que tengas. Contáctanos por cualquiera de estos medios:',
    callBtn: 'Llamar: 617-669-8210',
    whatsappMsg: 'Hola, tengo una pregunta sobre sus servicios.',
    categories: [
      {
        category: 'Taxes',
        questions: [
          { q: '¿Qué documentos necesito para preparar mis taxes individuales?', a: 'Para declarar tus impuestos personales generalmente necesitas: formulario W-2 (si eres empleado), formularios 1099 (si eres trabajador independiente o recibiste otros ingresos), tu número de Seguro Social o ITIN, información bancaria, comprobantes de gastos deducibles como educación, salud, donaciones, y cualquier carta del IRS que hayas recibido. Te ayudamos a identificar exactamente qué necesitas según tu situación.' },
          { q: '¿Qué es el ITIN y quién lo necesita?', a: 'El ITIN (Individual Taxpayer Identification Number) es un número de identificación fiscal emitido por el IRS para personas que no tienen Seguro Social pero necesitan declarar impuestos. Es común entre inmigrantes que trabajan o tienen ingresos en Estados Unidos. En Infinity Solutions te ayudamos a obtener o renovar tu ITIN.' },
          { q: '¿Cuánto tiempo tarda en procesarse mi declaración?', a: 'Las declaraciones electrónicas suelen procesarse en 21 días o menos si no hay errores. El reembolso puede llegar antes si optas por depósito directo en tu cuenta bancaria. Las declaraciones en papel pueden tardar más. Te mantenemos informado durante todo el proceso.' },
          { q: '¿Qué pasa si debo dinero al IRS de años anteriores?', a: 'Si tienes deudas con el IRS, existen opciones como planes de pago, acuerdos de oferta en compromiso (Offer in Compromise) u otras alternativas. Lo importante es no ignorar el problema, ya que las penalidades crecen con el tiempo. Contáctanos para evaluar tu situación y encontrar la mejor solución.' },
          { q: '¿Preparan taxes para negocios LLC y corporaciones?', a: 'Sí, preparamos declaraciones de impuestos para LLC de un solo miembro, LLC de múltiples miembros, S-Corp, C-Corp, partnerships y otras entidades. Cada estructura tiene diferentes formularios y requisitos, y nuestro equipo está capacitado para manejar todos.' },
        ],
      },
      {
        category: 'Bookkeeping y Payroll',
        questions: [
          { q: '¿Qué incluye exactamente el servicio de Bookkeeping?', a: 'Nuestro servicio de bookkeeping incluye: registro mensual de todos tus ingresos y gastos, conciliación bancaria, categorización de transacciones, preparación de estados financieros (Profit & Loss, Balance Sheet), y organización de tu información para la declaración anual de taxes. Puedes recibirlo de forma mensual o trimestral.' },
          { q: '¿Necesito QuickBooks para el servicio de Bookkeeping?', a: 'No es obligatorio, pero podemos trabajar con QuickBooks si ya lo tienes. También podemos manejar tu contabilidad con otras herramientas o incluso con estados de cuenta y recibos físicos. Nos adaptamos a tu situación actual.' },
          { q: '¿Qué incluye el servicio de Payroll?', a: 'Nuestro servicio de payroll incluye: cálculo de salarios brutos y netos, retención y cálculo de impuestos federales y estatales, emisión de cheques o coordinación de depósito directo, presentación de formularios 941 trimestrales, preparación de W-2 anuales, y reporte de nuevos empleados al estado de Massachusetts.' },
          { q: '¿Cada cuánto tiempo procesan el payroll?', a: 'Ofrecemos procesamiento de nómina semanal, quincenal o mensual según las necesidades de tu negocio. Coordinamos directamente con el calendario que mejor funcione para ti y tus empleados.' },
        ],
      },
      {
        category: 'Trámites y Consultas',
        questions: [
          { q: '¿Cómo inicio el proceso para cualquier servicio?', a: 'Es muy sencillo. Solo contáctanos por teléfono, WhatsApp, email o completa nuestro formulario en línea. Te agendaremos una consulta inicial para evaluar tu caso, explicarte el proceso completo y darte un presupuesto claro sin compromiso.' },
          { q: '¿Atienden clientes fuera de Boston?', a: 'Sí, aunque estamos basados en Boston, MA, podemos atender a clientes de otras ciudades de forma remota. Muchos de nuestros servicios como taxes, bookkeeping y payroll se pueden manejar completamente de forma virtual.' },
          { q: '¿Qué tipo de apoyo brindan en trámites migratorios?', a: 'Ofrecemos orientación y preparación de documentos para diversos trámites migratorios administrativos. Es importante aclarar que somos consultores de documentación y no somos abogados de inmigración. Si tu caso requiere representación legal, te referiremos a un abogado de inmigración calificado.' },
          { q: '¿Mis datos personales están seguros con ustedes?', a: 'Absolutamente. La confidencialidad de tu información es una prioridad máxima para nosotros. Manejamos todos los datos bajo estrictas medidas de seguridad y nunca compartimos tu información con terceros sin tu consentimiento expreso.' },
        ],
      },
    ],
  },
  en: {
    heroTag: 'Frequently Asked Questions',
    heroTitle: 'We Answer Your Questions',
    heroSubtitle: "Here you'll find answers to the most common questions about our services. If you don't find what you're looking for, contact us directly.",
    moreTitle: 'Still have questions?',
    moreSubtitle: 'Our team is ready to answer any questions you have. Contact us through any of these channels:',
    callBtn: 'Call: 617-669-8210',
    whatsappMsg: 'Hello, I have a question about your services.',
    categories: [
      {
        category: 'Taxes',
        questions: [
          { q: 'What documents do I need to prepare my individual tax return?', a: 'To file your personal taxes you generally need: Form W-2 (if you are an employee), 1099 forms (if you are self-employed or received other income), your Social Security number or ITIN, bank information, proof of deductible expenses such as education, health, donations, and any IRS letters you have received. We help you identify exactly what you need based on your situation.' },
          { q: 'What is an ITIN and who needs one?', a: 'An ITIN (Individual Taxpayer Identification Number) is a tax identification number issued by the IRS for people who do not have a Social Security number but need to file taxes. It is common among immigrants who work or have income in the United States. At Infinity Solutions we help you obtain or renew your ITIN.' },
          { q: 'How long does it take to process my tax return?', a: 'Electronic returns are usually processed within 21 days or less if there are no errors. The refund may arrive sooner if you choose direct deposit to your bank account. Paper returns may take longer. We keep you informed throughout the entire process.' },
          { q: 'What happens if I owe money to the IRS from previous years?', a: 'If you have debts with the IRS, there are options such as payment plans, Offer in Compromise agreements or other alternatives. The important thing is not to ignore the problem, as penalties grow over time. Contact us to evaluate your situation and find the best solution.' },
          { q: 'Do you prepare taxes for LLC businesses and corporations?', a: 'Yes, we prepare tax returns for single-member LLCs, multi-member LLCs, S-Corps, C-Corps, partnerships and other entities. Each structure has different forms and requirements, and our team is trained to handle them all.' },
        ],
      },
      {
        category: 'Bookkeeping & Payroll',
        questions: [
          { q: 'What exactly does the Bookkeeping service include?', a: 'Our bookkeeping service includes: monthly recording of all your income and expenses, bank reconciliation, transaction categorization, preparation of financial statements (Profit & Loss, Balance Sheet), and organization of your information for the annual tax return. You can receive it monthly or quarterly.' },
          { q: 'Do I need QuickBooks for the Bookkeeping service?', a: "It is not required, but we can work with QuickBooks if you already have it. We can also manage your accounting with other tools or even with bank statements and physical receipts. We adapt to your current situation." },
          { q: 'What does the Payroll service include?', a: 'Our payroll service includes: gross and net salary calculation, federal and state tax withholding and calculation, check issuance or direct deposit coordination, filing of quarterly 941 forms, preparation of annual W-2s, and new employee reporting to the state of Massachusetts.' },
          { q: 'How often do you process payroll?', a: 'We offer weekly, biweekly or monthly payroll processing according to your business needs. We coordinate directly with the schedule that works best for you and your employees.' },
        ],
      },
      {
        category: 'Processes & Inquiries',
        questions: [
          { q: 'How do I start the process for any service?', a: 'It is very simple. Just contact us by phone, WhatsApp, email or complete our online form. We will schedule an initial consultation to evaluate your case, explain the complete process and give you a clear quote with no commitment.' },
          { q: 'Do you serve clients outside of Boston?', a: 'Yes, although we are based in Boston, MA, we can serve clients from other cities remotely. Many of our services such as taxes, bookkeeping and payroll can be handled completely virtually.' },
          { q: 'What kind of support do you provide for immigration matters?', a: 'We offer guidance and document preparation for various administrative immigration processes. It is important to clarify that we are documentation consultants and we are not immigration attorneys. If your case requires legal representation, we will refer you to a qualified immigration attorney.' },
          { q: 'Is my personal data safe with you?', a: 'Absolutely. The confidentiality of your information is a top priority for us. We handle all data under strict security measures and never share your information with third parties without your express consent.' },
        ],
      },
    ],
  },
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-navy-900 text-sm leading-snug">{question}</span>
        {open ? (
          <ChevronUp size={18} className="text-gold-500 shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <div className="h-px bg-gray-100 mb-4" />
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FaqContent() {
  const { lang } = useLanguage()
  const d = faqData[lang] || faqData.es

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

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {d.categories.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-navy-900 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">?</span>
                </span>
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((faq) => (
                  <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">{d.moreTitle}</h2>
          <p className="text-gray-600 mb-7">{d.moreSubtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:6176698210" className="btn-navy px-7 py-3">{d.callBtn}</a>
            <a
              href={`https://wa.me/16176698210?text=${encodeURIComponent(d.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-navy px-7 py-3"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
