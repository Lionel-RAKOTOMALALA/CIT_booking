'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, TrendingUp, Calendar } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  weather: string;
  activities: string[];
}

export default function DiscoverPage() {
  const [activeTab, setActiveTab] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Paris',
      image: '/images/paris.jpg',
      rating: 4.8,
      price: 1200,
      weather: 'Ensoleillé, 22°C',
      activities: ['Tour Eiffel', 'Louvre', 'Seine']
    },
    // Add more destinations here
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Découvrez votre prochaine aventure
          </h1>
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Où souhaitez-vous aller ?"
                className="w-full px-6 py-4 rounded-full text-lg shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('popular')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                activeTab === 'popular' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              <TrendingUp size={20} />
              <span>Populaires</span>
            </button>
            <button
              onClick={() => setActiveTab('collections')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                activeTab === 'collections' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              <Star size={20} />
              <span>Collections</span>
            </button>
            <button
              onClick={() => setActiveTab('experiences')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                activeTab === 'experiences' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              <Calendar size={20} />
              <span>Expériences</span>
            </button>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold">À partir de {destination.price}€</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400" size={20} />
                    <span className="ml-1">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{destination.weather}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.activities.map((activity, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 