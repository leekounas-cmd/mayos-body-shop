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
        <p className="text-[#E53E3E] text-xs font-bold tracking-[0.2em] uppercase mb-3">
          {label}
        </p>
      )}
      <h2
        className={`text-4xl sm:text-5xl font-bold uppercase tracking-wide leading-tight ${light ? 'text-white' : 'text-[#111111]'}`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-[#555555]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
