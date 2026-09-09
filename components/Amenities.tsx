import {
  Snowflake,
  Wind,
  Sparkles,
  Wifi,
  Tv,
  Droplets,
  Car,
  Users,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";
import { cn } from "@/lib/utils";

export interface AmenityItem {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const AMENITY_ITEMS: AmenityItem[] = [
  {
    name: "AC Rooms",
    description: "Cool, comfortable rooms equipped with individual split air-conditioning.",
    icon: Snowflake,
  },
  {
    name: "Non-AC Rooms",
    description: "Clean, naturally ventilated rooms for a breezy and affordable stay.",
    icon: Wind,
  },
  {
    name: "Suite Rooms",
    description: "Spacious executive suites featuring king bed and designer interiors.",
    icon: Sparkles,
  },
  {
    name: "Unlimited Wi-Fi",
    description: "High-speed internet connectivity across rooms and hotel premises.",
    icon: Wifi,
  },
  {
    name: "LED TV",
    description: "Wall-mounted televisions with popular entertainment channels in every room.",
    icon: Tv,
  },
  {
    name: "24/7 Hot Water",
    description: "Dedicated round-the-clock hot and cold water supply in attached bathrooms.",
    icon: Droplets,
  },
  {
    name: "Parking",
    description: "Convenient and secure on-site vehicle parking space for all staying guests.",
    icon: Car,
  },
  {
    name: "Function Hall",
    description: "Grand banquet hall accommodating 200+ guests for events and celebrations.",
    icon: Users,
  },
];

interface AmenitiesProps {
  preview?: boolean;
  className?: string;
  id?: string;
}

export default function Amenities({
  className,
  id = "amenities",
}: AmenitiesProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding bg-cream text-black border-y border-black/10 scroll-mt-20",
        className
      )}
    >
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-0.5 bg-gold rounded-full" />
              <p className="text-gold-dark text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                HOTEL COMFORTS & FACILITIES
              </p>
              <span className="w-5 h-0.5 bg-gold rounded-full" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight mb-4">
              Everything You Need for a Comfortable Stay
            </h2>

            <p className="font-sans text-sm sm:text-base text-black/70 leading-relaxed max-w-2xl mx-auto">
              Thoughtful conveniences and reliable facilities designed for a relaxing, hassle-free visit to Kadiri.
            </p>
          </div>
        </ScrollReveal>

        {/* Responsive Grid: Desktop 4 cols, Tablet 2 cols, Mobile 2 cols */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {AMENITY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.name}>
                <div
                  className="group relative h-full flex flex-col justify-between p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-black/8 hover:border-gold/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.18)] hover:-translate-y-1.5 transition-all duration-300 motion-reduce:transform-none cursor-default"
                >
                  <div>
                    {/* Gold Icon Accent */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-gold transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold group-hover:text-black transition-colors duration-300" />
                    </div>

                    {/* Amenity Title in Black Text */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-black group-hover:text-gold-dark transition-colors duration-200 mb-1.5 sm:mb-2">
                      {item.name}
                    </h3>

                    {/* Short Authentic Description */}
                    <p className="font-sans text-xs sm:text-sm text-black/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle bottom decorative accent */}
                  <div className="mt-4 sm:mt-5 pt-3 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-gold-dark/80">
                      Complimentary
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
