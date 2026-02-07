import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Google Site Verification",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GoogleSiteVerificationPage() {
  return <main>google-site-verification: googlec865f91c502bf241.html</main>;
}

