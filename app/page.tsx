import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { ServerSection } from "@/components/server-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06111d] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom,rgba(251,146,60,0.10),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[72px_72px] mask-[linear-gradient(to_bottom,white,transparent_85%)]" />

      <SiteHeader />
      <main className="relative z-10">
        <HeroSection />
        <ServerSection />
        <FaqSection />
      </main>

      <SiteFooter />
    </div>
  );
}
