import type { Metadata } from 'next'
import { faqs } from '@/data/faq'
import { PageHero } from '@/components/ui/PageHero'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'
import { faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Common questions about auto body repair in Dallas — insurance claims, repair timelines, warranties, paint matching, and more.",
  "/faq"
)

export default function FAQPage() {
  const schema = faqPageSchema(faqs)

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Common Questions"
        title="FAQ"
        subtitle="Answers to the most common questions about auto body repair, insurance, and working with Mayo's."
      />

      <section className="py-16 sm:py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {['Insurance', 'Repairs', 'General'].map((category) => {
            const items = faqs.filter((f) => f.category === category)
            if (!items.length) return null
            return (
              <div key={category} className="mb-14">
                <div className="flex items-center gap-4 mb-8">
                  <span className="inline-block border-2 border-[#111111] bg-[#E53E3E] px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-white shadow-[2px_2px_0px_#111111]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {category}
                  </span>
                  <span className="flex-1 h-0.5 bg-[#111111]" />
                </div>
                <FAQAccordion items={items} />
              </div>
            )
          })}

          {/* Still have questions box */}
          <div className="mt-14 border-2 border-[#111111] bg-white p-10 text-center shadow-[5px_5px_0px_#E53E3E]">
            <h3 className="text-[#111111] font-bold text-2xl uppercase mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Still Have Questions?
            </h3>
            <p className="text-[#666666] mb-8 max-w-md mx-auto text-sm">
              Call us directly or stop by. We&apos;re happy to talk through anything before you commit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center border-2 border-[#111111] bg-[#E53E3E] text-white font-bold px-8 py-3.5 uppercase tracking-wider text-sm shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#111111]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Call (214) 744-0766
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-[#111111] bg-white text-[#111111] font-bold px-8 py-3.5 uppercase tracking-wider text-sm shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#E53E3E]"
                style={{ fontFamily: 'var(--font-heading)' }}
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
