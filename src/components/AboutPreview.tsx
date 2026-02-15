import { Link } from "react-router-dom";
import { Award, Shield, Heart } from "lucide-react";

const features = [
  { icon: Award, title: "Master Craftsmanship", desc: "Generations of expertise in creating timeless jewellery pieces" },
  { icon: Shield, title: "Certified Purity", desc: "Every piece comes with guaranteed purity and hallmark certification" },
  { icon: Heart, title: "Made with Love", desc: "Each design reflects our passion for the art of jewellery making" },
];

const AboutPreview = () => (
  <section className="section-padding bg-muted">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-2">Our Legacy</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Tradition of <span className="gold-text-gradient">Excellence</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            At Sri Laxmi Narsimha Swamy Jewellery Works, we blend age-old craftsmanship with
            contemporary designs. Located in the heart of Uppal, Hyderabad, we have been the
            trusted choice for families seeking exquisite jewellery for every occasion.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Learn More About Us <span>→</span>
          </Link>
        </div>

        <div className="grid gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-xl p-6 flex items-start gap-4 hover-lift"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.15}s forwards`, opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
