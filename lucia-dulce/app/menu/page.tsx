"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data/products";

const ALL_CATEGORIES = [
  { slug: "all", label: "All Products" },
  { slug: "yema-cakes", label: "Yema Cakes" },
  { slug: "bento-cakes", label: "Bento Cakes" },
  { slug: "premium-cakes", label: "Premium Cakes" },
  { slug: "celebration-cakes", label: "Celebration Cakes" },
  { slug: "ensaymada", label: "Ensaymada" },
  { slug: "pastries", label: "Pastries & Rolls" },
];

function SearchIcon() {
  return (
    <svg className="w-4 h-4 text-medium-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") ?? "all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setActiveCategory(searchParams.get("category") ?? "all");
  }, [searchParams]);

  const handleCategory = (slug: string) => {
    setActiveCategory(slug);
    const params = new URLSearchParams();
    if (slug !== "all") params.set("category", slug);
    router.push(`/menu${params.toString() ? `?${params}` : ""}`, { scroll: false });
  };

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === "all" || p.categorySlug === activeCategory;
    const searchMatch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-24 md:top-28 z-30 bg-cream/95 backdrop-blur-md border-b border-pink/15 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
          {/* Search */}
          <div className="relative max-w-sm">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search cakes, ensaymada..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-pink/30 rounded-full text-sm text-chocolate placeholder-medium-gray focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/30 transition-all"
            />
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategory(cat.slug)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                  activeCategory === cat.slug
                    ? "bg-brand text-cream shadow-md"
                    : "bg-white border border-chocolate/10 text-chocolate/70 hover:border-brand/30 hover:text-brand"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-medium-gray">
            <span className="font-bold text-chocolate">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "product" : "products"} found
          </p>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-xs text-brand font-semibold hover:text-gold transition-colors"
            >
              Clear search ×
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-4xl mb-4">🔍</p>
            <p className="font-heading font-bold text-chocolate text-xl mb-2">No products found</p>
            <p className="text-medium-gray text-sm mb-6">
              Try a different category or search term
            </p>
            <button
              onClick={() => { setSearch(""); handleCategory("all"); }}
              className="px-6 py-2.5 bg-brand text-cream text-sm font-semibold rounded-full hover:bg-maroon-dark transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 bg-cream min-h-screen">
        {/* Page header */}
        <section className="py-14 md:py-20 bg-warm-gray border-b border-chocolate/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gold font-bold tracking-[0.22em] uppercase text-[11px] mb-3"
            >
              Our Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-heading font-bold text-chocolate mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              The <span className="text-brand italic">Full Menu</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-dark-gray text-base max-w-md mx-auto"
            >
              From signature yema cakes to freshly baked ensaymada — something
              sweet for every moment.
            </motion.p>
          </div>
        </section>

        <Suspense fallback={<div className="py-32 text-center text-medium-gray text-sm">Loading products…</div>}>
          <MenuContent />
        </Suspense>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
