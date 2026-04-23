'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function WhatsAppButton() {
  const { t } = useLanguage()
  const phone = '16176698210'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(t.whatsapp.message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.tooltip}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
      style={{ backgroundColor: '#25D366' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.821.736 5.469 2.024 7.773L0 32l8.432-2.012A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.769-1.852l-.484-.287-5.008 1.196 1.245-4.88-.316-.5A13.257 13.257 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.287-9.92c-.4-.2-2.365-1.165-2.731-1.299-.366-.133-.633-.2-.9.2-.266.4-1.033 1.299-1.266 1.565-.233.267-.466.3-.866.1-.4-.2-1.688-.621-3.216-1.98-1.188-1.059-1.99-2.368-2.223-2.768-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.165-1.233-2.965-.324-.778-.655-.673-.9-.685l-.766-.013c-.267 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.331 0 1.965 1.432 3.864 1.632 4.131.2.267 2.82 4.3 6.828 6.031.954.412 1.699.658 2.28.843.957.305 1.829.262 2.517.159.768-.114 2.365-.966 2.699-1.9.333-.933.333-1.732.233-1.899-.1-.166-.366-.266-.766-.466z" />
      </svg>
      <span className="absolute right-16 bg-navy-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        {t.whatsapp.tooltip}
      </span>
    </a>
  )
}
