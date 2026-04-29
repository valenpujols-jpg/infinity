'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const servicesEs = [
  'Trámites Migratorios',
  'Taxes Individuales',
  'Taxes Corporativos',
  'Bookkeeping',
  'Payroll',
  'Reparación de Crédito',
  'Otro / No estoy seguro',
]

const servicesEn = [
  'Immigration Documents',
  'Individual Tax Preparation',
  'Corporate Tax Preparation',
  'Bookkeeping',
  'Payroll',
  'Credit Repair',
  'Other / Not sure',
]

export default function ContactForm() {
  const { lang } = useLanguage()
  const isEn = lang === 'en'

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    /*
      INTEGRACIÓN CON FORMSPREE:
      1. Ve a https://formspree.io y crea una cuenta gratuita
      2. Crea un nuevo formulario y copia tu endpoint
      3. Reemplaza la URL de abajo con tu endpoint de Formspree:
         const res = await fetch('https://formspree.io/f/TU_ID_AQUI', {...})

      O con Netlify Forms: agrega el atributo data-netlify="true" al <form>
      y cambia handleSubmit para usar FormData.
    */

    // Simulación de envío (reemplazar con integración real)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3">
          {isEn ? 'Message sent!' : '¡Mensaje enviado!'}
        </h3>
        <p className="text-gray-600 max-w-md leading-relaxed">
          {isEn
            ? 'Thank you for contacting us. A member of our team will reach out to you very soon. You can also call us directly at '
            : 'Gracias por contactarnos. Un miembro de nuestro equipo se comunicará contigo muy pronto. También puedes llamarnos directamente al '}
          <a href="tel:6176698210" className="text-gold-600 font-semibold">617-669-8210</a>.
        </p>
      </div>
    )
  }

  const serviceList = isEn ? servicesEn : servicesEs

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-1.5">
          {isEn ? 'Full name' : 'Nombre completo'} <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder={isEn ? 'John Doe' : 'Juan Pérez'}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder-gray-400"
        />
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-1.5">
            {isEn ? 'Phone number' : 'Teléfono'} <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="617-000-0000"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-1.5">
            {isEn ? 'Email address' : 'Correo electrónico'}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder={isEn ? 'john@email.com' : 'juan@email.com'}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-navy-900 mb-1.5">
          {isEn ? 'Service of interest' : 'Servicio de interés'} <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-gray-700 bg-white"
        >
          <option value="">{isEn ? 'Select a service...' : 'Selecciona un servicio...'}</option>
          {serviceList.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-1.5">
          {isEn ? 'Tell us how we can help you' : 'Cuéntanos cómo podemos ayudarte'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={isEn ? 'Briefly describe your situation or what you need...' : 'Describe brevemente tu situación o lo que necesitas...'}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 text-base shadow-md hover:shadow-lg"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {isEn ? 'Sending...' : 'Enviando...'}
          </>
        ) : (
          <>
            <Send size={18} />
            {isEn ? 'Send Message' : 'Enviar Mensaje'}
          </>
        )}
      </button>
    </form>
  )
}
