"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Images,
  Building,
  BedDouble,
  Sparkles,
  Hotel,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/MotionWrapper";
import { cn } from "@/lib/utils";
import { hotelImages, type GalleryItemConfig } from "@/lib/data/images";

export type GalleryCategoryId = "all" | "exterior" | "rooms" | "suites" | "hotel";

interface CategoryTab {
  id: GalleryCategoryId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: CategoryTab[] = [
  { id: "all", label: "All", icon: Images },
  { id: "exterior", label: "Exterior", icon: Building },
  { id: "rooms", label: "Rooms", icon: BedDouble },
  { id: "suites", label: "Suites", icon: Sparkles },
  { id: "hotel", label: "Hotel", icon: Hotel },
];

interface GalleryProps {
  preview?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Gallery({
  preview = false,
  title = "Hotel Photo Gallery",
  subtitle = "Authentic photographs of Vikram Bliss Inn — explore our rooms, executive suites, hotel building, and event spaces.",
  className,
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Swipe handling refs
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const allItems = hotelImages.gallery;

  // Filter items based on active category
  const filteredItems =
    activeCategory === "all"
      ? preview
        ? allItems.slice(0, 8)
        : allItems
      : allItems.filter(
          (item) =>
            item.category === activeCategory ||
            item.categories?.includes(activeCategory as "exterior" | "rooms" | "suites" | "hotel")
        );

  const activeImage =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  }, [filteredItems.length]);

  // Keyboard controls for Lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex]);

  // Mobile Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      nextImage();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      prevImage();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Helper to count items per category
  const getCategoryCount = (catId: GalleryCategoryId) => {
    if (catId === "all") return allItems.length;
    return allItems.filter(
      (item) =>
        item.category === catId ||
        item.categories?.includes(catId as "exterior" | "rooms" | "suites" | "hotel")
    ).length;
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="gallery"
      className={cn("section-padding bg-[#0c0c0c] text-ivory scroll-mt-20", className)}
    >
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-0.5 bg-gold rounded-full" />
              <p className="text-gold text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                REAL PROPERTY PORTFOLIO
              </p>
              <span className="w-5 h-0.5 bg-gold rounded-full" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-4">
              {title}
            </h2>

            <p className="font-sans text-sm sm:text-base text-ivory/70 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters: All, Exterior, Rooms, Suites, Hotel */}
        {!preview && (
          <ScrollReveal delay={0.08}>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-12">
              {CATEGORIES.map(({ id, label, icon: Icon }) => {
                const isActive = activeCategory === id;
                const count = getCategoryCount(id);

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(id);
                      setLightboxIndex(null);
                    }}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-sans font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer",
                      isActive
                        ? "bg-gold text-black shadow-gold scale-105"
                        : "bg-white/5 text-ivory/70 border border-white/10 hover:border-gold/50 hover:text-ivory hover:bg-white/10"
                    )}
                    aria-pressed={isActive}
                  >
                    <Icon className={cn("w-4 h-4", isActive ? "text-black" : "text-gold")} />
                    <span>{label}</span>
                    <span
                      className={cn(
                        "text-[11px] px-2 py-0.5 rounded-full font-mono font-medium",
                        isActive ? "bg-black/20 text-black" : "bg-white/10 text-ivory/60"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        {/* Responsive Portfolio Masonry/Grid with Smooth Filtering Transitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[280px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const isSpanWide = item.span === "wide";
              const isSpanTall = item.span === "tall";

              return (
                <motion.div
                  key={item.id}
                  layout={!shouldReduceMotion}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => openLightbox(idx)}
                  className={cn(
                    "group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-gold/60 shadow-card-dark transition-all duration-300 bg-[#161616] hover:-translate-y-1",
                    isSpanWide && "sm:col-span-2",
                    isSpanTall && "sm:row-span-2"
                  )}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(idx);
                    }
                  }}
                  aria-label={`View ${item.title}`}
                >
                  {/* Image (Strictly un-distorted object-cover) */}
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-[1.035] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transform-none"
                    loading="lazy"
                  />

                  {/* Ambient Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Hover Hint: Click to Enlarge */}
                  <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-gold shadow-lg group-hover:scale-105">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block text-[10px] font-sans font-semibold tracking-widest uppercase text-gold bg-black/60 px-2.5 py-0.5 rounded-full border border-gold/30 mb-1.5 backdrop-blur-sm">
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="text-ivory text-sm sm:text-base font-serif font-bold leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Preview View All Button or Full Gallery Summary */}
        {preview ? (
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gold text-black font-sans font-bold text-sm hover:bg-gold-light hover:-translate-y-0.5 active:scale-[0.98] transition-all shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span>View All Hotel Photos</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        ) : (
          <div className="mt-10 text-center text-xs font-sans text-ivory/40">
            Showing {filteredItems.length} authentic photographs of Vikram Bliss Inn
          </div>
        )}
      </div>

      {/* ──────────────── Lightbox Modal ──────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && activeImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Hotel photo gallery lightbox"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 select-none"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar: Title, Category, Counter, and Close Button */}
            <div
              className="flex items-center justify-between w-full max-w-6xl mx-auto py-2 z-20 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-gold bg-gold/15 px-3 py-1 rounded-full border border-gold/30">
                  {activeImage.category}
                </span>
                <span className="text-xs sm:text-sm font-sans text-ivory/80 hidden sm:inline truncate max-w-md">
                  {activeImage.title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs sm:text-sm font-mono text-ivory/60">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>

                <motion.button
                  type="button"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  onClick={closeLightbox}
                  aria-label="Close photo viewer"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-black text-ivory transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>
            </div>

            {/* Centered Main Image with Previous / Next Controls */}
            <div
              className="relative w-full max-w-6xl mx-auto flex-1 flex items-center justify-center my-auto min-h-[50vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              {filteredItems.length > 1 && (
                <motion.button
                  type="button"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  onClick={prevImage}
                  aria-label="Previous photo"
                  className="absolute left-2 sm:left-4 z-30 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/70 hover:bg-gold hover:text-black text-ivory border border-white/20 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
              )}

              {/* Active Image Container with gentle cross-fade / scale settle */}
              <motion.div
                key={activeImage.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative w-full h-[62vh] sm:h-[72vh] md:h-[76vh] rounded-2xl overflow-hidden"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain"
                />
              </motion.div>

              {/* Next Button */}
              {filteredItems.length > 1 && (
                <motion.button
                  type="button"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  onClick={nextImage}
                  aria-label="Next photo"
                  className="absolute right-2 sm:right-4 z-30 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/70 hover:bg-gold hover:text-black text-ivory border border-white/20 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              )}
            </div>

            {/* Active Image Caption & Mobile Swipe Hint */}
            <div
              className="text-center py-2 shrink-0 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-serif text-base sm:text-lg text-ivory font-bold">
                {activeImage.title}
              </p>
              <p className="text-[11px] sm:text-xs font-sans text-ivory/60 mt-0.5 sm:hidden">
                Swipe left or right to browse
              </p>
            </div>

            {/* Bottom Thumbnails Strip */}
            {filteredItems.length > 1 && (
              <div
                className="flex items-center justify-center gap-2 sm:gap-3 py-2 overflow-x-auto w-full max-w-2xl mx-auto z-20 shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredItems.map((thumb, idx) => (
                  <button
                    key={thumb.id + "-thumb"}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className={cn(
                      "relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer",
                      lightboxIndex === idx
                        ? "border-gold scale-105 shadow-gold opacity-100"
                        : "border-white/20 opacity-40 hover:opacity-100"
                    )}
                    aria-label={`Jump to photo ${idx + 1}: ${thumb.title}`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
