import LegalHero from '@/components/LegalHero'
import TerminosContent from '@/components/TerminosContent'

export const metadata = {
  title: 'Terms & Conditions | Términos y Condiciones',
  description:
    'Terms and Conditions of Infinity Solutions of Roxbury LLC governing the use of our website and services.',
}

export default function TermsPage() {
  return (
    <>
      <LegalHero titleEs="Términos y Condiciones" titleEn="Terms & Conditions" />
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <TerminosContent />
        </div>
      </section>
    </>
  )
}
