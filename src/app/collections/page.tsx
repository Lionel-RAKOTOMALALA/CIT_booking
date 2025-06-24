'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Clock, Users, DollarSign } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  groupSize: string;
  stops: string[];
}

export default function CollectionsPage() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const collections: Collection[] = [
    {
      id: '1',
      title: 'Road Trip Méditerranéen',
      description: 'Explorez les plus belles côtes de la Méditerranée française',
      image: '/images/mediterranean.jpg',
      duration: '14 jours',
      price: 2500,
      groupSize: '2-4 personnes',
      stops: ['Nice', 'Marseille', 'Montpellier', 'Perpignan']
    },
    // Add more collections here
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Collections Thématiques</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{collection.title}</h2>
                  <p className="text-white/90">{collection.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="text-blue-600" size={20} />
                    <span>{collection.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="text-blue-600" size={20} />
                    <span>{collection.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-blue-600" size={20} />
                    <span>À partir de {collection.price}€</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Itinéraire</h3>
                  <div className="flex items-center space-x-2">
                    {collection.stops.map((stop, index) => (
                      <div key={index} className="flex items-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {stop}
                        </span>
                        {index < collection.stops.length - 1 && (
                          <span className="mx-2 text-gray-400">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCollection(collection.id)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Voir les détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 