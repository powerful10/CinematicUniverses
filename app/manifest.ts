import type { MetadataRoute } from "next";

import { withBasePath } from "@/app/lib/basePath";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cinematic Universes",
    short_name: "Cinematic",
    description: "A complete MCU and DC encyclopedia for heroes, villains, antiheroes, teams, and timelines.",
    start_url: withBasePath("/"),
    scope: withBasePath("/"),
    display: "standalone",
    background_color: "#060a12",
    theme_color: "#060a12",
    icons: [
      {
        src: withBasePath("/favicon.png"),
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
