export interface ImageItem {
  src: string;
  alt: string;
  title: string;
}

export interface GalleryItemConfig extends ImageItem {
  id: string;
  category: "exterior" | "rooms" | "function-hall";
  span?: "wide" | "tall";
}

export interface HotelImagesConfig {
  exterior: {
    hero: string;
    heroNight: string;
    alt: string;
  };
  functionHall: {
    main: string;
    alt: string;
  };
  rooms: {
    doubleRoomAc: ImageItem[];
    nonAc: ImageItem[];
    suite: ImageItem[];
  };
  gallery: GalleryItemConfig[];
}

export const hotelImages: HotelImagesConfig = {
  exterior: {
    hero: "/images/hotel/exterior.jpg",
    heroNight: "/images/hotel/exterior-night.jpg",
    alt: "Vikram Bliss Inn & Vikram Arcade multi-storey building exterior in Kadiri",
  },

  functionHall: {
    main: "/images/hotel/function-hall.jpg",
    alt: "Vikram Bliss Inn Grand Function Hall with banquet seating and stage lighting",
  },

  rooms: {
    doubleRoomAc: [
      {
        src: "/images/rooms/double-ac-1.jpg",
        alt: "Deluxe Double AC Room with polished wooden bed and grey cushions",
        title: "Deluxe Double Bed",
      },
      {
        src: "/images/rooms/double-ac-2.jpg",
        alt: "Deluxe Double AC Room with wall-mounted flat-screen TV and vanity mirror",
        title: "LED TV & Vanity Table",
      },
    ],
    nonAc: [
      {
        src: "/images/rooms/non-ac-1.jpg",
        alt: "Standard Non-AC Room with two comfortable beds and emerald green runners",
        title: "Two-Bed Setup (Double + Single)",
      },
      {
        src: "/images/rooms/non-ac-2.jpg",
        alt: "Standard Non-AC Room window view, dual curtains, and study chair",
        title: "Window & Seating",
      },
      {
        src: "/images/rooms/non-ac-3.jpg",
        alt: "Standard Non-AC Room bedside table with telephone intercom",
        title: "Bedside Amenities & Intercom",
      },
    ],
    suite: [
      {
        src: "/images/rooms/suite-1.jpg",
        alt: "Executive Suite king bed with decorative swan folded towels and striped wood accent wall",
        title: "King Bed with Swan Decor",
      },
      {
        src: "/images/rooms/suite-2.jpg",
        alt: "Executive Suite king bed with royal blue cushions and quilted runner",
        title: "King Bed Angled View",
      },
      {
        src: "/images/rooms/suite-3.jpg",
        alt: "Executive Suite wooden wardrobe, study table, and designer ceiling fan",
        title: "Wardrobe & Workspace",
      },
      {
        src: "/images/rooms/suite-4.jpg",
        alt: "Executive Suite vanity dressing desk, large mirror, and wall-mounted TV",
        title: "Dressing Mirror & Television",
      },
    ],
  },

  gallery: [
    {
      id: "gal-ext-1",
      src: "/images/gallery/exterior-day.jpg",
      alt: "Vikram Bliss Inn hotel building exterior with Vikram Arcade facade and entrance",
      title: "Hotel Building & Entrance",
      category: "exterior",
      span: "tall",
    },
    {
      id: "gal-suite-1",
      src: "/images/gallery/suite-swan-bed.jpg",
      alt: "Executive Suite with swan towel arrangement and designer striped wall",
      title: "Executive Suite - Swan Towel Welcome",
      category: "rooms",
      span: "wide",
    },
    {
      id: "gal-double-1",
      src: "/images/gallery/double-ac-bed.jpg",
      alt: "Deluxe Double AC Room with plush wooden bed and grey runners",
      title: "Deluxe Double AC Bed",
      category: "rooms",
    },
    {
      id: "gal-nonac-1",
      src: "/images/gallery/non-ac-twin-beds.jpg",
      alt: "Standard Non-AC 2-Beds Room with green runners and granite platform",
      title: "Standard Non-AC (Double + Single Bed)",
      category: "rooms",
    },
    {
      id: "gal-hall-1",
      src: "/images/gallery/function-hall.jpg",
      alt: "Grand Function Hall with banquet seating for 200+ guests",
      title: "Grand Function Hall (200+ Guests)",
      category: "function-hall",
      span: "wide",
    },
    {
      id: "gal-suite-2",
      src: "/images/gallery/suite-blue-bed.jpg",
      alt: "Executive Suite angled bed view with royal blue cushions",
      title: "Executive Suite Bed View",
      category: "rooms",
    },
    {
      id: "gal-suite-3",
      src: "/images/gallery/suite-wardrobe-accent.jpg",
      alt: "Executive Suite wardrobe, desk, chair, and designer false ceiling",
      title: "Suite Wardrobe & Workspace",
      category: "rooms",
    },
    {
      id: "gal-double-2",
      src: "/images/gallery/double-ac-tv-vanity.jpg",
      alt: "Deluxe Room LED TV, vanity mirror and geometric wall pattern",
      title: "LED TV & Dressing Mirror",
      category: "rooms",
    },
    {
      id: "gal-nonac-2",
      src: "/images/gallery/non-ac-window-desk.jpg",
      alt: "Non-AC room window view and executive desk chair",
      title: "Non-AC Room Window & Chair",
      category: "rooms",
    },
    {
      id: "gal-nonac-3",
      src: "/images/gallery/non-ac-bedside.jpg",
      alt: "Non-AC bedside table with intercom telephone",
      title: "Bedside Phone & Nightstand",
      category: "rooms",
    },
    {
      id: "gal-ext-2",
      src: "/images/gallery/exterior-night.jpg",
      alt: "Vikram Bliss Inn building at dusk with illuminated signage",
      title: "Vikram Bliss Inn Dusk Illumination",
      category: "exterior",
    },
  ],
};
