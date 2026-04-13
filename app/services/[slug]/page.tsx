import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/data/services'
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
    <div className="min-h-screen bg-[#FAFAFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="bg-[#111111] border-b-2 border-[#E53E3E] pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 border-2 border-white/20 bg-white/10 px-3 py-1.5 text-white/60 hover:text-white hover:border-white/50 text-xs font-bold uppercase tracking-wider mb-8 transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="max-w-3xl">
            <div className="mb-5">
              <span className="inline-block border-2 border-[#E53E3E] bg-[#E53E3E] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#ffffff30]" style={{ fontFamily: 'var(--font-heading)' }}>
                Dallas Auto Body
              </span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.93] text-white mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {service.heroHeadline}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">{service.heroSub}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-estimate"
                className="inline-flex items-center justify-center border-2 border-white bg-[#E53E3E] text-white font-bold px-8 py-4 uppercase tracking-widest text-sm shadow-[4px_4px_0px_#ffffff40] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#fff]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent text-white font-bold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-150 hover:bg-white hover:text-[#111111]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (214) 744-0766
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="py-16 sm:py-24 bg-white border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-5">
              {service.longDescription.map((para, i) => (
                <p key={i} className="text-[#555555] leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
            <div>
              <div className="border-2 border-[#111111] overflow-hidden shadow-[5px_5px_0px_#E53E3E]">
                <BeforeAfterSlider
                  beforeSrc={slug === 'collision-repair' ? '/images/gallery/honda-civic-collision-before.png' : ''}
                  afterSrc={slug === 'collision-repair' ? '/images/gallery/honda-civic-collision-after.png' : ''}
                  beforeAlt={`Before ${service.title} — Mayo's Body Shop Dallas`}
                  afterAlt={`After ${service.title} — fully restored at Mayo's Body Shop Dallas`}
                  aspectRatio="aspect-[4/3]"
                  isPlaceholder={slug !== 'collision-repair'}
                />
              </div>
              <p className="text-[#AAAAAA] text-xs text-center mt-3 uppercase tracking-wider">
                Drag to compare — {service.title} results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block border-2 border-[#111111] bg-[#E53E3E] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#111111] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How It Works
            </span>
            <h2
              className="text-[#111111] text-4xl sm:text-5xl font-bold uppercase leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step) => (
              <div key={step.step} className="bg-white border-2 border-[#111111] p-7 shadow-[4px_4px_0px_#111111]">
                <div className="w-10 h-10 border-2 border-[#111111] bg-[#E53E3E] flex items-center justify-center mb-5 shadow-[2px_2px_0px_#111111]">
                  <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.step}
                  </span>
                </div>
                <h3
                  className="text-[#111111] font-bold uppercase tracking-wide mb-2.5 text-sm"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white border-b-2 border-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block border-2 border-[#111111] bg-[#E53E3E] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#111111] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Questions
            </span>
            <h2
              className="text-[#111111] text-4xl sm:text-5xl font-bold uppercase leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {service.shortTitle} FAQ
            </h2>
            <p className="text-[#666666] mt-3 text-base">Common questions about this service.</p>
          </div>
          <FAQAccordion items={service.faq} />
        </div>
      </section>

      <CTABanner
        title={`Ready for ${service.shortTitle} in Dallas?`}
        subtitle="Get your free estimate today. We work with all insurance and have been restoring Dallas vehicles since 1998."
      />
    </div>
  )
}
