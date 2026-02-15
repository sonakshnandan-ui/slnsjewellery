import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="maroon-gradient text-secondary-foreground">
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-bold text-gold-light mb-4">
            Sri Laxmi Narsimha Swamy
          </h3>
          <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-light/70 mb-4">
            Jewellery Works
          </p>
          <p className="text-secondary-foreground/80 text-sm leading-relaxed">
            Crafting timeless elegance since generations. Your trusted destination for
            exquisite gold, diamond, and silver jewellery in Hyderabad.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-gold-light mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Gold Jewellery", path: "/gold-jewellery" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-secondary-foreground/70 hover:text-gold-light transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-gold-light mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+919391049789" className="flex items-start gap-2 text-secondary-foreground/80 hover:text-gold-light transition-colors">
              <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold-light" />
              093910 49789
            </a>
            <div className="flex items-start gap-2 text-secondary-foreground/80">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold-light" />
              <span>Shop No 3, 118, Depot, Balaji Residency, Mallikarjuna Nagar, Uppal, Hyderabad, Telangana 500092</span>
            </div>
            <div className="flex items-start gap-2 text-secondary-foreground/80">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-gold-light" />
              10:00 AM – 9:00 PM (Mon–Sun)
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-gold-light mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light/70 hover:bg-gold-light/10 hover:text-gold-light transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="mt-12 pt-6 border-t border-secondary-foreground/10 text-center text-secondary-foreground/50 text-xs">
      Sonaksh Nandan : Website Designer : www.sonakshnandan.com
        
  
      </div> */}
      <div className="flex flex-col items-center gap-2">
          <p className="text-secondary-foreground/60">
    
  </p>
  <p className="text-secondary-foreground/60">
    © {new Date().getFullYear()} Sri Laxmi Narsimha Swamy Jewellery Works. All rights reserved.
  </p>

  <p className="flex flex-wrap items-center justify-center gap-2 text-secondary-foreground/70">
    Designed & Developed by
    <a
      href="https://sonakshnandan.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-gold-light hover:text-gold-light/80 transition-all duration-300 hover:underline"
    >
      Sonaksh Nandan
    </a>

    <span className="text-secondary-foreground/40">|</span>

    <a
      href="https://wa.me/917601020093?text=Hi%20Sonaksh%20Nandan,%20I%20want%20a%20website%20like%20this."
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-green-400 hover:text-green-500 transition-all duration-300"
    >
      💬 WhatsApp
    </a>
  </p>

  <p className="italic text-secondary-foreground/40 text-[11px] tracking-wide">
    Crafting Digital Luxury Experiences ✨
  </p>
</div>

    </div>
  </footer>
);

export default Footer;
