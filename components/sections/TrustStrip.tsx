export function TrustStrip() {
  const stats = [
    {
      number: '25+',
      unit: 'Years',
      sub: 'Dallas trusted since 1998',
    },
    {
      number: '205',
      unit: 'Reviews',
      sub: 'Rated 5 stars on Google',
    },
    {
      number: '4.9',
      unit: 'Stars',
      sub: 'Average customer rating',
    },
    {
      number: 'All',
      unit: 'Insurance',
      sub: 'We handle the adjuster',
    },
  ]

  return (
    <section className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#222222]">
          {stats.map((stat) => (
            <div key={stat.unit} className="py-10 px-6 lg:px-10 text-center">
              <p
                className="text-[#E53E3E] text-5xl sm:text-6xl font-bold leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </p>
              <p className="text-white text-xs font-bold uppercase tracking-[0.2em] mt-3">
                {stat.unit}
              </p>
              <p className="text-white/35 text-xs mt-1.5 leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
