"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calculator, Car, Snowflake, Sun } from "lucide-react"

const vehicleRates = {
  mini: { name: "Mini", baseFare: 200, baseKm: 3, nonAc: 25, ac: 25, waiting: 4 },
  sedan: { name: "Sedan", baseFare: 200, baseKm: 3, nonAc: 25, ac: 25, waiting: 4 },
  suv: { name: "SUV & MUV", baseFare: 300, baseKm: 3, nonAc: 30, ac: 30, waiting: 6 },
  innova: { name: "Innova", baseFare: 400, baseKm: 3, nonAc: 35, ac: 35, waiting: 8 },
}

export function FareCalculator() {
  const [distance, setDistance] = useState<number>(10)
  const [vehicle, setVehicle] = useState<string>("sedan")
  const [isAc, setIsAc] = useState<boolean>(true)
  const [waitingMins, setWaitingMins] = useState<number>(0)
  const [fare, setFare] = useState<number>(0)

  useEffect(() => {
    const rates = vehicleRates[vehicle as keyof typeof vehicleRates]
    const perKmRate = isAc ? rates.ac : rates.nonAc
    
    let calculatedFare = rates.baseFare
    if (distance > rates.baseKm) {
      calculatedFare += (distance - rates.baseKm) * perKmRate
    }
    
    // First 15 mins waiting is free within city limits
    if (waitingMins > 15) {
      calculatedFare += (waitingMins - 15) * rates.waiting
    }
    
    setFare(Math.round(calculatedFare))
  }, [distance, vehicle, isAc, waitingMins])

  return (
    <section id="calculator" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Fare Calculator</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Estimate Your Fare
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden charges. Calculate your trip cost before booking.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary-foreground" />
                </div>
                Local Trip Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Vehicle Type</Label>
                    <Select value={vehicle} onValueChange={setVehicle}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(vehicleRates).map(([key, val]) => (
                          <SelectItem key={key} value={key}>{val.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Distance (KM)</Label>
                    <Input
                      type="number"
                      min={1}
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                    />
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 KM</span>
                      <span>100 KM</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>AC Preference</Label>
                    <div className="flex gap-3">
                      <Button
                        variant={isAc ? "default" : "outline"}
                        className="flex-1"
                        onClick={() => setIsAc(true)}
                      >
                        <Snowflake className="w-4 h-4 mr-2" />
                        AC
                      </Button>
                      <Button
                        variant={!isAc ? "default" : "outline"}
                        className="flex-1"
                        onClick={() => setIsAc(false)}
                      >
                        <Sun className="w-4 h-4 mr-2" />
                        Non-AC
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Waiting Time (Minutes)</Label>
                    <Input
                      type="number"
                      min={0}
                      value={waitingMins}
                      onChange={(e) => setWaitingMins(Number(e.target.value))}
                    />
                    <p className="text-xs text-muted-foreground">First 15 minutes free within city</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="bg-secondary rounded-2xl p-6 text-center space-y-4">
                    <Car className="w-16 h-16 mx-auto text-secondary-foreground/80" />
                    <div>
                      <p className="text-sm text-secondary-foreground/70 mb-1">Estimated Fare</p>
                      <p className="text-5xl font-bold text-secondary-foreground">
                        ₹{fare.toLocaleString()}
                      </p>
                    </div>
                    <div className="border-t border-secondary-foreground/20 pt-4 space-y-2 text-left text-sm text-secondary-foreground/80">
                      <div className="flex justify-between">
                        <span>Base Fare ({vehicleRates[vehicle as keyof typeof vehicleRates].baseKm}km)</span>
                        <span>₹{vehicleRates[vehicle as keyof typeof vehicleRates].baseFare}</span>
                      </div>
                      {distance > vehicleRates[vehicle as keyof typeof vehicleRates].baseKm && (
                        <div className="flex justify-between">
                          <span>Additional {distance - vehicleRates[vehicle as keyof typeof vehicleRates].baseKm}km</span>
                          <span>₹{(distance - vehicleRates[vehicle as keyof typeof vehicleRates].baseKm) * (isAc ? vehicleRates[vehicle as keyof typeof vehicleRates].ac : vehicleRates[vehicle as keyof typeof vehicleRates].nonAc)}</span>
                        </div>
                      )}
                      {waitingMins > 15 && (
                        <div className="flex justify-between">
                          <span>Waiting ({waitingMins - 15} mins)</span>
                          <span>₹{(waitingMins - 15) * vehicleRates[vehicle as keyof typeof vehicleRates].waiting}</span>
                        </div>
                      )}
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => {
                        const message = `Hi! I need a ${vehicleRates[vehicle as keyof typeof vehicleRates].name} ${isAc ? "AC" : "Non-AC"} for ${distance}km. Estimated fare: ₹${fare}`
                        window.open(`https://wa.me/919688337755?text=${encodeURIComponent(message)}`, "_blank")
                      }}
                    >
                      Book This Trip
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
