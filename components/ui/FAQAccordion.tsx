'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FAQItem } from '@/data/faq'

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="border border-[#E5E5E5] bg-white overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-[#FAFAFA] transition-colors"
            >
              <span className="text-[#111111] font-semibold pr-4 text-sm">{item.question}</span>
              <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#E53E3E] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-5 text-[#555555] text-sm leading-relaxed border-t border-[#E5E5E5] pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
