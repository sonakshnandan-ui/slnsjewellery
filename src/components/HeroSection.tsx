import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img src={heroBanner} alt="Exquisite gold jewellery" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 py-32">
      <div className="max-w-2xl" style={{ animation: "fade-up 0.8s ease-out forwards" }}>
        <p className="font-accent text-gold-light text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
          Since Generations
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
          Crafting{" "}
          <span className="gold-text-gradient">Timeless</span>{" "}
          Elegance
        </h1>
        <p className="text-cream/80 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-lg">
          Discover exquisite handcrafted gold, diamond &amp; silver jewellery
          that celebrates tradition with modern artistry.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 gold-gradient text-primary-foreground font-bold px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            View Collections
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://maps.app.goo.gl/Q95n9xiDCXwrE5Za9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold-light/40 text-cream font-bold px-8 py-4 rounded-md hover:bg-gold-light/10 transition-colors text-sm uppercase tracking-wider"
          >
            <MapPin className="w-4 h-4" />
            Visit Store
          </a>
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
