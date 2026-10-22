import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nusa Realm — Hub Server Komunitas Asia Tenggara",
  description: "Server komunitas independen Asia Tenggara dengan ping rendah, gameplay stabil, dan pengalaman multiplayer seru.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0a0b14] text-white">{children}</body>
    </html>
  );
}
