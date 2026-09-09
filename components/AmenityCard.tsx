import {
  Wind,
  Wifi,
  Car,
  Droplets,
  UtensilsCrossed,
  Coffee,
  Zap,
  Clock,
  Sparkles,
  Shield,
  MapPin,
  WashingMachine,
  Snowflake,
  Tv,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Amenity } from "@/types";

// Icon registry — maps icon name string to Lucide component
const IconRegistry: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Wifi,
  Car,
  Droplets,
  UtensilsCrossed,
  Coffee,
  Zap,
  Clock,
  Sparkles,
  Shield,
  MapPin,
  WashingMachine,
  Snowflake,
  Tv,
  Users,
};

interface AmenityCardProps {
  amenity: Amenity;
  variant?: "default" | "compact";
  theme?: "light" | "dark";
}

export default function AmenityCard({
  amenity,
  variant = "default",
  theme = "light",
}: AmenityCardProps) {
  const Icon = IconRegistry[amenity.icon];
  const isDark = theme === "dark";

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 p-3 rounded-xl",
          isDark
            ? "bg-white/5 border border-white/10"
            : "bg-white border border-ivory-dark"
        )}
      >
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4 text-gold" />
          </div>
        )}
        <span
          className={cn(
            "text-sm font-sans font-medium",
            isDark ? "text-ivory/80" : "text-brown"
          )}
        >
          {amenity.label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group p-5 rounded-2xl border transition-all duration-200",
        isDark
          ? "bg-white/5 border-white/10 hover:bg-white/8 hover:border-gold/30"
          : "bg-white border-ivory-dark shadow-card hover:shadow-card-hover hover:border-gold/30"
      )}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
        {Icon ? (
          <Icon className="w-5 h-5 text-gold" />
        ) : (
          <span className="w-5 h-5 text-gold">✓</span>
        )}
      </div>

      <h3
        className={cn(
          "font-serif text-lg font-semibold mb-1.5",
          isDark ? "text-ivory" : "text-black"
        )}
      >
        {amenity.label}
      </h3>
      <p
        className={cn(
          "text-sm font-sans leading-relaxed",
          isDark ? "text-ivory/50" : "text-brown-muted"
        )}
      >
        {amenity.description}
      </p>
    </div>
  );
}
