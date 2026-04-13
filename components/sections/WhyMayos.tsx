'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const features = [
  {
    number: '25+',
    unit: 'Years',
    title: 'Experience That Shows',
    description: 'Started in 1998, Mayo has spent decades mastering every aspect of auto body repair. That experience shows in every car we touch.',
  },
  {
    number: 'All',
    unit: 'Insurance',
    title: 'Insurance Made Easy',
    description: 'We work directly with every major insurance carrier. We handle the adjuster communication so you can focus on getting back to normal.',
  },
  {
    number: '118+',
    unit: 'Reviews',
    title: 'Customers Who Come Back',
    description: 'Over 118 five-star reviews and counting. Customers who find Mayo\'s don\'t go anywhere else. That\'s the standard we hold ourselves to.',
  },
]

export function WhyMayos() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionHeading
            label="Why Mayo's"
            title={`Why Dallas Trusts\nMayo's Body Shop`}
            subtitle="We're not a franchise. We're not a chain. We're a family shop that takes pride in every car that comes through our door."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {/* Large number */}
              <div className="flex items-baseline gap-2 mb-4">
                <span
                  className="text-6xl font-bold text-[#E53E3E] leading-none"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.number}
                </span>
                <span className="text-[#A0A0A0] text-sm uppercase tracking-wider">{feature.unit}</span>
              </div>
              <div className="w-12 h-0.5 bg-[#E53E3E] mb-5" />
              <h3
                className="text-white text-xl font-bold uppercase tracking-wide mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {feature.title}
              </h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 border border-[#2A2A2A] bg-[#1A1A1A] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-[#E53E3E] text-xs font-semibold tracking-[0.2em] uppercase mb-2">The Mayo Difference</p>
            <h3
              className="text-white text-2xl font-bold uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Your Car. Our Priority.
            </h3>
            <p className="text-[#A0A0A0] mt-2">
              We treat every car like it belongs to someone we know — because it does.
            </p>
          </div>
          <a
            href="/get-estimate"
            className="flex-shrink-0 bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  )
}
