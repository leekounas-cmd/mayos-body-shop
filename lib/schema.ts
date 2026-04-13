export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoBodyShop',
  name: "Mayo's Body Shop",
  image: 'https://mayosbodyshop.com/images/mayos-body-shop-dallas.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '314 Harbin St',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    postalCode: '75208',
    addressCountry: 'US',
  },
  telephone: '+12147440766',
  url: 'https://mayosbodyshop.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '118',
  },
  foundingDate: '1998',
  areaServed: {
    '@type': 'City',
    name: 'Dallas',
  },
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'AutoBodyShop',
      name: "Mayo's Body Shop",
      url: 'https://mayosbodyshop.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dallas',
    },
    url,
  }
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
