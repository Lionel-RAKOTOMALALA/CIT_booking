import Link from "next/link";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const featuredProperties = [
  {
    id: 1,
    name: "Oceanfront Paradise Resort",
    location: "Coastal Bay",
    rating: 4.8,
    reviews: 128,
    price: 199,
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    discount: true,
    availability: 3
  },
  {
    id: 2,
    name: "Tropical Haven Hotel & Spa",
    location: "Palm Beach",
    rating: 4.7,
    reviews: 96,
    price: 159,
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    discount: false,
    availability: 5
  },
  {
    id: 3,
    name: "Sunrise Beachfront Suites",
    location: "Crystal Shores",
    rating: 4.9,
    reviews: 203,
    price: 259,
    image: "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg",
    discount: true,
    availability: 1
  },
  {
    id: 4,
    name: "Urban Luxury Downtown Hotel",
    location: "City Center",
    rating: 4.6,
    reviews: 168,
    price: 179,
    image: "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg",
    discount: false,
    availability: 8
  }
];

export function FeaturedProperties() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl">
              Handpicked accommodations with exceptional amenities and stellar reviews
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/hotels">View All Properties</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="property-card group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={property.image}
                  alt={property.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {property.discount && (
                  <Badge className="absolute top-3 left-3 bg-primary">Special Offer</Badge>
                )}
                <Badge variant="outline" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm">
                  {property.availability} rooms left
                </Badge>
              </div>
              
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1">{property.name}</h3>
                    <p className="text-muted-foreground text-sm">{property.location}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 pt-0 pb-2">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="text-muted-foreground text-sm">
                    ({property.reviews} reviews)
                  </span>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-2 flex justify-between items-center">
                <div>
                  <span className="font-bold text-lg">${property.price}</span>
                  <span className="text-muted-foreground text-sm"> / night</span>
                </div>
                <Button asChild size="sm">
                  <Link href={`/hotels/${property.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}