import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, Gift, Camera, Music, Utensils, AlertCircle } from "lucide-react"

export function AdditionalInfo() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Additional Information</h2>
        <p className="text-muted-foreground">A few more details to help you prepare for our special day</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shirt className="h-5 w-5 text-primary" />
              Dress Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Semi-formal garden party attire. We love pastels and florals! Ladies, consider block heels for the garden
              setting.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Gift className="h-5 w-5 text-primary" />
              Gift Registry
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your presence is the greatest gift! If you'd like to give something, we're registered at Williams Sonoma
              and Crate & Barrel.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Camera className="h-5 w-5 text-primary" />
              Photography
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We'll have a professional photographer, but we'd love your photos too! Share them with
              #AshleshaSudheer2025
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Music className="h-5 w-5 text-primary" />
              Music Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Have a song that gets you dancing? Let us know in your RSVP! We want everyone on the dance floor.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Utensils className="h-5 w-5 text-primary" />
              Dietary Needs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Please let us know about any dietary restrictions or allergies when you RSVP. We'll make sure everyone is
              well-fed!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="h-5 w-5 text-primary" />
              Weather Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our ceremony is outdoors with a beautiful indoor backup plan. Either way, it's going to be perfect!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
