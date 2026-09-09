"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  BedDouble,
  Users,
  Maximize,
  Snowflake,
  Wind,
  MessageCircle,
  Phone,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import BookingCTA from "@/components/BookingCTA";
import SectionHeading from "@/components/SectionHeading";
import { formatCurrency } from "@/lib/utils";
import { hotel } from "@/lib/data/hotel";
import type { Room } from "@/types";

interface RoomDetailProps {
  room: Room;
}

export default function RoomDetail({ room }: RoomDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = room.images && room.images.length > 0 ? room.images : [{ src: "/images/hotel/exterior.jpg", alt: room.name }];
  const currentImage = images[activeImageIndex] || images[0];

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="pt-20 md:pt-24 bg-black border-b border-white/5">
        <div className="section-container py-3.5">
          <nav className="flex items-center gap-2 text-xs font-sans text-ivory/50">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-ivory/30" />
            <Link href="/rooms" className="hover:text-gold transition-colors">
              Rooms
            </Link>
            <ChevronRight className="w-3 h-3 text-ivory/30" />
            <span className="text-gold font-medium">{room.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Showcase */}
      <div className="bg-black pb-14">
        <div className="section-container pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Real Room Photographs Showcase */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              {/* Main Image View */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-card-dark bg-brown-light">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-all duration-300"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  {room.badge && (
                    <span className="px-3 py-1 bg-gold text-black text-xs font-sans font-semibold rounded-full shadow-md">
                      {room.badge}
                    </span>
                  )}
                  <span className="px-3 py-1 bg-black/80 text-ivory text-xs font-sans font-medium rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold" /> Real Hotel Photo
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-sans text-ivory/80 border border-white/10">
                  Photo {activeImageIndex + 1} of {images.length}
                </div>
              </div>

              {/* Thumbnail Selector (if multiple photos exist) */}
              {images.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={img.src + idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeImageIndex === idx
                          ? "border-gold shadow-gold scale-105"
                          : "border-white/20 opacity-60 hover:opacity-100 hover:border-gold/50"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="96px"
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Room Specs & Booking Sidebar */}
            <div className="lg:col-span-5">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-1.5 text-xs font-sans text-ivory/50 hover:text-gold mb-4 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to All Rooms
              </Link>

              <div className="flex items-center gap-2 mb-2">
                {room.isAC ? (
                  <span className="flex items-center gap-1 text-xs px-2.5 py-1 bg-blue-950/80 text-blue-300 border border-blue-400/30 rounded-full font-sans">
                    <Snowflake className="w-3 h-3" /> Air Conditioned
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs px-2.5 py-1 bg-white/10 text-ivory/80 border border-white/20 rounded-full font-sans">
                    <Wind className="w-3 h-3 text-gold" /> Fan Cooled (2 Beds)
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-ivory font-bold mb-2">
                {room.name}
              </h1>
              <p className="font-sans text-sm sm:text-base text-gold font-medium mb-5">
                {room.tagline}
              </p>

              {/* Price */}
              <div className="flex items-end gap-3 mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                <div>
                  <span className="font-serif text-4xl text-gold font-bold">
                    {formatCurrency(room.pricePerNight)}
                  </span>
                  <span className="text-ivory/50 text-sm font-sans ml-1">/ night</span>
                </div>
                {room.originalPrice && (
                  <span className="text-ivory/30 text-lg line-through font-sans mb-1">
                    {formatCurrency(room.originalPrice)}
                  </span>
                )}
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-2.5 mb-6 p-3.5 bg-white/5 rounded-xl border border-white/10 text-center">
                <StatChip icon={<BedDouble className="w-4 h-4 text-gold" />} label="Bed" value={room.bedType} />
                <StatChip icon={<Users className="w-4 h-4 text-gold" />} label="Guests" value={`Up to ${room.maxOccupancy}`} />
                <StatChip icon={<Maximize className="w-4 h-4 text-gold" />} label="Size" value={`${room.sizeSqFt} sqft`} />
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${hotel.contact.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(room.name)}%20at%20Vikram%20Bliss%20Inn.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 bg-gold text-black font-sans font-semibold text-sm rounded-xl hover:bg-gold-light transition-all shadow-gold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book on WhatsApp ({hotel.contact.phone[0]})
                </a>
                <a
                  href={`tel:${hotel.contact.phone[0]}`}
                  className="flex items-center justify-center gap-2 py-3.5 border border-white/20 text-ivory font-sans font-medium text-sm rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  Call Direct: {hotel.contact.phone[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Detailed Features */}
      <section className="section-padding bg-ivory">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Cols: Long Description & Amenities */}
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Room Overview"
                title="Description & Space"
                align="left"
                theme="light"
                className="mb-5"
              />
              <p className="font-sans text-brown-muted leading-relaxed text-base sm:text-lg mb-8">
                {room.longDescription}
              </p>

              <div>
                <h3 className="font-serif text-2xl text-black font-bold mb-4">
                  What is Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-ivory-dark">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-sm font-sans text-brown font-medium">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col: Room Details Specification Card */}
            <div className="bg-white rounded-2xl border border-ivory-dark shadow-card p-6 h-fit">
              <h3 className="font-serif text-xl text-black font-bold mb-4">
                Room Specifications
              </h3>
              <ul className="flex flex-col divide-y divide-ivory-dark">
                {room.features.map(({ label, value }) => (
                  <li key={label} className="flex items-center justify-between py-3">
                    <span className="text-xs font-sans text-brown-muted uppercase tracking-wider">
                      {label}
                    </span>
                    <span className="text-sm font-sans text-brown font-semibold text-right">{value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-5 border-t border-ivory-dark text-center">
                <p className="text-xs font-sans text-brown-muted mb-1">Standard Rate</p>
                <p className="font-serif text-3xl text-gold font-bold">
                  {formatCurrency(room.pricePerNight)}
                </p>
                <p className="text-xs font-sans text-brown-muted mt-1">per night • tax applicable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        title={`Book the ${room.name}`}
        subtitle="Contact our 24/7 reception desk or message directly on WhatsApp to confirm current availability."
        theme="dark"
      />
    </>
  );
}

function StatChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div className="flex items-center gap-1.5">{icon}</div>
      <span className="text-[10px] font-sans text-ivory/40 uppercase tracking-wider">{label}</span>
      <span className="text-xs font-sans text-ivory/90 font-medium line-clamp-1">{value}</span>
    </div>
  );
}
