'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-gray-300">
      {/* Top bar */}
      <div className="bg-gold-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-navy-900 font-semibold text-sm text-center">{f.ctaStrip}</p>
          <a href="tel:6176698210" className="bg-navy-900 text-white font-bold px-5 py-1.5 rounded-full text-sm hover:bg-navy-800 transition-colors">
            617-669-8210
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image src="/images/logo-transparente.png" alt="Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services" width={180} height={60} className="h-14 w-auto object-contain mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">{f.desc}</p>
            <a href="https://www.instagram.com/infinityss.inc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm">
              <Instagram size={18} />@infinityss.inc
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{f.servicesTitle}</h3>
            <ul className="space-y-2.5">
              {f.services.map((label, i) => (
                <li key={label}>
                  <Link href={f.serviceHrefs[i]} className="text-gray-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{f.navTitle}</h3>
            <ul className="space-y-2.5">
              {f.navLinks.map((label, i) => (
                <li key={label}>
                  <Link href={f.navHrefs[i]} className="text-gray-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{f.contactTitle}</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:6176698210" className="flex items-start gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold-500" />617-669-8210
                </a>
              </li>
              <li>
                <a href="mailto:info@infinityssinc.com" className="flex items-start gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm break-all">
                  <Mail size={16} className="mt-0.5 shrink-0 text-gold-500" />info@infinityssinc.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
                  <span>1 West Cottage Street<br />Roxbury, MA 02119</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-navy-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-xs leading-relaxed text-center">
            <strong className="text-gray-500">{f.disclaimer.split('.')[0]}.</strong>{' '}
            <Link href="/legal" className="text-gold-600 hover:underline">{f.disclaimerLink}</Link>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-navy-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {f.legal.map((label, i) => (
              <Link key={label} href={f.legalHrefs[i]} className="text-gray-500 hover:text-gold-400 text-xs transition-colors">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-gray-500 text-xs">© {year} Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services. {f.copyright}</p>
            <p className="text-gray-600 text-xs">Roxbury, MA · info@infinityssinc.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
