'use client'

import { FireIcon } from '@heroicons/react/24/outline'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const commonProblems = [
  "Oven not heating properly",
  "Temperature inconsistencies", 
  "Burners not working",
  "Self-cleaning cycle issues",
  "Door not closing properly",
  "Control panel malfunctions",
  "Gas smell or ignition problems",
  "Broiler not functioning",
  "Oven light not working"
]

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 
  'Maytag', 'KitchenAid', 'Bosch', 'Viking', 'Thermador'
]

const whyChooseUs = [
  "Gas & electric oven expertise",
  "Same-day emergency service", 
  "Safety-first approach",
  "Warranty on all repairs"
]

const maintenanceTips = [
  "Clean your oven regularly to prevent grease buildup and ensure even heating",
  "Check and clean burner ports on gas ranges to maintain proper flame patterns",
  "Calibrate oven temperature annually using an oven thermometer for accuracy",
  "Keep oven door seals clean and check for damage that can affect temperature control",
  "Use the self-cleaning cycle sparingly and ensure proper ventilation during use",
  "Replace oven light bulbs promptly to monitor cooking progress effectively"
]

const faqs = [
  {
    question: "Why is my oven not heating to the correct temperature?",
    answer: "This could be due to a faulty thermostat, heating element issues, or calibration problems. Our technicians can diagnose and fix temperature control issues quickly."
  },
  {
    question: "Is it safe to repair a gas oven myself?",
    answer: "Gas oven repairs should always be performed by certified professionals due to safety risks. We're licensed and insured to handle all gas appliance repairs safely."
  },
  {
    question: "How often should I clean my oven?",
    answer: "For regular use, clean your oven every 3-6 months or when you notice excessive buildup. Self-cleaning ovens can be run 2-3 times per year."
  },
  {
    question: "What should I do if I smell gas from my oven?",
    answer: "Turn off the gas supply immediately, don't use electrical switches, ventilate the area, and call us right away. Gas leaks are serious safety hazards that require immediate attention."
  },
  {
    question: "Can you repair both gas and electric ovens?",
    answer: "Yes, our technicians are trained and certified to repair both gas and electric ovens and ranges from all major manufacturers."
  }
]

export default function OvenRepairPage() {
  return (
    <ServicePageTemplate
      title="Oven & Range Repair"
      subtitle="Expert gas and electric oven repair in Boston"
      description="Get back to cooking with professional oven and range repairs. Our certified technicians handle both gas and electric units with safety as our top priority."
      icon={FireIcon}
      gradient="from-orange-500 to-red-500"
      commonProblems={commonProblems}
      brands={brands}
      whyChooseUs={whyChooseUs}
      maintenanceTips={maintenanceTips}
      faqs={faqs}
    />
  )
}