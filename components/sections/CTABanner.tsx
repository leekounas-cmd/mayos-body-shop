import Link from 'next/link'

type CTABannerProps = {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  showPhone?: boolean
}

export function CTABanner({
  title = 'Ready to get your car back to perfect?',
  subtitle = 'Free estimate. No commitment. We work with all insurance.',
  primaryLabel = 'Get Free Estimate',
  primaryHref = '/get-estimate',
  showPhone = true,
}: CTABannerProps) {
  return (
    <section className="bg-[#111111] py-24 border-t-4 border-t-[#E53E3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left max-w-2xl">
            <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
              <span className="w-8 h-0.5 bg-[#E53E3E]" />
              <p className="text-white/50 text-xs font-bold tracking-[0.25em] uppercase">Mayo&apos;s Body Shop · Dallas, TX</p>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h2>
            <p className="text-white/60 text-lg mt-4">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 w-full sm:w-auto lg:w-auto">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-10 py-4 uppercase tracking-widest text-sm transition-colors duration-150 cursor-pointer"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {primaryLabel}
            </Link>
            {showPhone && (
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/60 text-white/80 hover:text-white font-semibold px-10 py-4 uppercase tracking-wider text-sm transition-colors duration-150 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (214) 744-0766
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
