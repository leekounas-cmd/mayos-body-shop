'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 sm:py-28 lg:py-36">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* TODO: Replace with actual shop/car photo from @mayos.bodyshop Instagram */}
        <Image
          src="/images/gallery/corvette-dallas-showcase.jpg"
          alt="Mayo's Body Shop Dallas — premium auto body results"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#111111]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">

          {/* Label badge — El Toro style */}
          <div className="mb-6 inline-block border-2 border-[#E53E3E] bg-[#E53E3E] px-4 py-1 shadow-[3px_3px_0px_#ffffff40]">
            <span className="text-sm font-bold uppercase tracking-widest text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Dallas, TX · Family Owned Since 1998
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(3rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            We Fix It.
            <br />
            <span className="text-[#E53E3E]">We Fix It Right.</span>
          </h1>

          {/* Sub */}
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
            Collision damage, paint, dents, frames — we handle it all and deal directly with your insurance so you don&apos;t have to.
          </p>

          {/* CTAs — neubrutalist buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate"
              className="inline-flex items-center justify-center border-2 border-white bg-[#E53E3E] px-8 py-4 font-bold uppercase tracking-widest text-white text-sm shadow-[4px_4px_0px_#ffffff40] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#fff]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12147440766"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white bg-transparent px-8 py-4 font-bold uppercase tracking-widest text-white text-sm transition-all duration-150 hover:bg-white hover:text-[#111111]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (214) 744-0766
            </a>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-3 mt-10">
            <div className="flex">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="w-4 h-4 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-white/70 text-sm">
              <span className="text-white font-semibold">4.9</span> · 205 reviews on Google
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
