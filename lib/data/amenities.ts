import type { Amenity } from "@/types";

export const amenities: Amenity[] = [
  {
    id: "ac",
    icon: "Wind",
    label: "Air Conditioning",
    description: "Individual temperature control in all AC rooms for maximum comfort.",
    category: "comfort",
  },
  {
    id: "wifi",
    icon: "Wifi",
    label: "Free Wi-Fi",
    description: "Complimentary high-speed internet access throughout the property.",
    category: "facilities",
  },
  {
    id: "parking",
    icon: "Car",
    label: "Free Parking",
    description: "Secure on-site parking available for all registered guests at no charge.",
    category: "facilities",
  },
  {
    id: "hotwater",
    icon: "Droplets",
    label: "24-Hr Hot Water",
    description: "Round-the-clock hot and cold water supply in all rooms.",
    category: "comfort",
  },
  {
    id: "roomservice",
    icon: "UtensilsCrossed",
    label: "Room Service",
    description: "In-room dining with a selection of vegetarian and non-vegetarian meals.",
    category: "dining",
  },
  {
    id: "restaurant",
    icon: "Coffee",
    label: "In-House Restaurant",
    description: "Our restaurant serves authentic Andhra cuisine and South Indian breakfast.",
    category: "dining",
  },
  {
    id: "power",
    icon: "Zap",
    label: "Power Backup",
    description: "Uninterrupted power supply with generator backup for essential services.",
    category: "facilities",
  },
  {
    id: "reception",
    icon: "Clock",
    label: "24-Hr Reception",
    description: "Our front desk is staffed around the clock to assist you at any hour.",
    category: "services",
  },
  {
    id: "housekeeping",
    icon: "Sparkles",
    label: "Daily Housekeeping",
    description: "Professional housekeeping services provided every day for all rooms.",
    category: "services",
  },
  {
    id: "laundry",
    icon: "WashingMachine",
    label: "Laundry Service",
    description: "On-request laundry and ironing service with quick turnaround.",
    category: "services",
  },
  {
    id: "cctv",
    icon: "Shield",
    label: "CCTV Security",
    description: "24-hour CCTV surveillance ensuring safety and security on all premises.",
    category: "facilities",
  },
  {
    id: "travel",
    icon: "MapPin",
    label: "Travel Assistance",
    description: "Local sightseeing guidance, cab arrangements, and travel tips from our staff.",
    category: "services",
  },
];

export const amenitiesByCategory = {
  comfort: amenities.filter((a) => a.category === "comfort"),
  dining: amenities.filter((a) => a.category === "dining"),
  facilities: amenities.filter((a) => a.category === "facilities"),
  services: amenities.filter((a) => a.category === "services"),
};
