'use client'

import { useState } from 'react'
import type { FAQItem } from '@/data/faq'

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`border-2 border-[#111111] bg-white transition-all duration-150 ${isOpen ? 'shadow-[4px_4px_0px_#E53E3E]' : 'shadow-[3px_3px_0px_#111111]'}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-[#FAFAFA] transition-colors"
            >
              <span className="text-[#111111] font-bold uppercase tracking-wide pr-4 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.question}
              </span>
              <span className={`flex-shrink-0 w-8 h-8 border-2 border-[#111111] flex items-center justify-center transition-colors duration-150 ${isOpen ? 'bg-[#E53E3E] border-[#E53E3E] text-white' : 'bg-white text-[#111111]'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen ? 'M20 12H4' : 'M12 4v16m8-8H4'} />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-[#555555] text-sm leading-relaxed border-t-2 border-[#111111] pt-4 bg-[#FAFAFA]">
                {item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
