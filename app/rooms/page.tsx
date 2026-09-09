import type { Metadata } from "next";
import RoomGrid from "@/components/RoomGrid";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";
import Amenities from "@/components/Amenities";
import { rooms } from "@/lib/data/rooms";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Rooms",
  description:
    "Explore our range of rooms at Vikram Bliss Inn — Deluxe Double AC, Standard Non-AC, and Executive Suite. Book the room that fits your needs and budget.",
};

const whyChooseUs = [
  "Daily housekeeping and fresh linen",
  "24-hour hot and cold water",
  "Power backup throughout the night",
  "In-house restaurant with Andhra cuisine",
  "Convenient location near Kadiri bus stand",
  "Genuine, friendly hospitality",
];

export default function RoomsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 md:pt-32 pb-12 bg-black">
        <div className="section-container">
          <SectionHeading
            eyebrow="Accommodation"
            title="Our Rooms & Suites"
            subtitle="We offer a range of well-maintained rooms designed to ensure a comfortable and restful stay — at every budget."
            align="center"
            theme="dark"
          />
        </div>
      </div>

      {/* Rooms Grid */}
      <section className="section-padding bg-ivory">
        <div className="section-container">
          <RoomGrid rooms={rooms} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-ivory-dark">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Why Stay With Us"
                title="What Every Room Includes"
                align="left"
                theme="light"
                className="mb-6"
              />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm font-sans text-brown-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brown rounded-2xl p-8 text-ivory">
              <p className="font-serif text-2xl text-gold italic mb-3">
                &ldquo;A clean room, a warm meal, and a helpful team — that&apos;s the Vikram Bliss Inn promise.&rdquo;
              </p>
              <p className="text-sm font-sans text-ivory/50">
                — The Vikram Bliss Inn Team, Kadiri
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm font-sans text-ivory/60 leading-relaxed">
                  Whether you&apos;re here for a day or a week, on pilgrimage or on
                  business — we treat every guest with the same care and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <Amenities />

      {/* Booking CTA */}
      <BookingCTA theme="dark" />
    </>
  );
}
