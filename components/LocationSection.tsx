import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { hotel } from "@/lib/data/hotel";

export default function LocationSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="section-container">
        <SectionHeading
          eyebrow="Find Us"
          title="Location & Contact"
          subtitle="Centrally located in Kadiri town — easy to find, convenient to everything."
          align="center"
          theme="light"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Card */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-ivory-dark shadow-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-black font-semibold mb-1">
                    Address
                  </h3>
                  <p className="text-sm font-sans text-brown-muted leading-relaxed">
                    {hotel.address.fullAddress}
                  </p>
                </div>
              </div>
              <a
                href={hotel.social.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-sans font-semibold text-gold hover:text-gold-dark transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                Open in Google Maps
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 border border-ivory-dark shadow-card">
              <h3 className="font-serif text-lg text-black font-semibold mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                Phone
              </h3>
              <div className="flex flex-col gap-2">
                {hotel.contact.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="text-sm font-sans text-brown hover:text-gold transition-colors font-medium"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Email + WhatsApp */}
            <div className="bg-white rounded-2xl p-6 border border-ivory-dark shadow-card">
              <h3 className="font-serif text-lg text-black font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                Email
              </h3>
              <a
                href={`mailto:${hotel.contact.email}`}
                className="text-sm font-sans text-brown hover:text-gold transition-colors"
              >
                {hotel.contact.email}
              </a>

              <div className="mt-4 pt-4 border-t border-ivory-dark">
                <a
                  href={`https://wa.me/${hotel.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] rounded-xl text-sm font-sans font-semibold hover:bg-[#25D366]/15 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-white rounded-2xl p-6 border border-ivory-dark shadow-card">
              <h3 className="font-serif text-lg text-black font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                Timings
              </h3>
              <div className="flex flex-col gap-2 text-sm font-sans">
                <div className="flex justify-between">
                  <span className="text-brown-muted">Check-in</span>
                  <span className="text-brown font-medium">{hotel.timings.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brown-muted">Check-out</span>
                  <span className="text-brown font-medium">{hotel.timings.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brown-muted">Reception</span>
                  <span className="text-brown font-medium">{hotel.timings.receptionHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-ivory-dark shadow-card min-h-[400px] bg-ivory-dark relative">
            {/* Real Google Maps embed for Kadiri */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30838.24!2d78.1579!3d14.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb54e2a6d3bffff%3A0x7f2c3e97d89e3f5e!2sKadiri%2C%20Andhra%20Pradesh%20515591!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vikram Bliss Inn Location — Kadiri, Andhra Pradesh"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
