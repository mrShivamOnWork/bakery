"use client";

import Link from "next/link";

const cities = ["Davao City", "Tagum", "Digos", "Davao Del Sur"];
const marqueeItems = [...cities, ...cities, ...cities];

function PinIcon() {
  return (
    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

export default function LocationsTopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-maroon-deep h-8 flex items-center overflow-hidden">
      {/* Desktop — static cities + phone */}
      <div className="hidden md:flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/locations"
          className="flex items-center gap-2 group"
        >
          <PinIcon />
          <span className="text-pink/60 uppercase tracking-widest text-[9px] font-semibold mr-1">
            Now serving
          </span>
          {cities.map((city, i) => (
            <span key={city} className="flex items-center gap-2">
              {i > 0 && <span className="text-cream/20">·</span>}
              <span className="text-[11px] text-cream/75 group-hover:text-cream/90 transition-colors font-medium">
                {city}
              </span>
            </span>
          ))}
        </Link>

        <a
          href="tel:+639155563335"
          className="flex items-center gap-1.5 text-[11px] text-cream/60 hover:text-cream/90 transition-colors font-medium"
        >
          <PhoneIcon />
          +63 915 556 3335
        </a>
      </div>

      {/* Mobile — scrolling marquee */}
      <div className="md:hidden flex-1 overflow-hidden">
        <div className="animate-locations-marquee flex whitespace-nowrap">
          {marqueeItems.map((city, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-5 text-[11px] text-cream/75 font-medium"
            >
              <PinIcon />
              {city}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
