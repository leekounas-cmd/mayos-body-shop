'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { reviews } from '@/data/reviews'
import { SectionHeading } from '@/components/ui/SectionHeading'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[#F59E0B]' : 'text-[#2A2A2A]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -340 : 340,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              label="What People Say"
              title="Real Reviews"
              subtitle="118+ Google reviews — rated Excellent."
            />
          </motion.div>

          {/* Nav buttons */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[#2A2A2A] hover:border-[#E53E3E] text-white flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-[#2A2A2A] hover:border-[#E53E3E] text-white flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex-shrink-0 w-80 snap-start bg-[#1A1A1A] border border-[#2A2A2A] p-6 flex flex-col"
            >
              {/* Quote mark */}
              <span className="text-[#E53E3E] text-5xl leading-none font-serif mb-2">&ldquo;</span>

              <p className="text-white text-sm leading-relaxed flex-1 mb-6">
                {review.text}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  {review.service && (
                    <p className="text-[#A0A0A0] text-xs mt-0.5">{review.service}</p>
                  )}
                </div>
                <StarRating rating={review.rating} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="/reviews"
            className="text-[#A0A0A0] hover:text-white text-sm uppercase tracking-wider transition-colors"
          >
            Read all 118+ reviews →
          </a>
        </div>
      </div>
    </section>
  )
}
