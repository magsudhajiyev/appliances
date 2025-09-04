'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const brands = [
  { name: 'Samsung', logo: '/brands/samsung.svg' },
  { name: 'LG', logo: '/brands/lg.svg' },
  { name: 'Whirlpool', logo: '/brands/whirlpool.svg' },
  { name: 'GE', logo: '/brands/ge.svg' },
  { name: 'Frigidaire', logo: '/brands/frigidaire.svg' },
  { name: 'Maytag', logo: '/brands/maytag.svg' },
  { name: 'KitchenAid', logo: '/brands/kitchenaid.svg' },
  { name: 'Bosch', logo: '/brands/bosch.svg' },
  { name: 'Viking', logo: '/brands/viking.svg' },
  { name: 'Sub-Zero', logo: '/brands/subzero.svg' },
]

export default function BrandsWeService() {
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
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
            We Service All Major Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Factory-trained technicians experienced with all major appliance brands. 
            No matter what brand you have, we can fix it.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 h-32 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                {/* For now using text instead of logos until actual brand logos are added */}
                <div className="text-2xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-center">
                  {brand.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Brand?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We service many more brands than listed here. Our technicians are trained 
              to work on virtually any appliance brand. Give us a call to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all"
              >
                Call (555) 123-4567
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-xl text-blue-600 bg-white hover:bg-blue-50 transform hover:scale-105 transition-all"
              >
                Contact Us Online
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}