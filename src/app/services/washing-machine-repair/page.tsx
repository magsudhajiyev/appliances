'use client'

import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const commonProblems = [
  "Not spinning or agitating",
  "Not draining water",
  "Excessive vibration or shaking", 
  "Not filling with water",
  "Door or lid won't lock",
  "Clothes still dirty after wash",
  "Water leaking from machine",
  "Strange noises during cycle",
  "Control panel not responding"
]

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 
  'Maytag', 'KitchenAid', 'Bosch', 'Electrolux', 'Kenmore'
]

const whyChooseUs = [
  "Top-load & front-load experts",
  "Water damage specialists", 
  "Load balancing solutions",
  "Energy efficiency optimization"
]

const maintenanceTips = [
  "Clean the lint filter and drain pump filter monthly to prevent clogs",
  "Use the correct amount of detergent - too much can cause excessive suds and residue",
  "Leave the door or lid open after washing to allow moisture to evaporate",
  "Check and clean the rubber door seal on front-loading machines monthly",
  "Run a cleaning cycle with washing machine cleaner every month",
  "Balance loads properly to prevent excessive vibration and wear on components"
]

const faqs = [
  {
    question: "Why is my washing machine not spinning?",
    answer: "Common causes include unbalanced loads, faulty lid switches, worn drive belts, or motor issues. Our technicians can diagnose and fix spinning problems quickly."
  },
  {
    question: "Why is there water left in my washing machine after a cycle?",
    answer: "This usually indicates a drainage problem caused by clogged filters, kinked drain hoses, or pump issues. We can restore proper drainage functionality."
  },
  {
    question: "Why does my washing machine shake so much?",
    answer: "Excessive vibration is often caused by unbalanced loads, unlevel installation, or worn suspension components. We can identify and fix the root cause."
  },
  {
    question: "How do I prevent mold in my front-loading washer?",
    answer: "Leave the door open after use, clean the rubber seal regularly, use less detergent, and run cleaning cycles monthly with appropriate cleaners."
  },
  {
    question: "Should I repair or replace my washing machine?",
    answer: "If your washer is under 8 years old and the repair cost is less than half the replacement cost, repair is usually the better option. We can help you decide."
  }
]

export default function WashingMachineRepairPage() {
  return (
    <ServicePageTemplate
      title="Washing Machine Repair"
      subtitle="Expert washing machine repair services in Boston"
      description="Keep your laundry routine running smoothly with professional washing machine repairs. We fix all types of washers from top-loading to front-loading machines."
      icon={Cog8ToothIcon}
      gradient="from-purple-500 to-pink-500"
      commonProblems={commonProblems}
      brands={brands}
      whyChooseUs={whyChooseUs}
      maintenanceTips={maintenanceTips}
      faqs={faqs}
    />
  )
}