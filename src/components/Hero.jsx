'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle, Shield, Award, Users } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Boston professional office"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/80" />
      </div>
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              ★ {h.topBadge}
            </div>

            <div className="mb-6">
              <Image
                src="/images/logo-transparente.png"
                alt="Infinity Solutions of Roxbury LLC"
                width={240}
                height={78}
                className="h-16 w-auto object-contain"
                priority
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              {h.headline1}{' '}
              <span className="relative inline-block">
                <span className="text-gold-400">{h.headlineAccent}</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-400/50 rounded-full" />
              </span>{' '}
              {h.headline2}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              {h.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-xl shadow-gold-500/20 hover:-translate-y-0.5"
              >
                {h.cta1}
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:6176698210"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base backdrop-blur-sm hover:bg-white/10"
              >
                <Phone size={18} />
                {h.cta2}: 617-669-8210
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, label: h.badge1 },
                { icon: Award,  label: h.badge2 },
                { icon: Users,  label: h.badge3 },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 text-white/80 text-xs px-4 py-2 rounded-full">
                  <Icon size={13} className="text-gold-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 h-80">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                alt="Servicio profesional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{h.floatingTitle}</p>
                  <p className="text-gray-300 text-xs">{h.floatingDesc}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { n: '500+', l: h.stat1 },
                { n: '6',    l: h.stat2 },
                { n: '100%', l: h.stat3 },
              ].map((s) => (
                <div key={s.l} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-4 text-center">
                  <p className="text-gold-400 font-bold text-2xl">{s.n}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-14 fill-white">
          <path d="M0,80 L0,50 Q360,0 720,50 Q1080,100 1440,50 L1440,80 Z" />
        </svg>
      </div>
    </section>
  )
}
