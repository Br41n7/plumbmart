import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-900">
      <SiteHeader />
      <div>{children}</div>
      <SiteFooter />
    </div>
  );
}
