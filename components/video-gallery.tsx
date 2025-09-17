import { Card, CardContent } from "@/components/ui/card";

export function VideoGallery() {
  const googleDriveEmbedUrl =
    "https://drive.google.com/file/d/12p1FAAbWHJ_QAP5v5v0pmLRiXYJ65WNQ/preview";

  return (
    <section id="video" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Our Pre-Wedding Video
        </h2>
        <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={googleDriveEmbedUrl}
            title="Pre-Wedding Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
