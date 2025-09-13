"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("2025-10-02T19:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Countdown to Our Big Day</h2>
          <p className="text-muted-foreground text-lg">We can't wait to celebrate with you!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{timeLeft.days}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Days</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{timeLeft.hours}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Hours</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{timeLeft.minutes}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Minutes</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{timeLeft.seconds}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Seconds</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
