import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const hotelRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({
      location: z.string().optional(),
      checkIn: z.date().optional(),
      checkOut: z.date().optional(),
      guests: z.number().optional(),
      priceRange: z.object({
        min: z.number(),
        max: z.number(),
      }).optional(),
    }))
    .query(async ({ input }) => {
      // Logique de recherche d'hôtels
      return [
        {
          id: '1',
          name: 'Oceanfront Paradise Resort',
          location: 'Coastal Bay',
          rating: 4.8,
          reviews: 128,
          price: 199,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
          amenities: ['WiFi', 'Piscine', 'Spa', 'Restaurant'],
          availableRooms: 3,
        },
        {
          id: '2',
          name: 'Tropical Haven Hotel & Spa',
          location: 'Palm Beach',
          rating: 4.7,
          reviews: 96,
          price: 159,
          image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
          amenities: ['WiFi', 'Piscine', 'Spa'],
          availableRooms: 5,
        },
      ];
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return {
        id: input.id,
        name: 'Oceanfront Paradise Resort',
        location: 'Coastal Bay',
        rating: 4.8,
        reviews: 128,
        price: 199,
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        amenities: ['WiFi', 'Piscine', 'Spa', 'Restaurant'],
        availableRooms: 3,
        description: 'Un resort de luxe face à l\'océan avec des vues spectaculaires.',
        gallery: [
          'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        ],
      };
    }),
});