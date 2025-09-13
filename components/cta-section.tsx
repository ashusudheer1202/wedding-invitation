import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, MessageSquare, Camera } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Join Our Celebration</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Help us make this day even more special by sharing in our joy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 mx-auto text-primary mb-4 fill-current" />
              <h3 className="text-xl font-semibold mb-4">RSVP</h3>
              <p className="text-muted-foreground mb-6">Let us know if you'll be joining us for our special day</p>
              <Button asChild className="w-full">
                <Link href="/rsvp">Confirm Attendance</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Camera className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <p className="text-muted-foreground mb-6">View our engagement photos and pre-wedding memories</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/gallery">View Photos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <MessageSquare className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Guestbook</h3>
              <p className="text-muted-foreground mb-6">Leave us a message and share your well wishes</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/guestbook">Leave Message</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
