"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { featuredProducts } from "@/lib/data/products";

const TAG_LABELS: Record<string, string> = {
  "best-seller": "Best Seller",
  signature: "Signature",
  gift: "Gift Pick",
  premium: "Premium",
  seasonal: "Seasonal",
  daily: "Daily Fresh",
};

function ProductTag({ tags }: { tags?: string[] }) {
  const tag = tags?.find((t) => TAG_LABELS[t]);
  if (!tag) return null;
  return (
    <span className="absolute top-3 left-3 z-10 bg-brand text-cream text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
      {TAG_LABELS[tag]}
    </span>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-gold font-bold tracking-[0.22em] uppercase text-[11px] mb-3">
              Customer Favorites
            </p>
            <h2 className="font-heading font-bold text-chocolate leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Our <span className="text-brand italic">Best Sellers</span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-chocolate/60 hover:text-brand transition-colors group border border-chocolate/15 hover:border-brand/30 px-5 py-2.5 rounded-full"
          >
            View Full Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {featuredProducts.slice(0, 8).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/menu/${product.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl shadow-chocolate/5 hover:shadow-chocolate/10 transition-all duration-400 border border-chocolate/5 hover:border-pink/30 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-warm-gray">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <ProductTag tags={product.tags} />

                  {/* Hover overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <span className="block w-full text-center bg-cream/95 backdrop-blur-sm text-brand text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl shadow">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-heading font-semibold text-chocolate text-sm sm:text-base leading-snug mb-2 group-hover:text-brand transition-colors">
                    {product.name}
                  </h3>
                  {product.priceRange ? (
                    <p className="text-chocolate/70 text-xs font-medium">{product.priceRange}</p>
                  ) : (
                    <p className="text-chocolate/70 text-xs font-medium">₱{product.price.toLocaleString()}</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center sm:hidden"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-cream text-sm font-semibold rounded-full"
          >
            View Full Menu →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
