import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Collections", path: "/collections" },
  { label: "Gold Jewellery", path: "/gold-jewellery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg gold-border border-t-0 border-l-0 border-r-0"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col items-start">
          <span className="font-heading text-xl md:text-2xl font-bold gold-text-gradient leading-tight">
            Sri Laxmi Narsimha Swamy
          </span>
          <span className="font-accent text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Jewellery Works
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm tracking-wide uppercase transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path ? "text-primary font-bold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919391049789"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-bold hover:bg-gold-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-up">
          <nav className="container mx-auto py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-base py-2 border-b border-border/50 transition-colors ${
                  location.pathname === link.path ? "text-primary font-bold" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919391049789"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md font-bold mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
