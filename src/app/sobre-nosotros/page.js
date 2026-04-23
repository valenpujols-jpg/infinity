import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Sobre Nosotros',
  description:
    'Conoce la historia, misión, visión y valores de Infinity Solutions Services Inc. Una empresa comprometida con la comunidad hispana en Boston, MA.',
}

const values = [
  {
    title: 'Integridad',
    description: 'Actuamos con honestidad y transparencia en cada servicio que brindamos.',
  },
  {
    title: 'Profesionalismo',
    description: 'Mantenemos los más altos estándares de calidad en cada trámite o declaración.',
  },
  {
    title: 'Compromiso',
    description: 'No descansamos hasta que tu proceso esté completamente resuelto.',
  },
  {
    title: 'Confianza',
    description: 'Tu información está protegida y manejada con absoluta confidencialidad.',
  },
  {
    title: 'Cercanía',
    description: 'Hablamos tu idioma y entendemos tu cultura. Aquí eres parte de la familia.',
  },
  {
    title: 'Resultados',
    description: 'Nos enfocamos en lograr los mejores resultados posibles para cada cliente.',
  },
]

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestra Historia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Sobre Infinity Solutions Services Inc
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Nacimos con un propósito claro: brindar servicios profesionales de calidad a la
            comunidad hispana de Boston, en su idioma y con la confianza que merecen.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">
                Nuestra Historia
              </p>
              <h2 className="section-title">Una empresa nacida para servir a nuestra comunidad</h2>
              <div className="gold-divider mt-4 mb-6" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Infinity Solutions Services Inc nació en Boston, Massachusetts, con un objetivo claro:
                  ofrecer servicios financieros, contables y administrativos de la más alta calidad a
                  la comunidad latina e hispana de Nueva Inglaterra.
                </p>
                <p>
                  Entendemos de primera mano los retos que enfrentan los inmigrantes y emprendedores
                  en este país: barreras de idioma, sistemas complejos, y la necesidad de encontrar
                  alguien de confianza que los guíe sin complicaciones ni sorpresas.
                </p>
                <p>
                  Por eso construimos una empresa donde el cliente siempre es lo primero. Un lugar
                  donde puedes llegar con tus dudas, tus documentos y tus metas, y salir con
                  claridad, tranquilidad y respuestas reales.
                </p>
                <p>
                  Hoy atendemos a cientos de familias y negocios en Boston y sus alrededores, y
                  seguimos creciendo porque nuestros clientes confían en nosotros y nos recomiendan.
                  Eso es lo que más nos enorgullece.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '500+', label: 'Clientes Atendidos' },
                { number: '6+', label: 'Servicios Especializados' },
                { number: '100%', label: 'Atención en Español' },
                { number: 'Boston', label: 'Corazón de la Comunidad' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy-900 rounded-2xl p-7 text-center shadow-lg"
                >
                  <p className="text-gold-400 font-bold text-4xl mb-2">{stat.number}</p>
                  <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-gold-400 stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Nuestra Misión</h3>
              <div className="gold-divider mb-5" />
              <p className="text-gray-600 leading-relaxed">
                Brindar servicios financieros, contables, migratorios y de crédito de la más alta
                calidad a individuos y empresas, especialmente a la comunidad hispana en Boston, MA.
                Nos comprometemos a ofrecer atención personalizada, clara y confiable, eliminando
                barreras y acompañando a nuestros clientes hacia su bienestar y estabilidad.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-white stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Nuestra Visión</h3>
              <div className="gold-divider mb-5" />
              <p className="text-gray-600 leading-relaxed">
                Convertirnos en la empresa de servicios de referencia para la comunidad latina del
                noreste de Estados Unidos. Ser reconocidos por nuestra excelencia, confiabilidad y
                el impacto positivo que generamos en las familias y negocios que atendemos,
                expandiendo nuestros servicios para responder a las necesidades crecientes de
                nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Lo que nos define
            </p>
            <h2 className="section-title">Nuestros Valores</h2>
            <div className="gold-divider mx-auto mt-4 mb-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-navy-50 transition-colors"
              >
                <CheckCircle size={24} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
