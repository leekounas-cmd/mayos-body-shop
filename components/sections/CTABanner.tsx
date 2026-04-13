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
    <section className="bg-[#E53E3E] border-b-2 border-[#111111] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block border-2 border-white/40 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Mayo&apos;s Body Shop · Dallas, TX · Est. 1998
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h2>
            <p className="text-white/75 text-base mt-4">{subtitle}</p>
          </div>

          <div className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto min-w-[220px]">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center border-2 border-[#111111] bg-white px-8 py-4 font-bold uppercase tracking-wider text-[#111111] text-sm shadow-[4px_4px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111111]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {primaryLabel}
            </Link>
            {showPhone && (
              <a
                href="tel:+12147440766"
                className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent px-8 py-4 font-bold uppercase tracking-wider text-white text-sm transition-all duration-150 hover:bg-white hover:text-[#E53E3E]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
