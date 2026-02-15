import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import goldImg from "@/assets/gold-jewellery.jpg";
import diamondImg from "@/assets/diamond-jewellery.jpg";
import silverImg from "@/assets/silver-jewellery.jpg";
import gemstoneImg from "@/assets/gemstone-jewellery.jpg";

const categories = [
  { name: "Gold Jewellery", image: goldImg, link: "/gold-jewellery", desc: "Traditional & modern gold designs" },
  { name: "Diamond Jewellery", image: diamondImg, link: "/collections", desc: "Sparkling diamond collections" },
  { name: "Silver Jewellery", image: silverImg, link: "/collections", desc: "Elegant oxidized & pure silver" },
  { name: "Gemstone Jewellery", image: gemstoneImg, link: "/collections", desc: "Vibrant precious gemstones" },
];

const CategoryCards = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-2">Categories</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          Explore Our <span className="gold-text-gradient">Collections</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={cat.name}
            to={cat.link}
            className="group relative overflow-hidden rounded-xl gold-shadow hover-lift"
            style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading text-xl font-bold text-cream mb-1">{cat.name}</h3>
              <p className="text-cream/60 text-sm mb-3">{cat.desc}</p>
              <span className="inline-flex items-center gap-1 text-gold-light text-sm font-semibold group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryCards;
