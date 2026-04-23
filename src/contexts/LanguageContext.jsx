'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/lib/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    const saved = localStorage.getItem('iss-lang')
    if (saved === 'en' || saved === 'es') {
      setLang(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const toggleLanguage = () => {
    const next = lang === 'es' ? 'en' : 'es'
    setLang(next)
    localStorage.setItem('iss-lang', next)
    document.documentElement.lang = next
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
