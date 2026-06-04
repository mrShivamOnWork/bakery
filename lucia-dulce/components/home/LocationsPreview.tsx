"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { locationCities, locations } from "@/lib/data/locations";

const cityMeta: Record<string, { emoji: string; highlight: string }> = {
  "Davao City": { emoji: "🌆", highlight: "3 branches" },
  Tagum: { emoji: "🏙️", highlight: "3 branches" },
  Digos: { emoji: "🌿", highlight: "2 branches" },
  "Davao Del Sur": { emoji: "🏞️", highlight: "1 branch" },
};

export default function LocationsPreview() {
  return (
    <section className="py-20 md:py-28 bg-maroon-deep relative overflow-hidden">
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fce8ec 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-chocolate/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-gold/70 font-bold tracking-[0.22em] uppercase text-[11px] mb-3">
              Find Us Near You
            </p>
            <h2
              className="font-heading font-bold text-cream leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {locations.length} Branches <span className="text-gold italic">Across</span>
              <br />Mindanao
            </h2>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream text-sm font-semibold rounded-full hover:bg-cream/10 hover:border-cream/40 transition-all"
          >
            View All Branches →
          </Link>
        </motion.div>

        {/* City cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {locationCities.map((city, i) => {
            const meta = cityMeta[city] ?? { emoji: "📍", highlight: "branches" };
            const branchCount = locations.filter((l) => l.city === city).length;
            const branches = locations.filter((l) => l.city === city);

            return (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/locations#${city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                >
                  <span className="text-4xl block mb-4">{meta.emoji}</span>
                  <h3 className="font-heading font-bold text-cream text-lg mb-1">{city}</h3>
                  <p className="text-gold text-sm font-semibold mb-4">
                    {branchCount} {branchCount === 1 ? "branch" : "branches"}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {branches.slice(0, 2).map((b) => (
                      <li key={b.id} className="text-cream/50 text-xs flex items-start gap-1.5">
                        <span className="text-gold/50 mt-0.5 shrink-0">·</span>
                        <span>{b.name}</span>
                      </li>
                    ))}
                    {branchCount > 2 && (
                      <li className="text-cream/30 text-xs">+{branchCount - 2} more</li>
                    )}
                  </ul>
                  <span className="text-xs font-bold text-gold/60 group-hover:text-gold uppercase tracking-wide transition-colors">
                    See Details →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 rounded-2xl bg-brand/40 border border-brand/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-cream font-heading font-bold text-lg">Can&apos;t find a branch near you?</p>
            <p className="text-cream/60 text-sm mt-0.5">Reach out — we&apos;re always expanding!</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 bg-gold text-white text-sm font-bold rounded-full hover:bg-gold-dark transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
