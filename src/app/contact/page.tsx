import { Metadata } from 'next'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Umit&apos;s Amazing Services | Boston, MA | (555) 123-4567',
  description: 'Contact Umit&apos;s Amazing Services for expert service in Boston, MA. Call (555) 123-4567 or visit us at 123 Main Street Suite 456, Boston, MA.',
  keywords: 'contact appliance repair Boston, Umit Amazing Services contact, Boston repair service phone',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to get your appliances fixed? Contact Boston&apos;s most trusted appliance repair service today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href="tel:+15551234567"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium"
                    >
                      (555) 123-4567
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call anytime for immediate service</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:info@umitsamazingservices.com"
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      info@umitsamazingservices.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Send us your questions or requests</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                    <div className="text-gray-700">
                      <p>123 Main Street Suite 456</p>
                      <p>Boston, MA 02101</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Serving Greater Boston Area</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: 10:00 AM - 3:00 PM</p>
                      <p className="text-orange-600 font-medium mt-2">Emergency Service: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Emergency Service Available</h3>
              <p className="text-red-100 mb-6 leading-relaxed">
                Appliance emergency? Don't wait! We offer 24/7 emergency repair service for urgent situations.
                Additional fees may apply for after-hours service.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-red-50 font-semibold"
                asChild
              >
                <a href="tel:+15551234567">
                  Call Emergency Line: (555) 123-4567
                </a>
              </Button>
            </div>
          </div>

          {/* Service Areas & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full justify-start text-left" asChild>
                  <Link href="/service-request">
                    <span className="mr-3">📋</span>
                    Schedule Service Online
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full justify-start text-left"
                  asChild
                >
                  <a href="tel:+15551234567">
                    <PhoneIcon className="w-5 h-5 mr-3" />
                    Call Now: (555) 123-4567
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full justify-start text-left"
                  asChild
                >
                  <a href="mailto:info@umitsamazingservices.com">
                    <EnvelopeIcon className="w-5 h-5 mr-3" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Boston', 'Cambridge', 'Somerville', 'Newton',
                  'Brookline', 'Revere', 'Chelsea', 'Malden',
                  'Medford', 'Arlington', 'Watertown', 'Belmont'
                ].map((city) => (
                  <div key={city} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 text-sm mt-6 p-4 bg-blue-50 rounded-xl">
                Don't see your area listed? We may still service your location. 
                Call us to confirm service availability in your area.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Umit&apos;s Amazing Services?</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Same-day service available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Factory-trained technicians
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Transparent, upfront pricing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  100% satisfaction guarantee
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Licensed & insured
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}