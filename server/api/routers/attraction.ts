import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const attractionRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({
      location: z.string().optional(),
      category: z.string().optional(),
      priceRange: z.object({
        min: z.number(),
        max: z.number(),
      }).optional(),
    }))
    .query(async ({ input }) => {
      return [
        {
          id: '1',
          title: 'Plongée avec Tuba dans les Récifs Coralliens',
          location: 'Baie Corallienne',
          duration: '3 heures',
          groupSize: 'Petit groupe',
          price: 75,
          image: 'https://images.pexels.com/photos/1268837/pexels-photo-1268837.jpeg',
          category: 'Aventure',
          rating: 4.8,
          reviews: 124,
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
        },
      ];
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return {
        id: input.id,
        title: 'Plongée avec Tuba dans les Récifs Coralliens',
        location: 'Baie Corallienne',
        duration: '3 heures',
        groupSize: 'Petit groupe',
        price: 75,
        image: 'https://images.pexels.com/photos/1268837/pexels-photo-1268837.jpeg',
        category: 'Aventure',
        rating: 4.8,
        reviews: 124,
        description: 'Découvrez les merveilles sous-marines des récifs coralliens.',
        included: ['Équipement de plongée', 'Guide professionnel', 'Collation'],
        schedule: ['9h00 - Départ', '9h30 - Briefing sécurité', '10h00 - Plongée'],
      };
    }),
});