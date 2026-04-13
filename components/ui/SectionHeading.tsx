type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeading({ label, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="w-8 h-0.5 bg-[#E53E3E] flex-shrink-0" />
          <p className={`text-xs font-bold tracking-[0.25em] uppercase ${light ? 'text-white/60' : 'text-[#E53E3E]'}`}>
            {label}
          </p>
        </div>
      )}
      <h2
        className={`text-4xl sm:text-5xl font-bold uppercase leading-tight ${light ? 'text-white' : 'text-[#111111]'}`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-[#555555]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
