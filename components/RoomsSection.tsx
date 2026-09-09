import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/lib/data/rooms";
import { cn } from "@/lib/utils";

interface RoomsSectionProps {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  className?: string;
  id?: string;
}

export default function RoomsSection({
  title = "Our Rooms",
  subtitle = "Comfortable rooms designed for relaxing stays in Kadiri.",
  showViewAll = true,
  className,
  id = "rooms",
}: RoomsSectionProps) {
  // Only the 3 canonical rooms
  const displayRooms = rooms.slice(0, 3);

  return (
    <section id={id} className={cn("section-padding bg-black scroll-mt-16", className)}>
      <div className="section-container">
        {/* Header with Title and Subheading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Accommodation"
            title={title}
            subtitle={subtitle}
            align="left"
            theme="dark"
            className="mb-0"
          />

          {showViewAll && (
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-gold text-ivory hover:text-black border border-white/15 hover:border-gold font-sans font-semibold text-sm transition-all duration-200 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4 text-gold hover:text-black transition-colors" />
            </Link>
          )}
        </div>

        {/* 3 Premium Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Mobile View All Rooms Button (Visible on mobile if showViewAll is true) */}
        {showViewAll && (
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              href="/rooms"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gold text-black font-sans font-bold text-sm shadow-gold"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
