import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Auto Body Services",
  "Complete auto body repair services in Dallas, TX — collision repair, auto painting, bumper repair, dent removal, frame repair, and insurance claims. Free estimates.",
  "/services"
)

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            subtitle="From minor dents to major collision damage — if it's body work, we handle it. Dallas has trusted Mayo's since 1998."
          />
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#E53E3E]/50 p-8 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2
                      className="text-white text-2xl font-bold uppercase tracking-wide mb-3 group-hover:text-[#E53E3E] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-[#A0A0A0] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="text-[#E53E3E] text-xs uppercase tracking-wider font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More & Get Estimate
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-[#2A2A2A] group-hover:text-[#E53E3E] transition-colors flex-shrink-0">
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
    </>
  )
}
