import type { Metadata } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";

import MainNav from "@/app/components/navigation/MainNav";

import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cinematic Universes",
  description: "A complete MCU and DC encyclopedia of heroes, villains, antiheroes, teams, and timelines.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <div className="app-bg-overlay" aria-hidden="true" />
        <MainNav />

        <div className="app-content">{children}</div>

        <footer className="site-footer">
          <div>
            <strong>Cinematic Universes</strong>
            <p>MCU and DC knowledge base with profile directories, timeline context, and team structure.</p>
          </div>
          <p className="site-footer-meta">Built with Next.js static export.</p>
        </footer>
      </body>
    </html>
  );
}
