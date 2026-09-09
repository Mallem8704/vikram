import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetail from "@/components/RoomDetail";
import { getRoomBySlug } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Suite Room",
  description:
    "Spacious Suite Room at VIKRAM BLISS INN, Kadiri. King bed, designer false ceiling, split AC, wardrobe, vanity mirror, and LED TV at ₹2,500/night.",
  alternates: {
    canonical: "/rooms/suite",
  },
  openGraph: {
    title: "Suite Room | VIKRAM BLISS INN",
    description:
      "Spacious premium suite room in Kadiri at ₹2,500/night.",
    url: "https://vikramblissinn.in/rooms/suite",
    images: ["/images/rooms/suite-1.jpg"],
  },
};

export default function SuiteRoomPage() {
  const room = getRoomBySlug("suite");
  if (!room) return notFound();
  return <RoomDetail room={room} />;
}
