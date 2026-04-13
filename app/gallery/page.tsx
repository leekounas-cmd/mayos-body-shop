'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { CTABanner } from '@/components/sections/CTABanner'

const filters = ['All', 'Collision', 'Paint', 'Bumper', 'Dent & Scratch', 'Frame']

type GalleryItem = {
  id: number
  service: string
  beforeSrc?: string
  afterSrc?: string
  beforeAlt: string
  afterAlt: string
  isPlaceholder?: boolean
  collage?: string
  collageAlt?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    service: 'Collision',
    beforeSrc: '/images/gallery/honda-civic-collision-before.png',
    afterSrc: '/images/gallery/honda-civic-collision-after.png',
    beforeAlt: 'Blue Honda Civic — front fender collision damage',
    afterAlt: 'Blue Honda Civic — fully restored by Mayo\'s Body Shop Dallas',
    isPlaceholder: false,
  },
  {
    id: 2,
    service: 'Dent & Scratch',
    collage: '/images/gallery/kia-k5-door-repair-collage.png',
    collageAlt: 'Kia K5 door dent repair — before, during, and after at Mayo\'s Body Shop Dallas',
    beforeAlt: '',
    afterAlt: '',
  },
  {
    id: 3,
    service: 'Paint',
    collage: '/images/gallery/chevy-truck-paint-collage.jpg',
    collageAlt: 'Classic Chevy C/K truck — full repaint before and after at Mayo\'s Body Shop Dallas',
    beforeAlt: '',
    afterAlt: '',
  },
  { id: 4, service: 'Bumper', beforeAlt: 'Cracked rear bumper', afterAlt: 'New bumper installed and painted', isPlaceholder: true },
  { id: 5, service: 'Collision', beforeAlt: 'Side panel collision damage', afterAlt: 'Repaired side panel', isPlaceholder: true },
  { id: 6, service: 'Frame', beforeAlt: 'Bent frame after collision', afterAlt: 'Frame straightened to spec', isPlaceholder: true },
  { id: 7, service: 'Bumper', beforeAlt: 'Front bumper split in half', afterAlt: 'Bumper replaced and matched', isPlaceholder: true },
  { id: 8, service: 'Paint', beforeAlt: 'Oxidized hood and roof', afterAlt: 'Full respray complete', isPlaceholder: true },
  { id: 9, service: 'Collision', beforeAlt: 'Quarter panel and door damage', afterAlt: 'Like it never happened', isPlaceholder: true },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.service === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#111111] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            title="Before & After Gallery"
            subtitle="Real repairs, real results. Drag any slider to see the transformation."
          />
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-[#0A0A0A] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors border ${
                  activeFilter === filter
                    ? 'bg-[#E53E3E] border-[#E53E3E] text-white'
                    : 'border-[#2A2A2A] text-[#A0A0A0] hover:border-white hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="space-y-2"
              >
                {item.collage ? (
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
                    <Image
                      src={item.collage}
                      alt={item.collageAlt ?? ''}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <BeforeAfterSlider
                    beforeSrc={item.beforeSrc ?? ''}
                    afterSrc={item.afterSrc ?? ''}
                    beforeAlt={item.beforeAlt}
                    afterAlt={item.afterAlt}
                    aspectRatio="aspect-[4/3]"
                    isPlaceholder={item.isPlaceholder ?? true}
                  />
                )}
                <div className="flex items-center justify-between px-1">
                  <span className="text-[#A0A0A0] text-xs uppercase tracking-wider">{item.service}</span>
                  <span className="text-[#E53E3E] text-xs">Mayo&apos;s Body Shop Dallas</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#A0A0A0]">
              No items match this filter.
            </div>
          )}
        </div>
      </section>

      {/* Instagram note */}
      <section className="py-12 bg-[#111111] border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#A0A0A0] mb-4">See more of our work on Instagram</p>
          <a
            href="https://www.instagram.com/mayos.bodyshop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#E53E3E] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @mayos.bodyshop — 480 followers, 119 posts
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
