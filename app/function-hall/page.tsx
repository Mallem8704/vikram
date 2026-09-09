import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  Phone,
  MessageCircle,
  Heart,
  Cake,
  Briefcase,
  Users,
  PartyPopper,
  CheckCircle2,
  CalendarDays,
  Info,
  MapPin,
  Clock,
} from "lucide-react";
import { hotel } from "@/lib/data/hotel";
import { hotelImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Function Hall",
  description:
    "Book the Grand Function Hall at VIKRAM BLISS INN, Kadiri. ₹20,000/day. Ideal for weddings, engagements, birthday celebrations, meetings, and family functions.",
  alternates: {
    canonical: "/function-hall",
  },
  openGraph: {
    title: "Function Hall | VIKRAM BLISS INN",
    description:
      "Grand Function Hall in Kadiri for weddings, engagements, and events. ₹20,000/day.",
    url: "https://vikramblissinn.in/function-hall",
    images: ["/images/hotel/function-hall.jpg"],
  },
};

const perfectForList = [
  {
    title: "Weddings",
    description: "An auspicious and welcoming venue to celebrate your wedding festivities.",
    icon: Heart,
  },
  {
    title: "Engagements",
    description: "An intimate and elegant setting to exchange rings with family and friends.",
    icon: Sparkles,
  },
  {
    title: "Birthday celebrations",
    description: "Commemorate birthdays and milestone years with joyful community.",
    icon: Cake,
  },
  {
    title: "Meetings",
    description: "Spacious meeting space for formal discussions, associations, and gatherings.",
    icon: Briefcase,
  },
  {
    title: "Family functions",
    description: "Celebrate anniversaries, reunions, and traditional household ceremonies.",
    icon: Users,
  },
  {
    title: "Other events",
    description: "Custom community gatherings, felicitation events, and cultural functions.",
    icon: PartyPopper,
  },
];

export default function FunctionHallPage() {
  const whatsappUrl = `https://wa.me/${hotel.contact.whatsapp}?text=Hello%20Vikram%20Bliss%20Inn%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20Function%20Hall%20(%E2%82%B920%2C000%2Fday).`;

  return (
    <div className="bg-[#0c0c0c] text-ivory min-h-screen pt-20 md:pt-24 pb-20">
      {/* ──────────────── 1. Breadcrumb ──────────────── */}
      <div className="border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="section-container py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-ivory/60">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-ivory/30" />
            <span className="text-gold font-medium" aria-current="page">
              Function Hall
            </span>
          </nav>
        </div>
      </div>

      <div className="section-container pt-8 md:pt-10">
        {/* ──────────────── 2. Title & Pricing Header ──────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-gold rounded-full" />
              <p className="text-gold text-xs font-sans font-semibold tracking-[0.2em] uppercase">
                VIKRAM BLISS INN • KADIRI
              </p>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
              FUNCTION HALL
            </h1>
            <p className="font-sans text-sm sm:text-base text-ivory/70 mt-2 max-w-xl">
              A premier celebration hall in Kadiri designed for weddings, family milestones, and community events.
            </p>
          </div>

          {/* Gold Pricing Badge */}
          <div className="bg-gold text-black px-6 py-3 rounded-2xl shadow-gold shrink-0 self-start md:self-auto text-right">
            <p className="font-serif text-3xl sm:text-4xl font-bold leading-none">
              ₹20,000
            </p>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-black/80 mt-1">
              per day
            </p>
          </div>
        </div>

        {/* ──────────────── 3. Large Event Hall Visual / Photograph ──────────────── */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl mb-12">
          <Image
            src={hotelImages.functionHall.main}
            alt="Vikram Bliss Inn Function Hall interior"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

          {/* Authenticity Badge */}
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-sans font-semibold px-4 py-2 rounded-xl flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Vikram Bliss Inn Function Hall</span>
          </div>

          <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md border border-white/20 text-ivory text-xs font-sans px-3.5 py-1.5 rounded-full">
            ₹20,000 / day
          </div>
        </div>

        {/* ──────────────── 4. Two-Column Layout: Details + Sticky Enquiry Card ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (8 of 12) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* About the Venue */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-gold font-semibold mb-3">
                About the Function Hall
              </h2>
              <p className="font-sans text-base text-ivory/80 leading-relaxed">
                The Function Hall at Vikram Bliss Inn offers a clean, convenient, and distinguished space in the heart of Kadiri for hosting personal ceremonies and special events. Situated on the property near Police Line, the hall provides a central location with on-site accommodation for visiting guests.
              </p>
            </div>

            {/* Perfect For Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-0.5 bg-gold rounded-full" />
                <h2 className="font-serif text-2xl text-gold font-semibold">
                  Perfect For
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {perfectForList.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-ivory">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs text-ivory/70 leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Important Booking Information */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2.5 mb-4 text-gold">
                <Info className="w-5 h-5" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory">
                  Hall Reservation Guidelines
                </h3>
              </div>

              <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-ivory/80 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Tariff:</strong> ₹20,000 per day. Please enquire directly with reception to confirm date availability.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Site Inspection:</strong> Guests and event organizers are warmly invited to visit the property in Kadiri for in-person venue inspection.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Guest Stay Integration:</strong> AC & Non-AC guest rooms and Executive Suites are located in the same building for out-of-town attendees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Direct Reception Booking:</strong> No online payment is processed; dates and bookings are coordinated directly with the management.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (4 of 12): Sticky Enquiry Card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-gold/40 p-6 sm:p-7 shadow-card-dark">
              <p className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-1">
                HALL ENQUIRY
              </p>
              <h3 className="font-serif text-2xl font-bold text-ivory mb-2">
                Enquire Now
              </h3>
              <p className="text-xs font-sans text-ivory/60 leading-relaxed mb-6">
                Connect directly with reception to check date availability and tariff details.
              </p>

              {/* Price Summary */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-baseline justify-between">
                <span className="text-xs font-sans text-ivory/60 uppercase">Hall Rate</span>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-gold">
                    ₹20,000
                  </span>
                  <span className="text-xs font-sans text-ivory/50 ml-1">/ day</span>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="flex flex-col gap-3">
                {/* WhatsApp Enquiry Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-gold text-black font-sans font-bold text-sm rounded-xl hover:bg-gold-light transition-all shadow-gold focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Enquire Now on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Enquire Now (WhatsApp)</span>
                </a>

                {/* Call Hotel Button */}
                <a
                  href={`tel:${hotel.contact.phone[0]}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 border border-white/20 hover:border-gold text-ivory hover:text-gold font-sans font-semibold text-sm rounded-xl hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Call Front Desk"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call: {hotel.contact.phone[0]}</span>
                </a>

                {/* Alternate Phone */}
                {hotel.contact.phone[1] && (
                  <a
                    href={`tel:${hotel.contact.phone[1]}`}
                    className="w-full text-center text-xs font-sans text-ivory/50 hover:text-gold transition-colors py-1"
                  >
                    Alt Phone: {hotel.contact.phone[1]}
                  </a>
                )}
              </div>

              {/* Assistance & Details */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2.5 text-xs font-sans text-ivory/60">
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>24/7 Front Desk Assistance</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Christian Colony, Near Subjail, Kadiri</span>
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Early date reservation recommended</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
