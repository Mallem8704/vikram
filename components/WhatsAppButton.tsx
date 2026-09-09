import { hotel } from "@/lib/data/hotel";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${hotel.contact.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability%20at%20Vikram%20Bliss%20Inn.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-8 md:right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full shadow-lg hover:bg-[#22c55e] transition-all duration-200 hover:scale-105 group"
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="text-sm font-sans font-semibold hidden md:block">
        WhatsApp
      </span>
    </a>
  );
}
