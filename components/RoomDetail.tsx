"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  X,
  ChevronLeft,
  Maximize2,
  Snowflake,
  Wind,
  BedDouble,
  Tv,
  Droplets,
  Wifi,
  Sparkles,
  ShieldCheck,
  CalendarDays,
  Info,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { hotel } from "@/lib/data/hotel";
import { useBookingModal } from "@/context/BookingContext";
import type { Room } from "@/types";

interface RoomDetailProps {
  room: Room;
}

// Icon mapper for room amenities
function getAmenityIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("ac") || l.includes("air")) return Snowflake;
  if (l.includes("fan")) return Wind;
  if (l.includes("bed")) return BedDouble;
  if (l.includes("tv")) return Tv;
  if (l.includes("water")) return Droplets;
  if (l.includes("wi-fi") || l.includes("wifi")) return Wifi;
  if (l.includes("power") || l.includes("backup")) return Sparkles;
  if (l.includes("clean") || l.includes("linen")) return ShieldCheck;
  return Sparkles;
}

export default function RoomDetail({ room }: RoomDetailProps) {
  const { openBookingModal } = useBookingModal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images =
    room.images && room.images.length > 0
      ? room.images
      : [{ src: "/images/hotel/exterior.jpg", alt: room.name }];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <div className="bg-[#0c0c0c] text-ivory min-h-screen pt-20 md:pt-24 pb-20">
      {/* ──────────────── 1. Breadcrumb ──────────────── */}
      <div className="border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="section-container py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-ivory/60">
            <Link href="/" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-ivory/30" />
            <Link href="/rooms" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded">
              Rooms
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-ivory/30" />
            <span className="text-gold font-medium truncate" aria-current="page">
              {room.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="section-container pt-8 md:pt-10">
        {/* ──────────────── 2. Room Title & Price Header ──────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-gold rounded-full" />
              <p className="text-gold text-xs font-sans font-semibold tracking-[0.2em] uppercase">
                VIKRAM BLISS INN • KADIRI
              </p>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory leading-tight">
              {room.name}
            </h1>
          </div>

          {/* Gold Pricing Badge */}
          <div className="bg-gold text-black px-5 py-2.5 rounded-2xl shadow-gold shrink-0 self-start md:self-auto text-right">
            <p className="font-serif text-3xl font-bold leading-none">
              {formatCurrency(room.pricePerNight)}
            </p>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-wider text-black/80 mt-0.5">
              per night
            </p>
          </div>
        </div>

        {/* ──────────────── 3. Large Real Room Photograph ──────────────── */}
        <div
          onClick={() => openLightbox(0)}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] rounded-3xl overflow-hidden border border-white/15 bg-black cursor-pointer group shadow-2xl mb-12"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Click to Zoom Pill */}
          <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md border border-white/20 text-ivory text-xs font-sans px-3.5 py-1.5 rounded-full flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5 text-gold" />
            <span>Click to View Full Photo</span>
          </div>

          {/* Real Photo Authenticity Badge */}
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-sans font-semibold px-3.5 py-1.5 rounded-xl flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Actual Vikram Bliss Inn Photograph</span>
          </div>
        </div>

        {/* ──────────────── 4. Main Two-Column Layout ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (8 of 12): Description, Amenities, Gallery, Important Info */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Short Description */}
            <div>
              <h2 className="font-serif text-2xl text-gold font-semibold mb-3">
                About This Room
              </h2>
              <p className="font-sans text-base sm:text-lg text-ivory/90 leading-relaxed">
                {room.description}
              </p>
              {room.longDescription && (
                <p className="font-sans text-sm sm:text-base text-ivory/70 leading-relaxed mt-4">
                  {room.longDescription}
                </p>
              )}
            </div>

            {/* Amenities Section */}
            <div>
              <h2 className="font-serif text-2xl text-gold font-semibold mb-4">
                Room Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity) => {
                  const Icon = getAmenityIcon(amenity);
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gold" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-sans text-ivory font-medium">
                        {amenity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Room Photo Gallery */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-2xl text-gold font-semibold">
                  Room Photo Gallery
                </h2>
                <span className="text-xs font-sans text-ivory/50">
                  {images.length} Real {images.length === 1 ? "Photo" : "Photos"}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {images.map((img, idx) => (
                  <div
                    key={img.src + idx}
                    onClick={() => openLightbox(idx)}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-black cursor-pointer group"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Information */}
            {room.importantInfo && room.importantInfo.length > 0 && (
              <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2.5 mb-4 text-gold">
                  <Info className="w-5 h-5" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory">
                    Important Information
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {room.importantInfo.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-sans text-ivory/80 leading-relaxed">
                        {info}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column (4 of 12): Sticky Booking CTA Card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-gold/40 p-6 sm:p-7 shadow-card-dark">
              <p className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-1">
                RESERVATION
              </p>
              <h3 className="font-serif text-2xl font-bold text-ivory mb-2">
                Book This Room
              </h3>
              <p className="text-xs font-sans text-ivory/60 leading-relaxed mb-6">
                Direct booking with hotel reception. No extra booking fees, instant availability check.
              </p>

              {/* Price Summary */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-baseline justify-between">
                <span className="text-xs font-sans text-ivory/60 uppercase">Price</span>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-gold">
                    {formatCurrency(room.pricePerNight)}
                  </span>
                  <span className="text-xs font-sans text-ivory/50 ml-1">/ night</span>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="flex flex-col gap-3">
                {/* Book This Room CTA (Triggers Modal with pre-selected room) */}
                <button
                  type="button"
                  onClick={() => openBookingModal({ roomType: room.name })}
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-gold text-black font-sans font-bold text-sm rounded-xl hover:bg-gold-light transition-all shadow-gold focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
                >
                  <CalendarDays className="w-4 h-4 text-black" />
                  <span>Book This Room</span>
                </button>

                {/* Quick WhatsApp Action */}
                <a
                  href={`https://wa.me/${hotel.contact.whatsapp}?text=Hello%20Vikram%20Bliss%20Inn%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20${encodeURIComponent(room.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 border border-white/20 hover:border-gold text-ivory hover:text-gold font-sans font-semibold text-sm rounded-xl hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <MessageCircle className="w-4 h-4 text-gold" />
                  <span>Quick WhatsApp</span>
                </a>

                {/* Call Now Action */}
                <a
                  href={`tel:${hotel.contact.phone[0]}`}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 hover:border-gold text-ivory hover:text-gold font-sans font-semibold text-sm rounded-xl hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call: {hotel.contact.phone[0]}</span>
                </a>
              </div>

              {/* Assistance & Location Note */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2 text-xs font-sans text-ivory/60">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>24/7 Front Desk Assistance</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Kadiri Temple: 1.2 km</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Free On-Site Parking</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ──────────────── 5. Tasteful Image Lightbox Modal ──────────────── */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Room Photo Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="flex items-center justify-between w-full max-w-5xl mx-auto py-2 z-10">
            <div className="text-xs sm:text-sm font-sans text-ivory/70">
              {room.name} — Image {lightboxIndex + 1} of {images.length}
            </div>

            <button
              onClick={closeLightbox}
              aria-label="Close photo viewer"
              className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-black text-ivory transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Main Lightbox Image with Prev/Next Controls */}
          <div
            className="relative w-full max-w-5xl mx-auto flex-1 flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-gold hover:text-black text-ivory border border-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Active Image */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden border border-white/20">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-gold hover:text-black text-ivory border border-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {images.length > 1 && (
            <div
              className="flex items-center justify-center gap-2.5 py-3 overflow-x-auto w-full max-w-xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, idx) => (
                <button
                  key={img.src + idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    lightboxIndex === idx
                      ? "border-gold scale-105 shadow-gold"
                      : "border-white/20 opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
