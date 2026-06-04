"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const stats = [
  { value: 9, suffix: "", label: "Branch Locations", sub: "across Mindanao" },
  { value: 10, suffix: "+", label: "Years of Baking", sub: "since we opened" },
  { value: 6, suffix: "", label: "Product Categories", sub: "something for everyone" },
  { value: 1000, suffix: "+", label: "Happy Customers", sub: "and counting" },
];

function StatItem({
  stat,
  active,
  delay,
}: {
  stat: (typeof stats)[0];
  active: boolean;
  delay: number;
}) {
  const count = useCounter(stat.value, 1600, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <p className="font-heading font-black text-cream leading-none mb-2"
        style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
        {active ? count : 0}
        <span className="text-gold">{stat.suffix}</span>
      </p>
      <p className="text-cream font-bold text-base sm:text-lg tracking-tight">{stat.label}</p>
      <p className="text-cream/50 text-xs mt-1 uppercase tracking-wider">{stat.sub}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-brand overflow-hidden"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fce8ec 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-maroon-deep/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-maroon-deep/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-cream/50 font-bold tracking-[0.22em] uppercase text-[11px] mb-14"
        >
          Lucia Dulce in Numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={inView} delay={i * 0.12} />
          ))}
        </div>

        {/* Divider quote */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-cream/10 text-center origin-left"
        >
          <p className="font-heading italic text-cream/60 text-lg sm:text-xl max-w-2xl mx-auto">
            &ldquo;To make every day a celebration, one cake, one loaf, and one smile at a time.&rdquo;
          </p>
          <p className="text-cream/30 text-xs uppercase tracking-widest mt-4">— Lucia Dulce Mission</p>
        </motion.div>
      </div>
    </section>
  );
}
