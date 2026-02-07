import { withBasePath } from "@/app/lib/basePath";

const fallbackSiteUrl = "https://cinematic-universes.vercel.app";

function normalizeSiteUrl(value: string | undefined): string | null {
  if (!value) return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    return new URL(candidate).origin;
  } catch {
    return null;
  }
}

export function getSiteUrl(): string {
  return (
    normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
    normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
    normalizeSiteUrl(process.env.VERCEL_URL) ||
    fallbackSiteUrl
  );
}

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const pathWithBase = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${normalizedPath}`;
  return new URL(pathWithBase || "/", getSiteUrl()).toString();
}

export function absoluteAssetUrl(assetPath: string): string {
  return new URL(withBasePath(assetPath), getSiteUrl()).toString();
}

