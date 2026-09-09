"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { hotel } from "@/lib/data/hotel";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Function Hall", href: "/function-hall" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // On homepage: transparent at top, solid on scroll
  // On other pages: always solid
  const isTransparent = isHomePage && !isScrolled && !isMobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-transparent"
            : "bg-black/95 backdrop-blur-sm shadow-card-dark border-b border-white/5"
        )}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={cn(
                  "font-serif font-semibold text-xl md:text-2xl tracking-wide transition-colors",
                  isTransparent ? "text-ivory" : "text-gold"
                )}
              >
                Vikram Bliss Inn
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-[0.2em] uppercase font-sans transition-colors",
                  isTransparent ? "text-ivory/60" : "text-ivory/40"
                )}
              >
                Kadiri, Andhra Pradesh
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-sans font-medium tracking-wide transition-colors duration-200 relative group",
                    pathname === link.href
                      ? "text-gold"
                      : isTransparent
                      ? "text-ivory/80 hover:text-ivory"
                      : "text-ivory/70 hover:text-gold"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${hotel.contact.phone[0]}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-sans font-medium transition-colors",
                  isTransparent ? "text-ivory/70 hover:text-gold" : "text-ivory/60 hover:text-gold"
                )}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{hotel.contact.phone[0]}</span>
              </a>
              <Link
                href={`https://wa.me/${hotel.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gold text-black text-sm font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors duration-200"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                isTransparent ? "text-ivory" : "text-ivory"
              )}
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/98 flex flex-col pt-20 pb-24 transition-all duration-300 md:hidden",
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="section-container flex flex-col gap-2 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-4 px-4 font-serif text-2xl border-b border-white/5 transition-colors",
                pathname === link.href ? "text-gold" : "text-ivory/80 hover:text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="section-container mt-8 flex flex-col gap-3">
          <a
            href={`tel:${hotel.contact.phone[0]}`}
            className="flex items-center gap-3 py-3 text-ivory/60 font-sans"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>{hotel.contact.phone[0]}</span>
          </a>
          <Link
            href={`https://wa.me/${hotel.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-gold text-black text-center font-sans font-semibold rounded-xl text-lg"
          >
            Book on WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
}
