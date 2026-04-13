import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <div className="bg-[#111111] border-b-2 border-[#E53E3E] pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5">
            <span className="inline-block border-2 border-[#E53E3E] bg-[#E53E3E] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#ffffff30]" style={{ fontFamily: 'var(--font-heading)' }}>
              {eyebrow}
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.93] text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/60 mt-5 text-lg leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  )
}
