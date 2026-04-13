import type { Metadata } from 'next'

const baseUrl = 'https://mayosbodyshop.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mayo's Body Shop | Auto Body Repair in Dallas, TX",
    template: "%s | Mayo's Body Shop | Dallas, TX",
  },
  description:
    "Dallas' trusted auto body shop since 1998. Collision repair, auto painting, bumper repair, dent removal, frame repair. We work with all insurance. 118+ 5-star reviews.",
  openGraph: {
    type: 'website',
    siteName: "Mayo's Body Shop",
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function pageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  }
}
