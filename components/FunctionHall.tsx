import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  Phone,
  MessageCircle,
  ArrowRight,
  Heart,
  Cake,
  Briefcase,
  Users,
  PartyPopper,
} from "lucide-react";
import { hotelImages } from "@/lib/data/images";
import { hotel } from "@/lib/data/hotel";

const perfectForList = [
  { label: "Weddings", icon: Heart },
  { label: "Engagements", icon: Sparkles },
  { label: "Birthday celebrations", icon: Cake },
  { label: "Meetings", icon: Briefcase },
  { label: "Family functions", icon: Users },
  { label: "Other events", icon: PartyPopper },
];

export default function FunctionHall() {
  const whatsappUrl = `https://wa.me/${hotel.contact.whatsapp}?text=Hello%20Vikram%20Bliss%20Inn%2C%20I%20am%20enquiring%20about%20booking%20the%20Function%20Hall%20(%E2%82%B920%2C000%2Fday).`;

  return (
    <section id="function-hall" className="section-padding bg-[#0c0c0c] text-ivory border-t border-white/10 scroll-mt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Details, Perfect For List, Pricing & Enquire CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Gold Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-gold rounded-full" />
              <p className="text-gold text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                EVENTS & OCCASIONS
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-4">
              FUNCTION HALL
            </h2>

            <p className="font-sans text-sm sm:text-base text-ivory/70 leading-relaxed max-w-lg mb-6">
              A welcoming and distinguished venue in Kadiri for your most cherished celebrations and gatherings.
            </p>

            {/* Perfect For Section */}
            <div className="w-full mb-8">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-gold mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Perfect for</span>
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {perfectForList.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-xs font-sans font-medium text-ivory">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Badge & CTAs */}
            <div className="w-full p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/0 border border-gold/30 mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <span className="text-[11px] font-sans text-ivory/60 uppercase tracking-wider block">
                    Venue Tariff
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-gold">
                      ₹20,000
                    </span>
                    <span className="text-sm font-sans text-ivory/60">/ day</span>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs font-sans text-ivory/50">
                  <p>Direct reception booking</p>
                  <p className="text-gold">No advance payment online</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Enquire Now CTA (WhatsApp) */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] min-h-[44px] inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold text-black font-sans font-bold text-sm hover:bg-gold-light transition-all shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Enquire Now about the Function Hall on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Enquire Now</span>
                </a>

                {/* Call Hotel Contact */}
                <a
                  href={`tel:${hotel.contact.phone[0]}`}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-white/20 text-ivory hover:text-gold hover:border-gold font-sans font-semibold text-sm hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Call Front Desk to enquire about Function Hall"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Hotel</span>
                </a>

                {/* View Details Link */}
                <Link
                  href="/function-hall"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 py-3 px-4 text-xs font-sans font-semibold text-ivory/70 hover:text-gold transition-colors"
                >
                  <span>More Hall Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Event Hall Visual / Photograph Slot */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-black group">
              <Image
                src={hotelImages.functionHall.main}
                alt={hotelImages.functionHall.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-sans font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Vikram Bliss Inn Event Space</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center justify-between">
                <div>
                  <p className="font-serif text-base text-ivory font-semibold">
                    Grand Function Hall
                  </p>
                  <p className="text-[11px] font-sans text-ivory/60">
                    Christian Colony, Police Line, Kadiri
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-lg text-gold font-bold">₹20,000</span>
                  <span className="text-[10px] font-sans text-ivory/50 block">/ day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
