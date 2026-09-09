import type { Amenity } from "@/types";

export const amenities: Amenity[] = [
  {
    id: "ac-rooms",
    icon: "Snowflake",
    label: "AC Rooms",
    description: "Cool, comfortable rooms equipped with individual split air-conditioning.",
    category: "comfort",
  },
  {
    id: "non-ac-rooms",
    icon: "Wind",
    label: "Non-AC Rooms",
    description: "Clean, naturally ventilated rooms for a breezy and affordable stay.",
    category: "comfort",
  },
  {
    id: "suite-rooms",
    icon: "Sparkles",
    label: "Suite Rooms",
    description: "Spacious executive suites featuring king bed and designer interiors.",
    category: "comfort",
  },
  {
    id: "unlimited-wifi",
    icon: "Wifi",
    label: "Unlimited Wi-Fi",
    description: "High-speed internet connectivity across rooms and hotel premises.",
    category: "facilities",
  },
  {
    id: "led-tv",
    icon: "Tv",
    label: "LED TV",
    description: "Wall-mounted televisions with popular entertainment channels in every room.",
    category: "facilities",
  },
  {
    id: "hot-water",
    icon: "Droplets",
    label: "24/7 Hot Water",
    description: "Dedicated round-the-clock hot and cold water supply in attached bathrooms.",
    category: "comfort",
  },
  {
    id: "parking",
    icon: "Car",
    label: "Parking",
    description: "Convenient and secure on-site vehicle parking space for all staying guests.",
    category: "facilities",
  },
  {
    id: "function-hall",
    icon: "Users",
    label: "Function Hall",
    description: "Grand banquet hall accommodating 200+ guests for events and celebrations.",
    category: "facilities",
  },
];

export const amenitiesByCategory = {
  comfort: amenities.filter((a) => a.category === "comfort"),
  dining: [],
  facilities: amenities.filter((a) => a.category === "facilities"),
  services: [],
};
