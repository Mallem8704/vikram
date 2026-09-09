"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, BedDouble, Building2, Sun, X, Maximize2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { hotelImages, type GalleryItemConfig } from "@/lib/data/images";

const galleryCategories = [
  { id: "all", label: "All Photos", icon: Images },
  { id: "rooms", label: "Rooms & Suites", icon: BedDouble },
  { id: "exterior", label: "Hotel Building", icon: Sun },
  { id: "function-hall", label: "Function Hall", icon: Building2 },
];

interface GalleryProps {
  preview?: boolean;
  title?: string;
  subtitle?: string;
}

export default function Gallery({
  preview = false,
  title = "Hotel Photo Gallery",
  subtitle = "Real, authentic photographs of Vikram Bliss Inn — including our rooms, function hall, and building facade in Kadiri.",
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeModalImage, setActiveModalImage] = useState<GalleryItemConfig | null>(null);

  const items = hotelImages.gallery;

  const filtered =
    activeCategory === "all"
      ? preview
        ? items.slice(0, 6)
        : items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className="section-padding bg-ivory-dark">
      <div className="section-container">
        <SectionHeading
          eyebrow="Visual Tour"
          title={title}
          subtitle={subtitle}
          align="center"
          theme="light"
          className="mb-8"
        />

        {/* Category Filters */}
        {!preview && (
          <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
            {galleryCategories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all duration-200",
                  activeCategory === id
                    ? "bg-gold text-black shadow-gold scale-105"
                    : "bg-white border border-ivory-muted text-brown hover:border-gold/60 hover:text-gold-dark"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[220px]">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className={cn(
                "relative rounded-2xl overflow-hidden group cursor-pointer border border-ivory-muted shadow-card hover:shadow-card-hover transition-all bg-brown-light",
                item.span === "wide" && "sm:col-span-2",
                item.span === "tall" && "sm:row-span-2"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Zoom icon hint */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-gold">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[10px] font-sans uppercase tracking-widest text-gold font-semibold mb-1">
                  {item.category.replace("-", " ")}
                </p>
                <h4 className="text-ivory text-sm sm:text-base font-serif font-bold leading-snug drop-shadow-sm">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalImage(null)}
              aria-label="Close image preview"
              className="absolute -top-12 right-0 p-2 text-ivory/70 hover:text-gold transition-colors"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border border-gold/40 shadow-2xl bg-black">
              <Image
                src={activeModalImage.src}
                alt={activeModalImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 85vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-3 text-center">
              <h3 className="font-serif text-lg text-ivory font-bold">
                {activeModalImage.title}
              </h3>
              <p className="text-xs font-sans text-ivory/60 mt-1">
                {activeModalImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
