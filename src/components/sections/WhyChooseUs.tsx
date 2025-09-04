'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  UserGroupIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Expertise You Can Trust',
    description: 'Factory-trained technicians with years of experience servicing all major appliance brands.',
    icon: UserGroupIcon,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Same-Day Service Available',
    description: 'Quick response times with emergency and same-day appointments for urgent repairs.',
    icon: ClockIcon,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Upfront Pricing – No Surprises',
    description: 'Transparent quotes before we start. You&apos;ll know exactly what you&apos;re paying upfront.',
    icon: CurrencyDollarIcon,
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Customer Satisfaction Guaranteed',
    description: '100% satisfaction guarantee on all our work. We&apos;re not happy until you&apos;re happy.',
    icon: ShieldCheckIcon,
    gradient: 'from-purple-500 to-pink-500'
  }
]

export default function WhyChooseUs() {
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Fasteny Appliance Repair?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing Boston with the best appliance repair service. 
            Here's what sets us apart from the competition.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserGroupIcon className="w-5 h-5" />
              <span className="text-sm font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Emergency Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}