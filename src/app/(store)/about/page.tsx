export default function AboutPage() {
  return (
    <main className="container py-12">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">About us</div>
          <h1 className="mt-3 text-4xl font-black text-slate-900">A dependable plumbing partner for modern projects.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Since 2012, PlumbMart has helped homes, contractors and facilities teams source quality plumbing supplies with timely delivery and practical advice.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["5000+", "Orders fulfilled"],
            ["40+", "Supplier partnerships"],
            ["99%", "On-time delivery rate"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-6 text-center">
              <div className="text-3xl font-black text-[#071a2e]">{value}</div>
              <div className="mt-2 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">What we deliver</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Expert product sourcing for residential and commercial projects</li>
              <li>• Quality-controlled inventory across key plumbing categories</li>
              <li>• Responsive support for contractors, installers and facility teams</li>
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-[#071a2e] p-6 text-white">
            <h2 className="text-2xl font-bold">Our promise</h2>
            <p className="mt-4 text-slate-200 leading-7">
              We combine product reliability, practical expertise and dependable delivery so builders and homeowners can move faster with greater confidence.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
