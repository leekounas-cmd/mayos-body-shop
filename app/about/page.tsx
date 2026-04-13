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
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Our Story"
        title={<>Built on<br />25 Years<br />of Trust</>}
        subtitle="Family-owned since 1998. Mayo Nino and his sons have been restoring Dallas vehicles for over two decades."
      />

      {/* Stats */}
      <section className="bg-white border-b border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#EEEEEE]">
            {stats.map((stat) => (
              <div key={stat.label} className="py-10 px-6 lg:px-10 text-center">
                <p className="text-[#E53E3E] text-4xl sm:text-5xl font-bold leading-none mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.number}
                </p>
                <p className="text-[#555555] text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#E53E3E] text-xs font-bold tracking-[0.25em] uppercase mb-4">The Story</p>
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
                  className="inline-flex items-center gap-2 bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-7 py-3.5 rounded-lg uppercase tracking-wider text-sm transition-colors duration-150 cursor-pointer"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Get Your Free Estimate
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative bg-[#F7F7F7]">
                <Image
                  src="/images/shop/team-photo.jpg"
                  alt="Mayo and his sons at Mayo's Body Shop in Dallas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#E53E3E] rounded-xl px-6 py-4">
                <p className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>Est. 1998</p>
                <p className="text-white/80 text-xs">Dallas, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[#E53E3E] text-xs font-bold tracking-[0.25em] uppercase mb-4">How We Work</p>
            <h2 className="text-[#111111] text-4xl sm:text-5xl font-bold uppercase leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div key={value.title} className="bg-white rounded-2xl border border-[#EEEEEE] p-8">
                <span className="text-[#E53E3E] text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  0{i + 1}
                </span>
                <h3 className="text-[#111111] text-lg font-bold uppercase tracking-wide mt-3 mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value.title}
                </h3>
                <p className="text-[#777777] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
