'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const images = [
  'https://images.unsplash.com/photo-1569098644584-210bcd375b59?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
]

const hrefs = [
  '/services#immigration',
  '/services#individual-taxes',
  '/services#corporate-taxes',
  '/services#bookkeeping',
  '/services#payroll',
  '/services#credit',
]

const gradients = [
  'from-blue-900/90','from-navy-900/90','from-slate-900/90',
  'from-emerald-900/90','from-violet-900/90','from-rose-900/90',
]

export default function ServicesSection() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{s.tag}</p>
          <h2 className="section-title">{s.title}</h2>
          <div className="gold-divider mx-auto mt-4 mb-5" />
          <p className="section-subtitle mx-auto max-w-2xl">{s.subtitle}</p>
        </div>

        {/* Featured banner */}
        <div className="mb-6">
          <div className="relative rounded-3xl overflow-hidden h-72 md:h-80 group card-hover shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80"
              alt="Infinity Solutions Services — Atención profesional"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10 md:px-16">
              <div className="max-w-lg">
                <span className="inline-block bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                  {s.featuredBadge}
                </span>
                <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-3">
                  {s.featuredTitle}
                </h3>
                <p className="text-gray-300 text-base mb-5 max-w-md">{s.featuredSubtitle}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                >
                  {s.featuredCta}
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item, i) => (
            <Link
              key={item.title}
              href={hrefs[i]}
              className="group relative rounded-2xl overflow-hidden h-64 shadow-md card-hover block"
            >
              <Image
                src={images[i]}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${gradients[i]} via-black/40 to-transparent`} />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block bg-gold-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3 w-fit">
                  {item.tag}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight mb-2">{item.title}</h3>
                <p className="text-gray-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 mb-3">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-gold-400 text-sm font-semibold">
                  {s.seeMore}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-navy px-8 py-4 text-base">
            {s.viewAll}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
