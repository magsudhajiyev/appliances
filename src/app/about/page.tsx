import { Metadata } from 'next'
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  ClockIcon,
  WrenchScrewdriverIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Umit&apos;s Amazing Services | Boston&apos;s Trusted Repair Service',
  description: 'Learn about Umit&apos;s Amazing Services, Boston&apos;s most trusted appliance service company. Licensed, insured, and committed to 100% customer satisfaction.',
  keywords: 'about Umit Amazing Services, Boston appliance repair company, licensed appliance repair, appliance repair history',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Umit&apos;s Amazing Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over a decade, we&apos;ve been Boston&apos;s most trusted appliance repair service, 
              helping thousands of families keep their homes running smoothly with reliable, 
              professional appliance repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2013, Umit&apos;s Amazing Services started with a simple mission: 
                    to provide honest, reliable, and professional appliance repair services 
                    to the Greater Boston area.
                  </p>
                  <p>
                    What began as a small family business has grown into Boston&apos;s most 
                    trusted appliance repair service, serving thousands of satisfied customers 
                    across Cambridge, Somerville, Newton, and beyond.
                  </p>
                  <p>
                    We believe that when your appliances break down, you shouldn&apos;t have to 
                    wait days for service or worry about hidden fees. That&apos;s why we offer 
                    same-day service, transparent pricing, and a 100% satisfaction guarantee 
                    on all our work.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-200 mb-1">10+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-200 mb-1">5000+</div>
                    <div className="text-blue-100">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-200 mb-1">24/7</div>
                    <div className="text-blue-100">Emergency Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-200 mb-1">100%</div>
                    <div className="text-blue-100">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                These principles guide everything we do and every service we provide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheckIcon,
                  title: 'Integrity',
                  description: 'Honest pricing, transparent communication, and reliable service you can trust.',
                  color: 'blue'
                },
                {
                  icon: UserGroupIcon,
                  title: 'Customer First',
                  description: 'Your satisfaction is our priority. We&apos;re not happy until you are.',
                  color: 'green'
                },
                {
                  icon: WrenchScrewdriverIcon,
                  title: 'Quality Work',
                  description: 'Professional repairs using quality parts and proven techniques.',
                  color: 'purple'
                },
                {
                  icon: ClockIcon,
                  title: 'Responsiveness',
                  description: 'Same-day service available because we know your time is valuable.',
                  color: 'orange'
                },
                {
                  icon: StarIcon,
                  title: 'Excellence',
                  description: 'Continuous training and improvement to provide the best service possible.',
                  color: 'pink'
                },
                {
                  icon: CheckCircleIcon,
                  title: 'Accountability',
                  description: 'We stand behind our work with warranties and guarantees.',
                  color: 'indigo'
                }
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className={`w-12 h-12 bg-${value.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Guarantees */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Licensed, Insured & Certified
              </h2>
              <p className="text-xl text-gray-600">
                Your peace of mind is important to us. We maintain all necessary 
                licenses and certifications to provide safe, professional service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
                <ul className="space-y-3">
                  {[
                    'Massachusetts State Licensed Technicians',
                    'Factory-Authorized Service Provider',
                    'EPA Section 608 Certified (Refrigerant Handling)',
                    'NATE Certified HVAC Technicians',
                    'Ongoing Manufacturer Training Programs'
                  ].map((cert) => (
                    <li key={cert} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Guarantee</h3>
                <ul className="space-y-3">
                  {[
                    '100% Satisfaction Guarantee on All Work',
                    'Warranty on Parts and Labor',
                    'Fully Licensed and Insured Service',
                    'Transparent, Upfront Pricing',
                    'Same-Day Service Available'
                  ].map((guarantee) => (
                    <li key={guarantee} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Umit&apos;s Amazing Services Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust us with their appliance repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-50"
                asChild
              >
                <Link href="/service-request">
                  Schedule Service Now
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="tel:+15551234567">
                  Call (555) 123-4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}