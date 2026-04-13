import type { Metadata } from 'next'
import { faqs } from '@/data/faq'
import { PageHero } from '@/components/ui/PageHero'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'
import { faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Common questions about auto body repair in Dallas — insurance claims, repair timelines, warranties, paint matching, and more. Mayo's Body Shop answers them all.",
  "/faq"
)

export default function FAQPage() {
  const schema = faqPageSchema(faqs)

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Common Questions"
        title="FAQ"
        subtitle="Answers to the most common questions we get about auto body repair, insurance, and working with Mayo's."
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {['Insurance', 'Repairs', 'General'].map((category) => {
            const items = faqs.filter((f) => f.category === category)
            if (!items.length) return null
            return (
              <div key={category} className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-6 h-0.5 bg-[#E53E3E]" />
                  <h2 className="text-[#E53E3E] text-xs font-bold tracking-[0.25em] uppercase">
                    {category}
                  </h2>
                  <span className="flex-1 h-px bg-[#EEEEEE]" />
                </div>
                <FAQAccordion items={items} />
              </div>
            )
          })}

          <div className="mt-16 bg-[#F5F5F5] p-10 text-center">
            <h3 className="text-[#111111] font-bold text-2xl uppercase mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Still Have Questions?
            </h3>
            <p className="text-[#666666] mb-8">
              Call us directly or stop by. We&apos;re happy to talk through anything before you commit to anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-3.5 uppercase tracking-wider text-sm transition-colors cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Call (214) 744-0766
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-[#DDDDDD] hover:border-[#E53E3E] text-[#111111] hover:text-[#E53E3E] px-8 py-3.5 uppercase tracking-wider text-sm transition-colors cursor-pointer font-semibold"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
