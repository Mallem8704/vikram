// ─── Room Types ────────────────────────────────────────────────────────────

export interface RoomFeature {
  label: string;
  value: string;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  pricePerNight: number;
  originalPrice?: number;
  maxOccupancy: number;
  sizeSqFt: number;
  bedType: string;
  features: RoomFeature[];
  amenities: string[];
  images: RoomImage[];
  badge?: string;
  isAC: boolean;
}

export interface RoomImage {
  src: string;
  alt: string;
  isPlaceholder?: boolean;
}

// ─── Amenity Types ─────────────────────────────────────────────────────────

export interface Amenity {
  id: string;
  icon: string; // Lucide icon name
  label: string;
  description: string;
  category: "comfort" | "dining" | "facilities" | "services";
}

// ─── Hotel Info Types ───────────────────────────────────────────────────────

export interface HotelInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
  };
  contact: {
    phone: string[];
    whatsapp: string;
    email: string;
  };
  timings: {
    checkIn: string;
    checkOut: string;
    receptionHours: string;
  };
  social: {
    googleMapsUrl: string;
    googleMapsEmbed: string;
  };
  stats: {
    totalRooms: number;
    yearsEstablished: number;
    functionHallCapacity: number;
  };
}

// ─── Gallery Types ─────────────────────────────────────────────────────────

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "rooms" | "lobby" | "dining" | "exterior" | "function-hall";
  isPlaceholder?: boolean;
}

// ─── Function Hall Types ────────────────────────────────────────────────────

export interface FunctionHallInfo {
  name: string;
  description: string;
  capacity: number;
  area: string;
  occasions: string[];
  features: string[];
  images: RoomImage[];
}

// ─── Navigation Types ───────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}
