"use client";

import { useState } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { fr } from 'date-fns/locale';

export function SearchBar() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2 adultes");
  
  const handleSearch = () => {
    console.log("Recherche de:", { location, checkIn, checkOut, guests });
  };

  return (
    <div className="search-bar">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Où souhaitez-vous aller ?"
            className="pl-10 h-12"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4 flex-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-12",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP", { locale: fr }) : "Arrivée"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                locale={fr}
              />
            </PopoverContent>
          </Popover>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-12",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP", { locale: fr }) : "Départ"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                locale={fr}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full md:w-[200px] justify-start text-left font-normal h-12",
                  !guests && "text-muted-foreground"
                )}
              >
                <Users className="mr-2 h-4 w-4" />
                {guests}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span>Adultes</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" onClick={() => setGuests("1 adulte")}>-</Button>
                    <span>2</span>
                    <Button variant="outline" size="icon" onClick={() => setGuests("3 adultes")}>+</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Enfants</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">-</Button>
                    <span>0</span>
                    <Button variant="outline" size="icon">+</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Chambres</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">-</Button>
                    <span>1</span>
                    <Button variant="outline" size="icon">+</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <Button className="h-12" onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" />
            Rechercher
          </Button>
        </div>
      </div>
    </div>
  );
}