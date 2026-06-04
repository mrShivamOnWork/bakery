"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    slug: "yema-cakes",
    name: "Yema Cakes",
    tagline: "Our signature — the taste that started it all",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=85",
    accent: "from-brand/80 to-maroon-deep/90",
    count: "3 varieties",
  },
  {
    slug: "bento-cakes",
    name: "Bento Cakes",
    tagline: "4-inch personal cakes perfect as gifts",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=85",
    accent: "from-chocolate/70 to-chocolate/90",
    count: "5 flavors",
  },
  {
    slug: "premium-cakes",
    name: "Premium Cakes",
    tagline: "Show-stopping cakes for every celebration",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85",
    accent: "from-maroon-deep/75 to-chocolate/90",
    count: "9 varieties",
  },
  {
    slug: "ensaymada",
    name: "Ensaymada",
    tagline: "Pillowy soft, baked fresh every morning",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=85",
    accent: "from-gold-dark/70 to-chocolate/85",
    count: "8 flavors",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-gold font-bold tracking-[0.22em] uppercase text-[11px] mb-3">
            What We Bake
          </p>
          <h2
            className="font-heading font-bold text-chocolate"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Shop by <span className="text-brand italic">Category</span>
          </h2>
        </motion.div>

        {/* Grid — asymmetric 2+2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={i === 0 ? "sm:col-span-2 row-span-1" : ""}
            >
              <Link
                href={`/menu?category=${cat.slug}`}
                className="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-chocolate/20 transition-all duration-500 hover:-translate-y-1"
                style={{ height: i === 0 ? "340px" : "260px" }}
              >
                {/* Image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} opacity-75 group-hover:opacity-85 transition-opacity duration-400`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-cream/60 text-[10px] font-semibold uppercase tracking-widest mb-1.5">
                    {cat.count}
                  </span>
                  <h3 className="font-heading font-bold text-cream text-xl sm:text-2xl leading-tight mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-cream/75 text-xs leading-relaxed mb-4 max-w-[200px]">
                    {cat.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cream uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                    Explore
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pastries row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          <Link
            href="/menu?category=pastries"
            className="group relative flex items-center justify-between bg-warm-gray rounded-2xl px-8 py-6 overflow-hidden hover:bg-warm-gray/70 transition-colors border border-chocolate/5 hover:border-gold/20"
          >
            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-1">Daily Fresh</p>
              <h3 className="font-heading font-bold text-chocolate text-xl">Pastries & Rolls</h3>
              <p className="text-medium-gray text-sm mt-0.5">Cinnamon buns, cheese bars, crinkles & more</p>
            </div>
            <span className="relative z-10 text-brand font-bold text-sm uppercase tracking-wide group-hover:gap-3 inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              View All →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
