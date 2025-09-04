'use client'

import Link from 'next/link'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const footerSections = {
  services: [
    { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
    { name: 'Oven & Range Repair', href: '/services/oven-repair' },
    { name: 'Dishwasher Repair', href: '/services/dishwasher-repair' },
    { name: 'Washing Machine Repair', href: '/services/washing-machine-repair' },
    { name: 'Dryer Repair', href: '/services/dryer-repair' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Service Request', href: '/service-request' },
  ],
  serviceAreas: [
    'Denver, CO',
    'Aurora, CO', 
    'Lakewood, CO',
    'Westminster, CO',
    'Arvada, CO'
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Umit&apos;s Amazing Services</span>
                  <span className="text-sm text-blue-400 font-medium">Appliance Repair</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Denver&apos;s most trusted appliance repair service. Same-day service, transparent pricing, and 100% satisfaction guaranteed.
              </p>
            </div>

            {/* Emergency Hours */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-4 border border-blue-700">
              <div className="flex items-center space-x-2 mb-2">
                <ClockIcon className="w-5 h-5 text-blue-300" />
                <span className="font-semibold text-blue-100">Emergency Service</span>
              </div>
              <p className="text-blue-200 text-sm">Available 24/7 for urgent repairs</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerSections.services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Service Areas</h4>
              <ul className="space-y-2">
                {footerSections.serviceAreas.map((area) => (
                  <li key={area} className="text-gray-400 text-sm">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <PhoneIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+15551234567"
                    className="text-white font-semibold hover:text-blue-400 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                  <p className="text-gray-400 text-sm">Call anytime for service</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@umitsamazingservices.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    info@umitsamazingservices.com
                  </a>
                  <p className="text-gray-400 text-sm">Email us your questions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">123 Main Street Suite 456</p>
                  <p className="text-white">Denver, CO 80202</p>
                  <p className="text-gray-400 text-sm">Serving Greater Denver Area</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link 
                href="/service-request"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all"
              >
                Schedule Service Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Fasteny Appliance Repair. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Same-Day Service</span>
              <span>•</span>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}