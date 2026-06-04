"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const floatAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const stats = [
  { value: "9", label: "Branches" },
  { value: "10+", label: "Years" },
  { value: "1K+", label: "Happy Customers" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-cream overflow-hidden flex items-center">
      {/* Parallax decorative blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-pink/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gold/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-brand/5 blur-3xl" />
      </motion.div>

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #680D1F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-36 md:pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">
          {/* ── LEFT: Text content ─────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Eyebrow pill */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Handcrafted in Davao Since Day One
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-chocolate leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            >
              Every Day
              <br />
              <span className="text-brand italic">Deserves</span>
              <br />
              Something Sweet
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="h-[3px] bg-gradient-to-r from-gold to-gold/30 rounded-full mt-2 max-w-[260px] mx-auto lg:mx-0"
              />
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-dark-gray text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Lovingly handmade cakes, ensaymada & pastries crafted with the
              finest ingredients — because{" "}
              <em className="text-chocolate font-medium not-italic">
                every moment is worth celebrating.
              </em>
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12"
            >
              <Link
                href="/menu"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-cream font-semibold text-sm rounded-full overflow-hidden shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/35 transition-shadow duration-300"
              >
                <span className="absolute inset-0 bg-maroon-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative">Explore Products</span>
                <span className="relative group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-chocolate font-semibold text-sm rounded-full border-2 border-chocolate/15 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Our Story
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-8 justify-center lg:justify-start"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-chocolate/10" />}
                  <div className="text-center lg:text-left">
                    <p className="font-heading font-bold text-2xl text-chocolate leading-none">{s.value}</p>
                    <p className="text-[11px] text-medium-gray uppercase tracking-wider mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Hero visual ─────────────────────────── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
              {/* Outer glow ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-gold/25"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-5 rounded-full bg-gradient-to-br from-pink/50 via-pink/20 to-cream"
              />

              {/* Main cake image — floating */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                className="absolute inset-10 rounded-full overflow-hidden shadow-2xl shadow-chocolate/20 ring-4 ring-white/50"
              >
                <motion.div variants={floatAnimation} animate="animate" className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=900&q=90"
                    alt="Lucia Dulce Premium Celebration Cake"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 360px"
                  />
                </motion.div>
              </motion.div>

              {/* Floating badge: Best Seller */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-4 top-[15%] bg-white rounded-2xl shadow-xl shadow-chocolate/10 px-4 py-3 border border-pink/20 min-w-[130px]"
              >
                <p className="text-[10px] text-medium-gray font-medium uppercase tracking-wide">★ Best Seller</p>
                <p className="font-heading font-bold text-chocolate text-sm mt-0.5">Yema Classic</p>
                <p className="text-gold font-bold text-sm">from ₱180</p>
              </motion.div>

              {/* Floating badge: Fresh daily */}
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-5 bottom-[22%] bg-brand rounded-2xl shadow-xl px-4 py-3"
              >
                <p className="text-[10px] text-cream/60 font-medium uppercase tracking-wide">Freshly Baked</p>
                <p className="font-heading font-bold text-cream text-sm mt-0.5">Every Single Day</p>
                <div className="flex gap-1 mt-1.5">
                  {["🎂", "🧁", "🥐"].map((e) => (
                    <span key={e} className="text-sm">{e}</span>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge: 9 Locations */}
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[10%] -top-5 bg-gold rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2.5"
              >
                <span className="font-heading font-bold text-white text-3xl leading-none">9</span>
                <span className="text-white/80 text-[10px] font-semibold uppercase tracking-wide leading-tight">
                  Branch<br />Locations
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <p className="text-[10px] text-medium-gray tracking-[0.25em] uppercase">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-medium-gray/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
