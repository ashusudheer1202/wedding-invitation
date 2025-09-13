import { Hero } from "@/components/hero"
import { WeddingCountdown } from "@/components/wedding-countdown"
import { WeddingTimeline } from "@/components/wedding-timeline"
import { VenueDetails } from "@/components/venue-details"
import { AdditionalInfo } from "@/components/additional-info"
import { PhotoGallery } from "@/components/photo-gallery"
import { VideoGallery } from "@/components/video-gallery"
import { OurStory } from "@/components/our-story"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="home" className="scroll-mt-16">
        <Hero />
        <WeddingCountdown />
        <div id="story" className="scroll-mt-16 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The journey that brought us together</p>
          </div>
          <OurStory />
        </div>
      </div>
      </section>

      <section id="details" className="scroll-mt-16 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Wedding Details</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about our special day
            </p>
          </div>
          <WeddingTimeline />
          <VenueDetails />
          <AdditionalInfo />
        </div>
      </section>

      <section id="gallery" className="scroll-mt-16 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Gallery</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Capturing our journey together</p>
          </div>
          <PhotoGallery />
          <VideoGallery />
        </div>
      </section>

      

      <footer className="bg-pink-100 text-green-900 py-6">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <h3 className="text-3xl font-bold mb-4">Ashlesha & Sudheer</h3>
      <p className="text-lg mb-6 opacity-90">Thank you for being part of our love story</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm opacity-80">
        <p>Oct 2, 2025 • S Convention Function Hall</p>
        <span className="hidden md:block">•</span>
        <p>Brodipet, Bypass Road, Palakol, 534260</p>
      </div>
    </div>
  </div>
</footer>

    </main>
  )
}
