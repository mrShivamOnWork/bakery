"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/data/products";

type Props = {
  products: Product[];
  variant?: "default" | "compact";
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function ProductGrid({ products, variant = "default" }: Props) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-medium-gray">
        <p className="text-4xl mb-4">🎂</p>
        <p className="font-heading text-xl text-chocolate">No products found</p>
        <p className="text-sm mt-2">Try selecting a different category.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={itemVariants}>
          <ProductCard product={product} variant={variant} />
        </motion.div>
      ))}
    </motion.div>
  );
}
