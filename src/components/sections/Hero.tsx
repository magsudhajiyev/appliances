'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-16 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              {...fadeInUp}
            >
              Boston&apos;s Most Trusted
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent block mt-2">
                Appliance Repair Service
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Same-day repairs for all major appliances. Factory-trained technicians, 
              upfront pricing, and 100% satisfaction guaranteed.
            </motion.p>
            
            {/* Key points */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                "Same-Day Service",
                "All Major Brands", 
                "Transparent Pricing",
                "Licensed & Insured"
              ].map((point, index) => (
                <div key={point} className="flex items-center justify-center space-x-2 text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="xl" className="group" asChild>
                <Link href="/service-request">
                  Get Free Estimate
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <a href="tel:+15551234567">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </a>
              </Button>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-sm mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              ⚡ Emergency service available 24/7
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}