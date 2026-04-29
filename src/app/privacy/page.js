import LegalHero from '@/components/LegalHero'
import PrivacidadContent from '@/components/PrivacidadContent'

export const metadata = {
  title: 'Privacy Policy | Política de Privacidad',
  description:
    'Privacy Policy of Infinity Solutions of Roxbury LLC — learn how we collect, use and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <LegalHero titleEs="Política de Privacidad" titleEn="Privacy Policy" />
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PrivacidadContent />
        </div>
      </section>
    </>
  )
}
