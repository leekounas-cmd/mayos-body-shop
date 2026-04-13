export type Review = {
  id: number
  name: string
  rating: number
  date: string
  text: string
  service?: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Maria G.',
    rating: 5,
    date: '2024-01',
    text: 'Had my car looking brand new after a wreck. Mayo handled all the back and forth with the adjuster himself — I didn\'t have to do anything. Couldn\'t believe how smooth it was.',
    service: 'Collision Repair',
  },
  {
    id: 2,
    name: 'James R.',
    rating: 5,
    date: '2024-02',
    text: 'Got a $400 estimate from another shop for a simple job. Mayo quoted me $50. Honest guy who does honest work. That\'s rare.',
    service: 'Dent & Scratch Repair',
  },
  {
    id: 3,
    name: 'Diana M.',
    rating: 5,
    date: '2023-11',
    text: '10000/10 recommend. Got my car back super fast and the work was impeccable. You can\'t even tell anything happened to it.',
    service: 'Auto Painting',
  },
  {
    id: 4,
    name: 'Carlos V.',
    rating: 5,
    date: '2023-10',
    text: 'Very professional and they kept me updated the whole time. Went above and beyond what I expected. My car looks perfect.',
    service: 'Collision Repair',
  },
  {
    id: 5,
    name: 'Ashley T.',
    rating: 5,
    date: '2024-03',
    text: 'The work they did is amazing. My car looks brand new. I was so impressed I asked for a stack of business cards to give to my friends.',
    service: 'Auto Painting',
  },
  {
    id: 6,
    name: 'Roberto L.',
    rating: 5,
    date: '2023-09',
    text: 'Mayo and his sons fixed my front bumper. Friendly people, decent price, and the work speaks for itself. Will be back.',
    service: 'Bumper Repair',
  },
  {
    id: 7,
    name: 'Priya S.',
    rating: 5,
    date: '2024-01',
    text: 'Other shops quoted me a month out. Mayo\'s team got it done in two weeks. Quality work and they actually respected my time.',
    service: 'Frame Repair',
  },
  {
    id: 8,
    name: 'Kevin H.',
    rating: 5,
    date: '2023-12',
    text: 'Best body shop in Dallas. Fair pricing, great customer service, and the results show what 25 years of experience looks like.',
    service: 'Collision Repair',
  },
  {
    id: 9,
    name: 'Linda P.',
    rating: 5,
    date: '2023-08',
    text: 'Family-owned, been going here for years. Simply the best in North Texas. Wouldn\'t trust my car with anyone else.',
    service: 'Auto Painting',
  },
  {
    id: 10,
    name: 'Tony B.',
    rating: 5,
    date: '2024-02',
    text: 'Came in for a quick fix and they asked for nothing extra. Better experience than any mechanic I\'ve been to. Honest shop, honest people.',
    service: 'Dent & Scratch Repair',
  },
  {
    id: 11,
    name: 'Sandra C.',
    rating: 5,
    date: '2023-07',
    text: 'Mayo Jr. helped me out and was super professional. They handled my insurance claim from start to finish. I just showed up to pick up my car.',
    service: 'Insurance Claims',
  },
  {
    id: 12,
    name: 'Marcus W.',
    rating: 5,
    date: '2024-03',
    text: 'Rear-ended and thought my car was totaled. Mayo took one look and said he could fix it. Two weeks later it looked showroom ready. Unbelievable.',
    service: 'Collision Repair',
  },
]
