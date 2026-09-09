import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";
import BookingModal from "@/components/BookingModal";
import { BookingProvider } from "@/context/BookingContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vikram Bliss Inn | Premium Hotel in Kadiri, Andhra Pradesh",
    template: "%s | Vikram Bliss Inn",
  },
  description:
    "Vikram Bliss Inn is a premium boutique hotel in Kadiri, Andhra Pradesh. Offering comfortable AC & Non-AC rooms, an Executive Suite, and a Function Hall for events. Book your stay today.",
  keywords: [
    "hotel in Kadiri",
    "Kadiri hotel",
    "Vikram Bliss Inn",
    "hotel Ananthapuram",
    "lodging Kadiri",
    "rooms Kadiri Andhra Pradesh",
    "function hall Kadiri",
    "hotel near Kodandarama Swamy Temple",
  ],
  openGraph: {
    title: "Vikram Bliss Inn | Premium Hotel in Kadiri, Andhra Pradesh",
    description:
      "Comfortable rooms, warm hospitality, and a central location in Kadiri. Your trusted home away from home.",
    type: "website",
    locale: "en_IN",
    siteName: "Vikram Bliss Inn",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
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
