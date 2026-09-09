import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetail from "@/components/RoomDetail";
import { getRoomBySlug } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Double Room (AC)",
  description:
    "Book the Double Room (AC) at VIKRAM BLISS INN, Kadiri. Air-conditioned room with double bed, LED TV, hot water, and Wi-Fi at ₹1,500/night.",
  alternates: {
    canonical: "/rooms/double-room",
  },
  openGraph: {
    title: "Double Room (AC) | VIKRAM BLISS INN",
    description:
      "Comfortable air-conditioned double room in Kadiri at ₹1,500/night.",
    url: "https://vikramblissinn.in/rooms/double-room",
    images: ["/images/rooms/double-ac-1.jpg"],
  },
};

export default function DoubleRoomPage() {
  const room = getRoomBySlug("double-room");
  if (!room) return notFound();
  return <RoomDetail room={room} />;
}
