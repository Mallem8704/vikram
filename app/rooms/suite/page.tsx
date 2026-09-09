import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetail from "@/components/RoomDetail";
import { getRoomBySlug } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Suite Room",
  description:
    "Our premier Suite Room at Vikram Bliss Inn, Kadiri. King bed, designer false ceiling, wardrobe, vanity mirror, wall-mounted LED TV, and premium amenities. ₹2,500/night.",
};

export default function SuiteRoomPage() {
  const room = getRoomBySlug("suite");
  if (!room) return notFound();
  return <RoomDetail room={room} />;
}
