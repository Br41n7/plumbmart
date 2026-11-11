import Link from "next/link";

import { ProductCard } from "@/components/store/product-card";
import { categories, products } from "@/lib/store-data";

export default function ShopPage() {
  return (
    <main className="container py-12">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Shop</div>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Plumbing essentials</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
          {products.length} products available
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[290px_1fr]">
        <aside className="space-y-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Categories</div>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/shop?category=${category.slug}`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <span>{category.name}</span>
                  <span className="text-slate-400">›</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Price range</div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-200 px-3 py-2">Under ₦20,000</div>
              <div className="rounded-xl border border-slate-200 px-3 py-2">₦20,000 - ₦60,000</div>
              <div className="rounded-xl border border-slate-200 px-3 py-2">₦60,000 - ₦150,000</div>
              <div className="rounded-xl border border-slate-200 px-3 py-2">Above ₦150,000</div>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Availability</div>
            <div className="space-y-2 text-sm text-slate-600">
              <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2"><input type="checkbox" /> In stock</label>
              <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2"><input type="checkbox" /> On sale</label>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-sm text-slate-500">Search</span>
              <input
                type="search"
                placeholder="Search products"
                className="w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
            <select className="h-12 rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none">
              <option>Sort: featured</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
