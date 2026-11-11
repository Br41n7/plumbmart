export default function LoginPage() {
  return (
    <main className="container flex min-h-[70vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12345c]">Account</div>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Log in</h1>
        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" defaultValue="buyer@example.com" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" defaultValue="password123" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-900 outline-none focus:border-blue-200" />
          </div>
          <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-[#071a2e] px-4 py-3 text-sm font-semibold text-white hover:bg-[#12345c]">
            Sign in
          </button>
        </div>
        <div className="mt-5 text-center text-sm text-slate-600">
          New here? <a href="/register" className="font-semibold text-[#12345c]">Create an account</a>
        </div>
      </div>
    </main>
  );
}
