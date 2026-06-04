"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success";

const SUBJECTS = [
  "Product Inquiry",
  "Bulk / Corporate Orders",
  "Branch Information",
  "Feedback / Suggestion",
  "Partnership / Collaboration",
  "Other",
];

const socialLinks = [
  { name: "Facebook", handle: "@LuciaDulcePH", href: "https://facebook.com/LuciaDulcePH/" },
  { name: "Instagram", handle: "@luciadulceph", href: "https://instagram.com/luciadulceph" },
  { name: "TikTok", handle: "@luciadulceph", href: "https://tiktok.com/@luciadulceph" },
  { name: "YouTube", handle: "@luciadulcebakery", href: "https://youtube.com/@luciadulcebakery" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const update = (field: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1600));
    setFormState("success");
  };

  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero */}
        <section className="bg-brand relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #fce8ec 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-maroon-deep/50 blur-3xl" />
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <p className="text-gold/70 font-bold tracking-[0.22em] uppercase text-[11px] mb-4">Reach Out</p>
            <h1 className="font-heading font-bold text-cream mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              We&apos;d Love to <span className="text-gold italic">Hear from You</span>
            </h1>
            <p className="text-cream/65 text-base max-w-lg mx-auto">
              Have a question about our products, branches, or want to place a large order?
              Send us a message and we&apos;ll get back to you.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact form */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-24 bg-white rounded-3xl border border-pink/20 shadow-sm"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                        <span className="text-4xl">✅</span>
                      </div>
                      <h2 className="font-heading font-bold text-chocolate text-2xl mb-3">Message Sent!</h2>
                      <p className="text-medium-gray text-base max-w-sm mb-8">
                        Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => { setFormState("idle"); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }}
                        className="px-6 py-3 bg-brand text-cream font-bold rounded-full hover:bg-maroon-dark transition-colors"
                      >
                        Send Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="bg-white rounded-3xl p-8 sm:p-10 border border-pink/20 shadow-sm space-y-5"
                    >
                      <h2 className="font-heading font-bold text-chocolate text-xl mb-6">Send a Message</h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-chocolate/60 mb-2">
                            Your Name <span className="text-brand">*</span>
                          </label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="Maria Santos"
                            className="w-full px-4 py-3 bg-warm-gray border border-transparent rounded-xl text-sm text-chocolate placeholder-medium-gray focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/30 focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-chocolate/60 mb-2">
                            Phone Number
                          </label>
                          <input
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="+63 9XX XXX XXXX"
                            className="w-full px-4 py-3 bg-warm-gray border border-transparent rounded-xl text-sm text-chocolate placeholder-medium-gray focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/30 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-chocolate/60 mb-2">
                          Email Address <span className="text-brand">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 bg-warm-gray border border-transparent rounded-xl text-sm text-chocolate placeholder-medium-gray focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/30 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-chocolate/60 mb-2">
                          Subject <span className="text-brand">*</span>
                        </label>
                        <select
                          required
                          value={form.subject}
                          onChange={(e) => update("subject", e.target.value)}
                          className="w-full px-4 py-3 bg-warm-gray border border-transparent rounded-xl text-sm text-chocolate focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/30 focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select a topic…</option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-chocolate/60 mb-2">
                          Message <span className="text-brand">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          placeholder="Tell us how we can help…"
                          className="w-full px-4 py-3 bg-warm-gray border border-transparent rounded-xl text-sm text-chocolate placeholder-medium-gray focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/30 focus:bg-white transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full py-4 bg-brand text-cream font-bold rounded-full hover:bg-maroon-dark transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                      >
                        {formState === "submitting" ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full"
                            />
                            Sending…
                          </>
                        ) : (
                          "Send Message →"
                        )}
                      </button>

                      <p className="text-center text-xs text-medium-gray">
                        This is an inquiry form only. We do not process online orders.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact info sidebar */}
              <div className="space-y-6">
                {/* Quick contact */}
                <div className="bg-white rounded-2xl p-6 border border-pink/15 shadow-sm">
                  <h3 className="font-heading font-bold text-chocolate text-lg mb-5">Quick Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">Phone</p>
                      <a href="tel:+639155563335" className="text-chocolate font-semibold hover:text-brand transition-colors">
                        +63 915 556 3335
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">Email</p>
                      <a href="mailto:hello@luciadulce.com" className="text-chocolate font-semibold hover:text-brand transition-colors text-sm">
                        hello@luciadulce.com
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">Locations</p>
                      <Link href="/locations" className="text-chocolate font-semibold hover:text-brand transition-colors text-sm">
                        9 branches across Mindanao →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-white rounded-2xl p-6 border border-pink/15 shadow-sm">
                  <h3 className="font-heading font-bold text-chocolate text-lg mb-5">Follow Us</h3>
                  <div className="space-y-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group"
                      >
                        <span className="font-medium text-chocolate text-sm group-hover:text-brand transition-colors">{s.name}</span>
                        <span className="text-medium-gray text-xs group-hover:text-gold transition-colors">{s.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className="bg-warm-gray rounded-2xl p-5 border border-chocolate/5">
                  <p className="text-xs font-bold uppercase tracking-wider text-chocolate/50 mb-2">Please Note</p>
                  <p className="text-dark-gray text-sm leading-relaxed">
                    Lucia Dulce is a physical bakery — we do not process online orders.
                    Visit any of our branches or call us directly to purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
