import type { MetadataRoute } from 'next'
import { services } from '@/data/services'

const baseUrl = 'https://mayosbodyshop.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/get-estimate`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/reviews`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/gallery`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.5, changeFrequency: 'weekly' as const },
  ]

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...servicePages]
}
