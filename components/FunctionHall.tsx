import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Music2, UtensilsCrossed, Mic2, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { hotelImages } from "@/lib/data/images";
import { hotel } from "@/lib/data/hotel";

const hallFeatures = [
  {
    icon: Users,
    label: "Seating Capacity",
    value: "Up to 200 Guests",
  },
  {
    icon: Mic2,
    label: "Sound System",
    value: "Professional PA & Mic System",
  },
  {
    icon: UtensilsCrossed,
    label: "Catering",
    value: "In-house & Outside Catering Allowed",
  },
  {
    icon: Music2,
    label: "Occasions",
    value: "Weddings, Receptions, Parties & Meetings",
  },
];

export default function FunctionHall() {
  return (
    <section className="section-padding bg-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Content Side */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Celebrations & Events"
              title="Grand Function Hall"
              subtitle="Host your most important celebrations in Kadiri with ease. Perfect for Weddings, Engagements, Birthday Parties, Corporate Meetings, and Special Occasions."
              align="left"
              theme="dark"
              className="mb-8"
            />

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {hallFeatures.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] font-sans text-ivory/40 uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="text-sm font-sans text-ivory font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing & CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white/5 border border-gold/30 rounded-xl px-4 py-2.5">
                <span className="text-[11px] font-sans text-ivory/60 block uppercase">Hall Rental</span>
                <span className="font-serif text-2xl text-gold font-bold">₹20,000</span>
                <span className="text-xs font-sans text-ivory/60 ml-1">/ Day</span>
              </div>
              <Link
                href="/function-hall"
                className="flex items-center gap-2 px-6 py-3.5 bg-gold text-black font-sans font-semibold text-sm rounded-xl hover:bg-gold-light transition-colors"
              >
                Hall Details & Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${hotel.contact.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20Function%20Hall%20at%20Vikram%20Bliss%20Inn.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans font-medium text-gold hover:text-gold-light underline underline-offset-4 transition-colors py-2"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Real Function Hall Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-card-dark bg-brown-light group">
              <Image
                src={hotelImages.functionHall.main}
                alt={hotelImages.functionHall.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Verified Real Photo Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-gold/40 rounded-xl px-3 py-1.5 flex items-center gap-2 z-10">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-[11px] font-sans font-semibold text-ivory tracking-wide uppercase">
                  Real Function Hall
                </span>
              </div>

              {/* Capacity Banner Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-sans text-ivory/60 uppercase tracking-wide">Capacity</p>
                  <p className="font-serif text-xl text-gold font-bold">Up to 200 Guests</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-sans text-ivory/60 uppercase tracking-wide">Air Conditioned</p>
                  <p className="text-sm font-sans text-ivory font-semibold">Yes • Generator Backup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
