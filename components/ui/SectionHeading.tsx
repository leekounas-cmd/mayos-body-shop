type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {label && (
        <p className="text-[#E53E3E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          {label}
        </p>
      )}
      <h2
        className={`text-4xl sm:text-5xl font-bold uppercase tracking-wide leading-tight ${
          light ? 'text-[#1A1A1A]' : 'text-white'
        }`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-[#444]' : 'text-[#A0A0A0]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
