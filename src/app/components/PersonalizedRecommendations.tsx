'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Info } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  relevanceScore: number;
  reason: string;
}

export default function PersonalizedRecommendations() {
  const [showReason, setShowReason] = useState<string | null>(null);

  const recommendations: Recommendation[] = [
    {
      id: '1',
      title: 'Week-end à Paris',
      description: 'Découvrez les charmes de la capitale française',
      image: '/images/paris.jpg',
      location: 'Paris',
      duration: '3 jours',
      price: 800,
      rating: 4.8,
      relevanceScore: 95,
      reason: 'Basé sur votre intérêt pour les destinations culturelles et vos séjours précédents en France'
    },
    // Add more recommendations here
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Recommandations pour vous</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm">
          Voir tout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((recommendation) => (
          <motion.div
            key={recommendation.id}
            whileHover={{ y: -5 }}
            className="bg-gray-50 rounded-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={recommendation.image}
                alt={recommendation.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                <div className="flex items-center">
                  <span className="text-sm font-semibold">
                    Score: {recommendation.relevanceScore}%
                  </span>
                  <button
                    onClick={() => setShowReason(showReason === recommendation.id ? null : recommendation.id)}
                    className="ml-2 text-blue-600 hover:text-blue-700"
                  >
                    <Info size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{recommendation.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{recommendation.description}</p>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin className="text-blue-600" size={14} />
                  <span className="text-sm">{recommendation.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="text-blue-600" size={14} />
                  <span className="text-sm">{recommendation.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400" size={14} />
                  <span className="text-sm">{recommendation.rating}</span>
                </div>
              </div>

              {showReason === recommendation.id && (
                <div className="bg-blue-50 p-3 rounded-lg mb-3">
                  <p className="text-sm text-blue-800">{recommendation.reason}</p>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{recommendation.price}€</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Découvrir
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 