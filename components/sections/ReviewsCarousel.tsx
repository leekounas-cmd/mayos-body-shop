import { reviews } from '@/data/reviews'
import Link from 'next/link'

export function ReviewsCarousel() {
  const displayed = reviews.slice(0, 6)

  return (
    <section className="bg-white py-20 sm:py-28 border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block border-2 border-[#111111] bg-[#E53E3E] px-4 py-1 text-sm font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#111111] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Reviews
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-[#111111]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What Dallas Drivers Say
            </h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="w-5 h-5 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-[#111111] font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
              4.9 · 205 Reviews
            </span>
          </div>
        </div>

        {/* Grid — alternating white and red cards like El Toro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayed.map((review, i) => {
            const isAccent = i === 1 || i === 4
            return (
              <div
                key={review.name}
                className={`border-2 border-[#111111] p-6 shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#E53E3E] ${isAccent ? 'bg-[#E53E3E]' : 'bg-white'}`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className={`w-4 h-4 fill-current ${isAccent ? 'text-white' : 'text-[#D97706]'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                <p className={`text-sm leading-relaxed mb-5 ${isAccent ? 'text-white/90' : 'text-[#444444]'}`}>
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className={`border-t-2 ${isAccent ? 'border-white/30' : 'border-[#EEEEEE]'} pt-4`}>
                  <p className={`font-bold uppercase tracking-wider text-sm ${isAccent ? 'text-white' : 'text-[#111111]'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                    {review.name}
                  </p>
                  <p className={`text-xs mt-0.5 ${isAccent ? 'text-white/60' : 'text-[#999999]'}`}>
                    Google Review · {review.date}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 border-2 border-[#111111] bg-white px-6 py-3 font-bold uppercase tracking-wider text-[#111111] text-sm shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#E53E3E]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            See All 205 Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
