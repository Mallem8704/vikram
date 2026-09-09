import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetail from "@/components/RoomDetail";
import { getRoomBySlug } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Double Room (AC)",
  description:
    "Book the Double Room (AC) at Vikram Bliss Inn, Kadiri. Modern, air-conditioned, with wall-mounted LED TV, Wi-Fi, 24-hr hot water, and daily housekeeping. ₹1,500/night.",
};

export default function DoubleRoomPage() {
  const room = getRoomBySlug("double-room");
  if (!room) return notFound();
  return <RoomDetail room={room} />;
}
