import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Denver Appliance Repair | Same-Day Service | Umit&apos;s Amazing Services',
    template: '%s | Umit&apos;s Amazing Services'
  },
  description: 'Expert appliance repair in Denver, CO. Same-day service for refrigerators, ovens, dishwashers, washers, and dryers. Licensed, insured, 100% satisfaction guaranteed.',
  keywords: 'appliance repair Denver, refrigerator repair, oven repair, dishwasher repair, same day service',
  authors: [{ name: 'Umit&apos;s Amazing Services' }],
  creator: 'Umit&apos;s Amazing Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://umitsamazingservices.com',
    siteName: 'Umit&apos;s Amazing Services',
    title: 'Denver Appliance Repair | Same-Day Service',
    description: 'Expert appliance repair in Denver, CO. Same-day service available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Denver Appliance Repair Service',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}