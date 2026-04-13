'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111] pt-16">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/corvette-dallas-showcase.jpg"
          alt="Mayo's Body Shop Dallas — premium auto body results"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay — heavier on left where text is */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#E53E3E] px-3 py-1.5 mb-6"
          >
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Dallas, TX · Est. 1998</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-wide text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Car.
            <br />
            <span className="text-[#E53E3E]">Reborn.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/85 text-lg leading-relaxed mb-8 max-w-md"
          >
            Dallas&apos; trusted body shop since 1998. We handle your insurance, fix it right, and return it looking like nothing happened.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-150 cursor-pointer"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12147440766"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white text-white font-bold px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-150 cursor-pointer"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (214) 744-0766
            </a>
          </motion.div>

          {/* Social proof micro-line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mt-8"
          >
            <div className="flex">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="w-4 h-4 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/80 text-sm">205 five-star reviews on Google</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Est. 1998', sub: '25+ years experience' },
              { label: '205 Reviews', sub: 'Rated 5 stars on Google' },
              { label: 'All Insurance', sub: 'We handle the adjuster' },
              { label: 'Family Owned', sub: 'Mayo & his sons' },
            ].map((b) => (
              <div key={b.label} className="text-center">
                <p className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>{b.label}</p>
                <p className="text-white/60 text-xs">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
