"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    icon: "🫶",
    title: "Made with Love",
    desc: "Every creation is hand-crafted with meticulous care and heart.",
  },
  {
    icon: "🌿",
    title: "Finest Ingredients",
    desc: "We never compromise on quality. Only the best goes in.",
  },
  {
    icon: "🎉",
    title: "Every Day Celebrated",
    desc: "Every moment — big or small — deserves something sweet.",
  },
  {
    icon: "🏠",
    title: "Family at Heart",
    desc: "Rooted in Filipino tradition, baked for communities we love.",
  },
];

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── IMAGE COLLAGE ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1 h-[420px] sm:h-[500px]"
          >
            {/* Large main image */}
            <div className="absolute top-0 left-0 w-[72%] h-[85%] rounded-3xl overflow-hidden shadow-2xl shadow-chocolate/15">
              <Image
                src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=900&q=85"
                alt="Lucia Dulce artisan bakers at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/30 to-transparent" />
            </div>

            {/* Inset smaller image bottom-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-0 right-0 w-[46%] h-[54%] rounded-2xl overflow-hidden shadow-xl shadow-chocolate/15 border-4 border-cream"
            >
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=85"
                alt="Freshly baked ensaymada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
            </motion.div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-5 right-[30%] w-24 h-24 bg-brand rounded-full flex flex-col items-center justify-center shadow-lg shadow-brand/30 z-10"
            >
              <span className="font-heading font-black text-cream text-3xl leading-none">10+</span>
              <span className="text-cream/70 text-[9px] font-semibold uppercase tracking-wider mt-0.5">Years</span>
            </motion.div>

            {/* Tagline strip bottom of main image */}
            <div className="absolute bottom-[17%] left-4 bg-gold text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full shadow-md">
              Davao • Tagum • Digos
            </div>
          </motion.div>

          {/* ── TEXT ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-gold font-bold tracking-[0.22em] uppercase text-[11px] mb-3">Our Story</p>
            <h2
              className="font-heading font-bold text-chocolate mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Made with Love,<br />
              <span className="text-brand italic">Baked for You</span>
            </h2>

            <div className="space-y-4 text-dark-gray text-[15px] leading-relaxed mb-8">
              <p>
                Lucia Dulce began as a cherished cake shop in Tagum and Digos —
                a dream brought to life through passion, flour, and love. What started
                with our signature handcrafted yema cakes and pillowy ensaymadas has
                grown into a beloved brand across Davao, Tagum, and Digos.
              </p>
              <p>
                Our guiding principle has never changed:{" "}
                <em className="text-chocolate font-semibold not-italic">
                  &ldquo;To make every day a celebration, one cake, one loaf,
                  and one smile at a time.&rdquo;
                </em>
              </p>
              <p>
                Every product is lovingly handmade with the finest ingredients and
                meticulous care — rooted in Filipino baking tradition, crafted for
                the communities we love.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="bg-warm-gray rounded-2xl p-4 hover:bg-pink-light transition-colors"
                >
                  <span className="text-2xl block mb-2">{p.icon}</span>
                  <h4 className="font-heading font-bold text-chocolate text-sm mb-1">{p.title}</h4>
                  <p className="text-medium-gray text-xs leading-snug">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-brand font-bold text-sm hover:text-gold transition-colors"
            >
              Read Our Full Story
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
