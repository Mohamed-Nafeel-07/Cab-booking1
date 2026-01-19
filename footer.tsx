"use client"

import Link from "next/link"
import { Car, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold leading-tight">Friends Track</h3>
                <p className="text-xs text-secondary-foreground/70">Call Taxi & Cabs</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              {"Mayiladuthurai's"} No.1 taxi service. Reliable, affordable, and available 24/7 for all your travel needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <Link href="#vehicles" className="hover:text-primary transition-colors">Our Vehicles</Link>
              </li>
              <li>
                <Link href="#calculator" className="hover:text-primary transition-colors">Fare Calculator</Link>
              </li>
              <li>
                <Link href="#tariff" className="hover:text-primary transition-colors">Tariff Rates</Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Local Taxi Service</li>
              <li>Outstation Trips</li>
              <li>Airport Transfers</li>
              <li>Corporate Bookings</li>
              <li>Wedding Car Rental</li>
              <li>Tour Packages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Shop No. 4, Samsulhutha Nagar, TVR Main Road, Mayiladuthurai - 609001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:04364288888" className="hover:text-primary transition-colors">04364 - 288888</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:9688337755" className="hover:text-primary transition-colors">96 88 33 77 55</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:friendstrackmyd@gmail.com" className="hover:text-primary transition-colors">friendstrackmyd@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Friends Track Call Taxi & Cabs. All rights reserved.
          </p>
          <p className="text-sm text-secondary-foreground/60">
            Online Booking: <a href="https://www.friendstrackmyd.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.friendstrackmyd.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
