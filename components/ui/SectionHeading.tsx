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
        <div className={`mb-4 ${center ? 'flex justify-center' : ''}`}>
          <span
            className="inline-block border-2 border-[#111111] bg-[#E53E3E] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#111111]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {label}
          </span>
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
