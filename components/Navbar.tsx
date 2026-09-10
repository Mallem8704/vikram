"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, Phone, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { hotel } from "@/lib/data/hotel";
import Logo from "@/components/Logo";
import { useBookingModal } from "@/context/BookingContext";

interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/#amenities", isAnchor: true },
  { label: "Function Hall", href: "/function-hall" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { openBookingModal } = useBookingModal();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isHomePage = pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hash change detection (for #amenities)
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setCurrentHash(window.location.hash);
  }, [pathname]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen]);

  // Helper to check active navigation state
  const isItemActive = (item: NavItem) => {
    if (item.isAnchor) {
      return currentHash === "#amenities" && pathname === "/";
    }
    if (item.href === "/") {
      return pathname === "/" && currentHash !== "#amenities";
    }
    return pathname.startsWith(item.href);
  };

  // Header background state
  const isTransparent = isHomePage && !isScrolled && !isMobileOpen;

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-gradient-to-b from-black/90 via-black/50 to-transparent md:bg-transparent py-3.5 md:py-5"
            : "bg-black/95 backdrop-blur-md shadow-card-dark border-b border-white/10 py-3 md:py-3.5"
        )}
      >
        <div className="section-container">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between h-12 md:h-14"
          >
            {/* LEFT: VB Logo + VIKRAM BLISS INN */}
            <div className="flex items-center shrink-0">
              <Logo isTransparent={isTransparent} />
            </div>

            {/* CENTER: Navigation Links (Desktop) */}
            <ul className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative px-3.5 py-2 text-sm font-sans font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                        active
                          ? "text-gold font-semibold"
                          : isTransparent
                          ? "text-ivory/80 hover:text-ivory hover:bg-white/5"
                          : "text-ivory/70 hover:text-gold hover:bg-white/5"
                      )}
                    >
                      {item.label}

                      {/* Gold active navigation indicator line */}
                      {active && (
                        <motion.span
                          layoutId={shouldReduceMotion ? undefined : "navbar-active-indicator"}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          aria-hidden="true"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-gold-sm"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* RIGHT: Book Your Stay CTA (Desktop) */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-black text-xs font-sans font-semibold tracking-wider uppercase rounded-lg hover:bg-gold-light hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
                aria-label="Book Your Stay at Vikram Bliss Inn"
              >
                <CalendarDays className="w-3.5 h-3.5 text-black" />
                <span>Book Your Stay</span>
                <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="h-10 min-h-[44px] px-3.5 bg-gold text-black text-xs font-sans font-semibold tracking-wider uppercase rounded-lg hover:bg-gold-light active:scale-95 transition-all cursor-pointer flex items-center justify-center shadow-sm"
                aria-label="Book Your Stay"
              >
                Book
              </button>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
                className={cn(
                  "h-11 w-11 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer",
                  isMobileOpen
                    ? "bg-white/10 text-gold border-gold/40"
                    : isTransparent
                    ? "bg-black/40 text-ivory border-white/20 hover:bg-white/10"
                    : "bg-white/5 text-ivory border-white/10 hover:bg-white/10"
                )}
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-Down / Full-Screen Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between pt-24 pb-8 px-5 sm:px-6 overflow-y-auto"
          >
            {/* Menu Navigation Links */}
            <div className="flex flex-col gap-1 overflow-y-auto my-auto py-2">
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-gold/80 mb-2 px-3">
                Navigation
              </p>

              <ul className="flex flex-col divide-y divide-white/5">
                {navItems.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between py-3.5 px-3 rounded-xl font-serif text-2xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                          active
                            ? "text-gold font-bold bg-white/5 pl-4"
                            : "text-ivory/80 hover:text-gold hover:pl-4 hover:bg-white/5"
                        )}
                      >
                        <span>{item.label}</span>
                        {active ? (
                          <span className="w-2 h-2 rounded-full bg-gold shadow-gold" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-ivory/30" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile Action Center & Quick Contact */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setIsMobileOpen(false);
                  openBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-gold text-black font-sans font-semibold text-xs tracking-wider uppercase rounded-lg shadow-sm hover:bg-gold-light active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
              >
                <CalendarDays className="w-4 h-4 text-black" />
                <span>Book Your Stay</span>
              </button>

              <a
                href={`tel:${hotel.contact.phone[0]}`}
                className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 text-ivory font-sans font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-white/5 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call: {hotel.contact.phone[0]}</span>
              </a>

              <p className="text-[11px] font-sans text-center text-ivory/50 mt-1">
                Police Line, Christian Colony, Near Subjail, Kadiri • 24/7 Front Desk
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
