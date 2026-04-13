'use client'

import { motion } from 'framer-motion'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { SectionHeading } from '@/components/ui/SectionHeading'

const showcaseItems = [
  {
    beforeSrc: '/images/gallery/honda-civic-collision-before.png',
    afterSrc: '/images/gallery/honda-civic-collision-after.png',
    beforeAlt: 'Blue Honda Civic — front fender and bumper collision damage, Dallas TX',
    afterAlt: 'Blue Honda Civic — fully restored at Mayo\'s Body Shop, Dallas TX',
    label: 'Collision Repair',
    isPlaceholder: false,
  },
  {
    beforeSrc: '',
    afterSrc: '',
    beforeAlt: 'Door dent damage',
    afterAlt: 'Dent repaired — smooth panel',
    label: 'Dent Repair',
    isPlaceholder: true,
  },
  {
    beforeSrc: '',
    afterSrc: '',
    beforeAlt: 'Paint damage before',
    afterAlt: 'Full repaint after',
    label: 'Full Repaint',
    isPlaceholder: true,
  },
]

export function BeforeAfterShowcase() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <SectionHeading
            label="The Results"
            title="See The Difference"
            subtitle="Drag the slider. Real work from our shop — no filters, no tricks."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="space-y-3"
            >
              <div className="overflow-hidden shadow-sm">
                <BeforeAfterSlider
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  beforeAlt={item.beforeAlt}
                  afterAlt={item.afterAlt}
                  aspectRatio="aspect-[4/3]"
                  isPlaceholder={item.isPlaceholder}
                />
              </div>
              <p className="text-[#555555] text-xs text-center uppercase tracking-widest font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 text-[#E53E3E] font-bold text-sm uppercase tracking-wider hover:text-[#C53030] transition-colors cursor-pointer"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
