import { Award, Users, Gem, ShieldCheck } from "lucide-react";

const values = [
  { icon: Award, title: "Master Artisans", desc: "Our skilled craftsmen bring decades of expertise to every piece, ensuring unmatched quality and intricate detailing." },
  { icon: Users, title: "Trusted by Families", desc: "Generations of families in Uppal and Hyderabad trust us for their most precious jewellery needs." },
  { icon: Gem, title: "Finest Materials", desc: "We source only the purest gold, conflict-free diamonds, and genuine gemstones for our creations." },
  { icon: ShieldCheck, title: "Hallmark Certified", desc: "Every piece of gold jewellery comes with BIS hallmark certification guaranteeing purity." },
];

const About = () => (
  <main className="pt-24">
    <section className="section-padding maroon-gradient text-center">
      <p className="font-accent text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Our Story</p>
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
        About <span className="gold-text-gradient">Us</span>
      </h1>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            A Legacy of <span className="gold-text-gradient">Craftsmanship</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sri Laxmi Narsimha Swamy Jewellery Works is a trusted name in jewellery craftsmanship,
              proudly serving the communities of Uppal and greater Hyderabad. Our store, nestled in
              Mallikarjuna Nagar, has become a landmark for those seeking authentic, beautifully crafted
              jewellery that honours our rich Indian heritage.
            </p>
            <p>
              We specialize in traditional temple jewellery designs that seamlessly blend with modern
              aesthetics, creating pieces that are both timeless and contemporary. From intricate gold
              necklace sets to delicate diamond earrings, every creation reflects our commitment to
              perfection.
            </p>
            <p>
              Our master artisans, carrying forward generations of skill and knowledge, pour their hearts
              into every piece. Whether you're shopping for a grand wedding, a festive celebration, or a
              meaningful everyday accessory, we ensure each piece meets the highest standards of quality
              and beauty.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="glass-card rounded-xl p-6 hover-lift"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
