'use client'

import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { useLanguage } from '@/contexts/LanguageContext'

const data = {
  es: {
    heroTag: 'Estamos aquí para ti',
    heroTitle: 'Contáctanos Hoy',
    heroSubtitle: 'Llámanos, escríbenos por WhatsApp, email o completa el formulario. Te respondemos rápidamente y sin compromiso.',
    phoneLabel: 'Llámanos',
    phoneSubtitle: 'Llamada directa o WhatsApp',
    emailSubtitle: 'Respondemos en menos de 24 horas',
    addressLabel: 'Dirección',
    mapsLink: 'Ver en Google Maps →',
    hoursLabel: 'Horario',
    days: ['Lunes – Viernes', 'Sábado', 'Domingo'],
    hours: ['9:00 AM – 6:00 PM', '10:00 AM – 3:00 PM', 'Cerrado'],
    closedStyle: [false, false, true],
    instagramLabel: 'Síguenos en Instagram',
    mapTitle: 'Infinity Solutions of Roxbury LLC - Ubicación',
    mapFooter: 'Abrir en Google Maps',
  },
  en: {
    heroTag: "We're here for you",
    heroTitle: 'Contact Us Today',
    heroSubtitle: 'Call us, message us on WhatsApp, email or complete the form. We respond quickly and with no commitment.',
    phoneLabel: 'Call Us',
    phoneSubtitle: 'Direct call or WhatsApp',
    emailSubtitle: 'We respond within 24 hours',
    addressLabel: 'Address',
    mapsLink: 'View on Google Maps →',
    hoursLabel: 'Business Hours',
    days: ['Monday – Friday', 'Saturday', 'Sunday'],
    hours: ['9:00 AM – 6:00 PM', '10:00 AM – 3:00 PM', 'Closed'],
    closedStyle: [false, false, true],
    instagramLabel: 'Follow us on Instagram',
    mapTitle: 'Infinity Solutions of Roxbury LLC - Location',
    mapFooter: 'Open in Google Maps',
  },
}

export default function ContactContent() {
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

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="bg-navy-900 rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={20} className="text-gold-400" />
                  <h3 className="font-bold text-lg">{d.phoneLabel}</h3>
                </div>
                <a
                  href="tel:6176698210"
                  className="text-2xl font-bold text-gold-400 hover:text-gold-300 transition-colors block mb-2"
                >
                  617-669-8210
                </a>
                <p className="text-gray-400 text-sm">{d.phoneSubtitle}</p>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={20} className="text-navy-700" />
                  <h3 className="font-bold text-navy-900 text-lg">Email</h3>
                </div>
                <a
                  href="mailto:info@infinityssinc.com"
                  className="text-gold-600 font-semibold hover:text-gold-700 transition-colors break-all"
                >
                  info@infinityssinc.com
                </a>
                <p className="text-gray-500 text-sm mt-1">{d.emailSubtitle}</p>
              </div>

              {/* Address */}
              <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} className="text-navy-700" />
                  <h3 className="font-bold text-navy-900 text-lg">{d.addressLabel}</h3>
                </div>
                <p className="text-gray-700 font-medium">1 West Cottage Street</p>
                <p className="text-gray-600">Roxbury, MA 02119</p>
                <a
                  href="https://maps.google.com/?q=1+West+Cottage+Street,+Roxbury,+MA+02119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-gold-600 font-semibold hover:text-gold-700 transition-colors"
                >
                  {d.mapsLink}
                </a>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={20} className="text-navy-700" />
                  <h3 className="font-bold text-navy-900 text-lg">{d.hoursLabel}</h3>
                </div>
                <div className="space-y-1.5 text-sm">
                  {d.days.map((day, i) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-gray-600">{day}</span>
                      <span className={d.closedStyle[i] ? 'text-gray-400' : 'font-semibold text-navy-900'}>
                        {d.hours[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <a
                href="https://www.instagram.com/infinityss.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-2xl p-5 transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <Instagram size={24} />
                <div>
                  <p className="font-bold">{d.instagramLabel}</p>
                  <p className="text-purple-200 text-sm">@infinityss.inc</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 h-72">
            <iframe
              title={d.mapTitle}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=1+West+Cottage+Street+Roxbury+MA+02119&output=embed"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            1 West Cottage Street, Roxbury, MA 02119 —{' '}
            <a
              href="https://maps.google.com/?q=1+West+Cottage+Street,+Roxbury,+MA+02119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-600 hover:underline"
            >
              {d.mapFooter}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
