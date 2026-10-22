"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Apa itu Nusa Realm dan game apa yang didukung?",
    answer:
      "Nusa Realm adalah hub server komunitas independen di kawasan Asia Tenggara yang menyediakan konektivitas multiplayer stabil. Semua server dioptimalkan khusus untuk rute latensi rendah di Indonesia, Singapura, Malaysia, Thailand, dan Filipina dengan perlindungan anti-DDoS.",
  },
  {
    question: "Bagaimana cara bergabung ke salah satu server?",
    answer:
      "Cukup telusuri daftar di bagian 'Discover Servers' di atas, pilih server dengan gaya bermain yang Anda sukai (seperti Nusantara Prime untuk sosial santai atau Singa Gateway untuk barter/trade), lalu klik tombol 'JOIN'. Anda akan langsung dialihkan ke gerbang server tanpa proses registrasi rumit.",
  },
  {
    question: "Apakah bergabung ke server ini gratis atau dipungut biaya?",
    answer:
      "Nusa Realm sepenuhnya 100% gratis untuk seluruh komunitas. Proyek ini adalah inisiatif penggemar independen (fan project) nirlaba yang dikelola bersama oleh sukarelawan tanpa pungutan biaya langganan maupun fitur berbayar yang tidak adil.",
  },
  {
    question: "Bagaimana kebijakan keamanan dan aturan komunitas di Nusa Realm?",
    answer:
      "Kami menerapkan aturan ramah keluarga dan zero-tolerance terhadap perundungan, eksploitasi bug, penipuan barter, serta program ilegal. Moderator aktif dan sistem pelaporan terintegrasi siap memastikan ruang bermain yang aman dan menyenangkan bagi semua umur.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-5xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 relative z-10">
        <div className="inline-block text-xs font-black tracking-widest text-[#e91e8c] uppercase mb-3">
          KNOWLEDGE BASE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          Semua hal yang perlu Anda ketahui tentang server Nusa Realm, konektivitas,
          dan keamanan komunitas dalam satu tempat.
        </p>
      </div>

      {/* 4 Accordion Items */}
      <div className="space-y-4 relative z-10">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 backdrop-blur-xl overflow-hidden ${
                isOpen
                  ? "border-[#e91e8c]/50 bg-[#0f1122]/90 shadow-[0_10px_35px_rgba(233,30,140,0.12)]"
                  : "border-white/10 bg-[#0f1122]/60 hover:border-white/20 hover:bg-[#0f1122]/80"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {item.question}
                </span>

                {/* Rotating Chevron Icon */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? "bg-[#e91e8c]/20 border-[#e91e8c]/50 text-[#e91e8c]"
                      : "bg-white/5 border-white/10 text-white/60"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {/* Accordion Content with smooth expand */}
              {isOpen && (
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-white/75 leading-relaxed border-t border-white/[0.06] pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}