"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 flex flex-col">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary text-lg">SouthBooking</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-4 mt-8 px-7">
          <Link
            href="/hotels"
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Hôtels
          </Link>
          <Link
            href="/restaurants"
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Restaurants
          </Link>
          <Link
            href="/cars"
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Location de Voitures
          </Link>
          <Link
            href="/attractions"
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Attractions
          </Link>
          <Link
            href="/account"
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Mon Compte
          </Link>
        </nav>
        <div className="mt-auto px-7 pb-7">
          <Button className="w-full" onClick={() => setOpen(false)}>
            Réserver Maintenant
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}