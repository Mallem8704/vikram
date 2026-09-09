import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetail from "@/components/RoomDetail";
import { getRoomBySlug } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Non-AC Room",
  description:
    "Book the clean and affordable Non-AC Room (2 Beds) at VIKRAM BLISS INN, Kadiri. Ceiling fan, LED TV, and hot water at ₹1,300/night.",
  alternates: {
    canonical: "/rooms/non-ac",
  },
  openGraph: {
    title: "Non-AC Room | VIKRAM BLISS INN",
    description:
      "Affordable 2-bed Non-AC accommodation in Kadiri at ₹1,300/night.",
    url: "https://vikramblissinn.in/rooms/non-ac",
    images: ["/images/rooms/non-ac-1.jpg"],
  },
};

export default function NonACRoomPage() {
  const room = getRoomBySlug("non-ac");
  if (!room) return notFound();
  return <RoomDetail room={room} />;
}
