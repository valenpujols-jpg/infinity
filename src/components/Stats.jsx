'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Stats() {
  const { t } = useLanguage()

  return (
    <section className="py-14 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {t.stats.map((stat) => (
            <div key={stat.label} className="bg-navy-900 px-8 py-10 text-center hover:bg-navy-800 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-bold text-gold-400 mb-2 leading-none">{stat.number}</p>
              <p className="text-white font-bold text-sm mb-1">{stat.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
