import AmenityCard from "@/components/AmenityCard";
import SectionHeading from "@/components/SectionHeading";
import { amenities } from "@/lib/data/amenities";

interface AmenitiesProps {
  /** Show all amenities or just a preview subset */
  preview?: boolean;
}

export default function Amenities({ preview = false }: AmenitiesProps) {
  const displayed = preview ? amenities.slice(0, 8) : amenities;

  return (
    <section id="amenities" className="section-padding bg-ivory scroll-mt-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="What We Offer"
          title="Hotel Amenities"
          subtitle="Everything you need for a comfortable, convenient, and pleasant stay — all under one roof."
          align="center"
          theme="light"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayed.map((amenity) => (
            <AmenityCard key={amenity.id} amenity={amenity} variant="default" theme="light" />
          ))}
        </div>
      </div>
    </section>
  );
}
