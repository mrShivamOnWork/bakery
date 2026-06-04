"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/data/categories";

type Props = {
  activeCategory: string;
  onChange: (slug: string) => void;
};

const allCategories = [
  { slug: "all", name: "All Products", emoji: "✨" },
  ...categories.map((c) => ({ slug: c.slug, name: c.name, emoji: c.emoji })),
];

export default function ProductFilters({ activeCategory, onChange }: Props) {
  return (
    <div className="relative">
      {/* Scrollable filter row */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {allCategories.map((cat) => {
          const isActive = activeCategory === cat.slug;
          return (
            <button
              key={cat.slug}
              onClick={() => onChange(cat.slug)}
              className={`relative flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "text-white"
                  : "bg-warm-white border border-pink/30 text-chocolate hover:border-gold hover:text-gold"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-brand rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat.emoji}</span>
              <span className="relative z-10 whitespace-nowrap">{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
