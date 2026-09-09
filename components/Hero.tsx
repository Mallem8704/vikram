"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  BedDouble,
  Wifi,
  Car,
  Users,
} from "lucide-react";
import { hotel } from "@/lib/data/hotel";
import { hotelImages } from "@/lib/data/images";
import { useBookingModal } from "@/context/BookingContext";

const compactAmenities = [
  { icon: BedDouble, label: "AC & Non-AC Rooms" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Ample Parking" },
  { icon: Users, label: "Function Hall" },
];

export default function Hero() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
      {/* ──────────────── Background: Real Hotel Exterior Photograph ──────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle entrance scale-in animation */}
        <div className="relative w-full h-full animate-hero-scale-in">
          <Image
            src={hotelImages.exterior.hero}
            alt="Vikram Bliss Inn and Vikram Arcade real hotel building exterior in Kadiri"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-[80%_center] lg:object-[right_center]"
          />
        </div>

        {/* Desktop Gradient: Dark overlay from Left to Right (40% text, 60% building) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-45% to-transparent hidden lg:block pointer-events-none" />

        {/* Tablet Gradient: Smooth left-to-right fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-55% to-black/25 hidden sm:block lg:hidden pointer-events-none" />

        {/* Mobile Gradient: Top-to-bottom dark layer for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60 sm:hidden pointer-events-none" />

        {/* Subtle bottom fade to seamlessly blend into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* ──────────────── Content Container ──────────────── */}
      <div className="relative z-10 section-container w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Occupies approx 40% (5 of 12 cols on desktop) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left">
            {/* Small Gold Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 animate-hero-fade-up">
              <span className="w-6 h-0.5 bg-gold rounded-full" />
              <p className="text-gold text-xs sm:text-sm font-sans font-semibold tracking-[0.25em] uppercase">
                VIKRAM BLISS INN
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-bold leading-[1.08] mb-4 sm:mb-5 animate-hero-fade-up delay-100">
              Experience Comfort, <br />
              <span className="text-gold italic font-normal">Embrace Bliss</span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-base sm:text-lg text-ivory/80 leading-relaxed max-w-lg mb-7 sm:mb-8 animate-hero-fade-up delay-200">
              A comfortable and welcoming stay in the heart of Kadiri.
            </p>

            {/* Action Buttons: Primary + Secondary */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-9 w-full sm:w-auto animate-hero-fade-up delay-300">
              {/* Primary Button */}
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gold text-black font-sans font-bold text-sm sm:text-base rounded-xl hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
                aria-label="Book Your Stay"
              >
                <CalendarDays className="w-4 h-4 text-black" />
                <span>Book Your Stay</span>
              </button>

              {/* Secondary Button */}
              <Link
                href="/rooms"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ivory/30 text-ivory font-sans font-semibold text-sm sm:text-base rounded-xl hover:bg-white/10 hover:border-ivory/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span>Explore Rooms</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>

            {/* Compact Amenities with Subtle Gold Icons */}
            <div className="pt-5 border-t border-white/15 w-full max-w-lg animate-hero-fade-up delay-400">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-5 gap-y-2.5">
                {compactAmenities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-sans font-medium text-ivory/85">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Small Brand Line */}
              <p className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-gold/90 mt-4 animate-hero-fade-up delay-500">
                GOOD STAYS. BRIGHTER DAYS.
              </p>
            </div>
          </div>

          {/* Right Column: Open space on desktop so the hotel image (~60%) dominates cleanly */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
