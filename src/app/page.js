import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import Stats from '@/components/Stats'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Infinity Solutions Services Inc | Taxes, Bookkeeping, Payroll y Migración en Boston, MA',
  description:
    'Soluciones profesionales de taxes, bookkeeping, payroll, reparación de crédito y trámites migratorios en Boston, MA. Atención personalizada en español.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}
