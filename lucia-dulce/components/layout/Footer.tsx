import Link from "next/link";
import Image from "next/image";

const explore = [
  { href: "/menu", label: "All Products" },
  { href: "/menu?category=yema-cakes", label: "Yema Cakes" },
  { href: "/menu?category=premium-cakes", label: "Premium Cakes" },
  { href: "/menu?category=bento-cakes", label: "Bento Cakes" },
  { href: "/menu?category=ensaymada", label: "Ensaymada" },
  { href: "/menu?category=pastries", label: "Pastries & Rolls" },
];

const visit = [
  { href: "/locations", label: "All Branches" },
  { href: "/locations#davao-city", label: "Davao City" },
  { href: "/locations#tagum", label: "Tagum" },
  { href: "/locations#digos", label: "Digos" },
  { href: "/locations#davao-del-sur", label: "Davao Del Sur" },
];

const company = [
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact Us" },
  { href: "/locations", label: "Find a Branch" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/LuciaDulcePH/",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/luciadulceph",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@luciadulceph",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.91a8.2 8.2 0 004.79 1.53V7.0a4.85 4.85 0 01-1.02-.31z" /></svg>,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@luciadulcebakery",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="bg-maroon-deep text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-gold/25 group-hover:border-gold/50 transition-colors">
                <Image
                  src="https://www.luciadulce.com/wp-content/uploads/2025/02/cropped-Lucia-Dulce-New-Logo.png"
                  alt="Lucia Dulce Bakery"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-cream text-xl leading-none">Lucia Dulce</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mt-0.5">Bakery</p>
              </div>
            </Link>

            <p className="text-cream/55 text-sm leading-relaxed max-w-xs mb-6">
              Lovingly handmade with the finest ingredients. 9 branches across
              Davao City, Tagum, Digos & Davao Del Sur.
            </p>

            <div className="flex gap-2.5 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/8 hover:bg-gold transition-all flex items-center justify-center text-cream/60 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="space-y-1.5">
              <p className="text-[10px] text-cream/30 uppercase tracking-widest">Corporate Line</p>
              <a href="tel:+639155563335" className="text-cream/70 text-sm font-semibold hover:text-gold transition-colors">
                +63 915 556 3335
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-bold text-cream/90 text-xs uppercase tracking-widest mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/50 hover:text-gold text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-heading font-bold text-cream/90 text-xs uppercase tracking-widest mb-5">
              Visit Us
            </h4>
            <ul className="space-y-3">
              {visit.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-cream/50 hover:text-gold text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-cream/90 text-xs uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3 mb-6">
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-cream/50 hover:text-gold text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-[10px] text-cream/30 uppercase tracking-widest mb-1.5">Email</p>
              <a href="mailto:hello@luciadulce.com" className="text-cream/55 text-sm hover:text-gold transition-colors">
                hello@luciadulce.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Lucia Dulce Bakery. All rights reserved.
          </p>
          <p className="font-heading italic text-cream/25 text-xs">
            &ldquo;Every Day is a Celebration!&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
