import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Snowflake,
  BedDouble,
  Tv,
  Droplets,
  Wind,
  Sparkles,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import type { Room } from "@/types";

interface RoomCardProps {
  room: Room;
  className?: string;
}

// Icon mapper for clean feature icons
function getFeatureIcon(featureName: string) {
  const name = featureName.toLowerCase();
  if (name.includes("ac")) return Snowflake;
  if (name.includes("fan")) return Wind;
  if (name.includes("bed")) return BedDouble;
  if (name.includes("tv")) return Tv;
  if (name.includes("water")) return Droplets;
  if (name.includes("premium")) return Sparkles;
  return Sparkles;
}

export default function RoomCard({ room, className }: RoomCardProps) {
  const primaryImage = room.images?.[0]?.src || "/images/hotel/exterior.jpg";
  const altText = room.images?.[0]?.alt || `${room.name} at Vikram Bliss Inn`;
  const features = room.cardFeatures || ["AC", "Double Bed", "LED TV", "Hot Water"];
  const ctaLabel = room.cardCta || (room.slug === "suite" ? "View Suite" : "View Room");

  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-xl overflow-hidden bg-[#111111] border border-white/10 hover:border-gold/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {/* ──────────────── Top: Large Image with Hover Zoom ──────────────── */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#161616] shrink-0">
        <Image
          src={primaryImage}
          alt={altText}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-[1.035] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transform-none"
          loading="lazy"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30 pointer-events-none" />

        {/* Badge (e.g. Popular Choice / Premium Experience) */}
        {room.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-2.5 py-1 bg-black/85 backdrop-blur-md text-gold text-[10px] font-sans font-semibold tracking-wider uppercase rounded-md border border-gold/40 shadow-sm">
              {room.badge}
            </span>
          </div>
        )}

        {/* Gold Pricing Badge */}
        <div className="absolute bottom-4 right-4 z-10 bg-gold text-black px-3.5 py-1.5 rounded-lg shadow-sm text-right backdrop-blur-sm">
          <p className="font-serif text-2xl font-bold leading-none tracking-tight">
            {formatCurrency(room.pricePerNight)}
          </p>
          <p className="text-[10px] font-sans font-semibold uppercase tracking-wider text-black/80 mt-0.5">
            per night
          </p>
        </div>
      </div>

      {/* ──────────────── Middle: Room Information ──────────────── */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-bold leading-tight mb-2 group-hover:text-gold transition-colors">
            {room.name}
          </h3>

          {/* Description */}
          <p className="text-sm font-sans text-ivory/70 leading-relaxed mb-6">
            {room.description}
          </p>
        </div>

        {/* Clean Feature Icons Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
          {features.map((feature) => {
            const Icon = getFeatureIcon(feature);
            return (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3 text-gold" aria-hidden="true" />
                </div>
                <span className="text-xs font-sans font-medium text-ivory/85">
                  {feature}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ──────────────── Bottom: Dark Card Footer with CTA ──────────────── */}
      <div className="p-6 pt-0">
        <Link
          href={`/rooms/${room.slug}`}
          className="group/btn w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-5 bg-white/5 hover:bg-gold text-ivory hover:text-black font-sans font-semibold text-xs tracking-wider uppercase rounded-lg border border-white/15 hover:border-gold hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={`${ctaLabel} - ${room.name}`}
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold group-hover/btn:text-black group-hover/btn:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </article>
  );
}
