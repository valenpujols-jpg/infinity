'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LegalHero({ titleEs, titleEn, dateEs = 'Última actualización: Abril 2025', dateEn = 'Last updated: April 2025' }) {
  const { lang } = useLanguage()

  return (
    <section className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-30" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-white mb-3">
          {lang === 'en' ? titleEn : titleEs}
        </h1>
        <p className="text-gray-300 text-sm">
          {lang === 'en' ? dateEn : dateEs}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </section>
  )
}
