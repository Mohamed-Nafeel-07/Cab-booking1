"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Calendar, Clock, Phone, Car } from "lucide-react"

export function HeroSection() {
  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleBookNow = () => {
    const message = `Hi! I want to book a cab.%0APickup: ${pickup}%0ADrop: ${dropoff}%0AVehicle: ${vehicleType}%0ADate: ${date}%0ATime: ${time}`
    window.open(`https://wa.me/919688337755?text=${message}`, "_blank")
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-secondary-foreground space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground bg-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              24/7 Service Available
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {"Mayiladuthurai's"} <span className="text-primary">No.1</span> Call Taxi Service
            </h1>
            
            <p className="text-lg text-secondary-foreground/80 max-w-lg leading-relaxed">
              Friends Track Call Taxi & Cabs - Your trusted travel partner since years. 
              Experience comfortable rides with transparent pricing across Tamil Nadu.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="tel:04364288888" className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">04364 - 288888</span>
              </a>
              <a href="tel:9688337755" className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">96 88 33 77 55</span>
              </a>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-secondary-foreground/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-secondary-foreground/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-secondary-foreground/70">Cities Covered</div>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-card-foreground">Book Your Ride</h2>
                <p className="text-sm text-muted-foreground">Quick & Easy Booking</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pickup" className="text-card-foreground">Pickup Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                  <Input 
                    id="pickup"
                    placeholder="Enter pickup point"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dropoff" className="text-card-foreground">Drop Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                  <Input 
                    id="dropoff"
                    placeholder="Enter destination"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-card-foreground">Vehicle Type</Label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mini">Mini (Wagon R, Bolt, Ritz)</SelectItem>
                    <SelectItem value="sedan">Sedan (Swift Dzire, Etios)</SelectItem>
                    <SelectItem value="suv">SUV & MUV (Ertiga, Marazzo)</SelectItem>
                    <SelectItem value="innova">Innova</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-card-foreground">Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-card-foreground">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleBookNow}
                className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Book Now via WhatsApp
              </Button>
              
              <p className="text-center text-xs text-muted-foreground">
                Or call us directly at <a href="tel:04364288888" className="text-primary font-medium">04364-288888</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
