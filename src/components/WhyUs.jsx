'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WhyUs() {
  const { t } = useLanguage()
  const w = t.whyUs

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Equipo profesional Infinity Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-100 max-w-[220px]">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-navy-900 text-sm">{w.floatingTitle}</p>
                <p className="text-gray-500 text-xs">{w.floatingDesc}</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-navy-900 rounded-2xl shadow-xl p-5 border border-navy-700 max-w-[230px]">
              <div className="flex items-center gap-0.5 mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-gold-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>
              <p className="text-white font-bold text-sm">&ldquo;{w.quote}&rdquo;</p>
              <p className="text-gray-400 text-xs mt-1">{w.quoteAuthor}</p>
            </div>

            <div className="absolute -z-10 top-8 left-8 w-full h-full border-2 border-gold-200 rounded-3xl" />
          </div>

          {/* Content side */}
          <div>
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{w.tag}</p>
            <h2 className="section-title">{w.title}</h2>
            <div className="gold-divider mt-4 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-8">{w.body}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {w.benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <CheckCircle size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-navy-900 text-sm">{b.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:6176698210" className="btn-navy px-6 py-3.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                {w.callNow}
              </a>
              <a
                href={`https://wa.me/16176698210?text=${encodeURIComponent('Hola, quiero información sobre sus servicios.')}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline-navy px-6 py-3.5"
              >
                {w.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
