import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const carRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({
      pickupLocation: z.string().optional(),
      pickupDate: z.date().optional(),
      returnDate: z.date().optional(),
      carType: z.string().optional(),
    }))
    .query(async ({ input }) => {
      return [
        {
          id: '1',
          brand: 'Toyota',
          model: 'Corolla',
          type: 'Économique',
          seats: 5,
          transmission: 'Automatique',
          fuelType: 'Essence',
          pricePerDay: 45,
          image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
          features: ['Climatisation', 'GPS', 'Bluetooth'],
        },
        {
          id: '2',
          brand: 'BMW',
          model: 'X3',
          type: 'SUV',
          seats: 5,
          transmission: 'Automatique',
          fuelType: 'Diesel',
          pricePerDay: 89,
          image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
          features: ['Climatisation', 'GPS', 'Bluetooth', 'Cuir'],
        },
      ];
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return {
        id: input.id,
        brand: 'Toyota',
        model: 'Corolla',
        type: 'Économique',
        seats: 5,
        transmission: 'Automatique',
        fuelType: 'Essence',
        pricePerDay: 45,
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
        features: ['Climatisation', 'GPS', 'Bluetooth'],
        description: 'Voiture économique parfaite pour vos déplacements en ville.',
      };
    }),
});