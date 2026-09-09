"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BedDouble, Images, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { hotel } from "@/lib/data/hotel";

const mobileNav = [
  { label: "Home", href: "/", icon: Home },
  { label: "Rooms", href: "/rooms", icon: BedDouble },
  { label: "Gallery", href: "/gallery", icon: Images },
  { label: "Location", href: "/location", icon: MapPin },
];

export default function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-t border-white/10">
      <div className="flex items-center">
        {mobileNav.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex-1 flex flex-col items-center justify-center py-2.5 gap-1 transition-colors",
              pathname === href ? "text-gold" : "text-ivory/50 hover:text-ivory"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-sans tracking-wide">{label}</span>
          </Link>
        ))}
        {/* Call button */}
        <a
          href={`tel:${hotel.contact.phone[0]}`}
          className="flex-1 flex flex-col items-center justify-center py-2.5 gap-1 text-[#25D366] hover:text-[#25D366]/80 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-sans tracking-wide">Call</span>
        </a>
      </div>
    </div>
  );
}
