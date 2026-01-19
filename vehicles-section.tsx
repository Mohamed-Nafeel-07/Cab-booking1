"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Snowflake, Car } from "lucide-react"

const vehicles = [
  {
    type: "MINI",
    models: ["Wagon R", "Bolt", "Ritz", "HY10", "Liva"],
    seats: "4+1",
    image: "🚗",
    baseRate: 200,
    basekm: 3,
    perKm: 25,
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    type: "SEDAN",
    models: ["Swift Dzire", "Toyota Glanza", "Hyundai Aura", "Etios"],
    seats: "4+1",
    image: "🚙",
    baseRate: 200,
    basekm: 3,
    perKm: 25,
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    type: "SUV & MUV",
    models: ["Ertiga", "Marazzo", "Tavera", "Renault Lodgy"],
    seats: "7+1 & 9+1",
    image: "🚐",
    baseRate: 300,
    basekm: 3,
    perKm: 30,
    color: "bg-orange-100 text-orange-800 border-orange-200",
  },
  {
    type: "INNOVA",
    models: ["Toyota Innova", "Innova Crysta"],
    seats: "7+1",
    image: "🚘",
    baseRate: 400,
    basekm: 3,
    perKm: 35,
    color: "bg-amber-100 text-amber-800 border-amber-200",
  },
]

export function VehiclesSection() {
  return (
    <section id="vehicles" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Our Fleet</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Choose Your Perfect Ride
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Well-maintained vehicles with professional drivers. AC and Non-AC options available for all vehicle types.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.type} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
              <CardHeader className="text-center pb-2">
                <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {vehicle.image}
                </div>
                <CardTitle className="text-xl">{vehicle.type}</CardTitle>
                <Badge className={vehicle.color}>{vehicle.seats} Seats</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {vehicle.models.map((model) => (
                    <span key={model} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      {model}
                    </span>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Base Fare ({vehicle.basekm}km)</span>
                    <span className="font-bold text-foreground">₹{vehicle.baseRate}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Per KM</span>
                    <span className="font-bold text-primary">₹{vehicle.perKm}</span>
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 pt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.seats}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Snowflake className="w-4 h-4" />
                    <span>AC/Non-AC</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Car className="w-4 h-4" />
                    <span>GPS</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
