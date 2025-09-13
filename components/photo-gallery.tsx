"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

type Photo = {
  id: number;
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
};

const photos: Photo[] = [
  {
    id: 1,
    src: "/ourgallery/NAG04458.JPG",
    alt: "Sarah and Michael in the park",
    title: "Our First Date Location",
    width: 200,
    height: 300,
  },
  {
    id: 2,
    src: "/ourgallery/NAG04463.JPG",
    alt: "Laughing together",
    title: "Always Laughing Together",
    width: 500, // landscape photo
    height: 280,
  },
  {
    id: 3,
    src: "/ourgallery/NAG04567.JPG",
    alt: "Sunset engagement photo",
    title: "Golden Hour Magic",
    width: 400,
    height: 400,
  },
  {
    id: 4,
    src: "/ourgallery/K_C03907.JPG",
    alt: "Dancing together",
    title: "Practice for the Big Day",
    width: 400,
    height: 400,
  },
  {
    id: 5,
    src: "/ourgallery/NAG04338.JPG",
    alt: "The proposal moment",
    title: "The Proposal",
    width: 400,
    height: 400,
  },
  {
    id: 6,
    src: "/ourgallery/NAG04599.JPG",
    alt: "Walking hand in hand",
    title: "Walking Into Forever",
    width: 400,
    height: 400,
  },
  {
    id: 7,
    src: "/ourgallery/photo1.jpg",
    alt: "Picnic in the park",
    title: "Sunday Picnics",
    width: 400,
    height: 400,
  },
  {
    id: 8,
    src: "/ourgallery/NAG05349.JPG",
    alt: "Formal engagement photo",
    title: "Dressed to Impress",
    width: 400,
    height: 400,
  },
  {
    id: 9,
    src: "/ourgallery/photo2.jpg",
    alt: "At home together",
    title: "Home Sweet Home",
    width: 400,
    height: 400,
  },
];

export function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const navigate = (dir: "prev" | "next") => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      dir === "prev"
        ? selectedIndex === 0
          ? photos.length - 1
          : selectedIndex - 1
        : selectedIndex === photos.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Engagement Photos</h2>
        <p className="text-muted-foreground">Our journey to this special day</p>
      </div>

      {/* Photo Grid - dynamic width & height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group cursor-pointer rounded overflow-hidden shadow hover:shadow-lg transition"
            onClick={() => openLightbox(index)}
            style={{
              width: "100%",
              height: photo.height ? `${photo.height}px` : "auto",
            }}
          >
            <div className="relative bg-gray-100 w-full h-full">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition">
                <Heart className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 fill-current" />
              </div>
              {/* <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white text-sm font-medium">{photo.title}</h3>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded"
            />

            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev / Next */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
              onClick={() => navigate("prev")}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
              onClick={() => navigate("next")}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-white text-lg font-semibold">
                {photos[selectedIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
