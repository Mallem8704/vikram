import type { Room } from "@/types";
import { hotelImages } from "./images";

export const rooms: Room[] = [
  {
    id: "double-room",
    slug: "double-room",
    name: "Double Room (AC)",
    tagline: "Comfortable. Modern. Relaxing.",
    description:
      "Our Double Room (AC) offers a clean, modern aesthetic with air-conditioning, a comfortable double bed, fresh linens, flat-screen LED TV, and an attached private bathroom.",
    longDescription:
      "Designed for travellers, couples, and professionals visiting Kadiri, our Double Room (AC) features a sturdy polished wooden double bed, quality white linens, grey accent runner, and climate-controlled air conditioning. The room includes bedside charging stations, intercom telephone, a wall-mounted LED television, vanity mirror with dressing ledge, and an attached private bathroom with 24-hour hot water. Daily housekeeping ensures spotless hygiene throughout your stay.",
    pricePerNight: 1500,
    originalPrice: 1800,
    maxOccupancy: 2,
    sizeSqFt: 220,
    bedType: "1 Double Bed",
    isAC: true,
    badge: "Popular Choice",
    features: [
      { label: "Bed Type", value: "1 Double Bed" },
      { label: "Room Size", value: "220 sq ft" },
      { label: "Max Occupancy", value: "2 Guests" },
      { label: "Climate", value: "Split Air Conditioning" },
      { label: "Entertainment", value: "Wall-mounted LED TV" },
      { label: "Bathroom", value: "Attached Private Bathroom" },
    ],
    amenities: [
      "Air Conditioning",
      "Wall-mounted LED TV",
      "Complimentary High-Speed Wi-Fi",
      "24-Hour Hot Water Supply",
      "Daily Housekeeping",
      "Intercom Telephone",
      "Dressing Table & Mirror",
      "Power Backup",
      "24/7 Front Desk Assistance",
      "Lift Facility Access",
    ],
    images: hotelImages.rooms.doubleRoomAc.map((img) => ({
      src: img.src,
      alt: img.alt,
      isPlaceholder: false,
    })),
  },
  {
    id: "non-ac",
    slug: "non-ac",
    name: "Non-AC Room (2 Beds)",
    tagline: "Simple. Clean. Affordable.",
    description:
      "Ideal for families, friends, or pilgrims visiting Kadiri together. Equipped with two separate beds (one double bed + one single bed), ceiling fan, and attached bathroom.",
    longDescription:
      "Our Non-AC Room (2 Beds) is specially designed for family travellers and groups of pilgrims visiting Sri Lakshmi Narasimha Swamy / Kodandarama Swamy Temple in Kadiri. The room features a spacious double bed plus an additional single bed, comfortable mattresses with crisp white sheets and emerald green runners. The room is naturally ventilated with a high-speed ceiling fan, large window with double curtains, bedside intercom telephone, and a clean attached bathroom with hot water supply. Excellent value without compromising on cleanliness.",
    pricePerNight: 1300,
    maxOccupancy: 3,
    sizeSqFt: 260,
    bedType: "2 Beds (1 Double + 1 Single)",
    isAC: false,
    features: [
      { label: "Bed Setup", value: "1 Double Bed + 1 Single Bed" },
      { label: "Room Size", value: "260 sq ft" },
      { label: "Max Occupancy", value: "3 Guests" },
      { label: "Ventilation", value: "Ceiling Fan & Natural Airflow" },
      { label: "Bathroom", value: "Attached Clean Bathroom" },
      { label: "Seating", value: "Work / Side Chair & Desk" },
    ],
    amenities: [
      "2 Comfortable Beds",
      "High-Speed Ceiling Fan",
      "Attached Bathroom with Hot Water",
      "Daily Clean Linen & Housekeeping",
      "Complimentary Wi-Fi",
      "Intercom Telephone",
      "Power Backup",
      "Large Window with Curtains",
      "24/7 Front Desk Assistance",
      "Ample Parking",
    ],
    images: hotelImages.rooms.nonAc.map((img) => ({
      src: img.src,
      alt: img.alt,
      isPlaceholder: false,
    })),
  },
  {
    id: "suite",
    slug: "suite",
    name: "Suite Room",
    tagline: "Spacious. Premium. A Better Experience.",
    description:
      "Our premier accommodation featuring a king-size bed with decorative finish, false ceiling with ambient cove lighting, wooden wardrobe, vanity table, and wall-mounted LED TV.",
    longDescription:
      "The Suite Room at Vikram Bliss Inn delivers the highest level of comfort on the property. Featuring a designer king-size bed with royal blue accent runners, designer wooden panel wall decor, false ceiling with recessed mood lighting, and modern split air conditioning. The suite includes an expansive wooden wardrobe, dedicated study/work desk with chair, full-length vanity mirror, flat-screen LED TV with satellite channels, and a spacious en-suite bathroom with 24-hour hot water and premium toiletries. Perfect for families, wedding parties, and guests desiring extra comfort and space in Kadiri.",
    pricePerNight: 2500,
    originalPrice: 3000,
    maxOccupancy: 3,
    sizeSqFt: 340,
    bedType: "King Bed",
    isAC: true,
    badge: "Executive Choice",
    features: [
      { label: "Bed Type", value: "King Size Bed" },
      { label: "Room Size", value: "340 sq ft" },
      { label: "Max Occupancy", value: "3 Guests" },
      { label: "Interior", value: "Designer Wood Accent Wall & False Ceiling" },
      { label: "Climate", value: "Premium Air Conditioning" },
      { label: "Furnishings", value: "Wardrobe, Work Desk, Dressing Mirror" },
    ],
    amenities: [
      "Premium Air Conditioning",
      "King Size Bed",
      "Designer False Ceiling & Ambient Lighting",
      "Wall-Mounted Flat-Screen LED TV",
      "Complimentary High-Speed Wi-Fi",
      "Large Wooden Wardrobe & Storage",
      "Vanity Dressing Table with Mirror",
      "Work Desk & Chair",
      "24-Hour Hot Water Supply",
      "Daily Housekeeping & Fresh Linens",
      "24/7 Front Desk Assistance",
      "Lift Facility Access",
    ],
    images: hotelImages.rooms.suite.map((img) => ({
      src: img.src,
      alt: img.alt,
      isPlaceholder: false,
    })),
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}
