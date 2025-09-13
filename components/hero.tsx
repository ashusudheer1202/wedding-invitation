import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
  <img
    src="https://th.bing.com/th/id/R.1f2b0e5cbe610e69c6d2434d1b0df81b?rik=hVcZQX5DZEWefg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fKpD2oo0.jpg&ehk=HwS8tmQ4NRxwvG2gPF9kG9x1nn%2fTZrke0hjfNejJ7%2bs%3d&risl=&pid=ImgRaw&r=0"
    alt="Sarah and Michael"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30" />
</div>


      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
         {/* <Heart className="h-16 w-16 mx-auto mb-6 fill-red-600" /> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">Ashlesha & Sudheer</h1>
          <p className="text-xl md:text-2xl mb-2 text-white/90">are getting married</p>
          <p className="text-lg md:text-xl text-white/80">October 2nd,2025 •S convention Function hall, Brodipet, Bypass Road, Palakol</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/rsvp">RSVP Now</Link>
          </Button> */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
          >
            <Link href="#details">View Details</Link>
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-white/70" />
        </div>
      </div>
    </section>
  )
}
