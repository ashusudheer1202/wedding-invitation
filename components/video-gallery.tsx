import { Card, CardContent } from "@/components/ui/card"

export function VideoGallery() {
  // Replace this with your Google Drive "direct" video link
  const googleDriveVideoUrl = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Video</h2>
        <p className="text-muted-foreground">Special moment captured in motion</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg rounded-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video">
              <video
                src={googleDriveVideoUrl}
                controls
                className="w-full h-full object-contain bg-black"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Our Special Moment</h3>
              <p className="text-muted-foreground text-sm">
                This video captures a memorable moment from our journey together.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
