import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import RoomsSection from "@/components/RoomsSection";
import FunctionHall from "@/components/FunctionHall";
import Gallery from "@/components/Gallery";
import LocationSection from "@/components/LocationSection";
import BookingCTA from "@/components/BookingCTA";
import { Sparkles, ShieldCheck, Heart, Moon } from "lucide-react";

export const metadata: Metadata = {
  title: "VIKRAM BLISS INN | Comfortable Stay in Kadiri",
  description:
    "VIKRAM BLISS INN offers comfortable AC, Non-AC and Suite rooms in Kadiri, Andhra Pradesh, with Wi-Fi, LED TV, hot water, parking and function hall facilities.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero with Real Exterior Photo */}
      <Hero />

      {/* Trust Banner / Key Facts */}
      <section className="py-10 bg-black border-y border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "24+", label: "Clean & Spacious Rooms" },
              { value: "200+", label: "Function Hall Capacity" },
              { value: "24/7", label: "Front Desk Assistance" },
              { value: "100%", label: "Real Property & Photos" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="font-serif text-3xl md:text-4xl text-gold font-bold">
                  {value}
                </span>
                <span className="font-sans text-xs text-ivory/60 uppercase tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section with 3 Premium Cards */}
      <RoomsSection />

      {/* Function Hall Section */}
      <FunctionHall />

      {/* Amenities Showcase */}
      <Amenities preview />

      {/* "A Stay You'll Love" - Guest Testimonial & Value Pillars */}
      <section className="py-16 bg-black text-ivory border-y border-white/10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-gold text-xs font-sans font-semibold tracking-[0.2em] uppercase">
                The Vikram Bliss Inn Promise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4 text-ivory">
                A Stay You&apos;ll Love
              </h2>
              <p className="font-sans text-sm sm:text-base text-ivory/70 leading-relaxed max-w-xl mb-8">
                At VIKRAM BLISS INN, we believe every guest deserves a clean, comfortable and memorable stay.
                Our modern rooms, friendly service, and convenient location near Police Line make us the perfect
                choice for families, travelers, and business professionals in Kadiri.
              </p>

              {/* 4 Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Sparkles, label: "Elegant Interiors" },
                  { icon: ShieldCheck, label: "Clean & Hygienic" },
                  { icon: Moon, label: "Peaceful Stay" },
                  { icon: Heart, label: "Warm Hospitality" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                    <Icon className="w-5 h-5 text-gold mx-auto mb-1.5" />
                    <span className="text-xs font-sans text-ivory/90 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Guest Quote */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brown via-black to-brown-light p-8 rounded-3xl border border-gold/30 shadow-card-dark">
              <p className="text-gold text-xs font-sans font-semibold tracking-wider uppercase mb-3">
                Guest Impressions
              </p>
              <blockquote className="font-serif text-2xl text-ivory italic leading-snug mb-4">
                &ldquo;Come to Vikram Lodge once, the rooms are so nice then you will come again.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs font-sans text-ivory/60">— Verified Guest Review</span>
                <span className="text-xs font-sans text-gold font-semibold">Kadiri, AP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview with Real Images */}
      <Gallery preview />

      {/* Location Section */}
      <LocationSection />

      {/* Booking CTA */}
      <BookingCTA
        title="Your Comfortable Stay Awaits"
        subtitle="Book now and experience the perfect blend of comfort, convenience and genuine hospitality at VIKRAM BLISS INN, Kadiri."
        theme="dark"
      />
    </>
  );
}
