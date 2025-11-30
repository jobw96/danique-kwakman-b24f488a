import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearTimeout(interval);
  }, [api, current]);

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem className="lg:basis-1/3" key={testimonial.id}>
            <div className="bg-card rounded-2xl shadow-sm border border-secondary/30 p-6 flex flex-col gap-3 min-h-[280px]">
              <Quote className="w-6 h-6 text-secondary flex-shrink-0" />
              <div className="flex gap-1 flex-shrink-0">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed text-sm flex-grow">
                {testimonial.text}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
