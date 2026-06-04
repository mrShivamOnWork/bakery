import type { Location } from "@/lib/data/locations";

type Props = {
  location: Location;
};

export default function LocationCard({ location }: Props) {
  return (
    <div className="bg-warm-white border border-pink/20 rounded-2xl p-6 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading font-bold text-chocolate text-lg leading-tight">
            {location.name}
          </h3>
          <p className="text-gold text-xs font-semibold mt-0.5 uppercase tracking-wide">
            {location.city}
          </p>
        </div>
        {location.isMainBranch && (
          <span className="flex-shrink-0 bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            Main
          </span>
        )}
      </div>

      {/* Details */}
      <div className="space-y-3">
        {/* Address */}
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 text-gold flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <p className="text-medium-gray text-sm leading-snug">{location.address}</p>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-2.5">
          <div className="text-gold flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-medium-gray text-sm">{location.hours}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2.5">
          <div className="text-gold flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <a
            href={`tel:${location.phone}`}
            className="text-chocolate text-sm hover:text-gold transition-colors font-medium"
          >
            {location.phone}
          </a>
        </div>
      </div>

      {/* CTA */}
      {location.mapsUrl && (
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-gold/40 text-gold text-sm font-semibold rounded-xl hover:bg-gold hover:text-white transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497z" />
          </svg>
          Open in Google Maps
        </a>
      )}
    </div>
  );
}
