"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/locations", label: "Locations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm border-b border-pink/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow ring-1 ring-chocolate/10">
                <Image
                  src="https://www.luciadulce.com/wp-content/uploads/2025/02/cropped-Lucia-Dulce-New-Logo.png"
                  alt="Lucia Dulce Bakery"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="hidden sm:block">
                <p className={`font-heading font-bold text-lg leading-none transition-colors ${scrolled || !isHome ? "text-brand" : "text-brand"}`}>
                  Lucia Dulce
                </p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-medium-gray mt-0.5">Bakery</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      active
                        ? "text-brand"
                        : "text-chocolate hover:text-brand"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-pink/30 -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-brand text-cream text-sm font-semibold rounded-full hover:bg-maroon-dark transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-chocolate hover:text-brand hover:bg-pink/20 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="block h-0.5 bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.18 }}
                  className="block h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="block h-0.5 bg-current rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="fixed top-24 left-0 right-0 z-40 bg-warm-white/98 backdrop-blur-lg border-b border-pink/20 shadow-xl md:hidden"
            >
              <nav className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3.5 text-base font-medium rounded-xl transition-all ${
                        active
                          ? "text-brand bg-pink/25 font-semibold"
                          : "text-chocolate hover:text-brand hover:bg-pink/15"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-3 pb-1 border-t border-pink/20 mt-2">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3.5 bg-brand text-cream font-bold rounded-xl hover:bg-maroon-dark transition-colors shadow-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-chocolate/15 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
