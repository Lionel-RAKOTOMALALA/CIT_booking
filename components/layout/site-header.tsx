"use client";

import Link from "next/link";
import { Search, User, MapPin, Menu } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

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
            <img 
              src="/454739798_122097521636469068_2130572720857980839_n.jpg" 
              alt="Logo SouthBooking" 
              className="h-8 w-8 object-contain"
            />
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
            <Link href="/cars">Location de voitures</Link>
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
          
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="ghost">
                <User className="h-5 w-5 mr-2" />
                <span className="hidden md:inline-block">Connexion</span>
              </Button>
            </Link>
          </SignedOut>
          
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          
          <Button className="hidden md:inline-flex">Réserver</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}