"use client";

import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { hotel } from "@/lib/data/hotel";
import { useBookingModal } from "@/context/BookingContext";

export default function MobileBottomBar() {
  const { openBookingModal } = useBookingModal();

  return (
    <div
      role="region"
      aria-label="Quick Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-xl border-t border-white/15 px-3 py-2 sm:py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto">
        {/* 1. CALL CTA */}
        <a
          href="tel:9966731010"
          className="flex flex-col items-center justify-center gap-1 h-12 min-h-[44px] rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-ivory border border-white/15 transition-all text-center px-1 cursor-pointer"
          aria-label="Call Hotel Reception at 9966731010"
        >
          <Phone className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
          <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase">
            CALL
          </span>
        </a>

        {/* 2. WHATSAPP CTA */}
        <a
          href={`https://wa.me/${hotel.contact.whatsapp}?text=Hello%20Vikram%20Bliss%20Inn%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 h-12 min-h-[44px] rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white transition-all text-center px-1 shadow-md cursor-pointer"
          aria-label="Chat with Vikram Bliss Inn on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
          <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase">
            WHATSAPP
          </span>
        </a>

        {/* 3. BOOK NOW CTA */}
        <button
          type="button"
          onClick={() => openBookingModal()}
          className="flex flex-col items-center justify-center gap-1 h-12 min-h-[44px] rounded-xl bg-gold hover:bg-gold-light active:scale-95 text-black transition-all text-center px-1 shadow-gold font-sans font-bold cursor-pointer"
          aria-label="Book Your Stay - Open Reservation Enquiry Modal"
        >
          <CalendarDays className="w-4 h-4 text-black shrink-0" aria-hidden="true" />
          <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase">
            BOOK NOW
          </span>
        </button>
      </div>
    </div>
  );
}
