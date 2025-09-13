import { Heart } from "lucide-react";

export function OurStory() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Our Story
        </h2> */}

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="/ourstory/ourstory.JPG"
              alt="Couple"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Every love story is beautiful, but ours is my favorite. Our journey began with a chance encounter that
          blossomed into a deep connection. Through laughter and tears, adventures and quiet moments, we found in
          each other a love worth celebrating for a lifetime.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          As we prepare to begin this new chapter together, we are filled with gratitude for the love and support
          of our family and friends. We can't wait to celebrate this special day with all of you.
        </p>
        <div className="mt-8 flex justify-center">
          <Heart className="text-rose-400 h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
