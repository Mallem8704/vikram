import type { HotelInfo } from "@/types";

export const hotel: HotelInfo = {
  name: "VIKRAM BLISS INN",
  tagline: "Good Stays, Brighter Days.",

  address: {
    street: "Police Line, Christian Colony, Near Subjail",
    city: "Kadiri",
    district: "Sri Sathya Sai District",
    state: "Andhra Pradesh",
    pincode: "515591",
    country: "India",
    fullAddress:
      "VIKRAM BLISS INN, Police Line, Christian Colony, Near Subjail, Kadiri – 515591, Sri Sathya Sai District, Andhra Pradesh, India",
  },

  contact: {
    phone: ["9966731010", "9440222294"],
    whatsapp: "919966731010",
    email: "info@vikramblissinn.in",
  },

  timings: {
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    receptionHours: "24 Hours (24/7 Assistance)",
  },

  social: {
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vikram+Bliss+Inn+Christian+Colony+Near+Subjail+Kadiri+515591",
    googleMapsEmbed:
      "https://maps.google.com/maps?q=Vikram+Bliss+Inn+Christian+Colony+Near+Subjail+Kadiri+515591&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
};
