import type { Metadata, Viewport } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";
import Link from "next/link";

import MainNav from "@/app/components/navigation/MainNav";
import { withBasePath } from "@/app/lib/basePath";
import { absoluteAssetUrl, absoluteUrl, getSiteUrl } from "@/app/lib/seo";

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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Cinematic Universes | MCU and DC Encyclopedia",
    template: "%s | Cinematic Universes",
  },
  description: "A complete MCU and DC encyclopedia of heroes, villains, antiheroes, teams, and timelines.",
  applicationName: "Cinematic Universes",
  keywords: [
    "MCU characters",
    "DC characters",
    "Marvel heroes",
    "DC villains",
    "comic character encyclopedia",
    "cinematic universe guide",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    title: "Cinematic Universes | MCU and DC Encyclopedia",
    description: "A complete MCU and DC encyclopedia of heroes, villains, antiheroes, teams, and timelines.",
    url: absoluteUrl("/"),
    siteName: "Cinematic Universes",
    images: [
      {
        url: absoluteAssetUrl("/favicon.png"),
        alt: "Cinematic Universes logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinematic Universes | MCU and DC Encyclopedia",
    description: "A complete MCU and DC encyclopedia of heroes, villains, antiheroes, teams, and timelines.",
    images: [absoluteAssetUrl("/favicon.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        }
      : undefined,
  },
  manifest: withBasePath("/manifest.webmanifest"),
  icons: {
    icon: [{ url: withBasePath("/favicon.png") }],
    apple: [{ url: withBasePath("/favicon.png") }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060a12",
  colorScheme: "dark",
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
            <nav className="site-footer-links" aria-label="Footer">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/monetization">Monetization</Link>
            </nav>
          </div>
          <p className="site-footer-meta">Built with Next.js static export.</p>
        </footer>
      </body>
    </html>
  );
}
