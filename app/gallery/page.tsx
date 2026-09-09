import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import BookingCTA from "@/components/BookingCTA";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Explore authentic real photographs of Vikram Bliss Inn in Kadiri, Andhra Pradesh. View our Double AC rooms, Non-AC rooms, Suite room, Grand Function Hall, and exterior building.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Banner */}
      <div className="pt-24 md:pt-32 pb-12 bg-black">
        <div className="section-container">
          <SectionHeading
            eyebrow="Visual Experience"
            title="Real Hotel Gallery"
            subtitle="Actual, unedited photographs of Vikram Bliss Inn property in Kadiri. Click any photo to inspect in high resolution."
            align="center"
            theme="dark"
          />
        </div>
      </div>

      {/* Reusable Filterable Gallery */}
      <Gallery
        preview={false}
        title="Explore Our Spaces"
        subtitle="Filter by category to view our rooms, building exterior, or function hall."
      />

      {/* Booking CTA */}
      <BookingCTA
        title="Ready to Experience Vikram Bliss Inn?"
        subtitle="Call us directly or send a message on WhatsApp to reserve your room or function hall in Kadiri."
        theme="dark"
      />
    </>
  );
}
