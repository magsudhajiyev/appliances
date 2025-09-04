import { Metadata } from 'next'
import ServiceRequestForm from '@/components/forms/ServiceRequestForm'
import { PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Schedule Appliance Repair Service | Denver | Umit&apos;s Amazing Services',
  description: 'Schedule your appliance repair service online. Fast, convenient booking for all major appliances in Denver, CO. Same-day service available.',
  keywords: 'schedule appliance repair, book repair service, Denver appliance service, online booking, Umit Amazing Services',
}

export default function ServiceRequestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your Repair Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get your appliances fixed by Denver&apos;s most trusted repair service. 
            Fill out the form below and we&apos;ll contact you within 30 minutes.
          </p>
          
          {/* Quick Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-md">
              <PhoneIcon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Call now:</span>
              <a href="tel:+15551234567" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                (555) 123-4567
              </a>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-xl">
              <ClockIcon className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-medium">Same-day service available</span>
            </div>
          </div>
        </div>

        <ServiceRequestForm />

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">We&apos;ll contact you within 30 minutes to confirm your appointment</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-600 text-sm">Emergency repairs available with same-day appointments</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">100%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-sm">We&apos;re not happy until you&apos;re completely satisfied</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}