import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '*.map'],
    },
    sitemap: 'https://fastenyappliance.com/sitemap.xml',
  }
}