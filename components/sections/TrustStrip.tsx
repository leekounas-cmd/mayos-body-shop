export function TrustStrip() {
  const stats = [
    { number: '25+', label: 'Years in Business', sub: 'Serving Dallas since 1998' },
    { number: '205', label: 'Google Reviews', sub: 'Rated 4.9 out of 5 stars' },
    { number: 'All', label: 'Insurance Accepted', sub: 'We deal with the adjuster' },
    { number: '100%', label: 'Family Owned', sub: 'Mayo & his sons, no franchise' },
  ]

  return (
    <section className="bg-white border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#EEEEEE]">
          {stats.map((stat) => (
            <div key={stat.label} className="py-10 px-6 lg:px-10 text-center">
              <p
                className="text-[#111111] text-4xl sm:text-5xl font-bold leading-none mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </p>
              <p className="text-[#111111] text-sm font-semibold mb-1">{stat.label}</p>
              <p className="text-[#999999] text-xs leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
