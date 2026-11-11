"use client";

import Link from "next/link";
import { Star } from "lucide-react";

import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { formatCurrency, type StoreProduct } from "@/lib/store-data";

export function ProductCard({ product }: { product: StoreProduct }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-[#dff7f4] px-2.5 py-1 text-[0.7rem] font-semibold text-[#0f766e]">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.12em] text-slate-500">
          <span>{product.category}</span>
          <span>{product.brand}</span>
        </div>

        <Link href={`/products/${product.slug}`} className="block text-xl font-semibold text-slate-900 hover:text-[#12345c]">
          {product.name}
        </Link>

        <p className="text-sm leading-6 text-slate-600">{product.shortDescription}</p>

        <div className="flex items-center gap-2 text-sm text-amber-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="font-medium text-slate-800">{product.rating.toFixed(1)}</span>
          <span className="text-slate-500">({product.reviewCount} reviews)</span>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-2xl font-bold text-slate-900">{formatCurrency(product.priceInKobo)}</div>
            {product.comparePriceInKobo ? (
              <div className="text-sm text-slate-400 line-through">
                {formatCurrency(product.comparePriceInKobo)}
              </div>
            ) : null}
          </div>
          <div className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            View details
          </Link>
          <div className="w-40">
            <AddToCartButton product={product} variant="compact" />
          </div>
        </div>
      </div>
    </article>
  );
}
