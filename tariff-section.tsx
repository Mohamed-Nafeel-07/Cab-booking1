"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MapPin, Navigation, Clock } from "lucide-react"

export function TariffSection() {
  return (
    <section id="tariff" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Transparent Tariff Rates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Clear and competitive pricing for all trip types. No hidden charges, no surprises.
          </p>
        </div>

        <Tabs defaultValue="local" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="local" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Local Trips</span>
              <span className="sm:hidden">Local</span>
            </TabsTrigger>
            <TabsTrigger value="dayrent" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Day Rent</span>
              <span className="sm:hidden">Day</span>
            </TabsTrigger>
            <TabsTrigger value="outstation" className="flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              <span className="hidden sm:inline">Outstation</span>
              <span className="sm:hidden">Out</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="local">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Local Tariff
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Within Mayiladuthurai city limits. First 15 minutes waiting charge free.
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>Vehicle Type</TableHead>
                        <TableHead className="text-center">Minimum Rate</TableHead>
                        <TableHead className="text-center">Non-AC/KM</TableHead>
                        <TableHead className="text-center">AC/KM</TableHead>
                        <TableHead className="text-center">Waiting</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">MINI</TableCell>
                        <TableCell className="text-center">₹200 (3km)</TableCell>
                        <TableCell className="text-center">₹25.00</TableCell>
                        <TableCell className="text-center">₹25.00</TableCell>
                        <TableCell className="text-center">₹4.00/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">SEDAN</TableCell>
                        <TableCell className="text-center">₹200 (3km)</TableCell>
                        <TableCell className="text-center">₹25.00</TableCell>
                        <TableCell className="text-center">₹25.00</TableCell>
                        <TableCell className="text-center">₹4.00/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">SUV & MUV</TableCell>
                        <TableCell className="text-center">₹300 (3km)</TableCell>
                        <TableCell className="text-center">₹30.00</TableCell>
                        <TableCell className="text-center">₹30.00</TableCell>
                        <TableCell className="text-center">₹6.00/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INNOVA</TableCell>
                        <TableCell className="text-center">₹400 (3km)</TableCell>
                        <TableCell className="text-center">₹35.00</TableCell>
                        <TableCell className="text-center">₹35.00</TableCell>
                        <TableCell className="text-center">₹8.00/min</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dayrent">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Day Rent Package (200KM / 12 Hours)
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Perfect for full-day trips, sightseeing, or business travel.
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>Package</TableHead>
                        <TableHead className="text-center">MINI</TableHead>
                        <TableHead className="text-center">SEDAN</TableHead>
                        <TableHead className="text-center">SUV & MUV</TableHead>
                        <TableHead className="text-center">INNOVA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Non-AC</TableCell>
                        <TableCell className="text-center">₹3,000</TableCell>
                        <TableCell className="text-center font-bold text-primary">₹3,200</TableCell>
                        <TableCell className="text-center">₹4,400</TableCell>
                        <TableCell className="text-center">₹6,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AC</TableCell>
                        <TableCell className="text-center">₹3,400</TableCell>
                        <TableCell className="text-center font-bold text-primary">₹3,400</TableCell>
                        <TableCell className="text-center">₹4,600</TableCell>
                        <TableCell className="text-center">₹6,000</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/30">
                        <TableCell className="font-medium">Extra KM (Non-AC)</TableCell>
                        <TableCell className="text-center">₹12.00</TableCell>
                        <TableCell className="text-center font-bold text-primary">₹13.00</TableCell>
                        <TableCell className="text-center">₹16.00</TableCell>
                        <TableCell className="text-center">₹20.00</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/30">
                        <TableCell className="font-medium">Extra KM (AC)</TableCell>
                        <TableCell className="text-center">₹14.00</TableCell>
                        <TableCell className="text-center font-bold text-primary">₹14.00</TableCell>
                        <TableCell className="text-center">₹17.00</TableCell>
                        <TableCell className="text-center">₹20.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outstation">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-primary" />
                  Outstation Tariff (Up & Down - Above 400KM)
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Long-distance travel rates. Includes driver batta and halt charges.
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>Charges</TableHead>
                        <TableHead className="text-center">MINI</TableHead>
                        <TableHead className="text-center">SEDAN</TableHead>
                        <TableHead className="text-center">SUV & MUV</TableHead>
                        <TableHead className="text-center">INNOVA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Non-AC / KM</TableCell>
                        <TableCell className="text-center">₹12.00</TableCell>
                        <TableCell className="text-center">₹13.00</TableCell>
                        <TableCell className="text-center">₹16.00</TableCell>
                        <TableCell className="text-center">₹20.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AC / KM</TableCell>
                        <TableCell className="text-center">₹14.00</TableCell>
                        <TableCell className="text-center">₹14.00</TableCell>
                        <TableCell className="text-center">₹17.00</TableCell>
                        <TableCell className="text-center">₹20.00</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/30">
                        <TableCell className="font-medium">Driver Batta</TableCell>
                        <TableCell className="text-center">₹500</TableCell>
                        <TableCell className="text-center">₹500</TableCell>
                        <TableCell className="text-center">₹500</TableCell>
                        <TableCell className="text-center">₹600</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/30">
                        <TableCell className="font-medium">Day Halt</TableCell>
                        <TableCell className="text-center">₹1,200</TableCell>
                        <TableCell className="text-center">₹1,200</TableCell>
                        <TableCell className="text-center">₹1,200</TableCell>
                        <TableCell className="text-center">₹2,000</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/30">
                        <TableCell className="font-medium">Night Halt</TableCell>
                        <TableCell className="text-center">₹700</TableCell>
                        <TableCell className="text-center">₹700</TableCell>
                        <TableCell className="text-center">₹700</TableCell>
                        <TableCell className="text-center">₹1,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
