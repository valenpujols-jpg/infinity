'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const data = {
  es: {
    heroTag: 'Nuestra Historia',
    heroTitle: 'Sobre Infinity Solutions of Roxbury LLC',
    heroSubtitle: 'Nacimos con un propósito claro: brindar servicios profesionales de calidad a la comunidad hispana de Boston, en su idioma y con la confianza que merecen.',
    storyTag: 'Nuestra Historia',
    storyTitle: 'Una empresa nacida para servir a nuestra comunidad',
    storyParagraphs: [
      'Infinity Solutions of Roxbury LLC nació en Boston, Massachusetts, con un objetivo claro: ofrecer servicios financieros, contables y administrativos de la más alta calidad a la comunidad latina e hispana de Nueva Inglaterra.',
      'Entendemos de primera mano los retos que enfrentan los inmigrantes y emprendedores en este país: barreras de idioma, sistemas complejos, y la necesidad de encontrar alguien de confianza que los guíe sin complicaciones ni sorpresas.',
      'Por eso construimos una empresa donde el cliente siempre es lo primero. Un lugar donde puedes llegar con tus dudas, tus documentos y tus metas, y salir con claridad, tranquilidad y respuestas reales.',
      'Hoy atendemos a cientos de familias y negocios en Boston y sus alrededores, y seguimos creciendo porque nuestros clientes confían en nosotros y nos recomiendan. Eso es lo que más nos enorgullece.',
    ],
    stats: [
      { number: '500+', label: 'Clientes Atendidos' },
      { number: '6+', label: 'Servicios Especializados' },
      { number: '100%', label: 'Atención en Español' },
      { number: 'Boston', label: 'Corazón de la Comunidad' },
    ],
    missionTitle: 'Nuestra Misión',
    missionBody: 'Brindar servicios financieros, contables, migratorios y de crédito de la más alta calidad a individuos y empresas, especialmente a la comunidad hispana en Boston, MA. Nos comprometemos a ofrecer atención personalizada, clara y confiable, eliminando barreras y acompañando a nuestros clientes hacia su bienestar y estabilidad.',
    visionTitle: 'Nuestra Visión',
    visionBody: 'Convertirnos en la empresa de servicios de referencia para la comunidad latina del noreste de Estados Unidos. Ser reconocidos por nuestra excelencia, confiabilidad y el impacto positivo que generamos en las familias y negocios que atendemos.',
    valuesTag: 'Lo que nos define',
    valuesTitle: 'Nuestros Valores',
    values: [
      { title: 'Integridad', description: 'Actuamos con honestidad y transparencia en cada servicio que brindamos.' },
      { title: 'Profesionalismo', description: 'Mantenemos los más altos estándares de calidad en cada trámite o declaración.' },
      { title: 'Compromiso', description: 'No descansamos hasta que tu proceso esté completamente resuelto.' },
      { title: 'Confianza', description: 'Tu información está protegida y manejada con absoluta confidencialidad.' },
      { title: 'Cercanía', description: 'Hablamos tu idioma y entendemos tu cultura. Aquí eres parte de la familia.' },
      { title: 'Resultados', description: 'Nos enfocamos en lograr los mejores resultados posibles para cada cliente.' },
    ],
  },
  en: {
    heroTag: 'Our Story',
    heroTitle: 'About Infinity Solutions of Roxbury LLC',
    heroSubtitle: 'We were born with a clear purpose: to provide quality professional services to the Hispanic community in Boston, in their language and with the trust they deserve.',
    storyTag: 'Our Story',
    storyTitle: 'A company born to serve our community',
    storyParagraphs: [
      'Infinity Solutions of Roxbury LLC was founded in Boston, Massachusetts, with one clear goal: to provide the highest-quality financial, accounting, and administrative services to the Latino and Hispanic community of New England.',
      'We understand firsthand the challenges immigrants and entrepreneurs face in this country: language barriers, complex systems, and the need to find someone trustworthy who will guide them without complications or surprises.',
      'That is why we built a company where the client always comes first. A place where you can come with your questions, your documents, and your goals — and leave with clarity, peace of mind, and real answers.',
      'Today we serve hundreds of families and businesses in Boston and the surrounding area, and we continue to grow because our clients trust us and refer us to others. That is what we are most proud of.',
    ],
    stats: [
      { number: '500+', label: 'Clients Served' },
      { number: '6+', label: 'Specialized Services' },
      { number: '100%', label: 'Bilingual Service' },
      { number: 'Boston', label: 'Heart of the Community' },
    ],
    missionTitle: 'Our Mission',
    missionBody: 'To provide the highest-quality financial, accounting, immigration, and credit services to individuals and businesses, especially the Hispanic community in Boston, MA. We are committed to offering personalized, clear, and reliable service, eliminating barriers and accompanying our clients toward their well-being and stability.',
    visionTitle: 'Our Vision',
    visionBody: 'To become the reference service company for the Latino community in the northeastern United States. To be recognized for our excellence, reliability, and the positive impact we generate in the families and businesses we serve.',
    valuesTag: 'What defines us',
    valuesTitle: 'Our Values',
    values: [
      { title: 'Integrity', description: 'We act with honesty and transparency in every service we provide.' },
      { title: 'Professionalism', description: 'We maintain the highest quality standards in every process and filing.' },
      { title: 'Commitment', description: 'We do not stop until your process is completely resolved.' },
      { title: 'Trust', description: 'Your information is protected and handled with absolute confidentiality.' },
      { title: 'Personal Touch', description: 'We speak your language and understand your culture. Here you are family.' },
      { title: 'Results', description: 'We focus on achieving the best possible outcomes for every client.' },
    ],
  },
}

export default function AboutContent() {
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

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{d.storyTag}</p>
              <h2 className="section-title">{d.storyTitle}</h2>
              <div className="gold-divider mt-4 mb-6" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {d.storyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {d.stats.map((stat) => (
                <div key={stat.label} className="bg-navy-900 rounded-2xl p-7 text-center shadow-lg">
                  <p className="text-gold-400 font-bold text-4xl mb-2">{stat.number}</p>
                  <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-gold-400 stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{d.missionTitle}</h3>
              <div className="gold-divider mb-5" />
              <p className="text-gray-600 leading-relaxed">{d.missionBody}</p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-white stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{d.visionTitle}</h3>
              <div className="gold-divider mb-5" />
              <p className="text-gray-600 leading-relaxed">{d.visionBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{d.valuesTag}</p>
            <h2 className="section-title">{d.valuesTitle}</h2>
            <div className="gold-divider mx-auto mt-4 mb-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.values.map((v) => (
              <div key={v.title} className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-navy-50 transition-colors">
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
    </>
  )
}
