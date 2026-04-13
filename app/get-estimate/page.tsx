import type { Metadata } from 'next'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { PageHero } from '@/components/ui/PageHero'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Get a Free Estimate",
  "Get a free auto body repair estimate from Mayo's Body Shop in Dallas, TX. Collision repair, painting, bumper, dent, frame — we work with all insurance.",
  "/get-estimate"
)

const trustPoints = [
  { label: '4.9 Stars', sub: '205 Google reviews' },
  { label: 'All Insurance', sub: 'We handle the adjuster' },
  { label: 'Est. 1998', sub: '25+ years experience' },
  { label: 'Family Owned', sub: 'Mayo & his sons' },
]

export default function GetEstimatePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <PageHero
        eyebrow="Free · No Commitment · Fast Response"
        title={<>Get Your<br />Free Estimate</>}
        subtitle="Tell us about your vehicle and the damage. We'll get back to you fast with an honest quote."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — trust signals */}
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {trustPoints.map((point) => (
                <div key={point.label} className="border-2 border-[#111111] bg-white p-5 shadow-[3px_3px_0px_#111111]">
                  <p className="text-[#111111] font-bold text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>{point.label}</p>
                  <p className="text-[#888888] text-xs mt-1">{point.sub}</p>
                </div>
              ))}
            </div>

            <div className="border-2 border-[#111111] bg-white p-6 shadow-[3px_3px_0px_#111111]">
              <div className="flex items-center gap-1.5 mb-3">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="text-[#111111] font-bold text-xl ml-1.5" style={{ fontFamily: 'var(--font-heading)' }}>4.9</span>
              </div>
              <p className="text-[#666666] text-sm">Rated Excellent · 205 reviews on Google</p>
            </div>

            <div className="border-2 border-[#111111] bg-white p-6 shadow-[3px_3px_0px_#111111]">
              <p className="text-[#888888] text-sm mb-4">Prefer to call?</p>
              <a href="tel:+12147440766" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border-2 border-[#111111] bg-[#E53E3E] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#111111]">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-2xl text-[#111111] group-hover:text-[#E53E3E] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    (214) 744-0766
                  </p>
                  <p className="text-[#888888] text-xs">Mon–Fri 9AM–7PM · Sat 9AM–4PM</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="border-2 border-[#111111] bg-white p-8 lg:p-10 shadow-[5px_5px_0px_#E53E3E]">
            <h2 className="text-[#111111] text-xl font-bold uppercase mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Request Your Estimate
            </h2>
            <EstimateForm />
          </div>
        </div>
      </div>
    </div>
  )
}
