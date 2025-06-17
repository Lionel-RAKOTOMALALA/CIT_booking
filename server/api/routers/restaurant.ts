import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const restaurantRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({
      location: z.string().optional(),
      cuisine: z.string().optional(),
      priceRange: z.object({
        min: z.number(),
        max: z.number(),
      }).optional(),
    }))
    .query(async ({ input }) => {
      return [
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
        },
      ];
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return {
        id: input.id,
        name: 'Le Jardin Tropical',
        location: 'Centre-ville',
        cuisine: 'Française',
        rating: 4.6,
        reviews: 89,
        priceRange: '€€€',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        openingHours: '18h00 - 23h00',
        description: 'Restaurant gastronomique avec une cuisine française raffinée.',
        menu: [
          { name: 'Entrées', items: ['Foie gras', 'Escargots'] },
          { name: 'Plats', items: ['Bouillabaisse', 'Coq au vin'] },
        ],
      };
    }),
});