import LegalHero from '@/components/LegalHero'
import AvisoLegalContent from '@/components/AvisoLegalContent'

export const metadata = {
  title: 'Legal Disclaimer | Aviso Legal',
  description:
    'Legal disclaimer of Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services — important information about the scope and limitations of our services.',
}

export default function LegalPage() {
  return (
    <>
      <LegalHero titleEs="Aviso Legal y Descargo de Responsabilidad" titleEn="Legal Disclaimer" />
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AvisoLegalContent />
        </div>
      </section>
    </>
  )
}
