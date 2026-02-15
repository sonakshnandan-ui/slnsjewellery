import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";

const slides = [
  { src: carousel1, title: "Temple Gold Collection", subtitle: "Handcrafted with divine inspiration" },
  { src: carousel2, title: "Bridal Jewellery", subtitle: "Make your special day unforgettable" },
  { src: carousel3, title: "Pooja Articles", subtitle: "Sacred gold-plated temple accessories" },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-2">Gallery</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our Finest <span className="gold-text-gradient">Creations</span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-xl gold-shadow max-w-5xl mx-auto">
          <div className="relative aspect-[16/9]">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-cream mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-cream/70 font-body">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card/90 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card/90 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-cream/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
