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
    description: "We work directly with every major carrier. We handle the adjuster communication so you can focus on getting back to normal.",
  },
  {
    number: '205',
    unit: 'Reviews',
    title: 'Customers Who Come Back',
    description: "Over 205 five-star reviews. Customers who find Mayo's don't go anywhere else. That's the standard we hold ourselves to.",
  },
]

export function WhyMayos() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              label="Why Mayo's"
              title="Why Dallas Trusts Us"
              subtitle="We're not a franchise. We're a family shop that takes pride in every car that comes through our door."
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-[#F8F8F8] rounded-xl p-10"
            >
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-6xl font-bold text-[#E53E3E] leading-none"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.number}
                </span>
                <span className="text-[#999999] text-sm font-semibold uppercase tracking-wider">{feature.unit}</span>
              </div>
              <h3
                className="text-[#111111] text-lg font-bold uppercase tracking-wide mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {feature.title}
              </h3>
              <p className="text-[#666666] leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-[#E53E3E] rounded-xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-white text-2xl sm:text-3xl font-bold uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Your Car. Our Priority.
            </h3>
            <p className="text-white/80 mt-2 text-base">
              We treat every car like it belongs to someone we care about. Because it does.
            </p>
          </div>
          <Link
            href="/get-estimate"
            className="flex-shrink-0 bg-white hover:bg-[#111111] text-[#E53E3E] hover:text-white font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm transition-all duration-200 cursor-pointer"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get Free Estimate
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
