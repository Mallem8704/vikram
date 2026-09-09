import Link from "next/link";
import { ArrowLeft, Home, BedDouble } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-ivory flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-gold text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-3">
          Error 404
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl text-ivory font-bold mb-4">
          Page Not Found
        </h1>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
        <p className="font-sans text-sm sm:text-base text-ivory/70 leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gold text-black font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-gold-light transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/rooms"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-ivory font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-white/10 transition-colors"
          >
            <BedDouble className="w-4 h-4 text-gold" />
            View Our Rooms
          </Link>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-xs font-sans text-ivory/40">
            Vikram Bliss Inn • Kadiri, Andhra Pradesh
          </p>
        </div>
      </div>
    </div>
  );
}
