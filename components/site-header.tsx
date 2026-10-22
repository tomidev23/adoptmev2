"use client";

import { useState, useEffect, useRef } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMediaDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 h-20 w-full bg-[#0a0b14]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/50 transition-colors">
        <div className="flex items-center justify-between h-full w-full">
          {/* Left: Pink Logo Box + Brand Name */}
          <div className="flex items-center h-full">
            <a
              href="#top"
              className="h-20 w-20 bg-[#e91e8c] hover:bg-[#d8157e] transition-colors flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(233,30,140,0.35)]"
              aria-label="Nusa Realm Home"
            >
              {/* Custom SVG: Stylized Butterfly & Celestial Star */}
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white transition-transform hover:scale-110 duration-200"
              >
                {/* Upper Butterfly Wings */}
                <path
                  d="M24 24 C22 13 11 6 5 11 C1 15 3 23 13 24 C18.5 24.5 22 24.2 24 24Z"
                  fill="white"
                  fillOpacity="0.95"
                />
                <path
                  d="M24 24 C26 13 37 6 43 11 C47 15 45 23 35 24 C29.5 24.5 26 24.2 24 24Z"
                  fill="white"
                  fillOpacity="0.95"
                />
                {/* Lower Butterfly Wings */}
                <path
                  d="M24 24 C21 28 13 38 7 36 C3 34.5 4 28 14 26 C19 25.1 22.2 24.5 24 24Z"
                  fill="white"
                  fillOpacity="0.8"
                />
                <path
                  d="M24 24 C27 28 35 38 41 36 C45 34.5 44 28 34 26 C29 25.1 25.8 24.5 24 24Z"
                  fill="white"
                  fillOpacity="0.8"
                />
                {/* Center 4-Point Star */}
                <path
                  d="M24 7 L26.5 21.5 L41 24 L26.5 26.5 L24 41 L21.5 26.5 L7 24 L21.5 21.5 Z"
                  fill="white"
                />
                {/* Inner Core Accent */}
                <circle cx="24" cy="24" r="2.5" fill="#e91e8c" />
              </svg>
            </a>

            <a
              href="#top"
              className="ml-4 sm:ml-5 flex items-center font-black tracking-wider uppercase text-white hover:text-white/90 text-xl sm:text-2xl select-none"
            >
              NUSA REALM
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center font-bold uppercase text-[15px] xl:text-[16px] tracking-wider text-white">
            <a
              href="#servers"
              className="px-4 xl:px-6 h-20 flex items-center justify-center hover:text-[#e91e8c] transition-colors"
            >
              Discover
            </a>
            <a
              href="#news"
              className="px-4 xl:px-6 h-20 flex items-center justify-center hover:text-[#e91e8c] transition-colors"
            >
              News
            </a>

            {/* Media Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMediaDropdownOpen(!mediaDropdownOpen)}
                className="px-4 xl:px-6 h-20 flex items-center justify-center gap-1.5 hover:text-[#e91e8c] transition-colors cursor-pointer uppercase font-bold text-[15px] xl:text-[16px]"
                aria-expanded={mediaDropdownOpen}
              >
                Media
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mediaDropdownOpen ? "rotate-180 text-[#e91e8c]" : ""
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
              </button>

              {mediaDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 rounded-2xl bg-[#0f1122] border border-white/10 shadow-2xl shadow-black/80 p-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <a
                    href="#media-wallpapers"
                    onClick={() => setMediaDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-white hover:bg-white/[0.08] transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#e91e8c]" />
                    Wallpapers HD
                  </a>
                  <a
                    href="#media-soundtrack"
                    onClick={() => setMediaDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-white hover:bg-white/[0.08] transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Soundtrack & Musik
                  </a>
                  <a
                    href="#media-community"
                    onClick={() => setMediaDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-white hover:bg-white/[0.08] transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    Community Gallery
                  </a>
                </div>
              )}
            </div>

            <a
              href="#next-update"
              className="px-4 xl:px-6 h-20 flex items-center justify-center hover:text-[#e91e8c] transition-colors"
            >
              Next Update
            </a>
            <a
              href="#faq"
              className="px-4 xl:px-6 h-20 flex items-center justify-center hover:text-[#e91e8c] transition-colors"
            >
              Support
            </a>
          </nav>

          {/* Right: Two Round Pink Action Buttons (Play & Settings) */}
          <div className="hidden lg:flex items-center gap-3 pr-6">
            {/* Play Button */}
            <a
              href="#servers"
              className="w-12 h-12 rounded-full bg-[#e91e8c] hover:bg-[#d8157e] shadow-[0_0_18px_rgba(233,30,140,0.4)] hover:shadow-[0_0_26px_rgba(233,30,140,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center text-white"
              title="Play Now / Join Server"
              aria-label="Play Now"
            >
              <svg
                className="w-5 h-5 ml-0.5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>

            {/* Settings Button */}
            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="w-12 h-12 rounded-full bg-[#e91e8c] hover:bg-[#d8157e] shadow-[0_0_18px_rgba(233,30,140,0.4)] hover:shadow-[0_0_26px_rgba(233,30,140,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center text-white cursor-pointer"
              title="Pengaturan"
              aria-label="Settings"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 hover:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
          </div>

          {/* Mobile Right Controls: Play Button & Hamburger */}
          <div className="flex items-center gap-2 pr-4 lg:hidden">
            <a
              href="#servers"
              className="w-10 h-10 rounded-full bg-[#e91e8c] hover:bg-[#d8157e] shadow-[0_0_15px_rgba(233,30,140,0.4)] flex items-center justify-center text-white"
              aria-label="Play Now"
            >
              <svg className="w-4 h-4 ml-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 flex items-center justify-center text-white cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Settings Modal (Lightweight overlay for the settings button) */}
      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#0f1122] border border-white/10 p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e91e8c]" />
                Preferensi Server
              </h3>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-center justify-between py-2">
                <span className="text-white/70">Audio Efek & Latar</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">Aktif</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-white/70">Region Utama</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">Asia Tenggara (SEA)</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-white/70">Mode Tampilan</span>
                <span className="px-3 py-1 rounded-full bg-[#e91e8c]/20 text-[#e91e8c] text-xs font-semibold">Glow Ambient</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSettingsOpen(false)}
              className="mt-6 w-full py-2.5 rounded-full bg-[#e91e8c] hover:bg-[#d8157e] text-white font-semibold text-sm transition shadow-[0_0_15px_rgba(233,30,140,0.35)]"
            >
              Simpan & Tutup
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-[300px] bg-[#0c0d18] border-l border-white/10 text-white z-50 flex flex-col shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e91e8c] flex items-center justify-center text-white">
              <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 text-white">
                <path d="M24 7 L26.5 21.5 L41 24 L26.5 26.5 L24 41 L21.5 26.5 L7 24 L21.5 21.5 Z" fill="white" />
              </svg>
            </div>
            <span className="font-black text-lg">NUSA REALM</span>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 flex items-center justify-center text-white"
            aria-label="Close Navigation Menu"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col py-4 px-4 overflow-y-auto font-bold uppercase tracking-wider text-[16px] space-y-1">
          <a
            href="#servers"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#e91e8c] transition"
          >
            Discover
          </a>
          <a
            href="#news"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#e91e8c] transition"
          >
            News
          </a>

          <div>
            <button
              type="button"
              onClick={() => setMediaDropdownOpen(!mediaDropdownOpen)}
              className="w-full px-4 py-3 rounded-xl flex items-center justify-between hover:bg-white/5 hover:text-[#e91e8c] transition text-left uppercase font-bold"
            >
              <span>Media</span>
              <svg
                className={`w-4 h-4 transition-transform ${mediaDropdownOpen ? "rotate-180 text-[#e91e8c]" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mediaDropdownOpen && (
              <div className="ml-4 mt-1 pl-3 border-l-2 border-[#e91e8c] flex flex-col space-y-1 text-sm font-semibold normal-case">
                <a
                  href="#media-wallpapers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-white/70 hover:text-white"
                >
                  Wallpapers HD
                </a>
                <a
                  href="#media-soundtrack"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-white/70 hover:text-white"
                >
                  Soundtrack & Musik
                </a>
                <a
                  href="#media-community"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-white/70 hover:text-white"
                >
                  Community Gallery
                </a>
              </div>
            )}
          </div>

          <a
            href="#next-update"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#e91e8c] transition"
          >
            Next Update
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#e91e8c] transition"
          >
            Support
          </a>
        </div>

        {/* Mobile Drawer Bottom Actions */}
        <div className="mt-auto p-5 border-t border-white/10 flex items-center gap-3">
          <a
            href="#servers"
            onClick={() => setMobileMenuOpen(false)}
            className="flex-1 py-3 px-4 rounded-xl bg-[#e91e8c] hover:bg-[#d8157e] text-white font-bold text-center text-sm shadow-[0_0_15px_rgba(233,30,140,0.4)] transition"
          >
            Join Server
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setSettingsOpen(true);
            }}
            className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/15 flex items-center justify-center text-white"
            aria-label="Settings"
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
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}