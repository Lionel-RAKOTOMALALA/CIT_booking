"use client";

import { useState } from "react";
import { Search, Filter, Star, MapPin, Users, Fuel, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const cars = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Corolla',
    type: 'Économique',
    year: 2023,
    seats: 5,
    transmission: 'Automatique',
    fuelType: 'Essence',
    pricePerDay: 45,
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
    features: ['Climatisation', 'GPS', 'Bluetooth', 'USB'],
    rating: 4.5,
    reviews: 89,
    available: true
  },
  {
    id: '2',
    brand: 'BMW',
    model: 'X3',
    type: 'SUV',
    year: 2023,
    seats: 5,
    transmission: 'Automatique',
    fuelType: 'Diesel',
    pricePerDay: 89,
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
    features: ['Climatisation', 'GPS', 'Bluetooth', 'Cuir', 'Toit ouvrant'],
    rating: 4.8,
    reviews: 156,
    available: true
  },
  {
    id: '3',
    brand: 'Mercedes',
    model: 'Classe A',
    type: 'Compacte Premium',
    year: 2023,
    seats: 5,
    transmission: 'Automatique',
    fuelType: 'Essence',
    pricePerDay: 65,
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg',
    features: ['Climatisation', 'GPS', 'Bluetooth', 'Cuir', 'Caméra de recul'],
    rating: 4.7,
    reviews: 124,
    available: true
  },
  {
    id: '4',
    brand: 'Renault',
    model: 'Clio',
    type: 'Citadine',
    year: 2022,
    seats: 5,
    transmission: 'Manuelle',
    fuelType: 'Essence',
    pricePerDay: 35,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    features: ['Climatisation', 'Bluetooth', 'USB'],
    rating: 4.3,
    reviews: 67,
    available: false
  }
];

const carTypes = ['Économique', 'Compacte', 'SUV', 'Premium', 'Citadine'];
const transmissionTypes = ['Automatique', 'Manuelle'];
const fuelTypes = ['Essence', 'Diesel', 'Hybride', 'Électrique'];

export default function CarsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>([]);
  const [selectedFuel, setSelectedFuel] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Location de Voitures
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Trouvez la voiture parfaite pour vos déplacements dans la région Sud
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
                      placeholder="Marque ou modèle..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Car Types */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Type de véhicule</label>
                  <div className="space-y-3">
                    {carTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedTypes([...selectedTypes, type]);
                            } else {
                              setSelectedTypes(selectedTypes.filter(t => t !== type));
                            }
                          }}
                        />
                        <label htmlFor={type} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transmission */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Transmission</label>
                  <div className="space-y-3">
                    {transmissionTypes.map((transmission) => (
                      <div key={transmission} className="flex items-center space-x-2">
                        <Checkbox
                          id={transmission}
                          checked={selectedTransmission.includes(transmission)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedTransmission([...selectedTransmission, transmission]);
                            } else {
                              setSelectedTransmission(selectedTransmission.filter(t => t !== transmission));
                            }
                          }}
                        />
                        <label htmlFor={transmission} className="text-sm">
                          {transmission}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Carburant</label>
                  <div className="space-y-3">
                    {fuelTypes.map((fuel) => (
                      <div key={fuel} className="flex items-center space-x-2">
                        <Checkbox
                          id={fuel}
                          checked={selectedFuel.includes(fuel)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedFuel([...selectedFuel, fuel]);
                            } else {
                              setSelectedFuel(selectedFuel.filter(f => f !== fuel));
                            }
                          }}
                        />
                        <label htmlFor={fuel} className="text-sm">
                          {fuel}
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

          {/* Cars Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {cars.length} véhicules trouvés
              </p>
              <select className="border rounded-md px-3 py-2">
                <option>Trier par prix</option>
                <option>Trier par note</option>
                <option>Trier par marque</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cars.map((car) => (
                <Card key={car.id} className={`property-card group overflow-hidden ${!car.available ? 'opacity-60' : ''}`}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className={`absolute top-3 left-3 ${car.available ? 'bg-success' : 'bg-destructive'}`}>
                      {car.available ? 'Disponible' : 'Indisponible'}
                    </Badge>
                    <Badge variant="outline" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm">
                      {car.type}
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-1">
                          {car.brand} {car.model}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {car.year} • {car.type}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0 pb-2">
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-medium">{car.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({car.reviews} avis)
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{car.seats} places</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Settings className="h-4 w-4 text-muted-foreground" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="h-4 w-4 text-muted-foreground" />
                        <span>{car.fuelType}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {car.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {car.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{car.features.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-2 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">{car.pricePerDay}€</span>
                      <span className="text-muted-foreground text-sm"> / jour</span>
                    </div>
                    <Button 
                      asChild 
                      size="sm" 
                      disabled={!car.available}
                      className={!car.available ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      <Link href={car.available ? `/cars/${car.id}` : '#'}>
                        {car.available ? 'Réserver' : 'Indisponible'}
                      </Link>
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