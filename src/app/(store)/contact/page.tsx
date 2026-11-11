export default function ContactPage() {
  return (
    <main className="container py-12">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-[#071a2e] p-8 text-white shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Contact</div>
          <h1 className="mt-3 text-4xl font-black">Speak with our team.</h1>
          <div className="mt-8 space-y-4 text-slate-200">
            <div>+234 (0) 800 123 4567</div>
            <div>hello@plumbmart.ng</div>
            <div>8 Marina Road, Lagos, Nigeria</div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
              <input className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
              <input type="email" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">How can we help?</label>
              <textarea rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none focus:border-blue-200" />
            </div>
            <button type="button" className="inline-flex rounded-full bg-[#071a2e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#12345c]">
              Send message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
