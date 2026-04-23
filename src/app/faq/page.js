'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import CTA from '@/components/CTA'

const faqs = [
  {
    category: 'Taxes',
    questions: [
      {
        q: '¿Qué documentos necesito para preparar mis taxes individuales?',
        a: 'Para declarar tus impuestos personales generalmente necesitas: formulario W-2 (si eres empleado), formularios 1099 (si eres trabajador independiente o recibiste otros ingresos), tu número de Seguro Social o ITIN, información bancaria, comprobantes de gastos deducibles como educación, salud, donaciones, y cualquier carta del IRS que hayas recibido. Te ayudamos a identificar exactamente qué necesitas según tu situación.',
      },
      {
        q: '¿Qué es el ITIN y quién lo necesita?',
        a: 'El ITIN (Individual Taxpayer Identification Number) es un número de identificación fiscal emitido por el IRS para personas que no tienen Seguro Social pero necesitan declarar impuestos. Es común entre inmigrantes que trabajan o tienen ingresos en Estados Unidos. En Infinity Solutions te ayudamos a obtener o renovar tu ITIN.',
      },
      {
        q: '¿Cuánto tiempo tarda en procesarse mi declaración?',
        a: 'Las declaraciones electrónicas suelen procesarse en 21 días o menos si no hay errores. El reembolso puede llegar antes si optas por depósito directo en tu cuenta bancaria. Las declaraciones en papel pueden tardar más. Te mantenemos informado durante todo el proceso.',
      },
      {
        q: '¿Qué pasa si debo dinero al IRS de años anteriores?',
        a: 'Si tienes deudas con el IRS, existen opciones como planes de pago, acuerdos de oferta en compromiso (Offer in Compromise) u otras alternativas. Lo importante es no ignorar el problema, ya que las penalidades crecen con el tiempo. Contáctanos para evaluar tu situación y encontrar la mejor solución.',
      },
      {
        q: '¿Preparan taxes para negocios LLC y corporaciones?',
        a: 'Sí, preparamos declaraciones de impuestos para LLC de un solo miembro, LLC de múltiples miembros, S-Corp, C-Corp, partnerships y otras entidades. Cada estructura tiene diferentes formularios y requisitos, y nuestro equipo está capacitado para manejar todos.',
      },
    ],
  },
  {
    category: 'Bookkeeping y Payroll',
    questions: [
      {
        q: '¿Qué incluye exactamente el servicio de Bookkeeping?',
        a: 'Nuestro servicio de bookkeeping incluye: registro mensual de todos tus ingresos y gastos, conciliación bancaria y de tarjetas de crédito, categorización de transacciones, preparación de estados financieros (Profit & Loss, Balance Sheet), y organización de tu información para la declaración anual de taxes. Puedes recibirlo de forma mensual o trimestral.',
      },
      {
        q: '¿Necesito QuickBooks para el servicio de Bookkeeping?',
        a: 'No es obligatorio, pero podemos trabajar con QuickBooks si ya lo tienes. También podemos manejar tu contabilidad con otras herramientas o incluso con estados de cuenta y recibos físicos. Nos adaptamos a tu situación actual.',
      },
      {
        q: '¿Qué incluye el servicio de Payroll?',
        a: 'Nuestro servicio de payroll incluye: cálculo de salarios brutos y netos, retención y cálculo de impuestos federales y estatales, emisión de cheques o coordinación de depósito directo, presentación de formularios 941 trimestrales, preparación de W-2 anuales, y reporte de nuevos empleados al estado de Massachusetts.',
      },
      {
        q: '¿Cada cuánto tiempo procesan el payroll?',
        a: 'Ofrecemos procesamiento de nómina semanal, quincenal o mensual según las necesidades de tu negocio. Coordinamos directamente con el calendario que mejor funcione para ti y tus empleados.',
      },
    ],
  },
  {
    category: 'Reparación de Crédito',
    questions: [
      {
        q: '¿Cómo funciona el servicio de reparación de crédito?',
        a: 'El proceso comienza con una revisión de tu historial crediticio en los tres bureaus principales: Equifax, Experian y TransUnion. Identificamos errores, ítems negativos o no verificables y procedemos con disputas formales cuando corresponde. También te orientamos sobre estrategias para mejorar tu score a corto y largo plazo.',
      },
      {
        q: '¿Cuánto tiempo tarda en mejorar mi crédito?',
        a: 'Los resultados varían según el estado actual de tu historial. Algunos clientes ven mejoras en 30-60 días si hay errores que se pueden disputar. Para mejoras más significativas o historial con deudas serias, el proceso puede tomar varios meses. Lo que sí garantizamos es un plan claro y seguimiento constante.',
      },
      {
        q: '¿Pueden eliminar información negativa correcta de mi crédito?',
        a: 'No, información negativa que es correcta y verificable no puede eliminarse permanentemente. Lo que sí podemos hacer es disputar ítems que son incorrectos, desactualizados o no verificables. También te orientamos para construir historial positivo que compense los negativos con el tiempo.',
      },
    ],
  },
  {
    category: 'Trámites y Consultas',
    questions: [
      {
        q: '¿Cómo inicio el proceso para cualquier servicio?',
        a: 'Es muy sencillo. Solo contáctanos por teléfono, WhatsApp, email o completa nuestro formulario en línea. Te agendaremos una consulta inicial para evaluar tu caso, explicarte el proceso completo y darte un presupuesto claro sin compromiso.',
      },
      {
        q: '¿Atienden clientes fuera de Boston?',
        a: 'Sí, aunque estamos basados en Boston, MA, podemos atender a clientes de otras ciudades de forma remota. Muchos de nuestros servicios como taxes, bookkeeping, payroll y reparación de crédito se pueden manejar completamente de forma virtual.',
      },
      {
        q: '¿Qué tipo de apoyo brindan en trámites migratorios?',
        a: 'Ofrecemos orientación y preparación de documentos para diversos trámites migratorios administrativos. Es importante aclarar que somos consultores de documentación y no somos abogados de inmigración. Si tu caso requiere representación legal, te referiremos a un abogado de inmigración calificado.',
      },
      {
        q: '¿Mis datos personales están seguros con ustedes?',
        a: 'Absolutamente. La confidencialidad de tu información es una prioridad máxima para nosotros. Manejamos todos los datos bajo estrictas medidas de seguridad y nunca compartimos tu información con terceros sin tu consentimiento expreso.',
      },
    ],
  },
]

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

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Preguntas frecuentes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Resolvemos Tus Dudas
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios.
            Si no encuentras lo que buscas, contáctanos directamente.
          </p>
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
          {faqs.map((section) => (
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
          <h2 className="text-2xl font-bold text-navy-900 mb-3">¿Tienes más preguntas?</h2>
          <p className="text-gray-600 mb-7">
            Nuestro equipo está listo para responder cualquier duda que tengas. Contáctanos por
            cualquiera de estos medios:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:6176698210" className="btn-navy px-7 py-3">
              Llamar: 617-669-8210
            </a>
            <a
              href={`https://wa.me/16176698210?text=${encodeURIComponent('Hola, tengo una pregunta sobre sus servicios.')}`}
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
