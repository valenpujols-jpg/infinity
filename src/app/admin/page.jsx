'use client'

import { useState, useEffect, useCallback } from 'react'
import { Save, LogIn, LogOut, Globe, Phone, Star, Layers, Layout, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const SECTIONS = [
  { id: 'contact',      label: 'Contacto General', icon: Phone },
  { id: 'hero',         label: 'Hero / Inicio',    icon: Layout },
  { id: 'services',     label: 'Servicios',        icon: Layers },
  { id: 'testimonials', label: 'Testimonios',      icon: Star },
  { id: 'footer',       label: 'Footer / CTA',     icon: Globe },
]

function Field({ label, value, onChange, multiline = false, hint }) {
  return (
    <div className="mb-3">
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{label}</label>
      {hint && <p className="text-[11px] text-gray-500 mb-1">{hint}</p>}
      {multiline ? (
        <textarea
          rows={3}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-navy-800 border border-navy-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500 resize-none"
        />
      ) : (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-navy-800 border border-navy-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500"
        />
      )}
    </div>
  )
}

function LangBlock({ title, children }) {
  return (
    <div className="bg-navy-900 rounded-xl p-4 border border-navy-700">
      <p className="text-gold-400 font-bold text-xs uppercase tracking-widest mb-4">{title}</p>
      {children}
    </div>
  )
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed]     = useState(false)
  const [content, setContent]   = useState(null)
  const [section, setSection]   = useState('contact')
  const [status, setStatus]     = useState(null) // 'saving' | 'saved' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const login = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/admin/content', { headers: { 'x-admin-password': password } })
    if (res.ok) {
      setContent(await res.json())
      setAuthed(true)
    } else {
      setErrorMsg('Contraseña incorrecta')
    }
  }

  const save = async () => {
    setStatus('saving')
    setErrorMsg('')
    const res = await fetch('/api/admin/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, content }),
    })
    const data = await res.json()
    if (res.ok) {
      setStatus('saved')
      setTimeout(() => setStatus(null), 3000)
    } else {
      setStatus('error')
      setErrorMsg(data.error || 'Error al guardar')
    }
  }

  const set = useCallback((path, value) => {
    setContent((prev) => {
      const next = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let obj = next
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]]
      obj[keys[keys.length - 1]] = value
      return next
    })
  }, [])

  if (!authed) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Layers size={30} className="text-white" />
            </div>
            <h1 className="text-white text-2xl font-bold">Panel de Administración</h1>
            <p className="text-gray-400 text-sm mt-1">Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services</p>
          </div>
          <form onSubmit={login} className="bg-navy-900 rounded-2xl p-6 border border-navy-700">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-navy-800 border border-navy-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 mb-3"
              placeholder="••••••••"
              autoFocus
            />
            {errorMsg && <p className="text-red-400 text-xs mb-3">{errorMsg}</p>}
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-bold py-2.5 rounded-xl transition-colors">
              <LogIn size={16} /> Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (!content) return <div className="min-h-screen bg-navy-950 flex items-center justify-center"><Loader className="animate-spin text-gold-500" size={32} /></div>

  return (
    <div className="fixed inset-0 z-50 bg-navy-950 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-navy-900 border-r border-navy-700 flex flex-col shrink-0">
        <div className="p-4 border-b border-navy-700">
          <p className="text-gold-400 font-bold text-xs uppercase tracking-widest">CMS Admin</p>
          <p className="text-gray-500 text-[11px] mt-0.5">VAESCA Tax Services</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {SECTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                section === id ? 'bg-gold-500 text-white' : 'text-gray-400 hover:text-white hover:bg-navy-800'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-navy-700">
          <button onClick={() => setAuthed(false)} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-gray-300 hover:bg-navy-800 transition-colors">
            <LogOut size={13} /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-navy-900 border-b border-navy-700 px-6 py-4 flex items-center justify-between">
          <h1 className="text-white font-bold text-lg">{SECTIONS.find(s => s.id === section)?.label}</h1>
          <div className="flex items-center gap-3">
            {status === 'saved' && (
              <span className="flex items-center gap-1.5 text-green-400 text-sm"><CheckCircle size={15} /> Guardado — Vercel redeploy iniciado</span>
            )}
            {status === 'error' && (
              <span className="flex items-center gap-1.5 text-red-400 text-sm"><AlertCircle size={15} /> {errorMsg}</span>
            )}
            <button
              onClick={save}
              disabled={status === 'saving'}
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-white font-bold px-5 py-2 rounded-xl transition-colors text-sm"
            >
              {status === 'saving' ? <Loader size={15} className="animate-spin" /> : <Save size={15} />}
              {status === 'saving' ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
        </header>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* CONTACT */}
          {section === 'contact' && (
            <div className="max-w-lg space-y-3">
              <p className="text-gray-400 text-sm mb-4">Esta información aparece en el footer, la barra de navegación y la página de contacto.</p>
              <Field label="Teléfono" value={content.contact.phone} onChange={v => set('contact.phone', v)} />
              <Field label="Email" value={content.contact.email} onChange={v => set('contact.email', v)} />
              <Field label="Dirección" value={content.contact.address} onChange={v => set('contact.address', v)} />
              <Field label="Instagram (URL completa)" value={content.contact.instagram} onChange={v => set('contact.instagram', v)} />
            </div>
          )}

          {/* HERO */}
          {section === 'hero' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LangBlock title="🇪🇸 Español">
                <Field label="Línea 1" value={content.es.hero.headline1} onChange={v => set('es.hero.headline1', v)} />
                <Field label="Palabra destacada (dorada)" value={content.es.hero.headlineAccent} onChange={v => set('es.hero.headlineAccent', v)} />
                <Field label="Línea 2" value={content.es.hero.headline2} onChange={v => set('es.hero.headline2', v)} />
                <Field label="Subtítulo" value={content.es.hero.subtitle} onChange={v => set('es.hero.subtitle', v)} multiline />
                <Field label="Botón principal" value={content.es.hero.cta1} onChange={v => set('es.hero.cta1', v)} />
                <Field label="Botón secundario" value={content.es.hero.cta2} onChange={v => set('es.hero.cta2', v)} />
              </LangBlock>
              <LangBlock title="🇺🇸 English">
                <Field label="Line 1" value={content.en.hero.headline1} onChange={v => set('en.hero.headline1', v)} />
                <Field label="Accent word (gold)" value={content.en.hero.headlineAccent} onChange={v => set('en.hero.headlineAccent', v)} />
                <Field label="Line 2" value={content.en.hero.headline2} onChange={v => set('en.hero.headline2', v)} />
                <Field label="Subtitle" value={content.en.hero.subtitle} onChange={v => set('en.hero.subtitle', v)} multiline />
                <Field label="Main button" value={content.en.hero.cta1} onChange={v => set('en.hero.cta1', v)} />
                <Field label="Secondary button" value={content.en.hero.cta2} onChange={v => set('en.hero.cta2', v)} />
              </LangBlock>
            </div>
          )}

          {/* SERVICES */}
          {section === 'services' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LangBlock title="🇪🇸 Banner principal — Español">
                  <Field label="Título banner" value={content.es.services_featured.title} onChange={v => set('es.services_featured.title', v)} />
                  <Field label="Subtítulo banner" value={content.es.services_featured.subtitle} onChange={v => set('es.services_featured.subtitle', v)} multiline />
                  <Field label="CTA banner" value={content.es.services_featured.cta} onChange={v => set('es.services_featured.cta', v)} />
                </LangBlock>
                <LangBlock title="🇺🇸 Main banner — English">
                  <Field label="Banner title" value={content.en.services_featured.title} onChange={v => set('en.services_featured.title', v)} />
                  <Field label="Banner subtitle" value={content.en.services_featured.subtitle} onChange={v => set('en.services_featured.subtitle', v)} multiline />
                  <Field label="Banner CTA" value={content.en.services_featured.cta} onChange={v => set('en.services_featured.cta', v)} />
                </LangBlock>
              </div>

              {content.es.services.map((_, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <LangBlock title={`🇪🇸 Servicio ${i + 1}`}>
                    <Field label="Etiqueta" value={content.es.services[i].tag} onChange={v => set(`es.services.${i}.tag`, v)} />
                    <Field label="Título" value={content.es.services[i].title} onChange={v => set(`es.services.${i}.title`, v)} />
                    <Field label="Descripción" value={content.es.services[i].desc} onChange={v => set(`es.services.${i}.desc`, v)} multiline />
                  </LangBlock>
                  <LangBlock title={`🇺🇸 Service ${i + 1}`}>
                    <Field label="Tag" value={content.en.services[i].tag} onChange={v => set(`en.services.${i}.tag`, v)} />
                    <Field label="Title" value={content.en.services[i].title} onChange={v => set(`en.services.${i}.title`, v)} />
                    <Field label="Description" value={content.en.services[i].desc} onChange={v => set(`en.services.${i}.desc`, v)} multiline />
                  </LangBlock>
                </div>
              ))}
            </div>
          )}

          {/* TESTIMONIALS */}
          {section === 'testimonials' && (
            <div className="space-y-6">
              {content.es.testimonials.map((_, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <LangBlock title={`🇪🇸 Testimonio ${i + 1}`}>
                    <Field label="Nombre" value={content.es.testimonials[i].name} onChange={v => set(`es.testimonials.${i}.name`, v)} />
                    <Field label="Ubicación" value={content.es.testimonials[i].location} onChange={v => set(`es.testimonials.${i}.location`, v)} />
                    <Field label="Servicio" value={content.es.testimonials[i].service} onChange={v => set(`es.testimonials.${i}.service`, v)} />
                    <Field label="Texto" value={content.es.testimonials[i].text} onChange={v => set(`es.testimonials.${i}.text`, v)} multiline />
                  </LangBlock>
                  <LangBlock title={`🇺🇸 Testimonial ${i + 1}`}>
                    <Field label="Name" value={content.en.testimonials[i].name} onChange={v => set(`en.testimonials.${i}.name`, v)} />
                    <Field label="Location" value={content.en.testimonials[i].location} onChange={v => set(`en.testimonials.${i}.location`, v)} />
                    <Field label="Service" value={content.en.testimonials[i].service} onChange={v => set(`en.testimonials.${i}.service`, v)} />
                    <Field label="Text" value={content.en.testimonials[i].text} onChange={v => set(`en.testimonials.${i}.text`, v)} multiline />
                  </LangBlock>
                </div>
              ))}
            </div>
          )}

          {/* FOOTER / CTA */}
          {section === 'footer' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LangBlock title="🇪🇸 Footer — Español">
                <Field label="Barra dorada (CTA strip)" value={content.es.footer.ctaStrip} onChange={v => set('es.footer.ctaStrip', v)} />
                <Field label="Descripción del footer" value={content.es.footer.desc} onChange={v => set('es.footer.desc', v)} multiline />
                <Field label="CTA título 1" value={content.es.cta_section.title1} onChange={v => set('es.cta_section.title1', v)} />
                <Field label="CTA palabra dorada" value={content.es.cta_section.accent} onChange={v => set('es.cta_section.accent', v)} />
                <Field label="CTA subtítulo" value={content.es.cta_section.subtitle} onChange={v => set('es.cta_section.subtitle', v)} multiline />
              </LangBlock>
              <LangBlock title="🇺🇸 Footer — English">
                <Field label="Gold bar (CTA strip)" value={content.en.footer.ctaStrip} onChange={v => set('en.footer.ctaStrip', v)} />
                <Field label="Footer description" value={content.en.footer.desc} onChange={v => set('en.footer.desc', v)} multiline />
                <Field label="CTA title 1" value={content.en.cta_section.title1} onChange={v => set('en.cta_section.title1', v)} />
                <Field label="CTA accent word" value={content.en.cta_section.accent} onChange={v => set('en.cta_section.accent', v)} />
                <Field label="CTA subtitle" value={content.en.cta_section.subtitle} onChange={v => set('en.cta_section.subtitle', v)} multiline />
              </LangBlock>
            </div>
          )}

        </div>
      </main>
    </div>
  )
}
