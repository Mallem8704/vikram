import type { HotelInfo } from "@/types";

export const hotel: HotelInfo = {
  name: "Vikram Bliss Inn",
  tagline: "Good Stays, Brighter Days.",

  address: {
    street: "Christian Colony, Near Subjail, Police Line",
    city: "Kadiri",
    district: "Sri Sathya Sai Dist.",
    state: "Andhra Pradesh",
    pincode: "515 591",
    country: "India",
    fullAddress:
      "Vikram Bliss Inn, Christian Colony, Near Subjail, Police Line, Kadiri - 515 591, Sri Sathya Sai Dist., Andhra Pradesh, India",
  },

  contact: {
    phone: ["+91 99667 31010", "+91 94402 22294"],
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
      "https://maps.google.com/?q=Vikram+Bliss+Inn+Christian+Colony+Near+Subjail+Kadiri+515591",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15419.12345678!2d78.1579!3d14.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb54e2a6d3bffff%3A0x7f2c3e97d89e3f5e!2sKadiri%2C%20Andhra%20Pradesh%20515591!5e0!3m2!1sen!2sin!4v1234567890",
  },

  stats: {
    totalRooms: 24,
    yearsEstablished: 2010,
    functionHallCapacity: 200,
  },
};
