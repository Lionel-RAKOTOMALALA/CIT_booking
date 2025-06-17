import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="hero-section">
      <img 
        src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" 
        alt="Plage tropicale avec palmiers" 
        className="object-cover w-full h-full"
      />
      <div className="hero-content text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
          Découvrez les Meilleures Destinations du Sud
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 animate-slide-up">
          Réservez hôtels, restaurants et expériences pour des vacances parfaites
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button asChild size="lg" className="text-base">
            <Link href="/hotels">Trouver un Hôtel</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:text-primary hover:bg-white text-base">
            <Link href="/premium">Explorer les Visites Premium</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}