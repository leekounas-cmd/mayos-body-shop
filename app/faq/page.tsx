import type { Metadata } from 'next'
import { faqs } from '@/data/faq'
import { SectionHeading } from '@/components/ui/SectionHeading'
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Common Questions"
            title="FAQ"
            subtitle="Answers to the most common questions we get about auto body repair, insurance, and working with Mayo's."
          />
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category groups */}
          {['Insurance', 'Repairs', 'General'].map((category) => {
            const items = faqs.filter((f) => f.category === category)
            if (!items.length) return null
            return (
              <div key={category} className="mb-14">
                <h2
                  className="text-[#E53E3E] text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
                >
                  {category}
                  <span className="flex-1 h-px bg-[#2A2A2A]" />
                </h2>
                <FAQAccordion items={items} />
              </div>
            )
          })}

          {/* Still have questions */}
          <div className="mt-16 bg-[#1A1A1A] border border-[#2A2A2A] p-8 text-center">
            <h3 className="text-white font-bold text-xl uppercase mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Still Have Questions?
            </h3>
            <p className="text-[#A0A0A0] mb-6">
              Call us directly or stop by. We&apos;re happy to talk through anything before you commit to anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-3 uppercase tracking-wider text-sm transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Call (214) 744-0766
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-[#2A2A2A] hover:border-white text-white px-8 py-3 uppercase tracking-wider text-sm transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
