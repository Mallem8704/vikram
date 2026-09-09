import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Mic2,
  UtensilsCrossed,
  Music2,
  Projector,
  Lightbulb,
  Car,
  Camera,
  Wind,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";
import { hotel } from "@/lib/data/hotel";
import { hotelImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Function Hall",
  description:
    "Host weddings, receptions, corporate events, and family celebrations at the Vikram Bliss Inn Function Hall in Kadiri. Capacity up to 200 guests. Enquire now.",
};

const hallFeatures = [
  { icon: Users, label: "Seating Capacity", value: "Up to 200 Guests" },
  { icon: Mic2, label: "Sound System", value: "Professional PA & Mic Setup" },
  { icon: Projector, label: "Projection", value: "HD Projector & Screen Support" },
  { icon: Wind, label: "Climate Control", value: "Air Conditioned Hall" },
  { icon: Lightbulb, label: "Lighting", value: "Warm Recessed Ceiling Illumination" },
  { icon: Car, label: "Parking", value: "Ample Free Parking for Guests" },
  { icon: UtensilsCrossed, label: "Catering", value: "In-house & Outside Catering Permitted" },
  { icon: Camera, label: "Stage & Decor", value: "Spacious Stage for Photography" },
];

const occasions = [
  "Wedding Receptions",
  "Engagement Ceremonies",
  "Birthday Celebrations",
  "Corporate Meetings & Seminars",
  "Family Get-togethers",
  "Naming & Thread Ceremonies",
  "Anniversary Dinners",
  "Spiritual Gatherings & Satsangs",
];

const packages = [
  {
    name: "Morning Session",
    time: "8:00 AM – 2:00 PM",
    price: "₹12,000",
    description: "Ideal for engagement ceremonies, naming ceremonies, morning rituals, and intimate family gatherings.",
  },
  {
    name: "Evening Session",
    time: "4:00 PM – 10:00 PM",
    price: "₹15,000",
    description: "Perfect for wedding receptions, birthday celebrations, corporate dinners, and festive parties.",
  },
  {
    name: "Full Day Grand Package",
    time: "8:00 AM – 10:00 PM",
    price: "₹20,000",
    description: "Our complete wedding and grand celebration package. Exclusive all-day access to the hall, stage, and backstage preparation rooms.",
  },
];

export default function FunctionHallPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 md:pt-32 pb-10 bg-black">
        <div className="section-container">
          <SectionHeading
            eyebrow="Events & Celebrations"
            title="Grand Function Hall"
            subtitle="Kadiri's prime venue for memorable celebrations, traditional ceremonies, and corporate gatherings with capacity for over 200 guests."
            align="center"
            theme="dark"
          />
        </div>
      </div>

      {/* Real Function Hall Showcase Hero */}
      <section className="bg-black pb-16">
        <div className="section-container">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-card-dark bg-brown-light group">
            <Image
              src={hotelImages.functionHall.main}
              alt={hotelImages.functionHall.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Verified Badge */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-gold/40 rounded-xl px-3.5 py-1.5 flex items-center gap-2 z-10">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-sans font-semibold text-ivory tracking-wide uppercase">
                Real Function Hall Photo • Kadiri
              </span>
            </div>

            {/* Capacity & Price Tag */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between flex-wrap gap-3">
              <div className="bg-black/85 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
                <p className="text-[10px] font-sans text-ivory/50 uppercase tracking-widest">Guest Capacity</p>
                <p className="font-serif text-2xl sm:text-3xl text-gold font-bold">200+ Guests</p>
              </div>
              <div className="bg-black/85 backdrop-blur-md border border-gold/40 rounded-2xl px-5 py-3 text-right">
                <p className="text-[10px] font-sans text-ivory/50 uppercase tracking-widest">Full Day Booking</p>
                <p className="font-serif text-2xl sm:text-3xl text-gold font-bold">₹20,000 <span className="text-sm font-sans text-ivory/60 font-normal">/ Day</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-ivory">
        <div className="section-container">
          <SectionHeading
            eyebrow="Hall Specifications"
            title="Key Amenities & Infrastructure"
            subtitle="Equipped with dependable air-conditioning, backup generators, and audiovisual support to ensure uninterrupted celebrations."
            align="center"
            theme="light"
            className="mb-10"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hallFeatures.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-ivory-dark shadow-card hover:border-gold/40 hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-gold-dark" />
                </div>
                <p className="text-[11px] font-sans text-brown-muted uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-sm font-sans text-brown font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions & Package Options */}
      <section className="py-16 bg-ivory-dark">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Occasions */}
            <div>
              <SectionHeading
                eyebrow="Events We Welcome"
                title="Occasions & Functions"
                subtitle="Whether traditional or corporate, our flexible hall setup adapts to your specific requirements."
                align="left"
                theme="light"
                className="mb-6"
              />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {occasions.map((occasion) => (
                  <li key={occasion} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-ivory-muted shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-sm font-sans text-brown font-medium">{occasion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Session Packages */}
            <div>
              <SectionHeading
                eyebrow="Flexible Options"
                title="Session Packages"
                subtitle="Clear, honest pricing with no hidden charges."
                align="left"
                theme="light"
                className="mb-6"
              />
              <div className="flex flex-col gap-4">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="p-5 bg-white rounded-2xl border border-ivory-muted shadow-card hover:border-gold/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-lg text-black font-bold">
                        {pkg.name}
                      </h3>
                      <div className="text-right">
                        <span className="font-serif text-xl text-gold-dark font-bold block">{pkg.price}</span>
                        <span className="text-[11px] font-sans text-brown-muted">{pkg.time}</span>
                      </div>
                    </div>
                    <p className="text-sm font-sans text-brown-muted leading-relaxed">{pkg.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Note */}
      <section className="py-14 bg-brown text-ivory">
        <div className="section-container text-center">
          <Music2 className="w-10 h-10 text-gold mx-auto mb-4" />
          <blockquote className="font-serif text-2xl md:text-3xl italic max-w-2xl mx-auto leading-snug">
            &ldquo;Your celebration, your way. We provide the space, the support, and the warm Kadiri hospitality.&rdquo;
          </blockquote>
          <span className="gold-divider-center mt-5" />
          <p className="text-sm font-sans text-ivory/60 mt-4 max-w-xl mx-auto">
            Outside catering permitted &nbsp;•&nbsp; Decoration by your preferred vendor &nbsp;•&nbsp; Convenient parking & 24/7 power backup
          </p>
          <div className="mt-8">
            <a
              href={`https://wa.me/${hotel.contact.whatsapp}?text=Hi%20Vikram%20Bliss%20Inn%2C%20I%20want%20to%20check%20availability%20for%20the%20Function%20Hall.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-black font-sans font-semibold text-sm rounded-xl hover:bg-gold-light transition-all shadow-gold"
            >
              Check Date Availability on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        title="Reserve the Function Hall"
        subtitle="Call us directly or send your date requirements on WhatsApp. We will assist you with hall arrangements and special accommodations for your guests."
        theme="dark"
      />
    </>
  );
}
