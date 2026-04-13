import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'
import { serviceSchema, faqPageSchema } from '@/lib/schema'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return pageMetadata(
    service.title,
    `${service.title} in Dallas, TX — Mayo's Body Shop. ${service.description} Free estimates. We work with all insurance.`,
    `/services/${slug}`
  )
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const svcSchema = serviceSchema(
    service.title,
    service.description,
    `https://mayosbodyshop.com/services/${slug}`
  )
  const faqSchema = faqPageSchema(service.faq)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="text-[#A0A0A0] hover:text-white text-sm uppercase tracking-wider flex items-center gap-1 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <SectionHeading
            label="Dallas Auto Body"
            title={service.heroHeadline}
            subtitle={service.heroSub}
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-200 hover:scale-[1.02]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12147440766"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white px-8 py-4 uppercase tracking-wider text-sm transition-all hover:bg-white/5 gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (214) 744-0766
            </a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-5">
              {service.longDescription.map((para, i) => (
                <p key={i} className="text-[#A0A0A0] leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>

            {/* Before/after */}
            <div className="space-y-3">
              <BeforeAfterSlider
                beforeSrc={slug === 'collision-repair' ? '/images/gallery/honda-civic-collision-before.png' : ''}
                afterSrc={slug === 'collision-repair' ? '/images/gallery/honda-civic-collision-after.png' : ''}
                beforeAlt={`Before ${service.title} — Mayo's Body Shop Dallas`}
                afterAlt={`After ${service.title} — fully restored at Mayo's Body Shop Dallas`}
                aspectRatio="aspect-[4/3]"
                isPlaceholder={slug !== 'collision-repair'}
              />
              <p className="text-[#A0A0A0] text-xs text-center uppercase tracking-wider">
                Drag to compare — {service.title} results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#111111] border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="How It Works" title="Our Process" />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#E53E3E] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                      {step.step}
                    </span>
                  </div>
                  <div className="h-px bg-[#2A2A2A] flex-1" />
                </div>
                <h3
                  className="text-white font-bold uppercase tracking-wide mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Questions"
            title={`${service.shortTitle} FAQ`}
            subtitle="Common questions about this service."
          />
          <div className="mt-10">
            <FAQAccordion items={service.faq} />
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready for ${service.shortTitle} in Dallas?`}
        subtitle="Get your free estimate today. We work with all insurance and have been restoring Dallas vehicles since 1998."
      />
    </>
  )
}
