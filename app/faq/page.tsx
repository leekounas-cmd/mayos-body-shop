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
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Common Questions"
        title="FAQ"
        subtitle="Answers to the most common questions about auto body repair, insurance, and working with Mayo's."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {['Insurance', 'Repairs', 'General'].map((category) => {
            const items = faqs.filter((f) => f.category === category)
            if (!items.length) return null
            return (
              <div key={category} className="mb-14">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] flex-shrink-0" />
                  <h2 className="text-[#E53E3E] text-xs font-bold tracking-[0.25em] uppercase">
                    {category}
                  </h2>
                  <span className="flex-1 h-px bg-[#EEEEEE]" />
                </div>
                <FAQAccordion items={items} />
              </div>
            )
          })}

          <div className="mt-14 bg-[#F7F7F7] rounded-2xl border border-[#EEEEEE] p-10 text-center">
            <h3 className="text-[#111111] font-bold text-2xl uppercase mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Still Have Questions?
            </h3>
            <p className="text-[#666666] mb-8 max-w-md mx-auto text-sm">
              Call us directly or stop by. We&apos;re happy to talk through anything before you commit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-3.5 rounded-lg uppercase tracking-wider text-sm transition-colors duration-150 cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Call (214) 744-0766
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-[#DDDDDD] hover:border-[#E53E3E] hover:text-[#E53E3E] text-[#555555] px-8 py-3.5 rounded-lg uppercase tracking-wider text-sm transition-all duration-150 cursor-pointer font-semibold"
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
