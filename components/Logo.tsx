import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  isTransparent?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Logo({ isTransparent = false, className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg py-1 transition-transform hover:scale-[1.02]",
        className
      )}
      aria-label="Vikram Bliss Inn Home"
    >
      {/* VB Monogram Crest Badge */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
        {/* Real Crest from supplied material */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-b from-gold/20 via-black to-black border border-gold/50 flex items-center justify-center shadow-gold-sm overflow-hidden group-hover:border-gold transition-colors">
          <Image
            src="/images/hotel/vb-crest.png"
            alt="VB Royal Crest"
            width={40}
            height={36}
            className="object-contain p-0.5 drop-shadow"
            priority
          />
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-serif text-lg sm:text-xl font-bold tracking-wider transition-colors duration-200 uppercase",
            isTransparent ? "text-ivory" : "text-ivory group-hover:text-gold"
          )}
        >
          Vikram <span className="text-gold font-normal">Bliss</span> Inn
        </span>
        <span
          className={cn(
            "text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-sans font-medium transition-colors",
            isTransparent ? "text-ivory/60" : "text-gold/75"
          )}
        >
          Kadiri • Andhra Pradesh
        </span>
      </div>
    </Link>
  );
}
