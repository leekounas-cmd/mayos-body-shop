'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const reasons = [
  {
    number: '01',
    title: 'We Handle Your Insurance',
    description: "We deal directly with your adjuster. You drop off the car — we do the rest. Every major carrier accepted.",
  },
  {
    number: '02',
    title: '25 Years. One Standard.',
    description: "Mayo started this shop in 1998. The same hands-on standard from day one: fix it right, match the color perfectly, return it clean.",
  },
  {
    number: '03',
    title: '205 Five-Star Reviews',
    description: "Our customers don't go anywhere else. That's not luck — it's what happens when you treat every car like it belongs to family.",
  },
  {
    number: '04',
    title: 'Family Owned, Not a Franchise',
    description: "Mayo and his sons run this shop. No corporate quotas, no shortcuts. You talk to the people doing the work.",
  },
]

export function WhyMayos() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
          <div>
            <p className="text-[#E53E3E] text-xs font-bold tracking-[0.25em] uppercase mb-4">Why Mayo&apos;s</p>
            <h2
              className="text-[#111111] text-4xl sm:text-5xl font-bold uppercase leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Dallas
              <br />
              Trusts Us
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[#666666] text-base leading-relaxed">
              We&apos;re not a franchise. We&apos;re a family-owned shop that has been part of this community for 25 years. Every car gets treated like it belongs to someone we care about — because it does.
            </p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-[#EEEEEE] p-8"
            >
              <span
                className="text-[#E53E3E] text-3xl font-bold leading-none block mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {reason.number}
              </span>
              <h3
                className="text-[#111111] text-lg font-bold uppercase tracking-wide mb-2.5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {reason.title}
              </h3>
              <p className="text-[#777777] text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="bg-[#111111] rounded-2xl px-8 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-2">Free · Fast · No Commitment</p>
            <h3
              className="text-white text-3xl sm:text-4xl font-bold uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to get your car back?
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm transition-colors duration-150 cursor-pointer"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12147440766"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all duration-150 cursor-pointer"
            >
              (214) 744-0766
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
