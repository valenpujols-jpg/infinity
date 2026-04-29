'use client'

import { useState, useCallback } from 'react'
import {
  Save, LogIn, LogOut, Globe, Phone, Star, Layers, Layout,
  CheckCircle, AlertCircle, Loader, Eye, EyeOff, Image,
  Users, HelpCircle, RefreshCw, ExternalLink,
} from 'lucide-react'

const SECTIONS = [
  { id: 'contact',      label: 'Contacto General',  icon: Phone },
  { id: 'hero',         label: 'Hero / Inicio',     icon: Layout },
  { id: 'services',     label: 'Servicios',         icon: Layers },
  { id: 'testimonials', label: 'Testimonios',       icon: Star },
  { id: 'about',        label: 'Sobre Nosotros',    icon: Users },
  { id: 'faq',          label: 'FAQ',               icon: HelpCircle },
  { id: 'images',       label: 'Imágenes',          icon: Image },
  { id: 'footer',       label: 'Footer / CTA',      icon: Globe },
]

const SERVICE_LABELS = ['Migración / Immigration', 'Taxes Individuales', 'Taxes Corporativos', 'Bookkeeping', 'Payroll', 'Crédito / Credit']

function Field({ label, value, onChange, multiline = false, hint, mono = false }) {
  return (
    <div className="mb-3">
      <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">{label}</label>
      {hint && <p className="text-[10px] text-gray-500 mb-1">{hint}</p>}
      {multiline ? (
        <textarea
          rows={3}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-navy-800 border border-navy-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500 resize-none ${mono ? 'font-mono text-xs' : ''}`}
        />
      ) : (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-navy-800 border border-navy-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500 ${mono ? 'font-mono text-xs' : ''}`}
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

function SectionCard({ title, children }) {
  return (
    <div className="bg-navy-900 rounded-xl border border-navy-700 overflow-hidden mb-4">
      <div className="px-4 py-2.5 border-b border-navy-700 bg-navy-800">
        <p className="text-white text-sm font-semibold">{title}</p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed]     = useState(false)
  const [content, setContent]   = useState(null)
  const [section, setSection]   = useState('contact')
  const [status, setStatus]     = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [preview, setPreview]   = useState(false)
  const [previewKey, setPreviewKey] = useState(0)

  const login = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    const res = await fetch('/api/admin/content', { headers: { 'x-admin-password': password } })
    if (res.ok) { setContent(await res.json()); setAuthed(true) }
    else setErrorMsg('Contraseña incorrecta')
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
    if (res.ok) { setStatus('saved'); setTimeout(() => setStatus(null), 4000) }
    else { setStatus('error'); setErrorMsg(data.error || 'Error al guardar') }
  }

  const set = useCallback((path, value) => {
    setContent((prev) => {
      const next = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let obj = next
      for (let i = 0; i < keys.length - 1; i++) {
        if (obj[keys[i]] === undefined) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
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
            <p className="text-gray-400 text-sm mt-1">VAESCA Tax Services</p>
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

  if (!content) return (
    <div className="fixed inset-0 z-50 bg-navy-950 flex items-center justify-center">
      <Loader className="animate-spin text-gold-500" size={32} />
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 bg-navy-950 flex overflow-hidden">

      {/* Sidebar */}
      <aside className="w-52 bg-navy-900 border-r border-navy-700 flex flex-col shrink-0">
        <div className="p-4 border-b border-navy-700">
          <p className="text-gold-400 font-bold text-xs uppercase tracking-widest">CMS Admin</p>
          <p className="text-gray-500 text-[10px] mt-0.5">VAESCA Tax Services</p>
        </div>
        <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
          {SECTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                section === id ? 'bg-gold-500 text-white' : 'text-gray-400 hover:text-white hover:bg-navy-800'
              }`}
            >
              <Icon size={14} />{label}
            </button>
          ))}
        </nav>
        <div className="p-2 border-t border-navy-700 space-y-1">
          <a
            href="https://www.infinityssinc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-gray-300 hover:bg-navy-800 transition-colors"
          >
            <ExternalLink size={12} /> Ver sitio web
          </a>
          <button onClick={() => setAuthed(false)} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-gray-300 hover:bg-navy-800 transition-colors">
            <LogOut size={12} /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-navy-900 border-b border-navy-700 px-5 py-3 flex items-center justify-between shrink-0">
          <h1 className="text-white font-bold">{SECTIONS.find(s => s.id === section)?.label}</h1>
          <div className="flex items-center gap-3">
            {status === 'saved' && (
              <span className="flex items-center gap-1.5 text-green-400 text-xs"><CheckCircle size={13} /> Guardado · Vercel redeploy iniciado (~2 min)</span>
            )}
            {status === 'error' && (
              <span className="flex items-center gap-1.5 text-red-400 text-xs"><AlertCircle size={13} /> {errorMsg}</span>
            )}
            <button
              onClick={() => { setPreview(!preview); setPreviewKey(k => k + 1) }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                preview ? 'bg-blue-600 border-blue-500 text-white' : 'border-navy-600 text-gray-400 hover:text-white hover:border-gray-500'
              }`}
            >
              {preview ? <EyeOff size={13} /> : <Eye size={13} />}
              {preview ? 'Ocultar vista previa' : 'Vista previa'}
            </button>
            {preview && (
              <button onClick={() => setPreviewKey(k => k + 1)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-navy-600 text-gray-400 hover:text-white transition-colors">
                <RefreshCw size={12} /> Recargar
              </button>
            )}
            <button
              onClick={save}
              disabled={status === 'saving'}
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-white font-bold px-4 py-1.5 rounded-xl transition-colors text-sm"
            >
              {status === 'saving' ? <Loader size={14} className="animate-spin" /> : <Save size={14} />}
              {status === 'saving' ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </header>

        {/* Body — editor + optional preview */}
        <div className="flex-1 flex overflow-hidden">

          {/* Editor panel */}
          <div className={`overflow-y-auto p-5 ${preview ? 'w-1/2 border-r border-navy-700' : 'w-full'}`}>

            {/* CONTACT */}
            {section === 'contact' && (
              <div className="max-w-lg">
                <p className="text-gray-400 text-xs mb-4">Aparece en footer, navbar y página de contacto.</p>
                <Field label="Teléfono" value={content.contact.phone} onChange={v => set('contact.phone', v)} />
                <Field label="Email" value={content.contact.email} onChange={v => set('contact.email', v)} />
                <Field label="Dirección" value={content.contact.address} onChange={v => set('contact.address', v)} />
                <Field label="Instagram (URL)" value={content.contact.instagram} onChange={v => set('contact.instagram', v)} mono />
              </div>
            )}

            {/* HERO */}
            {section === 'hero' && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <LangBlock title="🇪🇸 Español">
                  <Field label="Línea 1" value={content.es.hero.headline1} onChange={v => set('es.hero.headline1', v)} />
                  <Field label="Palabra dorada" value={content.es.hero.headlineAccent} onChange={v => set('es.hero.headlineAccent', v)} />
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
              <div className="space-y-5">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  <LangBlock title="🇪🇸 Banner — Español">
                    <Field label="Título" value={content.es.services_featured.title} onChange={v => set('es.services_featured.title', v)} />
                    <Field label="Subtítulo" value={content.es.services_featured.subtitle} onChange={v => set('es.services_featured.subtitle', v)} multiline />
                    <Field label="CTA" value={content.es.services_featured.cta} onChange={v => set('es.services_featured.cta', v)} />
                  </LangBlock>
                  <LangBlock title="🇺🇸 Banner — English">
                    <Field label="Title" value={content.en.services_featured.title} onChange={v => set('en.services_featured.title', v)} />
                    <Field label="Subtitle" value={content.en.services_featured.subtitle} onChange={v => set('en.services_featured.subtitle', v)} multiline />
                    <Field label="CTA" value={content.en.services_featured.cta} onChange={v => set('en.services_featured.cta', v)} />
                  </LangBlock>
                </div>
                {content.es.services.map((_, i) => (
                  <div key={i} className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    <LangBlock title={`🇪🇸 ${i + 1}. ${SERVICE_LABELS[i]}`}>
                      <Field label="Etiqueta" value={content.es.services[i].tag} onChange={v => set(`es.services.${i}.tag`, v)} />
                      <Field label="Título" value={content.es.services[i].title} onChange={v => set(`es.services.${i}.title`, v)} />
                      <Field label="Descripción" value={content.es.services[i].desc} onChange={v => set(`es.services.${i}.desc`, v)} multiline />
                    </LangBlock>
                    <LangBlock title={`🇺🇸 ${i + 1}. ${SERVICE_LABELS[i]}`}>
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
              <div className="space-y-5">
                {content.es.testimonials.map((_, i) => (
                  <div key={i} className="grid grid-cols-1 xl:grid-cols-2 gap-5">
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

            {/* ABOUT */}
            {section === 'about' && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <LangBlock title="🇪🇸 Sobre Nosotros — Español">
                  <Field label="Título hero" value={content.es.about.heroTitle} onChange={v => set('es.about.heroTitle', v)} />
                  <Field label="Subtítulo hero" value={content.es.about.heroSubtitle} onChange={v => set('es.about.heroSubtitle', v)} multiline />
                  <Field label="Título historia" value={content.es.about.storyTitle} onChange={v => set('es.about.storyTitle', v)} />
                  <Field label="Párrafo 1" value={content.es.about.story1} onChange={v => set('es.about.story1', v)} multiline />
                  <Field label="Párrafo 2" value={content.es.about.story2} onChange={v => set('es.about.story2', v)} multiline />
                  <Field label="Párrafo 3" value={content.es.about.story3} onChange={v => set('es.about.story3', v)} multiline />
                  <Field label="Párrafo 4" value={content.es.about.story4} onChange={v => set('es.about.story4', v)} multiline />
                  <Field label="Misión — título" value={content.es.about.missionTitle} onChange={v => set('es.about.missionTitle', v)} />
                  <Field label="Misión — texto" value={content.es.about.missionBody} onChange={v => set('es.about.missionBody', v)} multiline />
                  <Field label="Visión — título" value={content.es.about.visionTitle} onChange={v => set('es.about.visionTitle', v)} />
                  <Field label="Visión — texto" value={content.es.about.visionBody} onChange={v => set('es.about.visionBody', v)} multiline />
                </LangBlock>
                <LangBlock title="🇺🇸 About Us — English">
                  <Field label="Hero title" value={content.en.about.heroTitle} onChange={v => set('en.about.heroTitle', v)} />
                  <Field label="Hero subtitle" value={content.en.about.heroSubtitle} onChange={v => set('en.about.heroSubtitle', v)} multiline />
                  <Field label="Story title" value={content.en.about.storyTitle} onChange={v => set('en.about.storyTitle', v)} />
                  <Field label="Paragraph 1" value={content.en.about.story1} onChange={v => set('en.about.story1', v)} multiline />
                  <Field label="Paragraph 2" value={content.en.about.story2} onChange={v => set('en.about.story2', v)} multiline />
                  <Field label="Paragraph 3" value={content.en.about.story3} onChange={v => set('en.about.story3', v)} multiline />
                  <Field label="Paragraph 4" value={content.en.about.story4} onChange={v => set('en.about.story4', v)} multiline />
                  <Field label="Mission — title" value={content.en.about.missionTitle} onChange={v => set('en.about.missionTitle', v)} />
                  <Field label="Mission — text" value={content.en.about.missionBody} onChange={v => set('en.about.missionBody', v)} multiline />
                  <Field label="Vision — title" value={content.en.about.visionTitle} onChange={v => set('en.about.visionTitle', v)} />
                  <Field label="Vision — text" value={content.en.about.visionBody} onChange={v => set('en.about.visionBody', v)} multiline />
                </LangBlock>
              </div>
            )}

            {/* FAQ */}
            {section === 'faq' && (
              <div className="space-y-5">
                <p className="text-gray-400 text-xs">Edita las preguntas y respuestas en ambos idiomas.</p>
                {content.es.faq.map((_, i) => (
                  <div key={i} className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    <LangBlock title={`🇪🇸 Pregunta ${i + 1}`}>
                      <Field label="Pregunta" value={content.es.faq[i].q} onChange={v => set(`es.faq.${i}.q`, v)} multiline />
                      <Field label="Respuesta" value={content.es.faq[i].a} onChange={v => set(`es.faq.${i}.a`, v)} multiline />
                    </LangBlock>
                    <LangBlock title={`🇺🇸 Question ${i + 1}`}>
                      <Field label="Question" value={content.en.faq[i].q} onChange={v => set(`en.faq.${i}.q`, v)} multiline />
                      <Field label="Answer" value={content.en.faq[i].a} onChange={v => set(`en.faq.${i}.a`, v)} multiline />
                    </LangBlock>
                  </div>
                ))}
              </div>
            )}

            {/* IMAGES */}
            {section === 'images' && (
              <div className="max-w-2xl space-y-5">
                <p className="text-gray-400 text-xs">Pega URLs de imágenes de Unsplash u otro proveedor. Deben ser URLs públicas que terminen en .jpg, .png o similar.</p>
                <SectionCard title="Imagen Hero (banner principal)">
                  <Field label="URL imagen hero" value={content.images.hero} onChange={v => set('images.hero', v)} mono />
                  {content.images.hero && (
                    <img src={content.images.hero} alt="preview" className="mt-2 rounded-lg h-28 w-full object-cover opacity-80" />
                  )}
                </SectionCard>
                <SectionCard title="Imágenes de Tarjetas de Servicios">
                  {content.images.services.map((url, i) => (
                    <div key={i} className="mb-4">
                      <Field
                        label={`Servicio ${i + 1} — ${SERVICE_LABELS[i]}`}
                        value={url}
                        onChange={v => set(`images.services.${i}`, v)}
                        mono
                      />
                      {url && <img src={url} alt={`service ${i}`} className="mt-1 rounded-lg h-16 w-full object-cover opacity-70" />}
                    </div>
                  ))}
                </SectionCard>
              </div>
            )}

            {/* FOOTER */}
            {section === 'footer' && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <LangBlock title="🇪🇸 Footer — Español">
                  <Field label="Barra dorada (CTA strip)" value={content.es.footer.ctaStrip} onChange={v => set('es.footer.ctaStrip', v)} />
                  <Field label="Descripción footer" value={content.es.footer.desc} onChange={v => set('es.footer.desc', v)} multiline />
                  <Field label="CTA título" value={content.es.cta_section.title1} onChange={v => set('es.cta_section.title1', v)} />
                  <Field label="CTA palabra dorada" value={content.es.cta_section.accent} onChange={v => set('es.cta_section.accent', v)} />
                  <Field label="CTA subtítulo" value={content.es.cta_section.subtitle} onChange={v => set('es.cta_section.subtitle', v)} multiline />
                </LangBlock>
                <LangBlock title="🇺🇸 Footer — English">
                  <Field label="Gold bar (CTA strip)" value={content.en.footer.ctaStrip} onChange={v => set('en.footer.ctaStrip', v)} />
                  <Field label="Footer description" value={content.en.footer.desc} onChange={v => set('en.footer.desc', v)} multiline />
                  <Field label="CTA title" value={content.en.cta_section.title1} onChange={v => set('en.cta_section.title1', v)} />
                  <Field label="CTA accent word" value={content.en.cta_section.accent} onChange={v => set('en.cta_section.accent', v)} />
                  <Field label="CTA subtitle" value={content.en.cta_section.subtitle} onChange={v => set('en.cta_section.subtitle', v)} multiline />
                </LangBlock>
              </div>
            )}

          </div>

          {/* Preview iframe */}
          {preview && (
            <div className="w-1/2 flex flex-col bg-navy-950">
              <div className="px-4 py-2 border-b border-navy-700 flex items-center gap-2 shrink-0">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-500 text-xs ml-2">infinityssinc.com</span>
                <span className="text-gray-600 text-[10px] ml-auto">Los cambios se ven después de guardar y redeploy (~2 min)</span>
              </div>
              <iframe
                key={previewKey}
                src="https://www.infinityssinc.com"
                className="flex-1 w-full border-0"
                title="Vista previa del sitio"
              />
            </div>
          )}

        </div>
      </main>
    </div>
  )
}
