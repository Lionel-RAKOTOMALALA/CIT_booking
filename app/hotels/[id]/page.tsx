"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Star, MapPin, Wifi, Car, Utensils, Calendar, Users, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const hotelData = {
  id: '1',
  name: 'Oceanfront Paradise Resort',
  location: 'Coastal Bay, Région Sud',
  rating: 4.8,
  reviews: 128,
  price: 199,
  images: [
    'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    'https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg',
    'https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg',
  ],
  amenities: ['WiFi Gratuit', 'Piscine', 'Spa', 'Restaurant', 'Parking Gratuit', 'Climatisation'],
  availableRooms: 3,
  description: 'Découvrez le luxe absolu dans notre resort face à l\'océan. Avec des vues spectaculaires sur la mer, des équipements de classe mondiale et un service exceptionnel, votre séjour sera inoubliable.',
  features: [
    'Vue sur l\'océan depuis toutes les chambres',
    'Spa de luxe avec soins personnalisés',
    'Restaurant gastronomique avec chef étoilé',
    'Piscine à débordement face à la mer',
    'Accès direct à la plage privée',
    'Service de conciergerie 24h/24'
  ],
  rooms: [
    {
      type: 'Chambre Standard',
      price: 199,
      size: '35m²',
      occupancy: '2 adultes',
      amenities: ['Vue mer', 'Balcon', 'WiFi', 'Climatisation']
    },
    {
      type: 'Suite Junior',
      price: 299,
      size: '55m²',
      occupancy: '2 adultes + 1 enfant',
      amenities: ['Vue mer panoramique', 'Salon séparé', 'Balcon privé', 'Minibar']
    },
    {
      type: 'Suite Présidentielle',
      price: 599,
      size: '120m²',
      occupancy: '4 adultes',
      amenities: ['Terrasse privée', 'Jacuzzi', 'Service majordome', 'Cuisine équipée']
    }
  ]
};

export default function HotelDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{hotelData.name}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{hotelData.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-medium">{hotelData.rating}</span>
                <span>({hotelData.reviews} avis)</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={hotelData.images[selectedImage]}
                  alt={hotelData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {hotelData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${hotelData.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Aperçu</TabsTrigger>
                <TabsTrigger value="rooms">Chambres</TabsTrigger>
                <TabsTrigger value="amenities">Équipements</TabsTrigger>
                <TabsTrigger value="reviews">Avis</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{hotelData.description}</p>
                    <h4 className="font-semibold mb-3">Points forts :</h4>
                    <ul className="space-y-2">
                      {hotelData.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rooms" className="space-y-4">
                {hotelData.rooms.map((room, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{room.type}</h3>
                          <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                            <span>{room.size}</span>
                            <span>{room.occupancy}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.map((amenity, i) => (
                              <Badge key={i} variant="secondary">{amenity}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{room.price}€</div>
                          <div className="text-sm text-muted-foreground">par nuit</div>
                          <Button className="mt-2">Réserver</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="amenities" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Équipements et Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {hotelData.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Avis des clients</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                            ))}
                          </div>
                          <span className="font-medium">Marie L.</span>
                          <span className="text-sm text-muted-foreground">• Il y a 2 semaines</span>
                        </div>
                        <p className="text-muted-foreground">
                          Séjour exceptionnel ! L'hôtel est magnifique avec une vue imprenable sur l'océan. 
                          Le service est impeccable et les équipements sont de très haute qualité.
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-2xl">Réservation</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">{hotelData.price}€</span>
                  <span className="text-muted-foreground">/ nuit</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Arrivée</label>
                    <Input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Départ</label>
                    <Input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Voyageurs</label>
                  <select 
                    className="w-full border rounded-md px-3 py-2"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="1">1 adulte</option>
                    <option value="2">2 adultes</option>
                    <option value="3">3 adultes</option>
                    <option value="4">4 adultes</option>
                  </select>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Prix par nuit</span>
                    <span>{hotelData.price}€</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes et frais</span>
                    <span>29€</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>{hotelData.price + 29}€</span>
                  </div>
                </div>
                
                <Button className="w-full" size="lg">
                  Réserver Maintenant
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Annulation gratuite jusqu'à 24h avant l'arrivée
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}