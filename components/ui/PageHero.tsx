import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <div className="bg-[#111111] pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E]" />
            <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase">
              {eyebrow}
            </p>
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
