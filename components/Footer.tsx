import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { hotel } from "@/lib/data/hotel";

const footerLinks = [
  {
    heading: "Rooms",
    links: [
      { label: "Double Room (AC)", href: "/rooms/double-room" },
      { label: "Non-AC Room (2 Beds)", href: "/rooms/non-ac" },
      { label: "Suite Room", href: "/rooms/suite" },
      { label: "All Rooms", href: "/rooms" },
    ],
  },
  {
    heading: "Hotel",
    links: [
      { label: "Function Hall", href: "/function-hall" },
      { label: "Gallery", href: "/gallery" },
      { label: "Location & Directions", href: "/location" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown text-ivory/80">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <h3 className="font-serif text-2xl text-gold font-semibold leading-none">
                Vikram Bliss Inn
              </h3>
              <p className="text-xs tracking-[0.18em] uppercase text-ivory/40 mt-1 font-sans">
                Kadiri, Andhra Pradesh
              </p>
            </Link>
            <span className="gold-divider" />
            <p className="text-sm font-sans text-ivory/60 leading-relaxed mt-3">
              A premium boutique hotel in the heart of Kadiri, offering warm
              hospitality, comfortable rooms, and a convenient location for
              pilgrims and travellers alike.
            </p>
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${hotel.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-lg text-sm font-sans font-medium hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-serif text-lg text-ivory font-semibold mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-sans text-ivory/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg text-ivory font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <p className="text-sm font-sans text-ivory/60 leading-relaxed">
                  {hotel.address.fullAddress}
                </p>
              </li>
              {hotel.contact.phone.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-sm font-sans text-ivory/60 hover:text-gold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${hotel.contact.email}`}
                  className="flex items-center gap-3 text-sm font-sans text-ivory/60 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  {hotel.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-sans text-ivory/60">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>
                  Check-in: {hotel.timings.checkIn} &nbsp;|&nbsp; Out: {hotel.timings.checkOut}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs font-sans text-ivory/30 text-center md:text-left">
            &copy; {currentYear} Vikram Bliss Inn. All rights reserved. &nbsp;|&nbsp; Kadiri,
            Andhra Pradesh
          </p>
          <p className="text-xs font-sans text-ivory/20 text-center">
            Proud to serve pilgrims visiting Sri Kodandarama Swamy Temple, Kadiri
          </p>
        </div>
      </div>
    </footer>
  );
}
