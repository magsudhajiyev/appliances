import { Metadata } from 'next'
import { 
  CubeIcon,
  FireIcon,
  SparklesIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Appliance Repair Services Boston | All Major Brands | Fasteny Appliance',
  description: 'Complete appliance repair services in Boston, MA. Refrigerator, oven, dishwasher, washer, and dryer repair. Same-day service available for all major brands.',
  keywords: 'appliance repair services Boston, refrigerator repair, oven repair, dishwasher repair, washer repair, dryer repair',
}

const services = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    description: 'Keep your food fresh and safe with expert refrigerator repairs. We fix cooling issues, ice maker problems, water dispensers, and more.',
    icon: CubeIcon,
    link: '/services/refrigerator-repair',
    gradient: 'from-blue-500 to-cyan-500',
    commonIssues: ['Not cooling properly', 'Ice maker not working', 'Water leaking', 'Strange noises'],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 'Sub-Zero']
  },
  {
    id: 'oven',
    name: 'Oven & Range Repair', 
    description: 'Get back to cooking with professional oven and range repairs. We service both gas and electric units safely and efficiently.',
    icon: FireIcon,
    link: '/services/oven-repair',
    gradient: 'from-orange-500 to-red-500',
    commonIssues: ['Not heating properly', 'Temperature issues', 'Burners not working', 'Self-cleaning problems'],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE', 'Viking', 'Thermador']
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: 'Clean dishes, hassle-free with reliable dishwasher repairs. We fix drainage issues, cleaning problems, and more.',
    icon: SparklesIcon,
    link: '/services/dishwasher-repair', 
    gradient: 'from-teal-500 to-green-500',
    commonIssues: ['Not draining', 'Not cleaning dishes', 'Door latch issues', 'Unusual noises'],
    brands: ['Samsung', 'LG', 'Whirlpool', 'Bosch', 'KitchenAid', 'Miele']
  },
  {
    id: 'washer',
    name: 'Washing Machine Repair',
    description: 'Keep your laundry routine running smoothly with expert washer repairs. We service both top-load and front-load machines.',
    icon: Cog8ToothIcon,
    link: '/services/washing-machine-repair',
    gradient: 'from-purple-500 to-pink-500',
    commonIssues: ['Not spinning', 'Not draining', 'Excessive vibration', 'Door won\'t lock'],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE', 'Maytag', 'Electrolux']
  },
  {
    id: 'dryer', 
    name: 'Dryer Repair',
    description: 'Get your clothes dry quickly and safely with professional dryer repairs. We prioritize safety and energy efficiency.',
    icon: WrenchScrewdriverIcon,
    link: '/services/dryer-repair',
    gradient: 'from-amber-500 to-yellow-500',
    commonIssues: ['Not heating', 'Takes too long', 'Making noise', 'Overheating'],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE', 'Maytag', 'Kenmore']
  },
  {
    id: 'other',
    name: 'Other Appliances',
    description: 'We fix more than just major appliances! Contact us for microwaves, garbage disposals, and other home appliances.',
    icon: HomeIcon,
    link: '/contact',
    gradient: 'from-gray-500 to-slate-500',
    commonIssues: ['Microwave issues', 'Garbage disposal problems', 'Ice makers', 'Wine coolers'],
    brands: ['All major brands', 'Commercial units', 'Specialty appliances']
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Appliance Repair Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Professional repair services for all major home appliances in Boston and surrounding areas. 
              Same-day service available with 100% satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/service-request">Schedule Service Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15551234567">Call (555) 123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group">
                <Link href={service.link}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Common Issues */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Common Issues We Fix:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.commonIssues.map((issue) => (
                          <div key={issue} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {issue}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Brands */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Popular Brands:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.brands.slice(0, 4).map((brand) => (
                          <span key={brand} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                            {brand}
                          </span>
                        ))}
                        {service.brands.length > 4 && (
                          <span className="px-3 py-1 bg-blue-100 rounded-full text-xs text-blue-600">
                            +{service.brands.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More & Get Quote
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Our Service Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just fix appliances - we provide a complete service experience 
              that puts your satisfaction first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Same-Day Service',
                description: 'Emergency repairs available with same-day appointments when needed most.',
                icon: '⚡'
              },
              {
                title: 'Transparent Pricing',
                description: 'Upfront quotes with no hidden fees. You know the cost before we start.',
                icon: '💰'
              },
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed technicians with comprehensive insurance coverage.',
                icon: '🛡️'
              },
              {
                title: 'Satisfaction Guarantee',
                description: '100% satisfaction guarantee on all repairs. We stand behind our work.',
                icon: '✅'
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Your Appliances Fixed?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't let broken appliances disrupt your daily routine. 
              Contact Boston&apos;s most trusted repair service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-50"
                asChild
              >
                <Link href="/service-request">
                  Schedule Online
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="tel:+15551234567">
                  Call Now: (555) 123-4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}