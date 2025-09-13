import { MapPin, Car, Bed, Phone } from "lucide-react";

export function VenueDetails() {
  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Venue Information
        </h2>
        <p className="text-muted-foreground">
          Everything you need to know about our beautiful venue
        </p>
      </div>

      <div className="space-y-8">
        {/* Venue Info with Map */}
        <div className="rounded-lg border p-6 shadow-sm bg-white">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <MapPin className="h-5 w-5 text-primary" />S Convention Function
            Hall
          </h3>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm">Address</h4>
              <p className="text-muted-foreground text-sm">
                S Convention Function Hall <br />
                Brodipet <br />
                Bypass Road, Palakol, 534260
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              Manu: 9505099789
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              S Convention Function Hall is a breathtaking outdoor venue
              featuring manicured rose gardens, elegant pavilions, and stunning
              sunset views — the perfect setting for our romantic celebration.
            </p>

            {/* Map embedded here */}
            <div className="rounded-lg overflow-hidden mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.048126290998!2d81.73498547412099!3d16.523667827114117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37db6a0c3b1e3f%3A0x697d4fcbbe388953!2sS-Convention!5e0!3m2!1sen!2sin!4v1757751096513!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="rounded-lg border p-6 shadow-sm bg-white">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <Car className="h-5 w-5 text-primary" />
            Transportation
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold">Parking:</span> Available beside{" "}
              <span className="font-semibold">HOTEL S-INN</span>, just a
              one-minute walk from the venue (GPGG+8H6, Brodipet, Palakollu,
              Andhra Pradesh 534260). Valet service is provided for guests.
            </p>
            <p>
              <span className="font-semibold">Rideshare:</span> Uber/Lyft pickup
              and drop-off area is at the main entrance of S-Convention.
            </p>
            <p>
              <span className="font-semibold">Shuttle:</span> Complimentary
              shuttle service is available from recommended hotels nearby.
            </p>
          </div>
        </div>

        {/* Accommodation */}
        <div className="rounded-lg border p-6 shadow-sm bg-white">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <Bed className="h-5 w-5 text-primary" />
            Accommodation
          </h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-base mb-1">HOTEL S-INN</h4>
              <p>
                Address: Bypass Road, beside S-CONVENTION, Brodipet, Palakollu,
                Andhra Pradesh 534260
              </p>
              <p className="mt-1">
                Ideally located just a minute’s walk from the venue, offering
                comfortable rooms, free Wi-Fi, and on-site dining.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.041176602906!2d81.73451827412103!3d16.524018727104494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37dbb9297313b9%3A0x5a2737820cde97cb!2sHOTEL%20S-INN!5e0!3m2!1sen!2sin!4v1757751415084!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div>
              <p className="font-medium">Other Nearby Options:</p>
              <ul className="list-disc list-inside">
                <li>Sunset Plaza Hotel – 10 min drive • Shuttle available</li>
                <li>Garden Inn & Suites – 15 min drive • Budget friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
