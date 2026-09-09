export interface ImageItem {
  src: string;
  alt: string;
  title: string;
}

export interface GalleryItemConfig extends ImageItem {
  id: string;
  category: "exterior" | "rooms" | "suites" | "hotel";
  categories: ("exterior" | "rooms" | "suites" | "hotel")[];
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
      alt: "Vikram Bliss Inn & Vikram Arcade daylight exterior building and entrance in Kadiri",
      title: "Building Exterior & Entrance",
      category: "exterior",
      categories: ["exterior", "hotel"],
      span: "tall",
    },
    {
      id: "gal-ext-2",
      src: "/images/gallery/exterior-night.jpg",
      alt: "Vikram Bliss Inn multi-storey building illuminated at dusk with signage",
      title: "Evening Illuminated Facade",
      category: "exterior",
      categories: ["exterior", "hotel"],
    },
    {
      id: "gal-suite-1",
      src: "/images/gallery/suite-swan-bed.jpg",
      alt: "Executive Suite king bed with decorative swan folded towels and designer wood-slat wall",
      title: "Suite Room — King Bed & Swan Welcome",
      category: "suites",
      categories: ["suites"],
      span: "wide",
    },
    {
      id: "gal-suite-2",
      src: "/images/gallery/suite-blue-bed.jpg",
      alt: "Executive Suite king bed angled view with royal blue runner",
      title: "Suite Room — Royal Blue Bed Setup",
      category: "suites",
      categories: ["suites"],
    },
    {
      id: "gal-suite-3",
      src: "/images/gallery/suite-wardrobe-accent.jpg",
      alt: "Executive Suite wardrobe, executive desk, chair, and designer false ceiling",
      title: "Suite Room — Wardrobe & Study Desk",
      category: "suites",
      categories: ["suites"],
    },
    {
      id: "gal-suite-4",
      src: "/images/rooms/suite-4.jpg",
      alt: "Executive Suite vanity dressing desk, large mirror, and wall-mounted TV",
      title: "Suite Room — Vanity Mirror & Wall TV",
      category: "suites",
      categories: ["suites"],
    },
    {
      id: "gal-double-1",
      src: "/images/gallery/double-ac-bed.jpg",
      alt: "Double Room (AC) master bed setup with wooden frame and grey runners",
      title: "Double Room (AC) — Master Bed Setup",
      category: "rooms",
      categories: ["rooms"],
    },
    {
      id: "gal-double-2",
      src: "/images/gallery/double-ac-tv-vanity.jpg",
      alt: "Double Room (AC) wall-mounted LED TV, vanity dressing mirror, and geometric wall pattern",
      title: "Double Room (AC) — LED TV & Dressing Mirror",
      category: "rooms",
      categories: ["rooms"],
    },
    {
      id: "gal-nonac-1",
      src: "/images/gallery/non-ac-twin-beds.jpg",
      alt: "Non-AC Room with two beds (1 double bed + 1 single bed) and emerald runners",
      title: "Non-AC Room — Two Beds Layout",
      category: "rooms",
      categories: ["rooms"],
    },
    {
      id: "gal-nonac-2",
      src: "/images/gallery/non-ac-window-desk.jpg",
      alt: "Non-AC Room window view, dual curtains, and executive desk chair",
      title: "Non-AC Room — Window Seating & Desk",
      category: "rooms",
      categories: ["rooms"],
    },
    {
      id: "gal-nonac-3",
      src: "/images/gallery/non-ac-bedside.jpg",
      alt: "Non-AC Room bedside nightstand with intercom telephone",
      title: "Non-AC Room — Bedside Intercom Phone",
      category: "rooms",
      categories: ["rooms"],
    },
    {
      id: "gal-hall-1",
      src: "/images/gallery/function-hall.jpg",
      alt: "Vikram Bliss Inn Grand Function Hall with banquet seating and cove lighting",
      title: "Grand Function Hall",
      category: "hotel",
      categories: ["hotel"],
      span: "wide",
    },
  ],
};
