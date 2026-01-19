"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["04364 - 288888", "04364 - 246006"],
  },
  {
    icon: Phone,
    title: "Mobile",
    details: ["96 88 33 77 55", "96 55 77 97 88", "83 00 06 08 45"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["friendstrackmyd@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["24 Hours / 7 Days", "Always Available"],
  },
]

const branchLocations = [
  { name: "Kumbakonam", phone: "9442410004" },
  { name: "Theni", phone: "0454 - 262677" },
  { name: "Ramnad", phone: "04567 - 222433" },
  { name: "Madurai", phone: "0452 - 2666777" },
  { name: "Coimbatore", phone: "0422 - 2523232" },
  { name: "Pudukkottai", phone: "8110888666" },
  { name: "Karur", phone: "04324 - 235300" },
  { name: "Pattukkottai", phone: "04373 - 242700" },
  { name: "Thoothukudi", phone: "0461 - 2333344" },
  { name: "Vellore", phone: "0416 - 2333444" },
  { name: "Nagapattinam", phone: "04652 - 228228" },
  { name: "Dindigul", phone: "0451 - 2666777" },
  { name: "Pudukkottai", phone: "04322 - 220022" },
  { name: "Pollachi", phone: "9659233999" },
  { name: "Karaikudi", phone: "04564 - 276666" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919688337755?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Contact Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions? We are here to help 24/7. Reach out through any of our contact channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Head Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Shop No. 4, Samsulhutha Nagar,<br />
                  Agarakeerangudi, TVR Main Road,<br />
                  Mayiladuthurai - 609 001
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <Card key={item.title}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">
                            {item.title.includes("Phone") || item.title === "Mobile" ? (
                              <a href={`tel:${detail.replace(/\s|-/g, "")}`} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : item.title === "Email" ? (
                              <a href={`mailto:${detail}`} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Branch Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Our Branch Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                  {branchLocations.map((branch) => (
                    <a
                      key={branch.name}
                      href={`tel:${branch.phone.replace(/\s|-/g, "")}`}
                      className="flex flex-col p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <span className="font-medium text-foreground">{branch.name}</span>
                      <span className="text-xs text-muted-foreground">{branch.phone}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="w-4 h-4 mr-2" />
                  Send via WhatsApp
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Or email us at{" "}
                  <a href="mailto:friendstrackmyd@gmail.com" className="text-primary hover:underline">
                    friendstrackmyd@gmail.com
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
