const stats = [
  { value: "50K+", label: "active players" },
  { value: "6", label: "dedicated servers" },
  { value: "<50ms", label: "average ping" },
];

export function HeroSection() {
  return (
    <section id="top" className="px-5 pb-10 pt-8 sm:px-6 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-emerald-100 uppercase">
            Korea server officially here
          </div>

          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Adopt Me Korean Server.
            <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Faster, brighter, local.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Lower latency, a localized community, and a cleaner route into the world you already know.
            This recreation keeps the same single-page flow with a more atmospheric dark presentation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servers"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-cyan-50"
            >
              Join Korean Server
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Server Guide
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/6 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur"
              >
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-emerald-400/10 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/50 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,28,0.95),rgba(8,16,26,0.7))] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold tracking-[0.28em] text-cyan-200 uppercase">
                    Live status
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">Dedicated KR routes</div>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/12 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Online
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Primary region", "Seoul"],
                  ["Match quality", "Stable"],
                  ["Local chat", "Enabled"],
                  ["Guild mode", "Ready"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase">{label}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-white/65">Server pulse</div>
                    <div className="mt-1 text-xl font-semibold text-white">16,414 players right now</div>
                  </div>
                  <div className="rounded-full bg-cyan-300/15 px-3 py-1 text-sm font-semibold text-cyan-100">
                    Ping: 42ms
                  </div>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}