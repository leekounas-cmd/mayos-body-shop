import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/ui/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "About Us",
  "Mayo's Body Shop has been family-owned in Dallas since 1998. Meet Agustin 'Mayo' Nino and his sons — the team behind 205+ five-star reviews.",
  "/about"
)

const values = [
  {
    title: 'Honest Estimates',
    description: "We tell you what the job actually costs — not what gets you in the door. No surprises when you pick up your car.",
  },
  {
    title: 'Family Standards',
    description: "We treat every car like it belongs to someone we care about. Because it does. That standard doesn't change regardless of the job size.",
  },
  {
    title: 'Quality Over Speed',
    description: "We work fast — but not at the expense of quality. Your car gets returned when it's done right, not just done.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Our Story"
        title={<>Family Owned.<br />Dallas Proven.</>}
        subtitle="Mayo's Body Shop has been restoring Dallas vehicles since 1998 — one car at a time."
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-[#555555] text-lg leading-relaxed">
                Agustin Nino — known to everyone as Mayo — opened Mayo&apos;s Body Shop in 1998 with one goal: do the job right and treat people fair.
              </p>
              <p className="text-[#555555] text-lg leading-relaxed">
                More than 25 years later, that hasn&apos;t changed. Mayo&apos;s sons work alongside him every day, and the same values that built the business are still the standard: honest pricing, quality work, and treating every customer the way you&apos;d want to be treated.
              </p>
              <p className="text-[#555555] text-lg leading-relaxed">
                Dallas customers have noticed. Over 205 five-star reviews on Google — not because of marketing, but because of the work. People find Mayo&apos;s, get their car fixed right, and tell their friends.
              </p>
              <p className="text-[#555555] text-lg leading-relaxed">
                That&apos;s how a small shop becomes a Dallas institution. One car at a time.
              </p>
            </div>

            <div className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/mayos-team.jpg"
                  alt="Mayo's Body Shop team — Agustin 'Mayo' Nino and his sons, Dallas TX"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="bg-[#F5F5F5] px-6 py-5 border-t-4 border-t-[#E53E3E]">
                <h3 className="text-[#111111] font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                  Agustin &ldquo;Mayo&rdquo; Nino &amp; Sons
                </h3>
                <p className="text-[#666666] text-sm mt-1">Owner &amp; Family Team · Dallas, TX · Est. 1998</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading label="How We Work" title="Our Standards" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={value.title} className="bg-white p-8 border-t-4 border-t-[#E53E3E]">
                <p className="text-[#E53E3E] text-xs font-bold tracking-widest uppercase mb-4">
                  0{i + 1}
                </p>
                <h3
                  className="text-[#111111] text-xl font-bold uppercase mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {value.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white border-y border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[#E53E3E] text-xs font-bold uppercase tracking-[0.2em] mb-3">Location</p>
              <p className="text-[#111111] font-semibold">314 Harbin St, Dallas TX 75208</p>
            </div>
            <div>
              <p className="text-[#E53E3E] text-xs font-bold uppercase tracking-[0.2em] mb-3">Phone</p>
              <a href="tel:+12147440766" className="text-[#111111] font-semibold hover:text-[#E53E3E] transition-colors cursor-pointer">
                (214) 744-0766
              </a>
            </div>
            <div>
              <p className="text-[#E53E3E] text-xs font-bold uppercase tracking-[0.2em] mb-3">Hours</p>
              <p className="text-[#111111] font-semibold">Mon–Fri 9AM–7PM</p>
              <p className="text-[#666666] text-sm mt-1">Sat 9AM–4PM</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
