'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'

const serviceRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().min(5, 'Please enter your complete address'),
  appliance: z.string().min(1, 'Please select an appliance type'),
  brand: z.string().optional(),
  model: z.string().optional(),
  issue: z.string().min(10, 'Please describe the issue in detail (minimum 10 characters)'),
  urgency: z.enum(['same_day', 'next_day', 'within_week']),
  preferredContact: z.enum(['phone', 'email', 'either'])
})

type ServiceRequestForm = z.infer<typeof serviceRequestSchema>

const appliances = [
  'Refrigerator',
  'Oven/Range', 
  'Dishwasher',
  'Washing Machine',
  'Dryer',
  'Microwave',
  'Other'
]

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 
  'Maytag', 'KitchenAid', 'Bosch', 'Viking', 'Sub-Zero', 'Other'
]

export default function ServiceRequestForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset
  } = useForm<ServiceRequestForm>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      urgency: 'within_week',
      preferredContact: 'either'
    }
  })

  const onSubmit = async (data: ServiceRequestForm) => {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        const errorData = await response.json()
        setSubmitError(errorData.error || 'An error occurred. Please try again.')
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    let fieldsToValidate: (keyof ServiceRequestForm)[]
    
    if (step === 1) {
      fieldsToValidate = ['appliance', 'brand', 'issue']
    } else if (step === 2) {
      fieldsToValidate = ['name', 'phone', 'email', 'address']
    } else {
      fieldsToValidate = ['urgency', 'preferredContact']
    }
    
    const isValid = await trigger(fieldsToValidate)
    if (isValid && step < 3) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (isSubmitted) {
    return (
      <motion.div 
        className="text-center p-8 bg-green-50 rounded-2xl border border-green-200 max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Request Submitted!</h3>
        <p className="text-green-700 mb-4">
          Thank you! We&apos;ll contact you within 30 minutes to confirm your appointment.
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false)
            setStep(1)
          }}
          variant="outline"
          className="border-green-600 text-green-600 hover:bg-green-50"
        >
          Submit Another Request
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {i}
              </div>
              {i < 3 && (
                <div className={`w-16 h-1 mx-2 transition-colors ${
                  step > i ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {step === 1 && 'Appliance Information'}
            {step === 2 && 'Contact Information'}  
            {step === 3 && 'Schedule & Preferences'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1: Appliance Information */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Appliance Type *
              </label>
              <select 
                {...register('appliance')}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="">Select appliance type</option>
                {appliances.map(appliance => (
                  <option key={appliance} value={appliance}>{appliance}</option>
                ))}
              </select>
              {errors.appliance && (
                <p className="mt-1 text-sm text-red-600">{errors.appliance.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Brand
              </label>
              <select 
                {...register('brand')}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="">Select brand (optional)</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Model Number
              </label>
              <input
                type="text"
                {...register('model')}
                placeholder="Model number (if known)"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Describe the Issue *
              </label>
              <textarea
                {...register('issue')}
                rows={4}
                placeholder="Please describe what&apos;s wrong with your appliance..."
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
              />
              {errors.issue && (
                <p className="mt-1 text-sm text-red-600">{errors.issue.message}</p>
              )}
            </div>

            <Button type="button" onClick={nextStep} size="lg" className="w-full">
              Next: Contact Information →
            </Button>
          </motion.div>
        )}

        {/* Step 2: Contact Information */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                {...register('name')}
                placeholder="Your full name"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phone')}
                placeholder="(555) 123-4567"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="your@email.com"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service Address *
              </label>
              <input
                type="text"
                {...register('address')}
                placeholder="123 Main Street, Denver, CO 80202"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            <div className="flex gap-4">
              <Button type="button" onClick={prevStep} variant="outline" size="lg" className="w-full">
                ← Previous
              </Button>
              <Button type="button" onClick={nextStep} size="lg" className="w-full">
                Next: Schedule →
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Schedule & Preferences */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                When do you need service? *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'same_day', label: 'Same Day (Emergency)', desc: 'Additional fees may apply' },
                  { value: 'next_day', label: 'Next Day', desc: 'Preferred morning or afternoon' },
                  { value: 'within_week', label: 'Within a Week', desc: 'Flexible scheduling' }
                ].map(option => (
                  <label key={option.value} className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-blue-300 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      {...register('urgency')}
                      value={option.value}
                      className="mr-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Preferred Contact Method *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'phone', label: 'Phone Call', desc: 'We&apos;ll call you to confirm' },
                  { value: 'email', label: 'Email', desc: 'We&apos;ll email you details' },
                  { value: 'either', label: 'Either', desc: 'Use whichever is convenient' }
                ].map(option => (
                  <label key={option.value} className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-blue-300 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      {...register('preferredContact')}
                      value={option.value}
                      className="mr-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-700">{submitError}</span>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button type="button" onClick={prevStep} variant="outline" size="lg" className="w-full">
                ← Previous
              </Button>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Service Request'}
              </Button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  )
}