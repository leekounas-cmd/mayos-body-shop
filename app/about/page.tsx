import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "About Us",
  "Meet the team behind Mayo's Body Shop in Dallas, TX. Family-owned since 1998. Mayo Nino and his sons have been restoring Dallas vehicles for 25+ years.",
  "/about"
)

const stats = [
  { number: '1998', label: 'Year Founded' },
  { number: '25+', label: 'Years in Business' },
  { number: '205', label: 'Five-Star Reviews' },
  { number: '4.9', label: 'Google Rating' },
]

const values = [
  {
    title: 'Honesty First',
    description: "We quote what the job costs — not what the insurance will pay. No inflated estimates, no hidden fees.",
  },
  {
    title: 'Family Standards',
    description: "Mayo built this shop to care for his family. That same standard extends to every car that comes through the door.",
  },
  {
    title: 'Work That Lasts',
    description: "We use OEM-grade parts and manufacturer-matched paint. The repair should outlast the conversation about it.",
  },
  {
    title: 'Insurance Done Right',
    description: "We deal with the adjusters. You don't have to argue with your insurance company — we handle that for you.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <PageHero
        eyebrow="Our Story"
        title={<>Built on<br />25 Years<br />of Trust</>}
        subtitle="Family-owned since 1998. Mayo Nino and his sons have been restoring Dallas vehicles for over two decades."
      />

      {/* Stats strip */}
      <section className="bg-white border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-2 divide-[#111111]">
            {stats.map((stat) => (
              <div key={stat.label} className="py-10 px-6 lg:px-10 text-center">
                <p className="text-[#E53E3E] text-4xl sm:text-5xl font-bold leading-none mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.number}
                </p>
                <p className="text-[#555555] text-sm font-medium uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block border-2 border-[#111111] bg-[#E53E3E] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#111111] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                The Story
              </span>
              <h2 className="text-[#111111] text-4xl sm:text-5xl font-bold uppercase leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Meet Mayo
              </h2>
              <div className="space-y-5 text-[#555555] leading-relaxed">
                <p>
                  Agustin &ldquo;Mayo&rdquo; Nino opened Mayo&apos;s Body Shop in 1998 with a simple idea: do the work right and treat people fair. Twenty-five years later, that&apos;s still the standard.
                </p>
                <p>
                  Located at 314 Harbin St in Dallas, we&apos;ve been a neighborhood shop since the beginning — not a chain, not a franchise. Mayo and his sons run the operation themselves, which means the person quoting your car is the same person overseeing the repair.
                </p>
                <p>
                  We handle everything from a door ding to full collision reconstruction, and we work directly with all major insurance carriers. Our customers don&apos;t fight with adjusters — we do that for them.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/get-estimate"
                  className="inline-flex items-center gap-2 border-2 border-[#111111] bg-[#E53E3E] text-white font-bold px-7 py-3.5 uppercase tracking-wider text-sm shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#111111]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Get Your Free Estimate
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* TODO: Replace with actual team photo */}
              <div className="border-2 border-[#111111] shadow-[6px_6px_0px_#E53E3E] aspect-[4/3] relative bg-[#DDDDDD] overflow-hidden">
                <Image
                  src="/images/mayos-team.jpg"
                  alt="Mayo and his sons at Mayo's Body Shop in Dallas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 border-2 border-[#111111] bg-[#E53E3E] px-6 py-4 shadow-[3px_3px_0px_#111111]">
                <p className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>Est. 1998</p>
                <p className="text-white/80 text-xs">Dallas, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block border-2 border-[#111111] bg-[#E53E3E] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#111111] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How We Work
            </span>
            <h2 className="text-[#111111] text-4xl sm:text-5xl font-bold uppercase leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div key={value.title} className="bg-white border-2 border-[#111111] p-8 shadow-[4px_4px_0px_#111111]">
                <span className="text-[#E53E3E] text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  0{i + 1}
                </span>
                <h3 className="text-[#111111] text-lg font-bold uppercase tracking-wide mt-3 mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
