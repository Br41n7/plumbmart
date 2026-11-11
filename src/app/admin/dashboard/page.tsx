import Link from "next/link";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Revenue", value: "₦4.8M", tone: "bg-blue-50 text-blue-700" },
    { label: "Orders", value: "467", tone: "bg-emerald-50 text-emerald-700" },
    { label: "Customers", value: "1,280", tone: "bg-violet-50 text-violet-700" },
    { label: "Low stock", value: "18", tone: "bg-amber-50 text-amber-700" },
  ];

  const tableRows = [
    ["#PLM-1042", "Ada Okafor", "₦98,500", "Processing"],
    ["#PLM-1041", "Tunde Adebisi", "₦176,250", "Shipped"],
    ["#PLM-1040", "Mariam Yusuf", "₦63,700", "Paid"],
  ];

  return (
    <main className="container py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Admin</div>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Dashboard</h1>
        </div>
        <Link href="/shop" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          View storefront
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${stat.tone}`}>{stat.label}</div>
            <div className="mt-4 text-3xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 text-xl font-bold text-slate-900">Recent orders</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 font-medium">Order</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Total</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(([order, customer, total, status]) => (
                <tr key={order} className="border-b border-slate-200 last:border-b-0">
                  <td className="py-3 font-medium text-slate-900">{order}</td>
                  <td className="py-3 text-slate-600">{customer}</td>
                  <td className="py-3 text-slate-600">{total}</td>
                  <td className="py-3"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
