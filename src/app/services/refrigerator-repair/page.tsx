'use client'

import { CubeIcon } from '@heroicons/react/24/outline'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const commonProblems = [
  "Not cooling properly",
  "Freezer not working",
  "Ice maker not producing ice", 
  "Water dispenser issues",
  "Strange noises or sounds",
  "Door seal problems",
  "Temperature fluctuations",
  "Water leaking inside or outside",
  "Excessive frost buildup"
]

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 
  'Maytag', 'KitchenAid', 'Bosch', 'Viking', 'Sub-Zero'
]

const whyChooseUs = [
  "Same-day service available",
  "Factory-trained technicians", 
  "Transparent upfront pricing",
  "100% satisfaction guarantee"
]

const maintenanceTips = [
  "Clean the condenser coils every 6 months to improve efficiency and prevent overheating",
  "Check and replace water filters regularly to ensure clean ice and water",
  "Keep the refrigerator at 37°F and freezer at 0°F for optimal food safety",
  "Clean door seals monthly and check for cracks or damage that can cause air leaks",
  "Don't overcrowd the refrigerator - allow air to circulate freely around items",
  "Clean the interior monthly with baking soda solution to eliminate odors"
]

const faqs = [
  {
    question: "Why is my refrigerator not cooling properly?",
    answer: "Common causes include dirty condenser coils, faulty thermostats, refrigerant leaks, or compressor issues. Our technicians can quickly diagnose and fix the problem."
  },
  {
    question: "How often should I replace my refrigerator water filter?",
    answer: "Most manufacturers recommend replacing water filters every 6 months or after filtering 300-400 gallons of water, whichever comes first."
  },
  {
    question: "What should I do if my refrigerator is making strange noises?",
    answer: "Some noise is normal, but loud or unusual sounds could indicate issues with the compressor, fan motors, or other components. Contact us for a professional diagnosis."
  },
  {
    question: "Why is there water leaking from my refrigerator?",
    answer: "Water leaks can be caused by clogged drain lines, damaged door seals, or issues with the ice maker. We can identify the source and provide a permanent fix."
  },
  {
    question: "How long do refrigerator repairs typically take?",
    answer: "Most repairs can be completed in a single visit within 1-2 hours. Complex issues may require ordering special parts, which typically arrive within 2-3 business days."
  }
]

export default function RefrigeratorRepairPage() {
  return (
    <ServicePageTemplate
      title="Refrigerator Repair"
      subtitle="Professional refrigerator repair services in Boston"
      description="Keep your food fresh and safe with expert refrigerator repairs. Our certified technicians fix all major brands and models with same-day service available."
      icon={CubeIcon}
      gradient="from-blue-500 to-cyan-500"
      commonProblems={commonProblems}
      brands={brands}
      whyChooseUs={whyChooseUs}
      maintenanceTips={maintenanceTips}
      faqs={faqs}
    />
  )
}