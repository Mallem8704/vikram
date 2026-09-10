"use client";

import { useState, useRef } from "react";
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
  Volume2,
  VolumeX,
  Play,
  Pause,
  ChevronDown,
} from "lucide-react";
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

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const ease = [0.22, 1, 0.36, 1] as const;

  // Toggle ambient audio on / off
  const toggleAudio = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Toggle video playback pause / play
  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
      {/* ──────────────── Background: Live Animation Video with Static Photo Fallback ──────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Static High-Res Poster Layer (Immediate Load & Reduced Motion Fallback) */}
        <Image
          src={hotelImages.exterior.hero}
          alt="Vikram Bliss Inn and Vikram Arcade real hotel building exterior in Kadiri"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[48%_center] sm:object-[65%_center] md:object-[75%_center] lg:object-[right_center] transition-opacity duration-1000 ${
            isVideoLoaded && !shouldReduceMotion ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Live Animation Video Stream */}
        {!shouldReduceMotion && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster={hotelImages.exterior.hero}
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover object-[48%_center] sm:object-[65%_center] md:object-[75%_center] lg:object-[right_center] transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/hero-live-animation.mp4" type="video/mp4" />
          </video>
        )}

        {/* Desktop Gradient: Dark overlay from Left to Right (40% text, 60% building) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-45% to-black/25 hidden lg:block pointer-events-none" />

        {/* Tablet Gradient: Smooth left-to-right fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-55% to-black/35 hidden sm:block lg:hidden pointer-events-none" />

        {/* Mobile Gradient: Balanced cinematic overlay keeping the live illuminated building vibrant */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 via-50% to-black/25 sm:hidden pointer-events-none" />

        {/* Subtle bottom fade to seamlessly blend into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* ──────────────── Content Container ──────────────── */}
      <div className="relative z-10 section-container w-full pt-24 pb-20 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Occupies approx 40% (5 of 12 cols on desktop) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left">
            {/* Live Animation Intro Badge */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-gold/40 backdrop-blur-md mb-3 text-[11px] font-sans font-medium text-gold shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="tracking-wider uppercase font-semibold">LIVE HOTEL VIEW</span>
              <span className="text-ivory/40">•</span>
              <span className="text-ivory/80 font-normal">KADIRI</span>
            </motion.div>

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
              className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-bold leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-5"
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
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 bg-gold text-black font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-gold-light transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
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
                  className="group w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/25 text-ivory font-sans font-medium text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-white/5 hover:border-gold hover:text-gold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span>Explore Rooms</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 transition-transform duration-200" />
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

          {/* Right Column: Open space on desktop so the hotel animation (~60%) shines through */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" aria-hidden="true" />
        </div>
      </div>

      {/* ──────────────── Floating Live Video & Audio Controls (Bottom-Right) ──────────────── */}
      {!shouldReduceMotion && (
        <div className="absolute bottom-20 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-lg">
          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={toggleAudio}
            className="flex items-center gap-1.5 text-xs font-sans font-medium text-ivory/80 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold py-1 px-2 rounded-full cursor-pointer"
            aria-label={isMuted ? "Unmute Intro Audio" : "Mute Intro Audio"}
            title={isMuted ? "Unmute Intro Audio" : "Mute Intro Audio"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-ivory/60" />
                <span className="text-[11px]">Sound Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-gold animate-pulse" />
                <span className="text-[11px] text-gold font-semibold">Sound On</span>
              </>
            )}
          </button>

          <span className="w-px h-3.5 bg-white/20" />

          {/* Play / Pause Toggle Button */}
          <button
            type="button"
            onClick={togglePlayback}
            className="flex items-center gap-1 text-xs font-sans text-ivory/70 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold py-1 px-1.5 rounded-full cursor-pointer"
            aria-label={isPlaying ? "Pause Live Animation" : "Play Live Animation"}
            title={isPlaying ? "Pause Live Animation" : "Play Live Animation"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 text-gold" />
            )}
          </button>
        </div>
      )}

      {/* ──────────────── Subtle Scroll Down Prompt (Bottom-Center) ──────────────── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-ivory/40 pointer-events-none">
        <span className="text-[10px] font-sans font-medium tracking-widest uppercase">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold/60" />
      </div>
    </section>
  );
}
