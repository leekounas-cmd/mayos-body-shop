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
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="bg-[#111111] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/80 text-xs font-semibold uppercase tracking-wider mb-8 transition-colors cursor-pointer"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E]" />
              <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase">Dallas Auto Body</p>
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
                className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm transition-colors duration-150 cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all duration-150 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (214) 744-0766
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-5">
              {service.longDescription.map((para, i) => (
                <p key={i} className="text-[#555555] leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
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
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#E53E3E] text-xs font-bold tracking-[0.25em] uppercase mb-4">How It Works</p>
            <h2
              className="text-[#111111] text-4xl sm:text-5xl font-bold uppercase leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-[#EEEEEE] p-7">
                <div className="w-10 h-10 bg-[#E53E3E] rounded-xl flex items-center justify-center mb-5">
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
                <p className="text-[#777777] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#E53E3E] text-xs font-bold tracking-[0.25em] uppercase mb-4">Questions</p>
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
