import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oven & Range Repair Boston | Gas & Electric | Umit&apos;s Amazing Services',
  description: 'Professional oven and range repair in Boston, MA. Fix heating issues, temperature problems, and more. Same-day service for gas and electric ovens.',
  keywords: 'oven repair Boston, range repair, gas oven repair, electric oven repair, Boston appliance repair',
}

export default function OvenRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}