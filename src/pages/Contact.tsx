import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name || !phone || !message) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    const whatsappMsg = `Hi, I'm ${encodeURIComponent(name)}. Phone: ${encodeURIComponent(phone)}. ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919391049789?text=${whatsappMsg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp..." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <main className="pt-24">
      <section className="section-padding maroon-gradient text-center">
        <p className="font-accent text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Get in Touch</p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
          Contact <span className="gold-text-gradient">Us</span>
        </h1>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info + Map */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Visit Our Store</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Shop No 3, 118, Depot, Balaji Residency, Mallikarjuna Nagar, Uppal, Hyderabad, Telangana 500092
                    </p>
                  </div>
                </div>
                <a href="tel:+919391049789" className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">093910 49789</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Working Hours</p>
                    <p className="text-muted-foreground text-sm">10:00 AM – 9:00 PM (Monday to Sunday)</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden gold-shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.5593!3d17.3951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzQyLjQiTiA3OMKwMzMnMzMuNSJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store location"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/Q95n9xiDCXwrE5Za9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-sm hover:underline"
              >
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Enter your name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Enter your phone number"
                    maxLength={15}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    placeholder="Tell us about your jewellery requirements..."
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gold-gradient text-primary-foreground font-bold py-3 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
