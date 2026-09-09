import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetail from "@/components/RoomDetail";
import { getRoomBySlug } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Non-AC Room (2 Beds)",
  description:
    "Affordable and clean Non-AC Room (2 Beds - 1 Double + 1 Single) at Vikram Bliss Inn, Kadiri. Well-ventilated, with attached bathroom and daily housekeeping. ₹1,300/night.",
};

export default function NonACRoomPage() {
  const room = getRoomBySlug("non-ac");
  if (!room) return notFound();
  return <RoomDetail room={room} />;
}
