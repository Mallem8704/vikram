import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import LocationSection from "@/components/LocationSection";
import BookingCTA from "@/components/BookingCTA";
import { hotel } from "@/lib/data/hotel";
import { Landmark, Bus, Train, MapPin, Car, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Location & Contact",
  description:
    "Find Vikram Bliss Inn in Kadiri, Andhra Pradesh. Contact details, phone numbers, WhatsApp, Google Maps location, and nearby landmarks including Sri Kodandarama Swamy Temple.",
};

const nearbyLandmarks = [
  {
    name: "Sri Kadiri Lakshmi Narasimha Swamy / Kodandarama Swamy Temple",
    distance: "1.2 km (5 mins)",
    type: "Pilgrimage",
    icon: Landmark,
    description: "Famous ancient historic temple, the spiritual heartbeat of Kadiri.",
  },
  {
    name: "Kadiri RTC Bus Station",
    distance: "500 meters (2 mins)",
    type: "Transit",
    icon: Bus,
    description: "Frequent bus connectivity to Anantapur, Bengaluru, Tirupati, and Hyderabad.",
  },
  {
    name: "Kadiri Railway Station (KRY)",
    distance: "1.8 km (7 mins)",
    type: "Transit",
    icon: Train,
    description: "Well-connected passenger and express trains across South Central Railway.",
  },
  {
    name: "Thimmamma Marrimanu (Historic Banyan Tree)",
    distance: "25 km (35 mins)",
    type: "Attraction",
    icon: MapPin,
    description: "World record holding historic banyan tree spanning across acres.",
  },
];

const travelTips = [
  {
    title: "From Bengaluru (BLR)",
    desc: "Approx. 160 km via NH 44 and NH 42 (around 3 to 3.5 hours drive or direct KSRTC/APSRTC buses).",
  },
  {
    title: "From Anantapur",
    desc: "Approx. 90 km via NH 42 (around 1.5 to 2 hours by bus or private cab).",
  },
  {
    title: "From Tirupati",
    desc: "Approx. 180 km via Madanapalle / Rayachoti route (around 4 hours drive).",
  },
];

export default function LocationPage() {
  return (
    <>
      {/* ──────────────── Breadcrumb ──────────────── */}
      <div className="pt-20 md:pt-24 border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="section-container py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-ivory/60">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-ivory/30" />
            <span className="text-gold font-medium" aria-current="page">
              Location & Contact
            </span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="pt-8 pb-10 bg-black">
        <div className="section-container">
          <SectionHeading
            eyebrow="Reach Us Easily"
            title="Location & Contact"
            subtitle="Centrally located in Kadiri, Andhra Pradesh. Close to major transit hubs and sacred shrines."
            align="center"
            theme="dark"
          />
        </div>
      </div>

      {/* Main Map & Contact Section */}
      <LocationSection />

      {/* Nearby Attractions / Distances */}
      <section className="section-padding bg-ivory-dark border-t border-ivory-muted">
        <div className="section-container">
          <SectionHeading
            eyebrow="Kadiri Surroundings"
            title="Nearby Landmarks & Distances"
            subtitle="Vikram Bliss Inn offers easy access to Kadiri's primary spiritual, travel, and cultural spots."
            align="center"
            theme="light"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyLandmarks.map((landmark) => {
              const Icon = landmark.icon;
              return (
                <div
                  key={landmark.name}
                  className="bg-white p-6 rounded-2xl border border-ivory-muted shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-xs font-sans uppercase tracking-wider text-gold font-semibold">
                    {landmark.type}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-black mt-1 mb-2">
                    {landmark.name}
                  </h3>
                  <p className="text-xs font-sans font-semibold text-brown mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold" /> {landmark.distance}
                  </p>
                  <p className="text-xs font-sans text-brown-muted leading-relaxed">
                    {landmark.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Reach Guide */}
      <section className="py-16 bg-ivory">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Travel Guide"
              title="How to Reach Kadiri"
              subtitle="Kadiri is well connected by road and rail to key cities in Karnataka and Andhra Pradesh."
              align="center"
              theme="light"
              className="mb-10"
            />

            <div className="space-y-4">
              {travelTips.map((tip) => (
                <div
                  key={tip.title}
                  className="p-5 bg-white rounded-xl border border-ivory-dark shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Car className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-black mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-sm font-sans text-brown-muted leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        title="Visiting Kadiri Soon?"
        subtitle="Call or message us anytime on WhatsApp to book rooms, arrange late check-ins, or enquire about group bookings."
        theme="dark"
      />
    </>
  );
}
