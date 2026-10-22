import { Globe, MessageCircle, Send, Share2, Video } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: MessageCircle, label: "Discord Community", href: "#" },
  { icon: Send, label: "Telegram Channel", href: "#" },
  { icon: Video, label: "Live Streaming & Clips", href: "#" },
  { icon: Globe, label: "Community Forum", href: "#" },
  { icon: Share2, label: "Social Network", href: "#" },
];

const FOOTER_COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Discover Servers", href: "#servers" },
      { label: "Live Server Pulse", href: "#top" },
      { label: "Community News", href: "#news" },
      { label: "Next Update", href: "#next-update" },
      { label: "Server Guide", href: "#faq" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord Server", href: "#" },
      { label: "Forum Diskusi", href: "#" },
      { label: "Aturan & Tata Tertib", href: "#" },
      { label: "Event Mingguan", href: "#" },
      { label: "Karya Komunitas", href: "#" },
    ],
  },
  {
    title: "Knowledge & Legal",
    links: [
      { label: "Knowledge Base", href: "#faq" },
      { label: "Pusat Bantuan", href: "#faq" },
      { label: "Ketentuan Layanan", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Fan Content Policy", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080f] text-white overflow-hidden">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#e91e8c]/10 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand Info & 5 Pink Social Icons */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#e91e8c] flex items-center justify-center text-white shadow-[0_0_18px_rgba(233,30,140,0.4)]">
                {/* Stylized Butterfly & Star SVG */}
                <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-white">
                  <path
                    d="M24 7 L26.5 21.5 L41 24 L26.5 26.5 L24 41 L21.5 26.5 L7 24 L21.5 21.5 Z"
                    fill="white"
                  />
                  <circle cx="24" cy="24" r="2.5" fill="#e91e8c" />
                </svg>
              </div>
              <span className="font-black text-2xl tracking-wider uppercase text-white">
                NUSA REALM
              </span>
            </div>

            <p className="text-sm text-white/65 leading-relaxed max-w-sm">
              Hub server komunitas Asia Tenggara independen. Menghubungkan ribuan pemain
              lintas negara dalam pengalaman multiplayer yang aman, cepat, dan menyenangkan.
            </p>

            {/* 5 Ikon Sosial Bulat Pink (lucide-react) */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e91e8c] hover:bg-[#d8157e] flex items-center justify-center text-white shadow-[0_0_15px_rgba(233,30,140,0.4)] hover:shadow-[0_0_24px_rgba(233,30,140,0.7)] hover:scale-110 active:scale-95 transition-all duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 3 Kolom Link */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-black tracking-widest text-[#e91e8c] uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors duration-150 inline-block hover:translate-x-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Nusa Realm. Fan project.</p>
          <p className="text-center sm:text-right">
            Proyek komunitas independen non-komersial. Tidak berafiliasi dengan merek atau perusahaan game apa pun.
          </p>
        </div>
      </div>
    </footer>
  );
}