import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck, Star, Truck } from "lucide-react";

import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { ProductCard } from "@/components/store/product-card";
import { formatCurrency, products } from "@/lib/store-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <main className="container py-12">
      <Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        Back to shop
      </Link>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="grid gap-8 p-6 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#12345c]">{product.category}</div>
              <h1 className="text-4xl font-black text-slate-900">{product.name}</h1>
            </div>

            <div className="flex items-center gap-3 text-sm text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold text-slate-900">{product.rating.toFixed(1)}</span>
              <span className="text-slate-500">({product.reviewCount} customer reviews)</span>
            </div>

            <div className="flex items-end gap-3">
              <div className="text-4xl font-black text-slate-900">{formatCurrency(product.priceInKobo)}</div>
              {product.comparePriceInKobo ? (
                <div className="text-lg text-slate-400 line-through">{formatCurrency(product.comparePriceInKobo)}</div>
              ) : null}
            </div>

            <p className="text-lg leading-8 text-slate-600">{product.description}</p>

            <div className="flex flex-wrap gap-3">
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">SKU: {product.sku}</div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="w-full md:max-w-[220px]">
                <AddToCartButton product={product} />
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                Save for later
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Truck className="mb-3 h-5 w-5 text-[#12345c]" />
                <div className="text-sm font-semibold text-slate-900">Fast dispatch</div>
                <div className="mt-1 text-xs text-slate-500">48hr delivery on most items</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <ShieldCheck className="mb-3 h-5 w-5 text-[#12345c]" />
                <div className="text-sm font-semibold text-slate-900">Quality guarantee</div>
                <div className="mt-1 text-xs text-slate-500">Certified commercial grade</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 text-lg font-bold text-[#12345c]">24/7</div>
                <div className="text-sm font-semibold text-slate-900">Support</div>
                <div className="mt-1 text-xs text-slate-500">Expert guidance available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Specifications</div>
          <div className="mt-6 space-y-3">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between border-b border-slate-200 pb-3 text-sm">
                <span className="text-slate-500">{spec.label}</span>
                <span className="font-semibold text-slate-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Related products</div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
