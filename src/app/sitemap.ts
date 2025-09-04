import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fastenyappliance.com'
  
  const staticPages = [
    '',
    '/about',
    '/services', 
    '/contact',
    '/service-request'
  ]

  const servicePages = [
    '/services/refrigerator-repair',
    '/services/oven-repair',
    '/services/dishwasher-repair',
    '/services/washing-machine-repair',
    '/services/dryer-repair'
  ]

  const allPages = [...staticPages, ...servicePages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : page.startsWith('/services/') ? 0.8 : 0.7,
  }))
}