import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: {
    default: 'Infinity Solutions of Roxbury LLC | Taxes, Bookkeeping, Payroll y Migración en Boston, MA',
    template: '%s | Infinity Solutions of Roxbury LLC',
  },
  description:
    'Infinity Solutions of Roxbury LLC ofrece servicios profesionales de taxes, bookkeeping, payroll, reparación de crédito y trámites migratorios en Boston, MA. Atención personalizada en español.',
  keywords: ['tax preparation Boston','bookkeeping Boston','payroll services Boston','credit repair Boston','immigration documents Boston','taxes en español Boston'],
  authors: [{ name: 'Infinity Solutions of Roxbury LLC' }],
  metadataBase: new URL('https://infinityssinc.com'),
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: 'https://infinityssinc.com',
    siteName: 'Infinity Solutions of Roxbury LLC',
    title: 'Infinity Solutions of Roxbury LLC | Soluciones Profesionales en Boston, MA',
    description: 'Taxes, Bookkeeping, Payroll, Reparación de Crédito y Trámites Migratorios en Boston, MA.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d1f3c" />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
