const stats = [
  {
    value: '25+',
    title: 'Years of Experience',
    description: 'In business since 1998. We\'ve repaired thousands of vehicles in Dallas and the surrounding area. This is all we do — and we do it right.',
  },
  {
    value: '205',
    title: '5-Star Reviews',
    description: 'Real reviews from real Dallas drivers. Our reputation is built on honest work, fair prices, and treating every customer like family.',
  },
  {
    value: 'All',
    title: 'Insurance Handled',
    description: 'We work with every major insurance company. We deal directly with the adjusters so you don\'t have to lift a finger.',
  },
]

export function WhyMayos() {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-24 border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block border-2 border-[#111111] bg-[#E53E3E] px-4 py-1 text-sm font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#111111] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Choose Us
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-[#111111]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What Sets Mayo&apos;s Apart
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.title}
              className={`border-2 border-[#111111] p-8 shadow-[4px_4px_0px_#111111] ${i === 1 ? 'bg-[#E53E3E] text-white' : 'bg-white text-[#111111]'}`}
            >
              <p
                className={`text-6xl font-bold leading-none mb-3 ${i === 1 ? 'text-white' : 'text-[#E53E3E]'}`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.value}
              </p>
              <h3
                className={`text-xl font-bold uppercase tracking-wide mb-3 ${i === 1 ? 'text-white' : 'text-[#111111]'}`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.title}
              </h3>
              <p className={`text-sm leading-relaxed ${i === 1 ? 'text-white/80' : 'text-[#555555]'}`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
