"use client";

import { useState } from "react";
import { Search, Filter, Star, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const attractions = [
  {
    id: '1',
    title: 'Plongée avec Tuba dans les Récifs Coralliens',
    location: 'Baie Corallienne',
    duration: '3 heures',
    groupSize: 'Petit groupe (max 8)',
    price: 75,
    image: 'https://images.pexels.com/photos/1268837/pexels-photo-1268837.jpeg',
    category: 'Aventure',
    rating: 4.8,
    reviews: 124,
    difficulty: 'Facile',
    includes: ['Équipement', 'Guide', 'Collation']
  },
  {
    id: '2',
    title: 'Cours de Cuisine Traditionnelle',
    location: 'Quartier Historique',
    duration: '4 heures',
    groupSize: '6-10 personnes',
    price: 95,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    category: 'Culture',
    rating: 4.7,
    reviews: 89,
    difficulty: 'Tous niveaux',
    includes: ['Ingrédients', 'Recettes', 'Dégustation']
  },
  {
    id: '3',
    title: 'Tour en Catamaran au Coucher du Soleil',
    location: 'Port de Marina',
    duration: '2.5 heures',
    groupSize: 'Jusqu\'à 12 personnes',
    price: 120,
    image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg',
    category: 'Détente',
    rating: 4.9,
    reviews: 203,
    difficulty: 'Facile',
    includes: ['Boissons', 'Collations', 'Équipement photo']
  },
  {
    id: '4',
    title: 'Randonnée dans les Montagnes',
    location: 'Parc National',
    duration: '6 heures',
    groupSize: 'Petit groupe (max 6)',
    price: 85,
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    category: 'Aventure',
    rating: 4.6,
    reviews: 156,
    difficulty: 'Modéré',
    includes: ['Guide expert', 'Déjeuner', 'Transport']
  }
];

const categories = ['Aventure', 'Culture', 'Détente', 'Gastronomie', 'Nature'];
const difficulties = ['Facile', 'Modéré', 'Difficile'];

export default function AttractionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Attractions & Expériences
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez des activités uniques et des expériences inoubliables dans la région Sud
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
                      placeholder="Activité ou lieu..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Catégories</label>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCategories([...selectedCategories, category]);
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category));
                            }
                          }}
                        />
                        <label htmlFor={category} className="text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Difficulté</label>
                  <div className="space-y-3">
                    {difficulties.map((difficulty) => (
                      <div key={difficulty} className="flex items-center space-x-2">
                        <Checkbox
                          id={difficulty}
                          checked={selectedDifficulties.includes(difficulty)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedDifficulties([...selectedDifficulties, difficulty]);
                            } else {
                              setSelectedDifficulties(selectedDifficulties.filter(d => d !== difficulty));
                            }
                          }}
                        />
                        <label htmlFor={difficulty} className="text-sm">
                          {difficulty}
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

          {/* Attractions Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {attractions.length} expériences trouvées
              </p>
              <select className="border rounded-md px-3 py-2">
                <option>Trier par popularité</option>
                <option>Trier par prix</option>
                <option>Trier par note</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {attractions.map((attraction) => (
                <Card key={attraction.id} className="property-card group overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary">
                      {attraction.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm ${
                        attraction.difficulty === 'Facile' ? 'text-success' :
                        attraction.difficulty === 'Modéré' ? 'text-warning' : 'text-destructive'
                      }`}
                    >
                      {attraction.difficulty}
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-2">{attraction.title}</h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {attraction.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0 pb-2">
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-medium">{attraction.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({attraction.reviews} avis)
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{attraction.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{attraction.groupSize}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Inclus :</p>
                      <div className="flex flex-wrap gap-1">
                        {attraction.includes.map((item, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-2 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">{attraction.price}€</span>
                      <span className="text-muted-foreground text-sm"> / personne</span>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/attractions/${attraction.id}`}>Réserver</Link>
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