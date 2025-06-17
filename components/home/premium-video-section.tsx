import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PremiumVideoSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 z-0 bg-accent/10"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium HD Video Tours</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Explore 10 top hotels with full room tours in less than 10 minutes. 
            Get an exclusive look before booking.
          </p>
          <Button asChild size="lg">
            <Link href="/premium">View Premium Tours</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="col-span-2 relative rounded-lg overflow-hidden group">
            <img 
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" 
              alt="Luxury hotel suite" 
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
              <Button variant="outline" size="lg" className="rounded-full w-16 h-16 text-white hover:text-white border-white hover:border-white hover:bg-primary/20">
                <Play className="h-8 w-8 fill-white" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Oceanfront Paradise Resort Tour</h3>
              <p>Experience luxury with stunning ocean views</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg" 
                alt="Hotel pool" 
                className="w-full h-[180px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <Button variant="outline" size="icon" className="rounded-full text-white hover:text-white border-white hover:border-white hover:bg-primary/20">
                  <Play className="h-5 w-5 fill-white" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-base font-bold">Tropical Haven Hotel Tour</h3>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg" 
                alt="Ocean view" 
                className="w-full h-[180px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <Button variant="outline" size="icon" className="rounded-full text-white hover:text-white border-white hover:border-white hover:bg-primary/20">
                  <Play className="h-5 w-5 fill-white" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-base font-bold">Sunrise Beachfront Tour</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}