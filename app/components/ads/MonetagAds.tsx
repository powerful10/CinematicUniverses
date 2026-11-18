"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const SEARCH_REFERRER_RE = /(google\.|bing\.com|duckduckgo\.com|yahoo\.com|yandex\.)/i;

export default function MonetagAds() {
  const [allowVignette, setAllowVignette] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
        // Ignore service worker registration errors when blocked by private browsing or ad blockers
      });
    }

    try {
      const views = Number(sessionStorage.getItem("cu_page_views") || "0") + 1;
      sessionStorage.setItem("cu_page_views", String(views));
      const fromSearch = SEARCH_REFERRER_RE.test(document.referrer || "");

      // Protect Google Search Console rankings: never show full-screen Vignette on initial search landing.
      const delayMs = !fromSearch && views >= 2 ? 0 : fromSearch ? 28000 : 12000;
      const timer = window.setTimeout(() => {
        setAllowVignette(true);
      }, delayMs);

      return () => window.clearTimeout(timer);
    } catch {
      const timer = window.setTimeout(() => setAllowVignette(true), 18000);
      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {allowVignette && (
        <Script
          id="monetag-vignette"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(s){s.dataset.zone='12192845',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`,
          }}
        />
      )}
      <Script
        id="monetag-inpage-push"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(s){s.dataset.zone='12192853',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`,
        }}
      />
    </>
  );
}
