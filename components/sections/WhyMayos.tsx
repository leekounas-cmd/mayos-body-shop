'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'

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
    description: 'We work directly with every major carrier. We handle the adjuster communication so you can focus on getting back to normal.',
  },
  {
    number: '205',
    unit: 'Reviews',
    title: 'Customers Who Come Back',
    description: 'Over 205 five-star reviews. Customers who find Mayo\'s don\'t go anywhere else. That\'s the standard we hold ourselves to.',
  },
]

export function WhyMayos() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionHeading
            label="Why Mayo's"
            title="Why Dallas Trusts Us"
            subtitle="We're not a franchise. We're a family shop that takes pride in every car that comes through our door."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="bg-white border border-[#E5E5E5] p-8"
            >
              {/* Large stat */}
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="text-5xl font-bold text-[#E53E3E] leading-none"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.number}
                </span>
                <span className="text-[#555555] text-sm uppercase tracking-wider">{feature.unit}</span>
              </div>
              <div className="w-10 h-0.5 bg-[#E53E3E] mb-5" />
              <h3
                className="text-[#111111] text-lg font-bold uppercase tracking-wide mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {feature.title}
              </h3>
              <p className="text-[#555555] leading-relaxed text-sm">
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
          transition={{ delay: 0.3 }}
          className="mt-10 bg-[#E53E3E] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-white text-2xl font-bold uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Your Car. Our Priority.
            </h3>
            <p className="text-white/85 mt-1 text-sm">
              We treat every car like it belongs to someone we care about. Because it does.
            </p>
          </div>
          <Link
            href="/get-estimate"
            className="flex-shrink-0 bg-white hover:bg-[#111111] text-[#E53E3E] hover:text-white font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-150 cursor-pointer"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get Free Estimate
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
