import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Star,
  Users,
  BedDouble,
  Wifi,
  Car,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { hotel } from "@/lib/data/hotel";
import { hotelImages } from "@/lib/data/images";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-black">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brown-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold/10 border border-gold/30 rounded-full mb-5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-xs font-sans font-semibold tracking-[0.15em] uppercase">
                Near Subjail, Kadiri • Andhra Pradesh
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-display-lg text-ivory font-bold leading-[1.08] mb-4">
              Experience Comfort, <br />
              <span className="text-gold italic font-normal">Embrace Bliss</span>
            </h1>

            {/* Tagline */}
            <p className="font-sans text-base sm:text-lg text-ivory/80 leading-relaxed max-w-xl mb-6">
              A premium stay in the heart of Kadiri. Designed for pilgrims, families,
              and business travelers seeking spotless hygiene, reliable amenities, and warm hospitality.
            </p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-xl mb-8">
              {[
                { icon: BedDouble, label: "AC & Non-AC" },
                { icon: Wifi, label: "Free Wi-Fi" },
                { icon: Car, label: "Ample Parking" },
                { icon: Users, label: "Function Hall" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10"
                >
                  <Icon className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-xs font-sans text-ivory/80 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link
                href={`https://wa.me/${hotel.contact.whatsapp}?text=Hello%20Vikram%20Bliss%20Inn%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20room.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gold text-black font-sans font-semibold text-sm rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold flex items-center gap-2"
              >
                Book Your Stay <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/rooms"
                className="px-6 py-3.5 border border-ivory/30 text-ivory font-sans font-medium text-sm rounded-xl hover:bg-white/5 hover:border-ivory/60 transition-colors"
              >
                View Rooms
              </Link>
              <a
                href={`tel:${hotel.contact.phone[0]}`}
                className="text-xs font-sans text-ivory/50 hover:text-gold transition-colors py-2 px-1"
              >
                Direct Call: {hotel.contact.phone[0]}
              </a>
            </div>

            {/* Trust Motto */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-full max-w-xl">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-gold/90 font-semibold">
                Good Stays, Brighter Days.
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[11px] font-sans text-ivory/50">
                1.2 km to Sri Lakshmi Narasimha Swamy Temple
              </span>
            </div>
          </div>

          {/* Right Column: Real Exterior Building Photo */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-card-dark bg-brown-light group">
              {/* Next.js Priority Hero Image */}
              <Image
                src={hotelImages.exterior.hero}
                alt={hotelImages.exterior.alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Subtle gradient vignette for contrast and branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              {/* Verified Real Property Signage Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-gold/40 rounded-xl px-3 py-1.5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-[11px] font-sans font-semibold text-ivory tracking-wide uppercase">
                  Real Property • Kadiri
                </span>
              </div>

              {/* Bottom Card Overlay: Features */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 rounded-xl p-3.5">
                <p className="font-serif text-gold text-base font-bold leading-tight mb-1">
                  Vikram Bliss Inn & Vikram Arcade
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-sans text-ivory/80">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-gold shrink-0" /> Prime Location
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-gold shrink-0" /> Family & Business
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-gold shrink-0" /> Safe & Secure
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-gold fill-gold shrink-0" /> Clean Rooms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
