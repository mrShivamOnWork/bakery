"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { occasionCategories } from "@/lib/data/categories";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ShopByOccasion() {
  return (
    <section className="py-20 md:py-28 bg-warm-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-semibold tracking-[0.2em] uppercase text-xs mb-3">
            Something for Every Moment
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate mb-4">
            Shop by <span className="text-brand italic">Occasion</span>
          </h2>
          <p className="text-medium-gray max-w-lg mx-auto">
            Whatever the celebration — big or small — we have the perfect sweet treat
            to make it unforgettable.
          </p>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {occasionCategories.map((cat) => (
            <motion.div key={cat.slug} variants={cardVariants}>
              <Link
                href={`/menu?category=${cat.filterSlug}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-2xl mb-1">{cat.emoji}</span>
                  <h3 className="font-heading font-bold text-cream text-base leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-cream/70 text-xs mt-1 leading-snug hidden sm:block">
                    {cat.description}
                  </p>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:text-gold transition-colors group"
          >
            View Full Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
