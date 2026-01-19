"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  Shield, 
  CreditCard, 
  MapPin, 
  Headphones, 
  Star,
  Wallet,
  Users
} from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round the clock service, any time of day or night",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Verified drivers with GPS-tracked vehicles",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "No hidden charges, pay only what you see",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Service across 20+ cities in Tamil Nadu",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated helpline for any assistance",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Cash, UPI, and card payments accepted",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "Well-maintained, clean vehicles always",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Experienced, courteous, and trained drivers",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {"Mayiladuthurai's"} Most Trusted Taxi Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the difference with Friends Track Call Taxi. Quality service that speaks for itself.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-primary/30"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
