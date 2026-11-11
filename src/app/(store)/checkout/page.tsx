"use client";

import Link from "next/link";
import { useCartStore } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/store-data";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const deliveryFee = items.length > 0 ? 250000 : 0;
  const total = subtotal + deliveryFee;

  return (
    <main className="container py-12">
      <div className="mb-8">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Checkout</div>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Complete your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <form className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
              <input defaultValue="Ada" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
              <input defaultValue="Okafor" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
            <input defaultValue="ada@example.com" type="email" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
            <input defaultValue="08021234567" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Delivery address</label>
            <textarea defaultValue="12 Lekki Phase 1, Lagos" rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none focus:border-blue-200" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Delivery option</label>
            <select className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200">
              <option>Standard delivery</option>
              <option>Express delivery</option>
              <option>Pickup at warehouse</option>
            </select>
          </div>

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#071a2e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#12345c]">
            Place order
          </button>
        </form>

        <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Order review</h3>
          <div className="mt-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-slate-600">Your cart is empty. <Link href="/shop" className="font-semibold text-[#12345c]">Browse products</Link></div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4 text-sm">
                  <div>
                    <div className="font-medium text-slate-900">{item.product.name}</div>
                    <div className="text-slate-500">Qty: {item.quantity}</div>
                  </div>
                  <div className="font-semibold text-slate-900">{formatCurrency(item.product.priceInKobo * item.quantity)}</div>
                </div>
              ))
            )}
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex items-center justify-between"><span>Delivery</span><span>{formatCurrency(deliveryFee)}</span></div>
            <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-lg font-bold text-slate-900"><span>Total</span><span>{formatCurrency(total)}</span></div>
          </div>
        </aside>
      </div>
    </main>
  );
}
