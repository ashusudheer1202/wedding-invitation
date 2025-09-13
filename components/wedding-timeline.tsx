"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Music, Utensils, Camera, Heart, Calendar, MapPin, Clock } from "lucide-react";

const timelineEvents = [
  {
    time: "11:00 AM",
    title: "Guest Arrival",
    description: "Welcome drinks and mingling in the garden",
    icon: Users,
  },
  {
    time: "12:00 PM",
    title: "Dancing and Celebration",
    description: "Open floor dancing and music to celebrate together",
    icon: Music,
  },
  {
    time: "4:00 PM",
    title: "Cocktail Hour",
    description: "Celebration drinks and photo session",
    icon: Camera,
  },
  {
    time: "6:00 PM",
    title: "Wedding Ceremony",
    description: "Exchange of vows in the Rose Garden",
    icon: Heart,
  },
  {
    time: "8:00 PM",
    title: "Reception Dinner",
    description: "Three-course dinner in the Grand Pavilion",
    icon: Utensils,
  },
];

export function WeddingTimeline() {
  return (
    <>
      {/* Wedding Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Wedding Details</h2> */}
            {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              All the important information you need to know about our special day
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Date Card */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">Date</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thursday
                  <br />
                  OCT 2nd, 2025
                </p>
              </CardContent>
            </Card>

            {/* Time Card */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ceremony: 7:00 PM</p>
              </CardContent>
            </Card>

            {/* Venue Card */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">Venue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  S Convention Function Hall
                  <br />
                  Brodipet
                  <br />
                  Bypass Road, Palakol, 534260
                </p>
              </CardContent>
            </Card>

            {/* Dress Code Card */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">Dress Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Semi-Formal
                  <br />
                  Garden Party Attire
                  <br />
                  Pastels Preferred
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline of Events Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Timeline of Events</h2>
          <p className="text-muted-foreground">Here's how our special day will unfold</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 z-10" />

                {/* Timeline card */}
                <div className={`flex-1 ml-16 md:ml-0 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {event.time}
                          </span>
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
