import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Gallery from "@/components/Gallery";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Explore authentic photographs of VIKRAM BLISS INN in Kadiri, Andhra Pradesh. View real photos of our exterior, Double AC rooms, Non-AC rooms, Suite rooms, and Function Hall.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photo Gallery | VIKRAM BLISS INN",
    description:
      "Authentic photos of VIKRAM BLISS INN hotel exterior, rooms, suites, and function hall in Kadiri.",
    url: "https://vikramblissinn.in/gallery",
    images: ["/images/hotel/exterior.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-[#0c0c0c] text-ivory min-h-screen pt-20 md:pt-24">
      {/* ──────────────── 1. Breadcrumb ──────────────── */}
      <div className="border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="section-container py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-ivory/60">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-ivory/30" />
            <span className="text-gold font-medium" aria-current="page">
              Gallery
            </span>
          </nav>
        </div>
      </div>

      {/* ──────────────── 2. Filterable Portfolio Gallery Component ──────────────── */}
      <Gallery
        as="h1"
        preview={false}
        title="Hotel Photography Portfolio"
        subtitle="Filter by category to view our building exterior, double & non-AC rooms, executive suites, or function hall."
      />

      {/* ──────────────── 3. Booking CTA ──────────────── */}
      <BookingCTA
        title="Ready to Experience Vikram Bliss Inn?"
        subtitle="Connect directly with our 24-hour reception or send an enquiry on WhatsApp to check room availability."
        theme="dark"
      />
    </div>
  );
}
