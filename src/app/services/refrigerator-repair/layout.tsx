import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refrigerator Repair Boston | Same-Day Service | Umit&apos;s Amazing Services',
  description: 'Expert refrigerator repair in Boston, MA. Fix cooling issues, ice maker problems, and more. Same-day service available. Licensed & insured technicians.',
  keywords: 'refrigerator repair Boston, fridge repair, cooling problems, ice maker repair, Boston appliance repair',
}

export default function RefrigeratorRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}