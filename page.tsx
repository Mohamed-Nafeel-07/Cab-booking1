import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VehiclesSection } from "@/components/vehicles-section"
import { FareCalculator } from "@/components/fare-calculator"
import { TariffSection } from "@/components/tariff-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VehiclesSection />
        <FareCalculator />
        <TariffSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
