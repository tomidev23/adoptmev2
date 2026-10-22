export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#0a0b14] pt-8 pb-16 sm:py-20 lg:py-28"
    >
      {/* 1. Illustration Background: CSS Gradient + Low-Poly SVG Mountains and Crystals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Ambient Radial Color Gradients (Green to Purple) */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[130px]" />
        <div className="absolute top-1/4 right-1/4 translate-x-1/2 w-[800px] h-[700px] rounded-full bg-purple-600/25 blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-indigo-700/20 blur-[150px]" />

        {/* Low-Poly Geometric Vector Art (Custom SVG) */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full opacity-65 mix-blend-screen"
        >
          <defs>
            {/* Emerald Gradient */}
            <linearGradient id="poly-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.3" />
            </linearGradient>

            {/* Purple / Violet Gradient */}
            <linearGradient id="poly-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.3" />
            </linearGradient>

            {/* Cyan Accent Gradient */}
            <linearGradient id="poly-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0f766e" stopOpacity="0.25" />
            </linearGradient>

            {/* Magenta Accent Gradient */}
            <linearGradient id="poly-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e91e8c" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#701a75" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Left Low-Poly Mountain Range (Green & Teal Tones) */}
          <g opacity="0.75">
            <polygon points="0,750 140,560 260,780" fill="url(#poly-green)" fillOpacity="0.5" />
            <polygon points="140,560 310,480 260,780" fill="#059669" fillOpacity="0.45" />
            <polygon points="310,480 430,640 260,780" fill="#047857" fillOpacity="0.6" />
            <polygon points="310,480 390,390 430,640" fill="url(#poly-cyan)" fillOpacity="0.6" />
            <polygon points="390,390 540,510 430,640" fill="#10b981" fillOpacity="0.5" />
            <polygon points="430,640 540,510 590,750" fill="#064e3b" fillOpacity="0.7" />
            <polygon points="0,900 0,750 260,780" fill="#022c22" fillOpacity="0.7" />
            <polygon points="0,900 260,780 590,750" fill="#031f17" fillOpacity="0.8" />
          </g>

          {/* Right Low-Poly Mountain Range (Purple & Magenta Tones) */}
          <g opacity="0.8">
            <polygon points="1440,780 1310,540 1190,760" fill="url(#poly-purple)" fillOpacity="0.55" />
            <polygon points="1310,540 1150,450 1190,760" fill="#9333ea" fillOpacity="0.5" />
            <polygon points="1150,450 1020,610 1190,760" fill="#7c3aed" fillOpacity="0.65" />
            <polygon points="1150,450 1060,370 1020,610" fill="url(#poly-magenta)" fillOpacity="0.6" />
            <polygon points="1060,370 920,490 1020,610" fill="#c026d3" fillOpacity="0.45" />
            <polygon points="1020,610 920,490 870,740" fill="#581c87" fillOpacity="0.75" />
            <polygon points="1440,900 1440,780 1190,760" fill="#2e1065" fillOpacity="0.85" />
            <polygon points="1440,900 1190,760 870,740" fill="#1e1b4b" fillOpacity="0.9" />
          </g>

          {/* Center Mid-ground Low-Poly Crest connecting Green & Purple */}
          <g opacity="0.65">
            <polygon points="540,510 720,410 650,680" fill="#14b8a6" fillOpacity="0.4" />
            <polygon points="720,410 920,490 790,690" fill="#8b5cf6" fillOpacity="0.4" />
            <polygon points="650,680 720,410 790,690" fill="#6366f1" fillOpacity="0.5" />
            <polygon points="590,750 650,680 790,690" fill="#0f172a" fillOpacity="0.8" />
            <polygon points="790,690 870,740 590,750" fill="#090d16" fillOpacity="0.9" />
          </g>

          {/* Floating Low-Poly Geometric Crystals / Polyhedrons */}
          {/* Crystal 1 (Left Upper - Teal/Green) */}
          <g opacity="0.85" transform="translate(180, 220)">
            <polygon points="40,0 75,45 40,90 5,45" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
            <polygon points="40,0 75,45 40,40" fill="#34d399" fillOpacity="0.55" />
            <polygon points="40,0 5,45 40,40" fill="#059669" fillOpacity="0.65" />
            <polygon points="40,40 75,45 40,90" fill="#047857" fillOpacity="0.75" />
            <polygon points="40,40 5,45 40,90" fill="#065f46" fillOpacity="0.85" />
          </g>

          {/* Crystal 2 (Right Upper - Purple/Pink) */}
          <g opacity="0.9" transform="translate(1220, 200)">
            <polygon points="45,0 85,50 45,100 5,50" fill="none" stroke="#e91e8c" strokeWidth="1" strokeOpacity="0.4" />
            <polygon points="45,0 85,50 45,45" fill="#f43f5e" fillOpacity="0.55" />
            <polygon points="45,0 5,50 45,45" fill="#c026d3" fillOpacity="0.65" />
            <polygon points="45,45 85,50 45,100" fill="#9333ea" fillOpacity="0.75" />
            <polygon points="45,45 5,50 45,100" fill="#701a75" fillOpacity="0.85" />
          </g>

          {/* Crystal 3 (Center Top Small Shard) */}
          <g opacity="0.7" transform="translate(710, 110)">
            <polygon points="20,0 35,25 20,50 5,25" fill="#38bdf8" fillOpacity="0.4" />
            <polygon points="20,0 5,25 20,50" fill="#818cf8" fillOpacity="0.6" />
          </g>

          {/* Floating Small Diamond Shards */}
          <polygon points="120,380 128,395 120,410 112,395" fill="#34d399" fillOpacity="0.6" />
          <polygon points="280,180 290,195 280,210 270,195" fill="#10b981" fillOpacity="0.5" />
          <polygon points="1280,360 1290,375 1280,390 1270,375" fill="#e91e8c" fillOpacity="0.6" />
          <polygon points="1140,150 1150,165 1140,180 1130,165" fill="#c084fc" fillOpacity="0.6" />
          <polygon points="980,220 988,232 980,244 972,232" fill="#a855f7" fillOpacity="0.5" />
          <polygon points="480,250 488,262 480,274 472,262" fill="#2dd4bf" fillOpacity="0.5" />
        </svg>

        {/* Dark Vignette Overlay (Ensures Perfect Text Contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b14]/60 via-[#0a0b14]/75 to-[#0a0b14]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a0b14_85%)]" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge Pill Kecil */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#e91e8c]/50 bg-[#e91e8c]/15 text-[#e91e8c] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-6 sm:mb-8 shadow-[0_0_20px_rgba(233,30,140,0.3)] backdrop-blur-md select-none animate-in fade-in duration-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
          SERVER KOMUNITAS RESMI!
        </div>

        {/* Judul Besar */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] sm:leading-[1.04] max-w-4xl">
          Nusa Realm{" "}
          <span className="text-[#e91e8c] drop-shadow-[0_0_35px_rgba(233,30,140,0.55)]">
            Server
          </span>
          <br />
          Is finally here
        </h1>

        {/* Paragraf Singkat */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-white/75 leading-relaxed font-normal">
          Hub server komunitas Asia Tenggara dengan latensi rendah, lingkungan ramah,
          dan koneksi terdedikasi 24/7. Rasakan pengalaman multiplayer seru bebas hambatan
          bersama ribuan pemain sekarang.
        </p>

        {/* Tombol Aksi: Pink (Join Server) & Hijau Gelap (Server Guide) */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Tombol Pink "Join Server" */}
          <a
            href="#servers"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-[#e91e8c] hover:bg-[#d8157e] text-white font-extrabold text-base sm:text-lg shadow-[0_0_25px_rgba(233,30,140,0.5)] hover:shadow-[0_0_35px_rgba(233,30,140,0.75)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Join Server</span>
          </a>

          {/* Tombol Hijau Gelap "Server Guide" */}
          <a
            href="#faq"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-[#063321]/85 hover:bg-[#09472e] border border-emerald-500/40 hover:border-emerald-400/70 text-emerald-200 hover:text-emerald-100 font-extrabold text-base sm:text-lg shadow-[0_0_20px_rgba(16,185,129,0.18)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <line x1="9" y1="7" x2="15" y2="7" />
              <line x1="9" y1="11" x2="15" y2="11" />
            </svg>
            <span>Server Guide</span>
          </a>
        </div>

        {/* Pill Statistik (50K+ pemain aktif, 6 server, <50ms ping) */}
        <div className="mt-12 sm:mt-16 w-full max-w-2xl">
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-around gap-6 sm:gap-8 w-full px-6 sm:px-10 py-5 rounded-3xl sm:rounded-full bg-[#0d0f1e]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
            {/* Stat 1: Pemain Aktif */}
            <div className="text-center min-w-[120px] flex-1">
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                50K+
              </div>
              <div className="mt-1 text-[11px] sm:text-xs font-bold tracking-widest text-white/50 uppercase">
                Pemain Aktif
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-10 w-px bg-white/10" />

            {/* Stat 2: Server */}
            <div className="text-center min-w-[120px] flex-1">
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                6
              </div>
              <div className="mt-1 text-[11px] sm:text-xs font-bold tracking-widest text-white/50 uppercase">
                Server Dedikasi
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-10 w-px bg-white/10" />

            {/* Stat 3: Ping */}
            <div className="text-center min-w-[120px] flex-1">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight flex items-center justify-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                &lt;50ms
              </div>
              <div className="mt-1 text-[11px] sm:text-xs font-bold tracking-widest text-white/50 uppercase">
                Ping Rata-Rata
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}