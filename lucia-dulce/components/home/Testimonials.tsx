"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Davao City",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    rating: 5,
    text: "The Yema Classic is absolutely divine. My family has been buying from Lucia Dulce for years — the quality never changes and the taste always feels like home.",
    product: "Yema Classic",
  },
  {
    id: 2,
    name: "Carlo Reyes",
    location: "Tagum City",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80",
    rating: 5,
    text: "Ordered the KitKat Nips premium cake for my daughter's birthday. She was absolutely thrilled! The presentation was stunning and it tasted even better than it looked.",
    product: "KitKat Nips Premium",
  },
  {
    id: 3,
    name: "Ana Gonzales",
    location: "Digos City",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80",
    rating: 5,
    text: "Their cream cheese ensaymada is my morning ritual. Soft, fluffy, perfectly sweet. I bring a box home every time I pass by the branch.",
    product: "Cream Cheese Ensaymada",
  },
  {
    id: 4,
    name: "Jay Villanueva",
    location: "Davao City",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    rating: 5,
    text: "Bento cakes as corporate gifts were a massive hit! Everyone loved the packaging and the flavors. Will definitely order again for our next event.",
    product: "Bento Cakes",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const go = (idx: number) => {
    setActive(idx);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000);
  };

  return (
    <section className="py-20 md:py-28 bg-warm-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-bold tracking-[0.22em] uppercase text-[11px] mb-3">What People Say</p>
          <h2 className="font-heading font-bold text-chocolate" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Loved by <span className="text-brand italic">Thousands</span>
          </h2>
        </motion.div>

        <div className="relative px-6 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg shadow-chocolate/5 border border-pink/20"
            >
              <div className="font-heading text-7xl text-pink/30 leading-none mb-2 select-none">&ldquo;</div>
              <p className="text-chocolate text-base sm:text-lg leading-relaxed mb-8 font-medium max-w-2xl">
                {testimonials[active].text}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-pink/30 shrink-0">
                  <Image src={testimonials[active].avatar} alt={testimonials[active].name} fill className="object-cover" sizes="56px" />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-chocolate">{testimonials[active].name}</p>
                  <p className="text-medium-gray text-xs">{testimonials[active].location}</p>
                  <div className="mt-1"><Stars count={testimonials[active].rating} /></div>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="text-[10px] text-medium-gray uppercase tracking-wider">Enjoyed</p>
                  <p className="text-xs font-bold text-brand mt-0.5">{testimonials[active].product}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => go((active - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-chocolate hover:text-brand hover:shadow-lg transition-all text-sm"
            aria-label="Previous"
          >←</button>
          <button
            onClick={() => go((active + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-chocolate hover:text-brand hover:shadow-lg transition-all text-sm"
            aria-label="Next"
          >→</button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-7">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? "w-8 h-2 bg-brand" : "w-2 h-2 bg-chocolate/15 hover:bg-brand/40"}`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
