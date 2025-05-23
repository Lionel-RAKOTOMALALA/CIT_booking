import Link from "next/link";
import { Search, User, MapPin, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="hidden font-bold text-xl text-primary md:inline-block">
              SouthBooking
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex mx-6 items-center space-x-4 lg:space-x-6 flex-1">
          <Button asChild variant="ghost">
            <Link href="/hotels">Hôtels</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/restaurants">Restaurants</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/cars">Location de Voitures</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/attractions">Attractions</Link>
          </Button>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Rechercher</span>
          </Button>
          <Button variant="ghost">
            <User className="h-5 w-5 mr-2" />
            <span className="hidden md:inline-block">Compte</span>
          </Button>
          <Button className="hidden md:inline-flex">Réserver</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}