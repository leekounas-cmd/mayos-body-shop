import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { PageHero } from '@/components/ui/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Auto Body Services",
  "Complete auto body repair services in Dallas, TX — collision repair, auto painting, bumper repair, dent removal, frame repair, and insurance claims. Free estimates.",
  "/services"
)

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="From minor dents to major collision damage — if it's body work, we handle it."
      />

      <section className="py-16 lg:py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2
                      className="text-[#111111] text-2xl font-bold uppercase tracking-wide mb-3 group-hover:text-[#E53E3E] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-[#666666] leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#E53E3E] text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-200">
                      Learn More &amp; Get Estimate
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-[#DDDDDD] group-hover:text-[#E53E3E] transition-colors duration-200 flex-shrink-0 mt-1">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
