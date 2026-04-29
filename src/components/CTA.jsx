'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()
  const c = t.cta

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
            alt="Oficina profesional"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/97 via-navy-900/95 to-navy-800/90" />
          <div className="absolute inset-0 hero-pattern opacity-20" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold-500/15 rounded-full blur-3xl" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">{c.tag}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {c.title1}{' '}
              <span className="text-gold-400">{c.accent}</span>{' '}
              {c.title2}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">{c.subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-bold px-9 py-4 rounded-xl transition-all duration-200 text-base shadow-xl shadow-gold-500/25 hover:-translate-y-0.5"
              >
                {c.btn1}
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:6176698210"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-9 py-4 rounded-xl transition-all duration-200 text-base hover:bg-white/10"
              >
                <Phone size={18} />
                {c.btn2}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a href="mailto:info@infinityssinc.com" className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors">
                <Mail size={15} />info@infinityssinc.com
              </a>
              <span className="hidden sm:block w-px h-4 bg-gray-600" />
              <a
                href="https://www.instagram.com/infinityss.inc"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                @infinityss.inc
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
