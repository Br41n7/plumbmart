"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCartStore } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/store-data";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const deliveryFee = items.length > 0 ? 250000 : 0;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <main className="container py-16">
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
          <h1 className="text-3xl font-black text-slate-900">Your cart is empty</h1>
          <p className="mt-3 text-slate-600">Add a few plumbing essentials to get started.</p>
          <Link href="/shop" className="mt-6 inline-flex rounded-full bg-[#071a2e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#12345c]">
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-12">
      <div className="mb-8">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Cart</div>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Your order summary</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
              <img src={item.product.image} alt={item.product.name} className="h-28 w-full rounded-2xl object-cover sm:w-32" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] text-slate-500">{item.product.category}</div>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">{item.product.name}</h2>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
                    <button type="button" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="rounded-full p-2 hover:bg-white">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-8 text-center text-sm font-medium text-slate-900">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full p-2 hover:bg-white">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-xl font-bold text-slate-900">{formatCurrency(item.product.priceInKobo * item.quantity)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Order totals</h3>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center justify-between text-slate-600">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Delivery</span>
              <span>{formatCurrency(deliveryFee)}</span>
            </div>
            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
          <Link href="/checkout" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#071a2e] px-4 py-3 text-sm font-semibold text-white hover:bg-[#12345c]">
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}
