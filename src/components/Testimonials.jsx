'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const avatars = [
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-gold-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLanguage()
  const r = t.testimonials

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">{r.tag}</p>
          <h2 className="section-title">{r.title}</h2>
          <div className="gold-divider mx-auto mt-4 mb-5" />
          <p className="section-subtitle max-w-2xl mx-auto">{r.subtitle}</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-52 mb-12 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80"
            alt="Comunidad hispana Boston"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-2">{r.bannerTag}</p>
            <h3 className="text-white text-2xl md:text-3xl font-bold">{r.bannerTitle}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {r.items.map((testimonial, i) => (
            <div key={testimonial.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-200 shrink-0">
                  <Image src={avatars[i]} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-navy-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  <div className="mt-1"><Stars /></div>
                </div>
              </div>
              <div className="relative">
                <svg className="w-8 h-8 text-gold-100 absolute -top-1 -left-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 text-sm leading-relaxed pl-6 italic">{testimonial.text}</p>
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <span className="text-xs font-semibold text-gold-600 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
