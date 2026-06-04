"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data/products";

const TAG_LABELS: Record<string, { label: string; color: string }> = {
  "best-seller": { label: "Best Seller", color: "bg-brand text-cream" },
  signature: { label: "Signature", color: "bg-maroon-deep text-cream" },
  premium: { label: "Premium", color: "bg-gold text-white" },
  seasonal: { label: "Seasonal", color: "bg-gold-dark text-white" },
  gift: { label: "Gift Pick", color: "bg-pink text-chocolate" },
  daily: { label: "Daily Fresh", color: "bg-chocolate text-cream" },
};

type Props = {
  product: Product;
  variant?: "default" | "compact";
};

export default function ProductCard({ product, variant = "default" }: Props) {
  const tagKey = product.tags?.find((t) => TAG_LABELS[t]);
  const tag = tagKey ? TAG_LABELS[tagKey] : null;

  return (
    <Link
      href={`/menu/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl shadow-chocolate/5 hover:shadow-chocolate/12 transition-all duration-400 hover:-translate-y-1.5 border border-transparent hover:border-pink/20"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-warm-gray ${
          variant === "compact" ? "aspect-square" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Tag badge */}
        {tag && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${tag.color}`}
          >
            {tag.label}
          </span>
        )}

        {/* Hover CTA overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-3">
          <span className="block w-full text-center bg-cream/95 backdrop-blur-sm text-brand text-[11px] font-bold uppercase tracking-wider py-2.5 rounded-xl shadow">
            View Details →
          </span>
        </div>

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">
          {product.category}
        </p>
        <h3 className="font-heading font-bold text-chocolate text-sm sm:text-base leading-snug mb-2 group-hover:text-brand transition-colors line-clamp-1">
          {product.name}
        </h3>
        {variant !== "compact" && (
          <p className="text-medium-gray text-xs leading-snug line-clamp-2 mb-3">
            {product.description}
          </p>
        )}
        <p className="text-chocolate font-bold text-sm">
          {product.priceRange ?? `₱${product.price.toLocaleString()}`}
        </p>
      </div>
    </Link>
  );
}
