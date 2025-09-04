'use client'

import { SparklesIcon } from '@heroicons/react/24/outline'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const commonProblems = [
  "Not draining properly",
  "Dishes not getting clean",
  "Water not heating up", 
  "Door latch problems",
  "Unusual noises during cycle",
  "Not dispensing detergent",
  "Leaking water",
  "Control panel issues",
  "Spray arms clogged"
]

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 
  'Maytag', 'KitchenAid', 'Bosch', 'Viking', 'Miele'
]

const whyChooseUs = [
  "Drainage specialists",
  "Water damage prevention", 
  "Energy efficiency focus",
  "Quick turnaround times"
]

const maintenanceTips = [
  "Clean the dishwasher filter monthly to prevent clogs and ensure proper drainage",
  "Run an empty cycle with dishwasher cleaner every few months to remove buildup",
  "Check and clean spray arms regularly to maintain water pressure and coverage",
  "Scrape dishes before loading but don't pre-rinse completely - enzymes need food particles",
  "Use proper detergent amounts and rinse aid to prevent spots and improve drying",
  "Keep the door seal clean and check for tears that could cause leaks"
]

const faqs = [
  {
    question: "Why is my dishwasher not draining?",
    answer: "Common causes include clogged filters, blocked drain hoses, or garbage disposal issues. Our technicians can quickly identify and clear the blockage."
  },
  {
    question: "Why are my dishes still dirty after a wash cycle?",
    answer: "This could be due to clogged spray arms, old detergent, incorrect loading, or water temperature issues. We can diagnose and fix cleaning performance problems."
  },
  {
    question: "Should I rinse dishes before putting them in the dishwasher?",
    answer: "Just scrape off large food particles. Modern dishwashers and detergents are designed to handle food residue, and pre-rinsing can actually reduce cleaning effectiveness."
  },
  {
    question: "Why is there white residue on my dishes?",
    answer: "White spots are usually caused by hard water minerals or too much detergent. We can adjust settings and recommend water softening solutions if needed."
  },
  {
    question: "How long should a dishwasher last?",
    answer: "With proper maintenance, most dishwashers last 9-12 years. Regular cleaning and professional repairs when needed can extend the lifespan significantly."
  }
]

export default function DishwasherRepairPage() {
  return (
    <ServicePageTemplate
      title="Dishwasher Repair"
      subtitle="Professional dishwasher repair services in Denver"
      description="Get clean dishes every time with expert dishwasher repairs. Our technicians fix drainage issues, cleaning problems, and all other dishwasher concerns."
      icon={SparklesIcon}
      gradient="from-teal-500 to-green-500"
      commonProblems={commonProblems}
      brands={brands}
      whyChooseUs={whyChooseUs}
      maintenanceTips={maintenanceTips}
      faqs={faqs}
    />
  )
}