import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { ServerSection } from "@/components/server-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0b14] text-white selection:bg-[#e91e8c]/40 selection:text-white">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(233,30,140,0.08),transparent_50%)]" />

      {/* 1. Navbar */}
      <SiteHeader />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 2. Hero */}
        <HeroSection />

        {/* 3. Server List */}
        <ServerSection />

        {/* 4. FAQ */}
        <FaqSection />
      </main>

      {/* 5. Footer */}
      <SiteFooter />
    </div>
  );
}
