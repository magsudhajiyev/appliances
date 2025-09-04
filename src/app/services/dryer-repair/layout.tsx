import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dryer Repair Boston | Gas & Electric | Same-Day Service | Umit&apos;s Amazing Services',
  description: 'Professional dryer repair in Boston, MA. Fix heating, drying, and venting issues. Same-day service for gas and electric dryers. Licensed technicians.',
  keywords: 'dryer repair Boston, dryer not heating, dryer not drying, gas dryer repair, electric dryer repair, Boston appliance repair',
}

export default function DryerRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}