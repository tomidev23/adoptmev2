const servers = [
  {
    name: "Seoul Main",
    type: "Social",
    region: "Korea",
    badge: "Official",
    players: "16,414",
    ping: "90",
    description:
      "Main gateway for the Korean community with a steady route, soft latency, and a polished default experience.",
  },
  {
    name: "Trading Hub",
    type: "Trade",
    region: "Seoul",
    badge: "Active",
    players: "32,038",
    ping: "57",
    description:
      "A busy marketplace server for players who want more social energy, faster exchanges, and dense activity.",
  },
  {
    name: "Busan Gateway",
    type: "Casual",
    region: "KR",
    badge: "Friendly",
    players: "6,701",
    ping: "82",
    description:
      "An easygoing place for relaxed play sessions, light roleplay, and a softer regional connection.",
  },
  {
    name: "Daegu Central",
    type: "Stable",
    region: "Grind",
    badge: "Reliable",
    players: "8,310",
    ping: "14",
    description:
      "A dependable route for long play sessions with consistent performance and a dependable join flow.",
  },
  {
    name: "Incheon Port",
    type: "Beginner",
    region: "Safe",
    badge: "Moderated",
    players: "5,001",
    ping: "24",
    description:
      "A friendly onboarding server with room for new players, simpler chat pacing, and a calm entry point.",
  },
  {
    name: "Asia Pacific",
    type: "Global",
    region: "Tokyo",
    badge: "Network",
    players: "4,111",
    ping: "54",
    description:
      "A wider regional route for players who want to connect beyond Korea with a fast multi-region backbone.",
  },
];

function ServerCard({
  name,
  type,
  region,
  badge,
  players,
  ping,
  description,
}: (typeof servers)[number]) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_25px_90px_rgba(0,0,0,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.07]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-60" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-white/55">
            <span>{type.toUpperCase()}</span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>{region.toUpperCase()}</span>
          </div>
          <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] text-white">
            {name}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-right">
          <div className="text-[0.65rem] font-semibold tracking-[0.24em] text-white/45 uppercase">Ping</div>
          <div className="mt-1 text-lg font-semibold text-white">{ping}ms</div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-slate-950/25 p-4">
        <div>
          <div className="text-xs font-semibold tracking-[0.24em] text-white/45 uppercase">Current players</div>
          <div className="mt-2 text-2xl font-semibold text-white">{players}</div>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-500 to-emerald-300 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
          +30
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {[badge, type, region].map((pill) => (
          <span
            key={pill}
            className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-white/72 uppercase"
          >
            {pill}
          </span>
        ))}
      </div>

      <p className="mt-5 min-h-24 text-sm leading-7 text-white/68">{description}</p>

      <button className="mt-6 inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-300/15 hover:text-cyan-50">
        Join
      </button>
    </article>
  );
}

export function ServerSection() {
  return (
    <section id="servers" className="px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.28em] text-cyan-200 uppercase">Server list</div>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Discover Korean servers
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Optimized routes for Korea and nearby regions. The layout stays close to the source inspiration:
            big headline, compact intro, and a dense grid of live server cards.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servers.map((server) => (
            <ServerCard key={server.name} {...server} />
          ))}
        </div>
      </div>
    </section>
  );
}