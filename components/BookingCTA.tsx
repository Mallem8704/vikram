import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { hotel } from "@/lib/data/hotel";
import { cn } from "@/lib/utils";

interface BookingCTAProps {
  title?: string;
  subtitle?: string;
  theme?: "gold" | "dark" | "ivory";
  className?: string;
}

export default function BookingCTA({
  title = "Ready to Book Your Stay?",
  subtitle = "Call us directly or reach out on WhatsApp. Our team is available 24 hours to assist you.",
  theme = "dark",
  className,
}: BookingCTAProps) {
  const bgClass = {
    gold: "bg-gold-gradient",
    dark: "bg-black",
    ivory: "bg-ivory-dark border-t border-b border-ivory-dark",
  }[theme];

  const headingClass = {
    gold: "text-black",
    dark: "text-ivory",
    ivory: "text-black",
  }[theme];

  const subClass = {
    gold: "text-black/70",
    dark: "text-ivory/60",
    ivory: "text-brown-muted",
  }[theme];

  return (
    <section className={cn("py-14 md:py-16", bgClass, className)}>
      <div className="section-container text-center">
        {/* Eyebrow */}
        <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-3">
          {theme === "gold" ? "Get in Touch" : "Book Your Room"}
        </p>

        <h2 className={cn("font-serif text-display-sm md:text-display-md font-semibold mb-3", headingClass)}>
          {title}
        </h2>
        <span className="gold-divider-center" />
        <p className={cn("font-sans text-base md:text-lg max-w-xl mx-auto mt-4 mb-8", subClass)}>
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${hotel.contact.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Vikram%20Bliss%20Inn.`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 px-7 py-3.5 rounded-xl font-sans font-semibold text-sm transition-colors",
              theme === "gold"
                ? "bg-black text-gold hover:bg-black/80"
                : "bg-gold text-black hover:bg-gold-light"
            )}
          >
            <MessageCircle className="w-4 h-4" />
            Book on WhatsApp
          </a>
          <a
            href={`tel:${hotel.contact.phone[0]}`}
            className={cn(
              "flex items-center gap-2 px-7 py-3.5 rounded-xl font-sans font-medium text-sm border transition-colors",
              theme === "gold"
                ? "border-black/30 text-black hover:bg-black/5"
                : "border-white/20 text-ivory hover:bg-white/5"
            )}
          >
            <Phone className="w-4 h-4" />
            {hotel.contact.phone[0]}
          </a>
          <Link
            href="/rooms"
            className={cn(
              "flex items-center gap-2 text-sm font-sans font-medium transition-colors",
              theme === "gold" ? "text-black/60 hover:text-black" : "text-ivory/50 hover:text-gold"
            )}
          >
            View All Rooms
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
