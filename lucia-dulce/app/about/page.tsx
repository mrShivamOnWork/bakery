import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The story of Lucia Dulce Bakery — handcrafted cakes, ensaymada, and Filipino pastries made with love in Davao since day one.",
};

const values = [
  { icon: "🫶", title: "Made with Love", desc: "Every creation is handcrafted with meticulous care and genuine heart — never mass-produced." },
  { icon: "🌿", title: "Finest Ingredients", desc: "We never compromise. Only the best quality ingredients go into everything we bake." },
  { icon: "🎉", title: "Every Day Celebrated", desc: "We believe every moment — big or small — deserves something special and sweet." },
  { icon: "🏠", title: "Family Heritage", desc: "Rooted in Filipino baking traditions, we honour the craft passed down through generations." },
  { icon: "🌱", title: "Community Roots", desc: "With 9 branches across Mindanao, we are proud members of the communities we serve." },
  { icon: "⭐", title: "Quality Promise", desc: "Every cake, every ensaymada, every pastry — crafted to the same unwavering standard." },
];

const milestones = [
  {
    period: "The Beginning",
    title: "A Dream Turns Real",
    desc: "Lucia Dulce opened its first cake shop in Tagum and Digos, introducing the iconic Yema Classic — a recipe born from love and Filipino tradition.",
  },
  {
    period: "Early Growth",
    title: "Expanding the Collection",
    desc: "Encouraged by loyal customers, we expanded our product line to include premium celebration cakes, multiple ensaymada flavors, and fresh breads.",
  },
  {
    period: "Innovation",
    title: "The Bento Cake Era",
    desc: "We launched the now-beloved Bento Cakes — 4-inch personal cakes that became a gift sensation across Mindanao, perfect for any occasion.",
  },
  {
    period: "Today",
    title: "9 Branches & Growing",
    desc: "From a single shop to 9 branches across Davao City, Tagum, Digos, and Davao Del Sur — Lucia Dulce continues to celebrate every day with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero */}
        <section className="relative bg-brand py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-brand via-maroon-dark to-maroon-deep opacity-90" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, #fce8ec 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-maroon-deep/50 blur-3xl" />
            <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold/70 font-bold tracking-[0.22em] uppercase text-[11px] mb-4">
              Who We Are
            </p>
            <h1
              className="font-heading font-bold text-cream mb-6 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Baked with Purpose,<br />
              <span className="text-gold italic">Shared with Love</span>
            </h1>
            <p className="text-cream/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We started as a small cake shop with a big dream — to make every Filipino
              celebration sweeter. Today, 9 branches later, that dream is still baked into
              every product we make.
            </p>
          </div>
        </section>

        {/* Story section */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative h-[420px] sm:h-[500px]">
                  <div className="absolute top-0 left-0 w-[72%] h-[85%] rounded-3xl overflow-hidden shadow-2xl shadow-chocolate/15">
                    <Image
                      src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=900&q=85"
                      alt="Lucia Dulce artisan bakers"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 60vw, 30vw"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-[46%] h-[52%] rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
                    <Image
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=85"
                      alt="Freshly baked pastries"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 40vw, 20vw"
                    />
                  </div>
                  <div className="absolute -top-4 right-[25%] w-20 h-20 bg-brand rounded-full flex flex-col items-center justify-center shadow-lg z-10">
                    <span className="font-heading font-black text-cream text-2xl leading-none">10+</span>
                    <span className="text-cream/70 text-[8px] uppercase tracking-wider">Years</span>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-gold font-bold tracking-[0.22em] uppercase text-[11px] mb-3">Our Story</p>
                <h2
                  className="font-heading font-bold text-chocolate mb-6 leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  A Story of Passion,<br />
                  <span className="text-brand italic">Flour & Love</span>
                </h2>
                <div className="space-y-4 text-dark-gray leading-relaxed text-[15px] mb-8">
                  <p>
                    Lucia Dulce began as a cherished cake shop in Tagum and Digos — a dream turned
                    reality through passion, flour, and love. What started with our signature
                    handcrafted yema cakes and pillowy ensaymadas has grown into a beloved
                    brand across Mindanao.
                  </p>
                  <p>
                    Our mission has never changed:{" "}
                    <em className="text-chocolate font-semibold not-italic">
                      &ldquo;To make every day a celebration, one cake, one loaf, and one smile at a time.&rdquo;
                    </em>
                  </p>
                  <p>
                    Rooted in Filipino baking tradition, every product is lovingly handmade with
                    the finest ingredients and meticulous care — because you deserve nothing less.
                  </p>
                </div>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-cream font-bold text-sm rounded-full hover:bg-maroon-dark transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Find Our Branches →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-warm-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold font-bold tracking-[0.22em] uppercase text-[11px] mb-3">Our Journey</p>
              <h2
                className="font-heading font-bold text-chocolate"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                How We <span className="text-brand italic">Got Here</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-brand via-gold to-gold/20 hidden sm:block" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={m.title} className="flex gap-6">
                    <div className="relative hidden sm:flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-brand text-cream flex items-center justify-center font-heading font-bold text-sm shrink-0 shadow-md z-10">
                        {i + 1}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-chocolate/5 hover:shadow-md hover:border-pink/20 transition-all">
                      <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1">{m.period}</p>
                      <h3 className="font-heading font-bold text-chocolate text-lg mb-2">{m.title}</h3>
                      <p className="text-dark-gray text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold font-bold tracking-[0.22em] uppercase text-[11px] mb-3">What We Believe</p>
              <h2
                className="font-heading font-bold text-chocolate"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Our <span className="text-brand italic">Core Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-warm-gray rounded-2xl p-6 hover:bg-pink-light transition-colors border border-transparent hover:border-pink/30">
                  <span className="text-4xl block mb-4">{v.icon}</span>
                  <h3 className="font-heading font-bold text-chocolate text-lg mb-2">{v.title}</h3>
                  <p className="text-medium-gray text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #fce8ec 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <h2
              className="font-heading font-bold text-cream mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Ready to taste the difference?
            </h2>
            <p className="text-cream/70 text-base mb-8 max-w-xl mx-auto">
              Visit any of our 9 branches across Davao City, Tagum, Digos, and Davao Del Sur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/locations" className="px-8 py-4 bg-gold text-white font-bold rounded-full hover:bg-gold-dark transition-all shadow-lg">
                Find a Branch
              </Link>
              <Link href="/menu" className="px-8 py-4 bg-white/10 text-cream font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                Browse the Menu
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
