export default function HotelJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness", "LocalBusiness"],
    "@id": "https://vikramblissinn.in/#hotel",
    name: "VIKRAM BLISS INN",
    alternateName: ["Vikram Bliss Inn", "Vikram Bliss Inn Kadiri"],
    description:
      "VIKRAM BLISS INN offers comfortable AC, Non-AC and Suite rooms in Kadiri, Andhra Pradesh, with Wi-Fi, LED TV, hot water, parking and function hall facilities.",
    url: "https://vikramblissinn.in",
    image: [
      "https://vikramblissinn.in/images/hotel/exterior.jpg",
      "https://vikramblissinn.in/images/hotel/exterior-night.jpg",
    ],
    telephone: ["+919966731010", "+919440222294"],
    email: "info@vikramblissinn.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Police Line, Christian Colony, Near Subjail",
      addressLocality: "Kadiri",
      postalCode: "515591",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.1167,
      longitude: 78.1579,
    },
    hasMap:
      "https://maps.google.com/?q=Vikram+Bliss+Inn+Christian+Colony+Near+Subjail+Kadiri+515591",
    priceRange: "₹1,300 - ₹20,000",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    checkinTime: "12:00:00",
    checkoutTime: "11:00:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free High-Speed Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Hot Water",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wall-Mounted LED TV",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Guest Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Function Hall",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Front Desk Assistance",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Generator Power Backup",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Lift Facility",
        value: true,
      },
    ],
    containsPlace: [
      {
        "@type": "HotelRoom",
        name: "Double Room (AC)",
        description:
          "A comfortable air-conditioned room designed for a relaxing stay with double bed, LED TV, and 24/7 hot water.",
        bed: {
          "@type": "BedDetails",
          numberOfBeds: 1,
          typeOfBed: "Double Bed",
        },
        offers: {
          "@type": "Offer",
          price: "1500",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://vikramblissinn.in/rooms/double-room",
        },
      },
      {
        "@type": "HotelRoom",
        name: "Non-AC Room",
        description:
          "A clean and comfortable two-bed option for guests looking for an affordable stay.",
        bed: {
          "@type": "BedDetails",
          numberOfBeds: 2,
          typeOfBed: "Double Bed and Single Bed",
        },
        offers: {
          "@type": "Offer",
          price: "1300",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://vikramblissinn.in/rooms/non-ac",
        },
      },
      {
        "@type": "HotelRoom",
        name: "Suite Room",
        description:
          "A spacious premium room for guests who want extra comfort and space with designer wood panels and king bed.",
        bed: {
          "@type": "BedDetails",
          numberOfBeds: 1,
          typeOfBed: "King Bed",
        },
        offers: {
          "@type": "Offer",
          price: "2500",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://vikramblissinn.in/rooms/suite",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
