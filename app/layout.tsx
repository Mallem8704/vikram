import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";
import { BookingProvider } from "@/context/BookingContext";
import HotelJsonLd from "@/components/seo/HotelJsonLd";

// Defer non-critical heavy booking modal from initial page bundle
const BookingModal = dynamic(() => import("@/components/BookingModal"));

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vikramblissinn.in"),
  title: {
    default: "VIKRAM BLISS INN | Comfortable Stay in Kadiri",
    template: "%s | VIKRAM BLISS INN",
  },
  description:
    "VIKRAM BLISS INN offers comfortable AC, Non-AC and Suite rooms in Kadiri, Andhra Pradesh, with Wi-Fi, LED TV, hot water, parking and function hall facilities.",
  keywords: [
    "VIKRAM BLISS INN",
    "hotel in Kadiri",
    "Kadiri hotel",
    "rooms in Kadiri",
    "AC rooms Kadiri",
    "Non-AC rooms Kadiri",
    "Suite room Kadiri",
    "function hall Kadiri",
    "hotel near Kodandarama Swamy Temple",
    "lodging in Kadiri",
    "Kadiri Andhra Pradesh stay",
    "Sri Sathya Sai district hotel",
  ],
  authors: [{ name: "VIKRAM BLISS INN" }],
  creator: "VIKRAM BLISS INN",
  publisher: "VIKRAM BLISS INN",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VIKRAM BLISS INN | Comfortable Stay in Kadiri",
    description:
      "VIKRAM BLISS INN offers comfortable AC, Non-AC and Suite rooms in Kadiri, Andhra Pradesh, with Wi-Fi, LED TV, hot water, parking and function hall facilities.",
    url: "https://vikramblissinn.in",
    siteName: "VIKRAM BLISS INN",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hotel/exterior.jpg",
        width: 1200,
        height: 630,
        alt: "VIKRAM BLISS INN - Hotel Exterior in Kadiri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIKRAM BLISS INN | Comfortable Stay in Kadiri",
    description:
      "VIKRAM BLISS INN offers comfortable AC, Non-AC and Suite rooms in Kadiri, Andhra Pradesh, with Wi-Fi, LED TV, hot water, parking and function hall facilities.",
    images: ["/images/hotel/exterior.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <HotelJsonLd />
      </head>
      <body className="font-sans bg-ivory text-black antialiased">
        <BookingProvider>
          <Navbar />
          <main className="min-h-screen pb-16 sm:pb-20 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileBottomBar />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
