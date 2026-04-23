'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Process() {
  const { t } = useLanguage()
  const p = t.process

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">{p.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{p.title}</h2>
          <div className="gold-divider mx-auto mt-4 mb-5" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">{p.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {p.steps.map((step, i) => (
            <div key={step.title} className="relative">
              {i < p.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-0.5 bg-gold-500/30 z-0" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center mb-5 shadow-lg shadow-gold-500/20">
                  <span className="text-white font-bold text-lg">0{i + 1}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="tel:6176698210"
            className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-lg shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            {p.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
