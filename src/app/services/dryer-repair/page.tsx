'use client'

import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const commonProblems = [
  "Not heating properly",
  "Takes too long to dry",
  "Making loud noises", 
  "Not turning on",
  "Overheating issues",
  "Clothes coming out wrinkled",
  "Drum not turning",
  "Excessive lint buildup",
  "Door not staying closed"
]

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 
  'Maytag', 'KitchenAid', 'Bosch', 'Electrolux', 'Kenmore'
]

const whyChooseUs = [
  "Fire safety specialists",
  "Vent cleaning experts", 
  "Gas & electric certified",
  "Energy efficiency focus"
]

const maintenanceTips = [
  "Clean the lint filter after every load to maintain airflow and prevent fire hazards",
  "Check and clean the exhaust vent annually to prevent blockages and improve efficiency", 
  "Inspect the vent hose for kinks or damage that can restrict airflow",
  "Don't overload the dryer - clothes need space to tumble and dry properly",
  "Use appropriate heat settings for different fabric types to prevent damage",
  "Schedule professional vent cleaning annually for safety and optimal performance"
]

const faqs = [
  {
    question: "Why is my dryer not heating up?",
    answer: "Common causes include clogged vents, faulty heating elements, thermal fuses, or thermostat issues. Our technicians can diagnose and fix heating problems safely."
  },
  {
    question: "Why does my dryer take so long to dry clothes?",
    answer: "Extended drying times are often caused by clogged lint filters, blocked exhaust vents, or worn heating elements. We can restore proper drying efficiency."
  },
  {
    question: "Is it dangerous if my dryer gets too hot?",
    answer: "Yes, overheating can be a fire hazard. Common causes include restricted airflow or faulty thermostats. Contact us immediately if you notice overheating."
  },
  {
    question: "How often should I clean my dryer vent?",
    answer: "Clean the lint filter after every load and have the exhaust vent professionally cleaned at least once a year, or more frequently with heavy use."
  },
  {
    question: "Can you repair both gas and electric dryers?",
    answer: "Yes, our technicians are certified to safely repair both gas and electric dryers from all major manufacturers."
  }
]

export default function DryerRepairPage() {
  return (
    <ServicePageTemplate
      title="Dryer Repair"
      subtitle="Professional gas and electric dryer repair in Boston"
      description="Get your clothes dry quickly and safely with expert dryer repairs. Our certified technicians prioritize fire safety while restoring optimal drying performance."
      icon={WrenchScrewdriverIcon}
      gradient="from-amber-500 to-yellow-500"
      commonProblems={commonProblems}
      brands={brands}
      whyChooseUs={whyChooseUs}
      maintenanceTips={maintenanceTips}
      faqs={faqs}
    />
  )
}