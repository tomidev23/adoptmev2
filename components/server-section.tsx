import { SERVERS_DATA, ServerData } from "@/lib/servers";

function getPingBadge(ping: number) {
  if (ping < 50) {
    return {
      text: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/25",
      dot: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
    };
  }
  if (ping < 90) {
    return {
      text: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/25",
      dot: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
    };
  }
  return {
    text: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/25",
    dot: "bg-rose-400 shadow-[0_0_8px_#f43f5e]",
  };
}

function ServerCard({ server }: { server: ServerData }) {
  const pingStyle = getPingBadge(server.ping);

  return (
    <article className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0f1122]/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e91e8c]/40 hover:shadow-[0_25px_60px_rgba(233,30,140,0.15)]">
      {/* Top subtle highlight line */}
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#e91e8c]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Card Header: Players Count + Colored Ping */}
        <div className="flex items-center justify-between text-sm pb-4 border-b border-white/[0.06]">
          {/* Titik hijau + jumlah pemain */}
          <div className="flex items-center gap-2 text-white/80 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span className="font-bold text-white tabular-nums">{server.players}</span>
            <span className="text-white/55 text-xs">pemain online</span>
          </div>

          {/* Ping berwarna (hijau/kuning/merah sesuai nilai) */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold tabular-nums ${pingStyle.text} ${pingStyle.bg} ${pingStyle.border}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${pingStyle.dot}`} />
            <span>{server.ping}ms</span>
          </div>
        </div>

        {/* 6 Avatar Bulat (gradient + inisial, bukan foto) dengan bubble "+30" */}
        <div className="my-6">
          <div className="grid grid-cols-3 gap-3 justify-items-center">
            {server.avatars.map((av, idx) => (
              <div
                key={idx}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 border border-white/10 bg-white/[0.04] shadow-md transition-transform duration-200 group-hover:scale-105"
              >
                <div
                  className={`w-full h-full rounded-full bg-gradient-to-br ${av.gradient} flex items-center justify-center text-white font-extrabold text-xs sm:text-sm tracking-wider shadow-inner`}
                >
                  {av.initials}
                </div>
              </div>
            ))}

            {/* Bubble "+30" sebagai avatar ke-6 */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 border border-white/10 bg-white/[0.04] shadow-md transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-white/[0.08] hover:bg-white/[0.12] flex items-center justify-center text-[#e91e8c] font-black text-xs sm:text-sm tracking-wider">
                +30
              </div>
            </div>
          </div>
        </div>

        {/* Ikon Persegi Berwarna + Nama Server */}
        <div className="flex items-center gap-3 mt-4">
          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${server.iconBg} flex items-center justify-center text-white shadow-lg shrink-0`}
          >
            {/* Custom stylized server emblem */}
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-[2.2]"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          </div>

          <div>
            <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-white transition-colors">
              {server.name}
            </h3>
            <span className="text-[11px] text-white/45 font-semibold uppercase tracking-wider">
              {server.region}
            </span>
          </div>
        </div>

        {/* Tag Kecil (SOCIAL, TRADE, CASUAL...) */}
        <div className="mt-3 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border border-[#e91e8c]/30 bg-[#e91e8c]/10 text-[#e91e8c]">
            {server.tag}
          </span>
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10 bg-white/[0.04] text-white/60">
            DEDICATED
          </span>
        </div>

        {/* Deskripsi Singkat */}
        <p className="mt-4 text-sm text-white/70 leading-relaxed min-h-[4.2rem]">
          {server.description}
        </p>
      </div>

      {/* Tombol Pink "JOIN" dengan link "#" */}
      <div className="mt-6 pt-4 border-t border-white/[0.06]">
        <a
          href="#"
          className="w-full py-3.5 px-6 rounded-full bg-[#e91e8c] hover:bg-[#d8157e] text-white font-black text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(233,30,140,0.35)] hover:shadow-[0_0_30px_rgba(233,30,140,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span>JOIN</span>
        </a>
      </div>
    </article>
  );
}

export function ServerSection() {
  return (
    <section id="servers" className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-7xl mx-auto">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -top-40 right-10 w-96 h-96 rounded-full bg-[#e91e8c]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px]" />

      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-block text-xs font-black tracking-widest text-[#e91e8c] uppercase mb-3">
          SERVER LIST
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Discover Servers
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
          Pilih dari 6 server terdedikasi yang tersebar di titik hub utama Asia Tenggara.
          Dapatkan latensi terbaik dan suasana komunitas yang paling cocok untuk gaya bermainmu.
        </p>
      </div>

      {/* Grid 3 Kolom (1 Kolom di Mobile) berisi 6 Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVERS_DATA.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>
    </section>
  );
}