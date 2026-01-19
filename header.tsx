"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, Menu, Car } from "lucide-react"

const navLinks = [
  { href: "#vehicles", label: "Vehicles" },
  { href: "#calculator", label: "Fare Calculator" },
  { href: "#tariff", label: "Tariff" },
  { href: "#features", label: "Why Us" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground leading-tight">Friends Track</h1>
              <p className="text-xs text-muted-foreground">Call Taxi & Cabs</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a href="tel:04364288888" className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Phone className="w-4 h-4" />
                <span>04364-288888</span>
              </Button>
            </a>
            <a href="tel:9688337755">
              <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Book Now</span>
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Car className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-bold text-foreground">Friends Track</h2>
                      <p className="text-xs text-muted-foreground">Call Taxi & Cabs</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="border-t pt-4 space-y-3">
                    <a href="tel:04364288888" className="block">
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        <Phone className="w-4 h-4" />
                        04364-288888
                      </Button>
                    </a>
                    <a href="tel:9688337755" className="block">
                      <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Phone className="w-4 h-4" />
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
