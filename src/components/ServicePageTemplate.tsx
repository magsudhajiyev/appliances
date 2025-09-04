'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  PhoneIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  commonProblems: string[]
  brands: string[]
  whyChooseUs: string[]
  maintenanceTips: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  gradient,
  commonProblems,
  brands,
  whyChooseUs,
  maintenanceTips,
  faqs
}: ServicePageProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-200 mb-6">
                {subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" asChild>
                  <Link href="/service-request">
                    Get Free Estimate
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common {title.replace(' Repair', '')} Problems We Fix
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced technicians can diagnose and fix these common issues and many more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <WrenchScrewdriverIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{problem}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {title} Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Brands We Service
            </h2>
            <p className="text-xl text-gray-600">
              Factory-trained technicians experienced with all major brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="text-lg font-bold text-gray-700">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Maintenance Tips
            </h2>
            <p className="text-xl text-gray-600">
              Keep your {title.replace(' Repair', '').toLowerCase()} running efficiently with these expert tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {maintenanceTips.map((tip, index) => (
              <motion.div
                key={tip}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Fix Your {title.replace(' Repair', '')}?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don&apos;t let a broken appliance disrupt your daily routine. Contact us today for fast, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-50"
                asChild
              >
                <Link href="/service-request">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  Schedule Service Now
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="tel:+15551234567">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}