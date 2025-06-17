"use client";

import { useState } from "react";
import { Search, Filter, Star, MapPin, Clock, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const restaurants = [
  {
    id: '1',
    name: 'Le Jardin Tropical',
    location: 'Centre-ville',
    cuisine: 'Française',
    rating: 4.6,
    reviews: 89,
    priceRange: '€€€',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    openingHours: '18h00 - 23h00',
    specialties: ['Bouillabaisse', 'Coq au vin', 'Tarte Tatin'],
    features: ['Terrasse', 'Parking', 'Réservation recommandée']
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    location: 'Front de mer',
    cuisine: 'Fruits de mer',
    rating: 4.8,
    reviews: 156,
    priceRange: '€€€€',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    openingHours: '12h00 - 22h00',
    specialties: ['Plateau de fruits de mer', 'Homard grillé', 'Paella'],
    features: ['Vue mer', 'Terrasse', 'Parking valet']
  },
  {
    id: '3',
    name: 'La Petite Auberge',
    location: 'Quartier historique',
    cuisine: 'Traditionnelle',
    rating: 4.4,
    reviews: 67,
    priceRange: '€€',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
    openingHours: '19h00 - 22h30',
    specialties: ['Cassoulet', 'Confit de canard', 'Crème brûlée'],
    features: ['Ambiance authentique', 'Cheminée', 'Groupes acceptés']
  },
  {
    id: '4',
    name: 'Fusion Moderne',
    location: 'Quartier des affaires',
    cuisine: 'Fusion',
    rating: 4.7,
    reviews: 134,
    priceRange: '€€€€',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
    openingHours: '18h30 - 23h30',
    specialties: ['Sushi fusion', 'Tataki de thon', 'Desserts créatifs'],
    features: ['Bar à cocktails', 'Musique live', 'Réservation obligatoire']
  }
];

const cuisineTypes = ['Française', 'Fruits de mer', 'Traditionnelle', 'Fusion', 'Italienne', 'Asiatique'];

export default function RestaurantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Découvrez les Meilleurs Restaurants
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Savourez la gastronomie locale dans nos restaurants sélectionnés
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
                      placeholder="Nom ou spécialité..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Cuisine Types */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Type de cuisine</label>
                  <div className="space-y-3">
                    {cuisineTypes.map((cuisine) => (
                      <div key={cuisine} className="flex items-center space-x-2">
                        <Checkbox
                          id={cuisine}
                          checked={selectedCuisines.includes(cuisine)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCuisines([...selectedCuisines, cuisine]);
                            } else {
                              setSelectedCuisines(selectedCuisines.filter(c => c !== cuisine));
                            }
                          }}
                        />
                        <label htmlFor={cuisine} className="text-sm">
                          {cuisine}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Caractéristiques</label>
                  <div className="space-y-3">
                    {['Terrasse', 'Vue mer', 'Parking', 'Bar', 'Musique live'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedFeatures([...selectedFeatures, feature]);
                            } else {
                              setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                            }
                          }}
                        />
                        <label htmlFor={feature} className="text-sm">
                          {feature}
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

          {/* Restaurants Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {restaurants.length} restaurants trouvés
              </p>
              <select className="border rounded-md px-3 py-2">
                <option>Trier par note</option>
                <option>Trier par prix</option>
                <option>Trier par nom</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.id} className="property-card group overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary">
                      {restaurant.priceRange}
                    </Badge>
                    <Badge variant="outline" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm">
                      {restaurant.cuisine}
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-1">{restaurant.name}</h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {restaurant.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0 pb-2">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-medium">{restaurant.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({restaurant.reviews} avis)
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{restaurant.openingHours}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Spécialités :</p>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.specialties.slice(0, 2).map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {restaurant.specialties.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{restaurant.specialties.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-2 flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {restaurant.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/restaurants/${restaurant.id}`}>Réserver</Link>
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