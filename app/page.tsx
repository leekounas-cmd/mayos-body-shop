import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { BeforeAfterShowcase } from '@/components/sections/BeforeAfterShowcase'
import { WhyMayos } from '@/components/sections/WhyMayos'
import { ReviewsCarousel } from '@/components/sections/ReviewsCarousel'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <BeforeAfterShowcase />
      <WhyMayos />
      <ReviewsCarousel />
      <CTABanner />
    </>
  )
}
