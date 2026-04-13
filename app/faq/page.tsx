import type { Metadata } from 'next'
import { faqs } from '@/data/faq'
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
    <div className="min-h-screen bg-white pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Red hero bar */}
      <div className="bg-[#E53E3E] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">Common Questions</p>
          <h1
            className="text-5xl sm:text-6xl font-bold uppercase leading-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            FAQ
          </h1>
          <p className="text-white/80 mt-3 text-lg max-w-xl">
            Answers to the most common questions we get about auto body repair, insurance, and working with Mayo&apos;s.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {['Insurance', 'Repairs', 'General'].map((category) => {
            const items = faqs.filter((f) => f.category === category)
            if (!items.length) return null
            return (
              <div key={category} className="mb-14">
                <h2
                  className="text-[#E53E3E] text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
                >
                  {category}
                  <span className="flex-1 h-px bg-[#E5E5E5]" />
                </h2>
                <FAQAccordion items={items} />
              </div>
            )
          })}

          {/* Still have questions */}
          <div className="mt-16 bg-[#F5F5F5] border border-[#E5E5E5] p-8 text-center">
            <h3 className="text-[#111111] font-bold text-xl uppercase mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Still Have Questions?
            </h3>
            <p className="text-[#555555] mb-6">
              Call us directly or stop by. We&apos;re happy to talk through anything before you commit to anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-3 uppercase tracking-wider text-sm transition-colors cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Call (214) 744-0766
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-[#E5E5E5] hover:border-[#E53E3E] text-[#111111] hover:text-[#E53E3E] px-8 py-3 uppercase tracking-wider text-sm transition-colors cursor-pointer"
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
