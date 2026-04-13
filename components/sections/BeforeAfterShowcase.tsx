'use client'

import { motion } from 'framer-motion'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import Link from 'next/link'

export function BeforeAfterShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[#E53E3E] text-xs font-bold tracking-[0.25em] uppercase mb-4">Real Results</p>
            <h2
              className="text-[#111111] text-4xl sm:text-5xl font-bold uppercase leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              See the
              <br />
              Difference
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-8 max-w-md">
              Drag the slider to compare before and after. No filters, no tricks — just the work. Every car that leaves our shop looks like it never happened.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Collision & structural damage',
                'Full repaints & color matching',
                'Dents, dings & scratches',
                'Bumper replacement & repair',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] flex-shrink-0" />
                  <span className="text-[#555555] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#E53E3E] text-white font-bold px-7 py-3.5 rounded-lg uppercase tracking-wider text-sm transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              View Full Gallery
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Right — slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <BeforeAfterSlider
                beforeSrc="/images/gallery/honda-civic-collision-before.png"
                afterSrc="/images/gallery/honda-civic-collision-after.png"
                beforeAlt="Blue Honda Civic — front fender collision damage"
                afterAlt="Blue Honda Civic — fully restored at Mayo's Body Shop Dallas"
                aspectRatio="aspect-[4/3]"
                isPlaceholder={false}
              />
            </div>
            <p className="text-[#AAAAAA] text-xs text-center mt-3 uppercase tracking-wider">
              Honda Civic · Collision Repair · Dallas, TX
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
