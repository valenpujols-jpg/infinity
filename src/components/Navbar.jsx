'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home,     href: '/' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.about,    href: '/about' },
    { label: t.nav.faq,      href: '/faq' },
    { label: t.nav.contact,  href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900 shadow-xl py-2' : 'bg-navy-900/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/images/logo-transparente.png"
              alt="Infinity Solutions of Roxbury LLC"
              width={160}
              height={52}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-gray-200 hover:text-gold-400 font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Cambiar idioma / Switch language"
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg px-3 py-2 transition-all duration-200 text-xs font-semibold"
            >
              <Globe size={14} className="text-gold-400" />
              <span className={lang === 'es' ? 'text-gold-400' : 'text-gray-300'}>ES</span>
              <span className="text-gray-500 text-xs">|</span>
              <span className={lang === 'en' ? 'text-gold-400' : 'text-gray-300'}>EN</span>
            </button>

            {/* Phone CTA */}
            <a
              href="tel:6176698210"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg"
            >
              <Phone size={15} />
              {t.nav.callUs}: 617-669-8210
            </a>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/10 border border-white/20 text-white rounded-lg px-2.5 py-1.5 text-xs font-bold"
            >
              <Globe size={12} className="text-gold-400" />
              <span className={lang === 'es' ? 'text-gold-400' : 'text-gray-300'}>ES</span>
              <span className="text-gray-500">|</span>
              <span className={lang === 'en' ? 'text-gold-400' : 'text-gray-300'}>EN</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md hover:bg-navy-800 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-navy-700">
            <nav className="flex flex-col gap-1 mt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200 hover:text-gold-400 hover:bg-navy-800 font-medium px-3 py-2.5 rounded-md transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:6176698210"
                className="mt-3 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-3 rounded-lg transition-all text-sm"
              >
                <Phone size={16} />
                {t.nav.callUs}: 617-669-8210
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
