import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { SEOHead } from '../components/ui/SEOHead.jsx'
import { HeroSection } from '../components/home/HeroSection.jsx'
import { CompleteSolutionStrip } from '../components/home/CompleteSolutionStrip.jsx'
import { ServicesStrip } from '../components/home/ServicesStrip.jsx'
import { WhyBitZealth } from '../components/home/WhyBitZealth.jsx'
import { LifecyclePreview } from '../components/home/LifecyclePreview.jsx'
import { FeaturedWork } from '../components/home/FeaturedWork.jsx'
import { ProductsTeaser } from '../components/home/ProductsTeaser.jsx'
import { Testimonials } from '../components/home/Testimonials.jsx'
import { CTABanner } from '../components/home/CTABanner.jsx'

export function Home() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      <SEOHead titleKey="seo.home.title" descKey="seo.home.desc" />
      <HeroSection />
      <CompleteSolutionStrip />
      <ServicesStrip />
      <WhyBitZealth />
      <LifecyclePreview />
      <FeaturedWork />
      <ProductsTeaser />
      <Testimonials />
      <CTABanner />
    </div>
  )
}
