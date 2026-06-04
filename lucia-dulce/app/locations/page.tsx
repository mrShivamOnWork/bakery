import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { locations, locationCities, getLocationsByCity } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find your nearest Lucia Dulce Bakery. 9 branches in Davao City, Tagum, Digos, and Davao Del Sur.",
};

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.966.784-1.75 1.75-1.75h.876c.375 0 .706.214.864.552l1.287 2.894a.875.875 0 01-.2.964l-.91.91a11.13 11.13 0 006.177 6.177l.91-.91a.875.875 0 01.964-.2l2.894 1.287a.875.875 0 01.552.864v.876A1.75 1.75 0 0118.338 21H17.25C9.379 21 3 14.621 3 6.75v-1.087c0-.966.784-1.75 1.75-1.75h.876z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero */}
        <section className="bg-brand relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #fce8ec 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-maroon-deep/50 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold/70 font-bold tracking-[0.22em] uppercase text-[11px] mb-4">Find Us</p>
            <h1
              className="font-heading font-bold text-cream mb-4 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              {locations.length} Branches
              <span className="block text-gold italic">Across Mindanao</span>
            </h1>
            <p className="text-cream/65 text-base max-w-lg mx-auto mb-8">
              There&apos;s always a Lucia Dulce near you — in Davao City, Tagum, Digos, and Davao Del Sur.
            </p>
            {/* City jump links */}
            <div className="flex flex-wrap justify-center gap-2">
              {locationCities.map((city) => (
                <a
                  key={city}
                  href={`#${city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 bg-white/10 border border-white/20 text-cream text-sm font-medium rounded-full hover:bg-white/20 hover:border-white/30 transition-all"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Branches by city */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {locationCities.map((city) => {
              const cityBranches = getLocationsByCity(city);
              return (
                <div key={city} id={city.toLowerCase().replace(/\s+/g, "-")}>
                  <div className="flex items-center gap-4 mb-8">
                    <div>
                      <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-0.5">
                        {cityBranches.length} {cityBranches.length === 1 ? "branch" : "branches"}
                      </p>
                      <h2 className="font-heading font-bold text-chocolate text-2xl sm:text-3xl">{city}</h2>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-chocolate/10 to-transparent" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cityBranches.map((branch) => (
                      <div
                        key={branch.id}
                        className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg hover:border-pink/30 transition-all duration-300 hover:-translate-y-0.5 ${
                          branch.isMainBranch
                            ? "border-gold/30 ring-1 ring-gold/20"
                            : "border-chocolate/6"
                        }`}
                      >
                        {branch.isMainBranch && (
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-gold/10 text-gold-dark px-2.5 py-1 rounded-full mb-3">
                            Main Branch
                          </span>
                        )}
                        <h3 className="font-heading font-bold text-chocolate text-lg mb-4 leading-tight">
                          {branch.name}
                        </h3>

                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2.5 text-dark-gray">
                            <MapPinIcon />
                            <span className="leading-snug">{branch.address}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-dark-gray">
                            <ClockIcon />
                            <span>{branch.hours}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <PhoneIcon />
                            <a
                              href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                              className="text-brand font-semibold hover:text-gold transition-colors"
                            >
                              {branch.phone}
                            </a>
                          </div>
                        </div>

                        {branch.mapsUrl && (
                          <a
                            href={branch.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-chocolate/10 text-chocolate/70 text-xs font-semibold hover:border-brand/30 hover:text-brand hover:bg-pink/10 transition-all"
                          >
                            <MapPinIcon />
                            Open in Maps
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-warm-gray border-t border-chocolate/5">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-chocolate text-2xl sm:text-3xl mb-3">
              Have a question about a branch?
            </h2>
            <p className="text-medium-gray text-base mb-8">
              Call us at{" "}
              <a href="tel:+639155563335" className="text-brand font-semibold hover:text-gold transition-colors">
                +63 915 556 3335
              </a>{" "}
              or drop us a message.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-cream font-bold rounded-full hover:bg-maroon-dark transition-all shadow-lg hover:-translate-y-0.5"
            >
              Get in Touch →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
