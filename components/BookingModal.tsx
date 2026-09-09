"use client";

import { useState, useEffect, useId } from "react";
import {
  X,
  Calendar,
  User,
  Phone,
  BedDouble,
  Users,
  MessageSquare,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info,
  RotateCcw,
} from "lucide-react";
import { useBookingModal } from "@/context/BookingContext";
import { hotel } from "@/lib/data/hotel";

export const ROOM_OPTIONS = [
  {
    id: "double-ac",
    name: "Double Room (AC)",
    rate: "₹1,500/night",
    label: "Double Room (AC) – ₹1,500/night",
  },
  {
    id: "non-ac",
    name: "Non-AC Room",
    rate: "₹1,300/night",
    label: "Non-AC Room – ₹1,300/night",
  },
  {
    id: "suite",
    name: "Suite Room",
    rate: "₹2,500/night",
    label: "Suite Room – ₹2,500/night",
  },
] as const;

export const GUEST_OPTIONS = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5+ Guests",
] as const;

function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTomorrowString(fromDateStr?: string) {
  const base = fromDateStr ? new Date(fromDateStr) : new Date();
  if (isNaN(base.getTime())) {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }
  base.setDate(base.getDate() + 1);
  const year = base.getFullYear();
  const month = String(base.getMonth() + 1).padStart(2, "0");
  const day = String(base.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Clean phone validation (at least 10 digits)
function isValidPhoneNumber(phoneStr: string): boolean {
  const cleaned = phoneStr.replace(/\D/g, "");
  return cleaned.length >= 10 && cleaned.length <= 13;
}

export default function BookingModal() {
  const { isOpen, initialRoomType, closeBookingModal } = useBookingModal();

  const nameId = useId();
  const phoneId = useId();
  const roomId = useId();
  const checkInId = useId();
  const checkOutId = useId();
  const guestsId = useId();
  const messageId = useId();

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [roomType, setRoomType] = useState<string>(ROOM_OPTIONS[0].label);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState<string>("2 Guests");
  const [message, setMessage] = useState("");

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // View state: 'form' | 'enquiry_ready'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");
  const [generatedMessageText, setGeneratedMessageText] = useState("");

  // Sync initialRoomType when modal opens
  useEffect(() => {
    if (isOpen) {
      const today = getTodayString();
      const tomorrow = getTomorrowString(today);
      setCheckIn(today);
      setCheckOut(tomorrow);
      setIsSubmitted(false);
      setErrors({});
      setTouched({});

      if (initialRoomType) {
        const lower = initialRoomType.toLowerCase();
        const matched = ROOM_OPTIONS.find(
          (r) =>
            r.name.toLowerCase().includes(lower) ||
            r.id.toLowerCase().includes(lower) ||
            lower.includes(r.id) ||
            lower.includes(r.name.toLowerCase())
        );
        if (matched) {
          setRoomType(matched.label);
        } else {
          setRoomType(ROOM_OPTIONS[0].label);
        }
      } else {
        setRoomType(ROOM_OPTIONS[0].label);
      }
    }
  }, [isOpen, initialRoomType]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBookingModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBookingModal]);

  // Check-in date change handler: automatically ensure check-out >= check-in + 1
  const handleCheckInChange = (newCheckIn: string) => {
    setCheckIn(newCheckIn);
    if (checkOut && newCheckIn >= checkOut) {
      setCheckOut(getTomorrowString(newCheckIn));
    }
    if (errors.checkIn || errors.checkOut) {
      validateForm({ checkIn: newCheckIn, checkOut: checkOut });
    }
  };

  const handleCheckOutChange = (newCheckOut: string) => {
    setCheckOut(newCheckOut);
    if (errors.checkOut) {
      validateForm({ checkOut: newCheckOut });
    }
  };

  const validateForm = (overrideValues?: Partial<{
    name: string;
    phone: string;
    roomType: string;
    checkIn: string;
    checkOut: string;
  }>) => {
    const currentName = overrideValues?.name !== undefined ? overrideValues.name : name;
    const currentPhone = overrideValues?.phone !== undefined ? overrideValues.phone : phone;
    const currentRoom = overrideValues?.roomType !== undefined ? overrideValues.roomType : roomType;
    const currentCheckIn = overrideValues?.checkIn !== undefined ? overrideValues.checkIn : checkIn;
    const currentCheckOut = overrideValues?.checkOut !== undefined ? overrideValues.checkOut : checkOut;

    const newErrors: Record<string, string> = {};

    if (!currentName.trim() || currentName.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }

    if (!currentPhone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (!isValidPhoneNumber(currentPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!currentRoom) {
      newErrors.roomType = "Please select a room type.";
    }

    if (!currentCheckIn) {
      newErrors.checkIn = "Check-in date is required.";
    }

    if (!currentCheckOut) {
      newErrors.checkOut = "Check-out date is required.";
    } else if (currentCheckIn && currentCheckOut <= currentCheckIn) {
      newErrors.checkOut = "Check-out date must be after check-in date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Build the WhatsApp message content
  const constructWhatsAppMessage = () => {
    const lines = [
      `🏨 *VIKRAM BLISS INN — BOOKING ENQUIRY*`,
      ``,
      `👤 *Guest Name:* ${name.trim()}`,
      `📞 *Phone:* ${phone.trim()}`,
      `🛏️ *Room Type:* ${roomType}`,
      `📅 *Check-in:* ${checkIn}`,
      `📅 *Check-out:* ${checkOut}`,
      `👥 *Guests:* ${guests}`,
    ];

    if (message.trim()) {
      lines.push(`💬 *Message:* ${message.trim()}`);
    } else {
      lines.push(`💬 *Message:* None specified`);
    }

    lines.push(``);
    lines.push(
      `_Note: This is an enquiry request to verify room availability. No online payment has been made._`
    );

    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      phone: true,
      roomType: true,
      checkIn: true,
      checkOut: true,
    });

    const isValid = validateForm();
    if (!isValid) return;

    const text = constructWhatsAppMessage();
    const waUrl = `https://wa.me/${hotel.contact.whatsapp}?text=${encodeURIComponent(text)}`;

    setGeneratedMessageText(text);
    setGeneratedWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp directly in new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-fade-in"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeBookingModal}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-xl my-auto rounded-2xl sm:rounded-3xl bg-[#121212] border border-white/15 text-ivory shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col animate-modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-4 sm:p-6 pb-3 sm:pb-4 border-b border-white/10 bg-[#161616] shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-4 h-0.5 bg-gold rounded-full" />
              <p className="text-gold text-[11px] font-sans font-semibold tracking-[0.2em] uppercase">
                VIKRAM BLISS INN • KADIRI
              </p>
            </div>
            <h2 id="booking-modal-title" className="font-serif text-xl sm:text-3xl font-bold text-ivory">
              Book Your Stay
            </h2>
            <p className="text-xs font-sans text-ivory/60 mt-0.5 sm:mt-1">
              Direct enquiry with hotel reception • Instant WhatsApp & phone assistance
            </p>
          </div>

          <button
            onClick={closeBookingModal}
            aria-label="Close booking modal"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-ivory/60 hover:text-gold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Important Notice Banner: Enquiry Only / No Payment / No Fake Real-Time Availability */}
        <div className="bg-gold/10 border-b border-gold/20 px-4 sm:px-6 py-2.5 flex items-center gap-2.5 shrink-0">
          <Info className="w-4 h-4 text-gold shrink-0" />
          <p className="text-[11px] sm:text-xs font-sans text-ivory/80 leading-snug">
            <strong className="text-gold font-semibold">Enquiry System:</strong> This sends a request to check room availability directly with our front desk. No payment is collected and this is not a confirmed reservation.
          </p>
        </div>

        {/* Modal Body: Form OR Enquiry Ready Screen */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {!isSubmitted ? (
            /* ──────────────── Form View ──────────────── */
            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Guest Name */}
                <div>
                  <label
                    htmlFor={nameId}
                    className="block text-xs font-sans font-semibold text-ivory/90 mb-1.5"
                  >
                    Guest Name <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id={nameId}
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (touched.name) validateForm({ name: e.target.value });
                      }}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, name: true }));
                        validateForm({ name });
                      }}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full min-h-[44px] pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border text-base sm:text-sm font-sans text-ivory placeholder:text-ivory/30 focus:outline-none transition-colors ${
                        touched.name && errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/15 focus:border-gold"
                      }`}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p className="text-red-400 text-[11px] font-sans mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor={phoneId}
                    className="block text-xs font-sans font-semibold text-ivory/90 mb-1.5"
                  >
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id={phoneId}
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (touched.phone) validateForm({ phone: e.target.value });
                      }}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, phone: true }));
                        validateForm({ phone });
                      }}
                      placeholder="e.g. 98765 43210"
                      className={`w-full min-h-[44px] pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border text-base sm:text-sm font-sans text-ivory placeholder:text-ivory/30 focus:outline-none transition-colors ${
                        touched.phone && errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/15 focus:border-gold"
                      }`}
                    />
                  </div>
                  {touched.phone && errors.phone && (
                    <p className="text-red-400 text-[11px] font-sans mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Room Type */}
              <div>
                <label
                  htmlFor={roomId}
                  className="block text-xs font-sans font-semibold text-ivory/90 mb-1.5"
                >
                  Room Type <span className="text-gold">*</span>
                </label>
                <div className="relative">
                  <BedDouble className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id={roomId}
                    value={roomType}
                    onChange={(e) => {
                      setRoomType(e.target.value);
                      if (touched.roomType) validateForm({ roomType: e.target.value });
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, roomType: true }));
                      validateForm({ roomType });
                    }}
                    className={`w-full min-h-[44px] pl-10 pr-9 py-2.5 rounded-xl bg-[#1c1c1c] border text-base sm:text-sm font-sans text-ivory focus:outline-none transition-colors appearance-none cursor-pointer ${
                      touched.roomType && errors.roomType
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/15 focus:border-gold"
                    }`}
                  >
                    {ROOM_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.label} className="bg-[#1a1a1a] text-ivory">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-ivory/40">
                    ▼
                  </div>
                </div>
                {touched.roomType && errors.roomType && (
                  <p className="text-red-400 text-[11px] font-sans mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.roomType}</span>
                  </p>
                )}
              </div>

              {/* Row 3: Check-in Date & Check-out Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Check-in Date */}
                <div>
                  <label
                    htmlFor={checkInId}
                    className="block text-xs font-sans font-semibold text-ivory/90 mb-1.5"
                  >
                    Check-in Date <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id={checkInId}
                      type="date"
                      value={checkIn}
                      min={getTodayString()}
                      onChange={(e) => handleCheckInChange(e.target.value)}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, checkIn: true }));
                        validateForm({ checkIn });
                      }}
                      className={`w-full min-h-[44px] pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border text-base sm:text-sm font-sans text-ivory focus:outline-none transition-colors ${
                        touched.checkIn && errors.checkIn
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/15 focus:border-gold"
                      }`}
                    />
                  </div>
                  {touched.checkIn && errors.checkIn && (
                    <p className="text-red-400 text-[11px] font-sans mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.checkIn}</span>
                    </p>
                  )}
                </div>

                {/* Check-out Date */}
                <div>
                  <label
                    htmlFor={checkOutId}
                    className="block text-xs font-sans font-semibold text-ivory/90 mb-1.5"
                  >
                    Check-out Date <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id={checkOutId}
                      type="date"
                      value={checkOut}
                      min={checkIn ? getTomorrowString(checkIn) : getTodayString()}
                      onChange={(e) => handleCheckOutChange(e.target.value)}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, checkOut: true }));
                        validateForm({ checkOut });
                      }}
                      className={`w-full min-h-[44px] pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border text-base sm:text-sm font-sans text-ivory focus:outline-none transition-colors ${
                        touched.checkOut && errors.checkOut
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/15 focus:border-gold"
                      }`}
                    />
                  </div>
                  {touched.checkOut && errors.checkOut && (
                    <p className="text-red-400 text-[11px] font-sans mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.checkOut}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Number of Guests */}
              <div>
                <label
                  htmlFor={guestsId}
                  className="block text-xs font-sans font-semibold text-ivory/90 mb-1.5"
                >
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-ivory/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id={guestsId}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full min-h-[44px] pl-10 pr-9 py-2.5 rounded-xl bg-[#1c1c1c] border border-white/15 text-base sm:text-sm font-sans text-ivory focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {GUEST_OPTIONS.map((g) => (
                      <option key={g} value={g} className="bg-[#1a1a1a] text-ivory">
                        {g}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-ivory/40">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 5: Message (Optional) */}
              <div>
                <label
                  htmlFor={messageId}
                  className="block text-xs font-sans font-semibold text-ivory/90 mb-1.5"
                >
                  Message / Special Requests <span className="text-ivory/40 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-ivory/40 absolute left-3.5 top-3 pointer-events-none" />
                  <textarea
                    id={messageId}
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Expected arrival around 6 PM, need extra mattress..."
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-base sm:text-sm font-sans text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold text-black font-sans font-bold text-sm sm:text-base hover:bg-gold-light transition-all shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Send Enquiry on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <a
                  href={`tel:${hotel.contact.phone[0]}`}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-white/20 text-ivory hover:text-gold hover:border-gold font-sans font-semibold text-sm sm:text-base hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <PhoneCall className="w-4 h-4 text-gold" />
                  <span>Call Hotel</span>
                </a>
              </div>
            </form>
          ) : (
            /* ──────────────── Enquiry Ready View ──────────────── */
            <div className="space-y-5 animate-fade-in">
              <div className="text-center py-2">
                <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/40 text-gold flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ivory">
                  Enquiry Prepared
                </h3>
                <p className="text-xs sm:text-sm font-sans text-ivory/70 mt-1 max-w-md mx-auto">
                  Your enquiry has been prepared. Choose an option below to send your details directly to our reception:
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 text-xs sm:text-sm font-sans">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-ivory/50">Guest Name</span>
                  <span className="font-semibold text-ivory">{name}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-ivory/50">Phone Number</span>
                  <span className="font-semibold text-ivory">{phone}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-ivory/50">Room Type</span>
                  <span className="font-semibold text-gold">{roomType}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-ivory/50">Stay Dates</span>
                  <span className="font-semibold text-ivory">
                    {checkIn} to {checkOut}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-ivory/50">Guests</span>
                  <span className="font-semibold text-ivory">{guests}</span>
                </div>
                {message.trim() && (
                  <div className="pt-1">
                    <span className="text-ivory/50 block mb-1">Message:</span>
                    <p className="text-ivory/80 italic bg-black/40 p-2.5 rounded-lg border border-white/5">
                      "{message.trim()}"
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-1">
                {/* Primary: Send Enquiry on WhatsApp */}
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gold text-black font-sans font-bold text-sm sm:text-base hover:bg-gold-light transition-all shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Sparkles className="w-5 h-5 text-black" />
                  <span>Send Enquiry on WhatsApp</span>
                </a>

                {/* Secondary: Call Hotel */}
                <a
                  href={`tel:${hotel.contact.phone[0]}`}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border border-white/20 hover:border-gold text-ivory hover:text-gold font-sans font-semibold text-sm sm:text-base hover:bg-white/5 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-gold" />
                  <span>Call Hotel Front Desk ({hotel.contact.phone[0]})</span>
                </a>

                {/* Tertiary: Modify Details */}
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full min-h-[44px] text-center py-2 text-xs font-sans text-ivory/50 hover:text-gold transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Edit Enquiry Details</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Assistance info */}
        <div className="p-3.5 px-6 border-t border-white/10 bg-[#0d0d0d] text-center shrink-0">
          <p className="text-[11px] font-sans text-ivory/50">
            Vikram Bliss Inn • Christian Colony, Near Subjail, Kadiri • 24/7 Front Desk:{" "}
            <a href={`tel:${hotel.contact.phone[0]}`} className="text-gold hover:underline">
              {hotel.contact.phone[0]}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
