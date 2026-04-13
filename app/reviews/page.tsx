import type { Metadata } from 'next'
import { reviews } from '@/data/reviews'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Customer Reviews",
  "See what Dallas customers say about Mayo's Body Shop. 205+ five-star Google reviews for collision repair, auto painting, and more.",
  "/reviews"
)

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-[#F59E0B]' : 'text-[#EEEEEE]'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark hero */}
      <div className="bg-[#111111] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="bg-[#E53E3E] rounded-xl p-6 text-center min-w-[96px] flex-shrink-0">
              <p className="text-white text-5xl font-bold leading-none" style={{ fontFamily: 'var(--font-heading)' }}>4.9</p>
              <div className="flex justify-center mt-2">
                <Stars rating={5} />
              </div>
              <p className="text-white/70 text-xs mt-2">out of 5</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-[#E53E3E]" />
                <p className="text-white/40 text-xs font-bold tracking-[0.25em] uppercase">Google Reviews</p>
              </div>
              <h1
                className="text-5xl sm:text-6xl font-bold uppercase leading-tight text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                205+ Five-Star<br />Reviews
              </h1>
              <p className="text-white/50 mt-4 text-lg">Dallas has been trusting Mayo&apos;s since 1998.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <div key={review.id} className="bg-[#F8F8F8] rounded-xl p-7 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[#E53E3E] text-4xl leading-none font-serif">&ldquo;</span>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-[#333333] text-sm leading-relaxed flex-1 mb-5">
                  {review.text}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#EEEEEE]">
                  <div>
                    <p className="text-[#111111] font-semibold text-sm">{review.name}</p>
                    {review.service && (
                      <p className="text-[#888888] text-xs mt-0.5">{review.service}</p>
                    )}
                  </div>
                  <Stars rating={review.rating} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-[#888888] text-sm mb-5">Read more of our reviews on Google</p>
            <a
              href="https://www.google.com/maps/search/Mayo's+Body+Shop+Dallas+TX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white rounded-lg border border-[#E5E5E5] hover:border-[#E53E3E] hover:text-[#E53E3E] text-[#111111] text-sm px-8 py-3.5 uppercase tracking-wider transition-all duration-200 cursor-pointer font-semibold shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      <CTABanner title="Join 205+ Satisfied Customers" subtitle="Get your free estimate today and see why Dallas trusts Mayo's." />
    </div>
  )
}
