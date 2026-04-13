import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Auto Body Services",
  "Complete auto body repair services in Dallas, TX — collision repair, auto painting, bumper repair, dent removal, frame repair, and insurance claims. Free estimates.",
  "/services"
)

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Red hero bar */}
      <div className="bg-[#E53E3E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">What We Do</p>
          <h1
            className="text-5xl sm:text-6xl font-bold uppercase leading-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Services
          </h1>
          <p className="text-white/80 mt-3 text-lg max-w-2xl">
            From minor dents to major collision damage — if it&apos;s body work, we handle it. Dallas has trusted Mayo&apos;s since 1998.
          </p>
        </div>
      </div>

      {/* Services list */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-white border border-[#E5E5E5] hover:border-[#E53E3E] p-8 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2
                      className="text-[#111111] text-2xl font-bold uppercase tracking-wide mb-3 group-hover:text-[#E53E3E] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-[#555555] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="text-[#E53E3E] text-xs uppercase tracking-wider font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More &amp; Get Estimate
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-[#E5E5E5] group-hover:text-[#E53E3E] transition-colors flex-shrink-0">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
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
