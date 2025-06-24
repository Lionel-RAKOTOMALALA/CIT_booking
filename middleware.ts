import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/hotels",
    "/hotels/(.*)",
    "/restaurants",
    "/restaurants/(.*)",
    "/cars",
    "/cars/(.*)",
    "/attractions",
    "/attractions/(.*)",
    "/contact",
    "/api/trpc/(.*)"
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};