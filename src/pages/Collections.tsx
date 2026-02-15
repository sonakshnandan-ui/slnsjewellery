import { Link } from "react-router-dom";
import goldImg from "@/assets/gold-jewellery.jpg";
import diamondImg from "@/assets/diamond-jewellery.jpg";
import silverImg from "@/assets/silver-jewellery.jpg";
import gemstoneImg from "@/assets/gemstone-jewellery.jpg";

const collections = [
  { name: "Gold Jewellery", image: goldImg, link: "/gold-jewellery", desc: "Explore our finest gold designs – rings, necklaces, earrings, and more." },
  { name: "Diamond Jewellery", image: diamondImg, link: "/collections", desc: "Brilliant cut diamonds set in exquisite gold and platinum settings." },
  { name: "Silver Jewellery", image: silverImg, link: "/collections", desc: "Elegant oxidized and pure silver ornaments for every occasion." },
  { name: "Gemstone Jewellery", image: gemstoneImg, link: "/collections", desc: "Vibrant rubies, emeralds, and sapphires crafted with perfection." },
];

const Collections = () => (
  <main className="pt-24">
    <section className="section-padding maroon-gradient text-center">
      <p className="font-accent text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Our Collections</p>
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
        Timeless <span className="gold-text-gradient">Jewellery</span>
      </h1>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((col, i) => (
          <Link
            key={col.name}
            to={col.link}
            className="group glass-card rounded-xl overflow-hidden hover-lift"
            style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">{col.name}</h2>
              <p className="text-muted-foreground text-sm">{col.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </main>
);

export default Collections;
