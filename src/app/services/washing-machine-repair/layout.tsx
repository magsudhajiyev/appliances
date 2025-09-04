import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Washing Machine Repair Denver | Same-Day Service | Umit&apos;s Amazing Services',
  description: 'Expert washing machine repair in Denver, CO. Fix drainage, spinning, and cleaning issues. Same-day service available for all major brands.',
  keywords: 'washing machine repair Denver, washer repair, washer not spinning, washer not draining, Denver appliance repair',
}

export default function WashingMachineRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}