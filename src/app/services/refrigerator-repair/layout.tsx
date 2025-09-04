import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refrigerator Repair Denver | Same-Day Service | Umit&apos;s Amazing Services',
  description: 'Expert refrigerator repair in Denver, CO. Fix cooling issues, ice maker problems, and more. Same-day service available. Licensed & insured technicians.',
  keywords: 'refrigerator repair Denver, fridge repair, cooling problems, ice maker repair, Denver appliance repair',
}

export default function RefrigeratorRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}