import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-slate-900">
              P
            </div>
            <div>
              <div className="text-lg font-bold text-white">PlumbMart</div>
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">Wholesale Supply</div>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-400">
            Premium plumbing materials for contractors, project managers, and homeowners across Nigeria.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Support</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Delivery & returns</li>
            <li>Trade account support</li>
            <li>Order tracking</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>+234 (0) 800 123 4567</li>
            <li>hello@plumbmart.ng</li>
            <li>8 Marina Road, Lagos</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 PlumbMart. All rights reserved.
      </div>
    </footer>
  );
}
