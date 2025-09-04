'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  PhoneIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const processSteps = [
  {
    step: 1,
    title: 'Call or Book Online',
    description: 'Contact us by phone or use our online booking system to schedule your repair.',
    icon: PhoneIcon,
    color: 'from-blue-500 to-blue-600'
  },
  {
    step: 2,
    title: 'We Arrive & Diagnose',
    description: 'Our certified technician arrives on time and quickly diagnoses the problem.',
    icon: CalendarDaysIcon,
    color: 'from-green-500 to-green-600'
  },
  {
    step: 3,
    title: 'Transparent Quote',
    description: 'We provide an upfront, transparent quote before starting any repair work.',
    icon: WrenchScrewdriverIcon,
    color: 'from-orange-500 to-orange-600'
  },
  {
    step: 4,
    title: 'Quality Repair',
    description: 'We fix your appliance using quality parts and provide a warranty on our work.',
    icon: CheckCircleIcon,
    color: 'from-purple-500 to-purple-600'
  }
]

export default function ServiceProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your appliances fixed has never been easier. Here&apos;s how we make it simple and stress-free.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full" />

          <div className="space-y-12 lg:space-y-20">
            {processSteps.map((step, stepIndex) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  stepIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mr-4`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Step {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step number circle */}
                <div className="relative">
                  <div className="w-20 h-20 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 lg:block hidden" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Don&apos;t let a broken appliance disrupt your daily routine. Contact us today for fast, reliable repair service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-semibold rounded-xl text-blue-600 bg-white hover:bg-gray-50 transform hover:scale-105 transition-all"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </a>
              <a 
                href="/service-request"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-xl text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all"
              >
                Schedule Online
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}