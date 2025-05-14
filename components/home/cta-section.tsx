import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg"
          alt="Beach background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Perfect Getaway?</h2>
          <p className="text-lg mb-8 text-white/90">
            Book your next adventure today and experience the South's most beautiful destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
              <Link href="/hotels">Browse Hotels</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}