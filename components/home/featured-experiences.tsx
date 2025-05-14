import Link from "next/link";
import { Clock, MapPin, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    title: "Coastal Reef Snorkeling Adventure",
    location: "Coral Bay",
    duration: "3 hours",
    groupSize: "Small group",
    price: 75,
    image: "https://images.pexels.com/photos/1268837/pexels-photo-1268837.jpeg"
  },
  {
    id: 2,
    title: "Traditional Cuisine Cooking Class",
    location: "Historic District",
    duration: "4 hours",
    groupSize: "6-10 people",
    price: 95,
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
  },
  {
    id: 3,
    title: "Sunset Catamaran Sailing Tour",
    location: "Marina Harbor",
    duration: "2.5 hours",
    groupSize: "Up to 12 people",
    price: 120,
    image: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg"
  }
];

export function FeaturedExperiences() {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Unique Experiences</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover unforgettable activities and tours to make your stay memorable
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/attractions">Browse All Experiences</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="property-card overflow-hidden group">
              <div className="overflow-hidden aspect-[3/2]">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="p-5 pb-2">
                <h3 className="font-semibold text-lg">{experience.title}</h3>
              </CardHeader>
              
              <CardContent className="p-5 pt-2 pb-2">
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{experience.groupSize}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-5 pt-2 flex justify-between items-center">
                <div>
                  <span className="font-bold text-lg">${experience.price}</span>
                  <span className="text-muted-foreground text-sm"> / person</span>
                </div>
                <Button asChild size="sm">
                  <Link href={`/attractions/${experience.id}`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}