"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
      {/* ──────────────── Background: Real Hotel Exterior Photograph ──────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle, restrained initial settle animation */}
        <motion.div
          initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 1.04, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease }}
          className="relative w-full h-full"
        >
          <Image
            src={hotelImages.exterior.hero}
            alt="Vikram Bliss Inn and Vikram Arcade real hotel building exterior in Kadiri"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-[80%_center] lg:object-[right_center]"
          />
        </motion.div>

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
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="inline-flex items-center gap-2 mb-3 sm:mb-4"
            >
              <span className="w-6 h-0.5 bg-gold rounded-full" />
              <p className="text-gold text-xs sm:text-sm font-sans font-semibold tracking-[0.25em] uppercase">
                VIKRAM BLISS INN
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-bold leading-[1.08] mb-4 sm:mb-5"
            >
              Experience Comfort, <br />
              <span className="text-gold italic font-normal">Embrace Bliss</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease }}
              className="font-sans text-base sm:text-lg text-ivory/80 leading-relaxed max-w-lg mb-7 sm:mb-8"
            >
              A comfortable and welcoming stay in the heart of Kadiri.
            </motion.p>

            {/* Action Buttons: Primary + Secondary */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-9 w-full sm:w-auto"
            >
              {/* Primary Button */}
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gold text-black font-sans font-bold text-sm sm:text-base rounded-xl hover:bg-gold-light transition-colors shadow-gold hover:shadow-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
                aria-label="Book Your Stay"
              >
                <CalendarDays className="w-4 h-4 text-black" />
                <span>Book Your Stay</span>
              </motion.button>

              {/* Secondary Button */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/rooms"
                  className="group w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ivory/30 text-ivory font-sans font-semibold text-sm sm:text-base rounded-xl hover:bg-white/10 hover:border-ivory/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span>Explore Rooms</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Compact Amenities with Subtle Gold Icons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56, ease }}
              className="pt-5 border-t border-white/15 w-full max-w-lg"
            >
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
              <p className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-gold/90 mt-4">
                GOOD STAYS. BRIGHTER DAYS.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Open space on desktop so the hotel image (~60%) dominates cleanly */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
