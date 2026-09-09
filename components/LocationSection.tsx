import { MapPin, Phone, MessageCircle, Navigation, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocationSectionProps {
  className?: string;
  id?: string;
}

export default function LocationSection({
  className,
  id = "location",
}: LocationSectionProps) {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Vikram+Bliss+Inn+Christian+Colony+Near+Subjail+Kadiri+515591";
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Vikram+Bliss+Inn+Christian+Colony+Near+Subjail+Kadiri+515591&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section
      id={id}
      className={cn(
        "section-padding bg-[#0c0c0c] text-ivory border-t border-white/10 scroll-mt-20",
        className
      )}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-0.5 bg-gold rounded-full" />
            <p className="text-gold text-xs font-sans font-semibold tracking-[0.25em] uppercase">
              VISIT & CONNECT
            </p>
            <span className="w-5 h-0.5 bg-gold rounded-full" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-3">
            Location & Contact
          </h2>

          <p className="font-sans text-sm sm:text-base text-ivory/70 leading-relaxed max-w-xl mx-auto">
            Conveniently situated in the heart of Kadiri town, close to transit points and sacred shrines.
          </p>
        </div>

        {/* Main Layout: Left = Address + Contact + CTAs, Right = Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* ──────────────── Left Column (5 of 12 on desktop): Details + CTAs ──────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-7">
            {/* Property Name & Address */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#141414] border border-white/10 shadow-card-dark">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-4 h-0.5 bg-gold rounded-full" />
                <span className="text-[11px] font-sans font-semibold tracking-widest text-gold uppercase">
                  PROPERTY ADDRESS
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory tracking-tight mb-4">
                VIKRAM BLISS INN
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5 text-gold">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <address className="not-italic text-sm sm:text-base font-sans text-ivory/80 leading-relaxed">
                  <p>Police Line,</p>
                  <p>Christian Colony,</p>
                  <p>Near Subjail,</p>
                  <p>Kadiri – 515591,</p>
                  <p>Sri Sathya Sai District,</p>
                  <p>Andhra Pradesh, India</p>
                </address>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#141414] border border-white/10 shadow-card-dark">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
                <span className="text-xs font-sans font-semibold tracking-wider text-gold uppercase">
                  Phone Assistance (24/7 Front Desk)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 font-mono text-base sm:text-lg font-semibold text-ivory">
                <a
                  href="tel:9966731010"
                  className="min-h-[44px] hover:text-gold transition-colors inline-flex items-center gap-2"
                  aria-label="Call 9966731010"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>9966731010</span>
                </a>
                <a
                  href="tel:9440222294"
                  className="min-h-[44px] hover:text-gold transition-colors inline-flex items-center gap-2"
                  aria-label="Call 9440222294"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>9440222294</span>
                </a>
              </div>
            </div>

            {/* CTA Buttons: Call 9966731010, WhatsApp, Get Directions */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
              {/* Button 1: Call 9966731010 */}
              <a
                href="tel:9966731010"
                className="flex-1 min-w-[160px] min-h-[48px] inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gold text-black font-sans font-bold text-sm hover:bg-gold-light transition-all shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
                aria-label="Call 9966731010"
              >
                <Phone className="w-4 h-4 text-black" aria-hidden="true" />
                <span>Call 9966731010</span>
              </a>

              {/* Button 2: WhatsApp */}
              <a
                href="https://wa.me/919966731010?text=Hello%20Vikram%20Bliss%20Inn%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] min-h-[48px] inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] text-white font-sans font-bold text-sm hover:bg-[#20bd5a] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
                aria-label="Chat with Vikram Bliss Inn on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>

              {/* Button 3: Get Directions */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl border border-white/20 hover:border-gold text-ivory hover:text-gold font-sans font-semibold text-sm hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
                aria-label="Get Directions to Vikram Bliss Inn on Google Maps"
              >
                <Navigation className="w-4 h-4 text-gold" aria-hidden="true" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ──────────────── Right Column (7 of 12 on desktop): Clean Map Container ──────────────── */}
          <div className="lg:col-span-7 flex flex-col min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/15 bg-[#161616] shadow-2xl flex flex-col group">
              {/* Top Banner inside Map container */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <div className="bg-black/85 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-sans text-ivory shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <span className="font-semibold text-gold">Vikram Bliss Inn</span>
                  <span className="text-ivory/50">• Kadiri</span>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto bg-black/85 hover:bg-gold hover:text-black backdrop-blur-md border border-white/20 text-ivory text-xs font-sans font-semibold px-3 py-1.5 rounded-full transition-all shadow-lg flex items-center gap-1.5"
                  aria-label="Open in Google Maps"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>

              {/* Clean Map Iframe */}
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vikram Bliss Inn Location Map in Kadiri, Andhra Pradesh"
                className="w-full h-full flex-1 filter grayscale-[20%] contrast-[105%]"
              />

              {/* Bottom bar of Map Container */}
              <div className="p-3 sm:p-3.5 bg-[#121212] border-t border-white/10 flex items-center justify-between text-xs font-sans text-ivory/60">
                <span className="truncate">
                  Police Line, Christian Colony, Near Subjail, Kadiri – 515591
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline shrink-0 ml-2 font-medium"
                >
                  View Route →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
