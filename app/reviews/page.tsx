import type { Metadata } from 'next'
import { reviews } from '@/data/reviews'
import { PageHero } from '@/components/ui/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Customer Reviews",
  "See what Dallas customers say about Mayo's Body Shop. 205+ five-star Google reviews for collision repair, auto painting, and more.",
  "/reviews"
)

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <PageHero
        eyebrow="What People Say"
        title={<>205 Five-Star<br />Reviews</>}
        subtitle="Real customers. Real results. Dallas has been trusting Mayo's since 1998."
      />

      {/* Rating summary strip */}
      <section className="bg-white border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x-2 divide-[#111111]">
            {[
              { value: '4.9', label: 'Average Rating' },
              { value: '205', label: 'Google Reviews' },
              { value: '100%', label: 'Five-Star' },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 lg:px-10 text-center">
                <p className="text-[#E53E3E] text-4xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</p>
                <p className="text-[#777777] text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, i) => {
              const isAccent = i % 5 === 1 || i % 5 === 4
              return (
                <div
                  key={review.id}
                  className={`border-2 border-[#111111] p-7 flex flex-col shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#E53E3E] ${isAccent ? 'bg-[#E53E3E]' : 'bg-white'}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} className={`w-4 h-4 fill-current ${isAccent ? 'text-white' : 'text-[#D97706]'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed flex-1 mb-5 ${isAccent ? 'text-white/90' : 'text-[#444444]'}`}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className={`pt-4 border-t-2 ${isAccent ? 'border-white/30' : 'border-[#EEEEEE]'}`}>
                    <p className={`font-bold uppercase tracking-wider text-sm ${isAccent ? 'text-white' : 'text-[#111111]'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                      {review.name}
                    </p>
                    <p className={`text-xs mt-0.5 ${isAccent ? 'text-white/60' : 'text-[#999999]'}`}>
                      Google Review
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/search/Mayo's+Body+Shop+Dallas+TX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-[#111111] bg-white text-[#111111] font-bold text-sm px-8 py-3.5 uppercase tracking-wider shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#E53E3E]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      <CTABanner title="Join 205+ Satisfied Customers" subtitle="Get your free estimate today and see why Dallas trusts Mayo's." />
    </div>
  )
}
