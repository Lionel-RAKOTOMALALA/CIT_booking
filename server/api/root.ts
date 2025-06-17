import { createTRPCRouter } from './trpc';
import { bookingRouter } from './routers/booking';
import { hotelRouter } from './routers/hotel';
import { restaurantRouter } from './routers/restaurant';
import { carRouter } from './routers/car';
import { attractionRouter } from './routers/attraction';

export const appRouter = createTRPCRouter({
  booking: bookingRouter,
  hotel: hotelRouter,
  restaurant: restaurantRouter,
  car: carRouter,
  attraction: attractionRouter,
});

export type AppRouter = typeof appRouter;