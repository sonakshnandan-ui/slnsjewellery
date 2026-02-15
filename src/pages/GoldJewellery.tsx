import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ringsImg from "@/assets/gold-rings.jpg";
import braceletsImg from "@/assets/gold-bracelets.jpg";
import earringsImg from "@/assets/gold-earrings.jpg";
import chainsImg from "@/assets/gold-chains.jpg";
import necklaceImg from "@/assets/gold-necklace-set.jpg";
import poojaImg from "@/assets/gold-pooja.jpg";
import haramImg from "@/assets/gold-long-haram.jpg";

const subcategories = [
  { name: "Rings", image: ringsImg, desc: "Elegant gold rings for every occasion", slug: "rings" },
  { name: "Bracelets", image: braceletsImg, desc: "Traditional kangan & modern bracelets", slug: "bracelets" },
  { name: "Earrings", image: earringsImg, desc: "Stunning jhumkas & chandbali earrings", slug: "earrings" },
  { name: "Chains", image: chainsImg, desc: "Classic & contemporary gold chains", slug: "chains" },
  { name: "Necklace Sets", image: necklaceImg, desc: "Bridal & party necklace sets", slug: "necklace-sets" },
  { name: "Pooja Articles", image: poojaImg, desc: "Sacred gold-plated temple articles", slug: "pooja-articles" },
  { name: "Long Haram", image: haramImg, desc: "Traditional temple long haram designs", slug: "long-haram" },
];

// Sample products for each subcategory
const sampleProducts: Record<string, Array<{ name: string; desc: string; image: string }>> = {
  rings: [
    { name: "Traditional Navratna Ring", desc: "9-stone gold ring with precious gems", image: ringsImg },
    { name: "Classic Band Ring", desc: "Timeless 22K gold band", image: ringsImg },
    { name: "Temple Design Ring", desc: "Intricate temple motif gold ring", image: ringsImg },
  ],
  bracelets: [
    { name: "Antique Kangan Set", desc: "Traditional gold kangan pair", image: braceletsImg },
    { name: "Modern Chain Bracelet", desc: "Sleek gold chain bracelet", image: braceletsImg },
    { name: "Stone-Studded Bracelet", desc: "Gold bracelet with precious stones", image: braceletsImg },
  ],
  earrings: [
    { name: "Classic Jhumka", desc: "Traditional gold jhumka earrings", image: earringsImg },
    { name: "Chandbali Earrings", desc: "Moon-shaped traditional earrings", image: earringsImg },
    { name: "Stud Earrings", desc: "Elegant daily wear gold studs", image: earringsImg },
  ],
  chains: [
    { name: "Rope Chain", desc: "22K gold rope chain, 20 inches", image: chainsImg },
    { name: "Box Chain", desc: "Sleek box pattern gold chain", image: chainsImg },
    { name: "Temple Chain", desc: "Traditional temple design chain", image: chainsImg },
  ],
  "necklace-sets": [
    { name: "Bridal Necklace Set", desc: "Complete bridal gold necklace set", image: necklaceImg },
    { name: "Choker Necklace Set", desc: "Traditional gold choker with earrings", image: necklaceImg },
    { name: "Layered Necklace Set", desc: "Multi-layered gold necklace", image: necklaceImg },
  ],
  "pooja-articles": [
    { name: "Gold Diya", desc: "Gold-plated traditional oil lamp", image: poojaImg },
    { name: "Pooja Thali Set", desc: "Complete gold pooja thali", image: poojaImg },
    { name: "Laxmi Idol", desc: "Gold-plated Goddess Laxmi idol", image: poojaImg },
  ],
  "long-haram": [
    { name: "Temple Long Haram", desc: "Traditional temple design long chain", image: haramImg },
    { name: "Antique Long Haram", desc: "Antique finish long haram necklace", image: haramImg },
    { name: "Bridal Long Haram", desc: "Heavy bridal long haram set", image: haramImg },
  ],
};

const GoldJewellery = () => (
  <main className="pt-24">
    {/* Hero */}
    <section className="section-padding maroon-gradient text-center">
      <p className="font-accent text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Premium Collection</p>
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-4">
        Gold <span className="gold-text-gradient">Jewellery</span>
      </h1>
      <p className="text-cream/70 max-w-xl mx-auto">
        Explore our exquisite range of handcrafted gold jewellery, from traditional temple designs to modern elegance.
      </p>
    </section>

    {/* Subcategory Grid */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subcategories.map((sub, i) => (
            <a
              key={sub.slug}
              href={`#${sub.slug}`}
              className="group relative overflow-hidden rounded-xl gold-shadow hover-lift"
              style={{ animation: `fade-up 0.5s ease-out ${i * 0.08}s forwards`, opacity: 0 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-lg font-bold text-cream">{sub.name}</h3>
                <p className="text-cream/60 text-xs mt-1">{sub.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold-light text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Product Sections for each subcategory */}
    {subcategories.map((sub) => (
      <section key={sub.slug} id={sub.slug} className="section-padding odd:bg-muted even:bg-background">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            {sub.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(sampleProducts[sub.slug] || []).map((product, i) => (
              <div
                key={i}
                className="glass-card rounded-xl overflow-hidden hover-lift group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.desc}</p>
                  <a
                    href={`https://wa.me/919391049789?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 gold-gradient text-primary-foreground font-semibold px-5 py-2.5 rounded-md text-sm hover:opacity-90 transition-opacity"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}
  </main>
);

export default GoldJewellery;
