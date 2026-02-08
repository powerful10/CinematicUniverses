export const coreSeoKeywords = [
  "MCU characters",
  "DC characters",
  "Marvel heroes",
  "DC villains",
  "comic character encyclopedia",
  "cinematic universe guide",
  "Marvel character profiles",
  "DC character database",
  "MCU heroes list",
  "DC heroes list",
  "MCU villains list",
  "DC villains list",
  "MCU antiheroes list",
  "DC antiheroes list",
  "MCU timeline order",
  "Justice League roster",
  "Avengers roster",
  "Cinematic Universes",
] as const;

export function mergeKeywords(...groups: Array<Array<string | undefined>>): string[] {
  const seen = new Set<string>();
  const merged: string[] = [];

  for (const group of groups) {
    for (const keyword of group) {
      const trimmed = (keyword || "").trim();
      if (!trimmed) continue;
      const key = trimmed.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push(trimmed);
    }
  }

  return merged;
}

