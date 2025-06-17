import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    location: "Paris, France",
    text: "Our stay at the Oceanfront Paradise Resort exceeded all expectations. The booking process was seamless, and the HD video tour gave us a perfect preview of what to expect. Highly recommend SouthBooking for any travel plans!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 2,
    name: "Carlos R.",
    location: "Madrid, Spain",
    text: "The premium video tours saved us so much time. We were able to virtually visit multiple hotels and choose the perfect one for our family vacation. The reservation process was quick and hassle-free.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 3,
    name: "Aisha K.",
    location: "Dubai, UAE",
    text: "I loved the detailed information about each restaurant on SouthBooking. It made planning our culinary tour of the South region so much easier. The photos were accurate and helpful in making our decisions.",
    rating: 4,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from travelers who have experienced our premium booking services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'fill-warning text-warning' : 'text-muted'}`} 
                    />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="pt-2">
                <p className="italic text-muted-foreground mb-6">"{testimonial.text}"</p>
              </CardContent>
              
              <CardFooter className="border-t pt-4">
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}