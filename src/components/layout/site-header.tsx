"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

import { NAV_LINKS } from "@/lib/constants";
import { useCartStore } from "@/hooks/use-cart";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="bg-[#071a2e] px-4 py-2 text-center text-sm font-medium text-white">
        Free delivery on orders over ₦50,000 • Wholesale rates available for trade buyers
      </div>

      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071a2e] text-lg font-bold text-white">
            P
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide text-slate-900">PlumbMart</div>
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Wholesale Supply</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#071a2e]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login" className="text-sm font-medium text-slate-600 transition hover:text-[#071a2e]">
            Account
          </Link>
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart ({itemCount})
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="container flex flex-col gap-2 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700"
            >
              Account
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl bg-[#071a2e] px-3 py-2 text-sm font-medium text-white"
            >
              Cart ({itemCount})
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
