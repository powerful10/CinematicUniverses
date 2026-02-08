import type { Metadata } from "next";

import { absoluteAssetUrl, absoluteUrl } from "@/app/lib/seo";
import { coreSeoKeywords, mergeKeywords } from "@/app/lib/seoKeywords";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(options.path);
  const previewImage = absoluteAssetUrl("/favicon.png");
  const pageKeywords = mergeKeywords([...coreSeoKeywords], options.keywords || []);

  return {
    title: options.title,
    description: options.description,
    keywords: pageKeywords,
    alternates: { canonical },
    openGraph: {
      title: options.title,
      description: options.description,
      url: canonical,
      type: "website",
      siteName: "Cinematic Universes",
      images: [{ url: previewImage, alt: "Cinematic Universes logo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images: [previewImage],
    },
  };
}
