import Hero from '@/components/sections/Hero'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Services from '@/components/sections/Services'
import BrandsWeService from '@/components/sections/BrandsWeService'
import ServiceProcess from '@/components/sections/ServiceProcess'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChooseUs />
      <Services />
      <BrandsWeService />
      <ServiceProcess />
    </div>
  )
}
