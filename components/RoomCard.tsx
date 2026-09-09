import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Maximize, BedDouble, Snowflake, Wind } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import type { Room } from "@/types";

interface RoomCardProps {
  room: Room;
  variant?: "default" | "featured";
  className?: string;
}

export default function RoomCard({ room, variant = "default", className }: RoomCardProps) {
  const isFeatured = variant === "featured";
  const primaryImage = room.images?.[0]?.src || "/images/hotel/exterior.jpg";
  const altText = room.images?.[0]?.alt || `${room.name} at Vikram Bliss Inn`;

  return (
    <article
      className={cn(
        "group bg-white rounded-2xl overflow-hidden border border-ivory-dark shadow-card card-hover flex flex-col justify-between",
        isFeatured && "lg:col-span-2",
        className
      )}
    >
      {/* Room Image */}
      <div className={cn("relative overflow-hidden bg-brown-light w-full", isFeatured ? "h-72" : "h-60")}>
        <Image
          src={primaryImage}
          alt={altText}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient shadow for badge legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {room.badge && (
            <span className="px-3 py-1 bg-gold text-black text-xs font-sans font-semibold rounded-full shadow-sm">
              {room.badge}
            </span>
          )}
          <span
            className={cn(
              "px-3 py-1 text-xs font-sans font-medium rounded-full flex items-center gap-1.5 shadow-sm",
              room.isAC
                ? "bg-blue-950/80 text-blue-200 border border-blue-400/30 backdrop-blur-md"
                : "bg-black/80 text-ivory/90 border border-white/20 backdrop-blur-md"
            )}
          >
            {room.isAC ? (
              <>
                <Snowflake className="w-3 h-3 text-blue-300" /> AC
              </>
            ) : (
              <>
                <Wind className="w-3 h-3 text-gold" /> Non-AC
              </>
            )}
          </span>
        </div>

        {/* Price badge */}
        <div className="absolute top-3.5 right-3.5 bg-black/85 backdrop-blur-md border border-gold/30 rounded-xl px-3 py-1.5 text-right z-10">
          {room.originalPrice && (
            <p className="text-ivory/40 text-[11px] font-sans line-through leading-tight">
              {formatCurrency(room.originalPrice)}
            </p>
          )}
          <p className="text-gold font-serif text-lg font-bold leading-none">
            {formatCurrency(room.pricePerNight)}
          </p>
          <p className="text-ivory/60 text-[10px] font-sans">per night</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h3 className="font-serif text-xl md:text-2xl text-black font-bold leading-tight">
              {room.name}
            </h3>
          </div>
          <p className="text-xs font-sans text-gold-dark font-medium tracking-wide mb-2.5">
            {room.tagline}
          </p>
          <p className="text-sm font-sans text-brown-muted leading-relaxed line-clamp-2 mb-4">
            {room.description}
          </p>

          {/* Room Specs */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-ivory-dark mb-5 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-sans uppercase text-brown-muted">Bed</span>
              <span className="text-xs font-sans font-semibold text-brown mt-0.5 line-clamp-1">{room.bedType}</span>
            </div>
            <div className="flex flex-col items-center border-x border-ivory-dark">
              <span className="text-[10px] font-sans uppercase text-brown-muted">Capacity</span>
              <span className="text-xs font-sans font-semibold text-brown mt-0.5">{room.maxOccupancy} Guests</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-sans uppercase text-brown-muted">Size</span>
              <span className="text-xs font-sans font-semibold text-brown mt-0.5">{room.sizeSqFt} sq ft</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/rooms/${room.slug}`}
            className="flex-1 text-center py-2.5 border border-gold/60 text-gold-dark text-sm font-sans font-semibold rounded-xl hover:bg-gold/10 transition-colors"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/919966731010?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(room.name)}%20at%20Vikram%20Bliss%20Inn.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 py-2.5 px-4 bg-gold text-black text-sm font-sans font-semibold rounded-xl hover:bg-gold-light transition-colors"
          >
            Book
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
