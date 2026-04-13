import type { Metadata } from 'next'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Get a Free Estimate",
  "Get a free auto body repair estimate from Mayo's Body Shop in Dallas, TX. Collision repair, painting, bumper, dent, frame — we work with all insurance.",
  "/get-estimate"
)

const trustPoints = [
  { icon: '⭐', label: '4.9 Stars', sub: '118+ Google reviews' },
  { icon: '🛡️', label: 'All Insurance', sub: 'We handle the adjuster' },
  { icon: '📅', label: 'Est. 1998', sub: '25+ years experience' },
  { icon: '👨‍👦', label: 'Family Owned', sub: 'Mayo & his sons' },
]

export default function GetEstimatePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — trust signals */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[#E53E3E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Free · No Commitment · Fast Response
            </p>
            <h1
              className="text-5xl sm:text-6xl font-bold uppercase leading-tight text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Your Free Estimate
            </h1>
            <p className="text-[#A0A0A0] text-lg leading-relaxed mb-10">
              Tell us about your vehicle and the damage. We&apos;ll get back to you fast with an honest quote — no pressure, no hidden fees.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {trustPoints.map((point) => (
                <div key={point.label} className="bg-[#1A1A1A] border border-[#2A2A2A] p-4">
                  <span className="text-2xl">{point.icon}</span>
                  <p className="text-white font-bold mt-2" style={{ fontFamily: 'var(--font-heading)' }}>{point.label}</p>
                  <p className="text-[#A0A0A0] text-xs">{point.sub}</p>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="border-t border-[#2A2A2A] pt-8">
              <p className="text-[#A0A0A0] text-sm mb-4">Prefer to talk? Call us directly:</p>
              <a
                href="tel:+12147440766"
                className="flex items-center gap-3 text-white hover:text-[#E53E3E] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#E53E3E] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>(214) 744-0766</p>
                  <p className="text-[#A0A0A0] text-xs">Mon–Fri 9AM–7PM · Sat 9AM–4PM</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
              <EstimateForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
