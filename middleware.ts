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
  ignoredRoutes: [
    "/((?!api|trpc))(_next|.+\\.[\\w]+$)", // Ignorer tous les fichiers statiques
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};