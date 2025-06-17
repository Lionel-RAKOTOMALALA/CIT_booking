"use client";

import { useState } from "react";
import { Search, Filter, Star, MapPin, Wifi, Car, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const hotels = [
  {
    id: '1',
    name: 'Oceanfront Paradise Resort',
    location: 'Coastal Bay',
    rating: 4.8,
    reviews: 128,
    price: 199,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    amenities: ['WiFi', 'Piscine', 'Spa', 'Restaurant'],
    availableRooms: 3,
    discount: true,
  },
  {
    id: '2',
    name: 'Tropical Haven Hotel & Spa',
    location: 'Palm Beach',
    rating: 4.7,
    reviews: 96,
    price: 159,
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    amenities: ['WiFi', 'Piscine', 'Spa'],
    availableRooms: 5,
    discount: false,
  },
  {
    id: '3',
    name: 'Sunrise Beachfront Suites',
    location: 'Crystal Shores',
    rating: 4.9,
    reviews: 203,
    price: 259,
    image: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg',
    amenities: ['WiFi', 'Piscine', 'Spa', 'Restaurant', 'Parking'],
    availableRooms: 1,
    discount: true,
  },
  {
    id: '4',
    name: 'Urban Luxury Downtown Hotel',
    location: 'Centre-ville',
    rating: 4.6,
    reviews: 168,
    price: 179,
    image: 'https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg',
    amenities: ['WiFi', 'Restaurant', 'Parking'],
    availableRooms: 8,
    discount: false,
  },
];

export default function HotelsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenityIcons = {
    'WiFi': Wifi,
    'Piscine': '🏊',
    'Spa': '💆',
    'Restaurant': Utensils,
    'Parking': Car,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trouvez Votre Hôtel Parfait
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez notre sélection d'hôtels de luxe dans la région Sud
            </p>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtres
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Rechercher</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Nom ou lieu..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-4 block">
                    Prix par nuit: {priceRange[0]}€ - {priceRange[1]}€
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                </div>

                {/* Amenities */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Équipements</label>
                  <div className="space-y-3">
                    {['WiFi', 'Piscine', 'Spa', 'Restaurant', 'Parking'].map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={selectedAmenities.includes(amenity)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedAmenities([...selectedAmenities, amenity]);
                            } else {
                              setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
                            }
                          }}
                        />
                        <label htmlFor={amenity} className="text-sm">
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Appliquer les filtres
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Hotels Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {hotels.length} hôtels trouvés
              </p>
              <select className="border rounded-md px-3 py-2">
                <option>Trier par prix</option>
                <option>Trier par note</option>
                <option>Trier par nom</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => (
                <Card key={hotel.id} className="property-card group overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    {hotel.discount && (
                      <Badge className="absolute top-3 left-3 bg-primary">
                        Offre Spéciale
                      </Badge>
                    )}
                    <Badge variant="outline" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm">
                      {hotel.availableRooms} chambres restantes
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-1">{hotel.name}</h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {hotel.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0 pb-2">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({hotel.reviews} avis)
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {hotel.amenities.slice(0, 3).map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {hotel.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{hotel.amenities.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-2 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">{hotel.price}€</span>
                      <span className="text-muted-foreground text-sm"> / nuit</span>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/hotels/${hotel.id}`}>Voir Détails</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}