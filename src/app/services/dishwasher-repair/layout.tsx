import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dishwasher Repair Denver | Same-Day Service | Umit&apos;s Amazing Services',
  description: 'Professional dishwasher repair in Denver, CO. Fix drainage issues, cleaning problems, and more. Same-day service available. Licensed technicians.',
  keywords: 'dishwasher repair Denver, dishwasher not draining, dishwasher not cleaning, Denver appliance repair',
}

export default function DishwasherRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}