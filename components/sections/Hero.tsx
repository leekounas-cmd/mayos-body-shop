'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — red Corvette in front of Dallas mural wall */}
      <div className="absolute inset-0 bg-[#111111]">
        <Image
          src="/images/gallery/corvette-dallas-showcase.jpg"
          alt="Mayo's Body Shop Dallas — premium auto body results"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#E53E3E] text-xs font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Dallas, TX · Est. 1998 · Family Owned
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-wide text-white mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Car.
            <br />
            <span className="text-[#E53E3E]">Reborn.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A0A0A0] text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Dallas&apos; trusted body shop for 25+ years. We fix collision damage, handle your insurance, and return your car looking like it never happened.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-200 hover:scale-[1.02]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12147440766"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-200 hover:bg-white/5 gap-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (214) 744-0766
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust strip overlay at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-0">
            {[
              { icon: '🏆', label: 'Est. 1998' },
              { icon: '⭐', label: '118+ 5-Star Reviews' },
              { icon: '🛡️', label: 'Works With All Insurance' },
              { icon: '👨‍👦', label: 'Family Owned & Operated' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm">
                <span>{badge.icon}</span>
                <span className="text-white font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
