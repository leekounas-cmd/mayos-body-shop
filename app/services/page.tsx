import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { PageHero } from '@/components/ui/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Auto Body Services",
  "Auto body repair services in Dallas, TX — collision repair, painting, bumper repair, dent & scratch, frame repair, and insurance claims assistance.",
  "/services"
)

const serviceIcons: Record<string, React.ReactNode> = {
  'collision-repair': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  'auto-painting': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  'bumper-repair': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  'dent-scratch-repair': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  'frame-repair': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'insurance-claims': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <PageHero
        eyebrow="What We Do"
        title={<>All Our<br />Services</>}
        subtitle="From a fender bender to a full rebuild — we handle it all and work directly with your insurance."
      />

      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-white border-2 border-[#111111] p-8 shadow-[4px_4px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#E53E3E]"
              >
                <div className="w-11 h-11 border-2 border-[#111111] bg-white text-[#111111] group-hover:bg-[#E53E3E] group-hover:text-white group-hover:border-[#E53E3E] flex items-center justify-center mb-5 transition-all duration-150 flex-shrink-0">
                  {serviceIcons[service.slug]}
                </div>
                <h3
                  className="text-[#111111] text-xl font-bold uppercase tracking-wide mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.shortTitle}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#E53E3E] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                  Learn More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance banner */}
      <section className="py-12 bg-white border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-12 h-12 border-2 border-[#111111] bg-[#E53E3E] text-white flex items-center justify-center shadow-[3px_3px_0px_#111111]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-[#111111] text-xl font-bold uppercase mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                We Work With All Insurance
              </h3>
              <p className="text-[#666666] text-sm">
                State Farm, GEICO, Allstate, Progressive, Farmers, USAA — we deal with your adjuster so you don&apos;t have to.
              </p>
            </div>
            <Link
              href="/get-estimate"
              className="flex-shrink-0 inline-flex items-center justify-center border-2 border-[#111111] bg-[#E53E3E] text-white font-bold px-7 py-3.5 uppercase tracking-wider text-sm shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#111111]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
