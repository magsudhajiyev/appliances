'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CubeIcon,
  FireIcon,
  SparklesIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const services = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    description: 'Keep your food fresh and safe with expert refrigerator repairs',
    icon: CubeIcon,
    link: '/services/refrigerator-repair',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'oven',
    name: 'Oven & Range Repair', 
    description: 'Get back to cooking what you love with professional oven service',
    icon: FireIcon,
    link: '/services/oven-repair',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: 'Clean dishes, hassle-free with reliable dishwasher repairs',
    icon: SparklesIcon,
    link: '/services/dishwasher-repair', 
    gradient: 'from-teal-500 to-green-500'
  },
  {
    id: 'washer',
    name: 'Washing Machine Repair',
    description: 'Fresh laundry every time with expert washer maintenance',
    icon: Cog8ToothIcon,
    link: '/services/washing-machine-repair',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'dryer', 
    name: 'Dryer Repair',
    description: 'Dry clothes quickly and safely with professional dryer service',
    icon: WrenchScrewdriverIcon,
    link: '/services/dryer-repair',
    gradient: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'other',
    name: 'Other Appliances',
    description: 'We fix it all! Contact us for other appliance repair needs',
    icon: HomeIcon,
    link: '/contact',
    gradient: 'from-gray-500 to-slate-500'
  }
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
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
            Complete Appliance Repair Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional repair for all your home appliances with same-day service available
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href={service.link}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                  <div className="p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Link */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More 
                      <motion.span 
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Service stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Same Day</div>
              <div className="text-sm text-gray-600">Service Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}