import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Warehouse } from "lucide-react";

import { ProductCard } from "@/components/store/product-card";
import { brands, categories, products, testimonials } from "@/lib/store-data";

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.isFeatured);
  const bestSellers = products.filter((product) => product.isBestSeller);

  return (
    <main>
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(29,99,212,0.12),_transparent_35%),linear-gradient(180deg,#f8fbff,#edf3fb)]">
        <div className="container grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#12345c]">
              Trusted by contractors & project managers
            </div>
            <h1 className="max-w-xl text-balance text-4xl font-black leading-tight text-[#071a2e] md:text-5xl lg:text-6xl">
              Quality Plumbing Materials. Wholesale Prices.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Discover reliable plumbing supplies, from pipes and fittings to valves, pumps and sanitary ware. Get quality products at competitive prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-[#071a2e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12345c]"
              >
                Shop Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Categories
              </Link>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl font-black text-[#071a2e]">3k+</div>
                <div className="text-sm text-slate-500">Products</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#071a2e]">98%</div>
                <div className="text-sm text-slate-500">Repeat buyers</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#071a2e]">24h</div>
                <div className="text-sm text-slate-500">Dispatch</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[#dfeeff] blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(10,25,55,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
                alt="Plumbing materials and pipes"
                className="h-[550px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-emerald-200 bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Same-day dispatch</div>
                  <div className="text-xs text-slate-500">Orders before 2pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Popular Categories</div>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore our essentials</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-[#12345c] hover:text-[#071a2e]">
            View all products →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/shop?category=${category.slug}`} className="group block overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className={`bg-gradient-to-br ${category.accent} p-3`}>
                <img src={category.image} alt={category.name} className="h-52 w-full rounded-[1.25rem] object-cover" />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Category</div>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Featured products</div>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Most sought after</h2>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="rounded-[2rem] bg-[#071a2e] p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Why choose us</div>
              <h2 className="mt-3 text-3xl font-bold">Built for reliability, speed and value.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Warehouse, title: "Bulk inventory", text: "Large-volume stock for ongoing projects and maintenance." },
                { icon: Truck, title: "Fast delivery", text: "Same-day dispatch on priority orders across major cities." },
                { icon: ShieldCheck, title: "Quality assurance", text: "Top tier products that meet trade and compliance standards." },
                { icon: CheckCircle2, title: "Expert support", text: "Clear recommendations from product specialists and installers." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Best sellers</div>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Most valuable everyday picks</h2>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Trusted by leading brands</div>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Partnered with dependable manufacturers</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand} className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-lg font-bold text-slate-700 shadow-sm">
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Customer testimonials</div>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Trusted by businesses, homes and installers</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-amber-500">★★★★★</div>
              <p className="text-base leading-7 text-slate-700">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Newsletter</div>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Get weekly deals and stock alerts.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-200"
              />
              <button type="button" className="h-12 rounded-full bg-[#071a2e] px-6 text-sm font-semibold text-white transition hover:bg-[#12345c]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
