const navigation = [
  { label: "Server List", href: "#servers" },
  { label: "FAQ", href: "#faq" },
  { label: "Community", href: "#community" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-500 to-emerald-400 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
            KR
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-heading)] text-sm font-semibold tracking-[0.24em] text-white/80 uppercase">
              Korean Server
            </span>
            <span className="text-xs text-white/55">Adopt-style community hub</span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/72 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#servers"
          className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/12 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
        >
          Explore
        </a>
      </div>
    </header>
  );
}