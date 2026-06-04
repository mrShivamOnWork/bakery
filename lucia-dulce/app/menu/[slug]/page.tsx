import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import ProductCard from "@/components/products/ProductCard";
import { products, getProductBySlug } from "@/lib/data/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="pt-28 bg-cream min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-medium-gray">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <span>/</span>
            <Link href="/menu" className="hover:text-brand transition-colors">Menu</Link>
            <span>/</span>
            <Link href={`/menu?category=${product.categorySlug}`} className="hover:text-brand transition-colors">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-chocolate font-medium truncate">{product.name}</span>
          </nav>
        </div>

        {/* Main content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="sticky top-32">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-chocolate/15 bg-warm-gray">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.tags?.includes("best-seller") && (
                  <div className="absolute top-5 left-5">
                    <span className="bg-brand text-cream text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow">
                      Best Seller
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div>
              <Link
                href={`/menu?category=${product.categorySlug}`}
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gold hover:text-gold-dark transition-colors mb-4"
              >
                ← {product.category}
              </Link>

              <h1
                className="font-heading font-bold text-chocolate mb-4 leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-heading font-bold text-3xl text-brand">
                  {product.priceRange ?? `₱${product.price.toLocaleString()}`}
                </span>
                {product.priceRange && (
                  <span className="text-medium-gray text-sm">depending on size</span>
                )}
              </div>

              {/* Description */}
              <p className="text-dark-gray text-base leading-relaxed mb-8 border-b border-chocolate/8 pb-8">
                {product.description}
              </p>

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-chocolate/50 mb-3">
                    Available Sizes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <div
                        key={size.label}
                        className="flex items-center gap-2 bg-warm-gray rounded-xl px-4 py-2.5 border border-chocolate/8"
                      >
                        <span className="font-medium text-chocolate text-sm">{size.label}</span>
                        <span className="text-brand font-bold text-sm">₱{size.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Details grid */}
              {(product.ingredients || product.storage) && (
                <div className="space-y-4 mb-8 bg-warm-gray rounded-2xl p-5">
                  {product.ingredients && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-medium-gray mb-1">
                        Ingredients
                      </p>
                      <p className="text-chocolate/80 text-sm">{product.ingredients}</p>
                    </div>
                  )}
                  {product.storage && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-medium-gray mb-1">
                        Storage
                      </p>
                      <p className="text-chocolate/80 text-sm">{product.storage}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider bg-pink/30 text-brand px-3 py-1 rounded-full"
                    >
                      {tag.replace("-", " ")}
                    </span>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/locations"
                  className="flex-1 text-center px-6 py-4 bg-brand text-cream font-bold rounded-full hover:bg-maroon-dark transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Find a Branch
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center px-6 py-4 bg-white text-chocolate font-bold rounded-full border-2 border-chocolate/15 hover:border-gold hover:text-gold transition-all"
                >
                  Contact Us
                </Link>
              </div>

              {/* Note */}
              <p className="text-xs text-medium-gray text-center mt-4">
                Visit any of our 9 branches to order. No online ordering.
              </p>
            </div>
          </div>
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section className="py-16 bg-warm-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-8">
                <h2 className="font-heading font-bold text-chocolate text-2xl sm:text-3xl">
                  More from <span className="text-brand italic">{product.category}</span>
                </h2>
                <Link
                  href={`/menu?category=${product.categorySlug}`}
                  className="text-sm font-semibold text-brand hover:text-gold transition-colors hidden sm:flex items-center gap-1"
                >
                  See All →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
