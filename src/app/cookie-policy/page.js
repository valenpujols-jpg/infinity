import LegalHero from '@/components/LegalHero'
import CookiesContent from '@/components/CookiesContent'

export const metadata = {
  title: 'Cookie Policy | Política de Cookies',
  description:
    'Cookie Policy of Infinity Solutions of Roxbury LLC DBA VAESCA Tax Services — learn what cookies we use and how to manage them.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <LegalHero titleEs="Política de Cookies" titleEn="Cookie Policy" />
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CookiesContent />
        </div>
      </section>
    </>
  )
}
