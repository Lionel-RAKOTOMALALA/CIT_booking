'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, MapPin, Clock, Users } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  season: string;
}

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeason, setSelectedSeason] = useState<string>('current');

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Ski dans les Alpes',
      description: 'Profitez des meilleures pistes de ski des Alpes françaises',
      image: '/images/ski.jpg',
      location: 'Chamonix',
      duration: '7 jours',
      price: 1500,
      rating: 4.9,
      reviews: 128,
      category: 'Sports',
      season: 'winter'
    },
    // Add more experiences here
  ];

  const categories = ['all', 'Sports', 'Culture', 'Gastronomie', 'Nature'];
  const seasons = ['current', 'winter', 'spring', 'summer', 'autumn'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">Expériences du Mois</h1>
          <div className="flex space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Toutes les catégories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season === 'current' ? 'Saison actuelle' : season}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold">{experience.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400" size={20} />
                    <span className="ml-1">{experience.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({experience.reviews})
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{experience.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-blue-600" size={16} />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-blue-600" size={16} />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="text-blue-600" size={16} />
                    <span className="text-sm">À partir de {experience.price}€</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Réserver maintenant
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 