import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919391049789?text=Hello%2C%20I%20am%20interested%20in%20your%20jewellery%20collection.%20Please%20share%20more%20details."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
