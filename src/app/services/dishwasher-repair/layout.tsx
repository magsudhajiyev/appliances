import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dishwasher Repair Boston | Same-Day Service | Umit&apos;s Amazing Services',
  description: 'Professional dishwasher repair in Boston, MA. Fix drainage issues, cleaning problems, and more. Same-day service available. Licensed technicians.',
  keywords: 'dishwasher repair Boston, dishwasher not draining, dishwasher not cleaning, Boston appliance repair',
}

export default function DishwasherRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}