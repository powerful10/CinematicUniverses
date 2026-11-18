"use client";

import { useEffect, useMemo, useState } from "react";

export type WatchItem = {
  id: string;
  title: string;
  year: number;
  chronoOrder: number;
  releaseOrder: number;
  phase: 1 | 2 | 3 | 4 | 5;
  kind: "Movie" | "Series";
  timelineYear: string;
  note: string;
};

const MCU_WATCH_ITEMS: WatchItem[] = [
  { id: "ca-tfa", title: "Captain America: The First Avenger", year: 2011, chronoOrder: 1, releaseOrder: 5, phase: 1, kind: "Movie", timelineYear: "1942–1945", note: "Origins of Steve Rogers, the Tesseract, and HYDRA." },
  { id: "cap-marvel", title: "Captain Marvel", year: 2019, chronoOrder: 2, releaseOrder: 21, phase: 3, kind: "Movie", timelineYear: "1995", note: "Carol Danvers awakens her cosmic powers; Nick Fury starts the Avengers Initiative." },
  { id: "iron-man", title: "Iron Man", year: 2008, chronoOrder: 3, releaseOrder: 1, phase: 1, kind: "Movie", timelineYear: "2008", note: "Tony Stark builds the Mark I–III armor and launches the MCU." },
  { id: "iron-man-2", title: "Iron Man 2", year: 2010, chronoOrder: 4, releaseOrder: 3, phase: 1, kind: "Movie", timelineYear: "2010", note: "Introduces Natasha Romanoff (Black Widow) and War Machine." },
  { id: "hulk", title: "The Incredible Hulk", year: 2008, chronoOrder: 5, releaseOrder: 2, phase: 1, kind: "Movie", timelineYear: "2010", note: "Bruce Banner battles the Abomination." },
  { id: "thor", title: "Thor", year: 2011, chronoOrder: 6, releaseOrder: 4, phase: 1, kind: "Movie", timelineYear: "2010", note: "Asgard, Mjolnir, Loki's rise, and the Bifrost." },
  { id: "avengers", title: "The Avengers", year: 2012, chronoOrder: 7, releaseOrder: 6, phase: 1, kind: "Movie", timelineYear: "2012", note: "Battle of New York unites the original six Avengers." },
  { id: "iron-man-3", title: "Iron Man 3", year: 2013, chronoOrder: 8, releaseOrder: 7, phase: 2, kind: "Movie", timelineYear: "2012", note: "Tony Stark deals with post-New York trauma and Extremis." },
  { id: "thor-dw", title: "Thor: The Dark World", year: 2013, chronoOrder: 9, releaseOrder: 8, phase: 2, kind: "Movie", timelineYear: "2013", note: "Introduces the Reality Stone (Aether)." },
  { id: "ca-ws", title: "Captain America: The Winter Soldier", year: 2014, chronoOrder: 10, releaseOrder: 9, phase: 2, kind: "Movie", timelineYear: "2014", note: "SHIELD collapses from within; Bucky Barnes returns." },
  { id: "gotg", title: "Guardians of the Galaxy", year: 2014, chronoOrder: 11, releaseOrder: 10, phase: 2, kind: "Movie", timelineYear: "2014", note: "Introduces the Power Stone and cosmic roster." },
  { id: "gotg-2", title: "Guardians of the Galaxy Vol. 2", year: 2017, chronoOrder: 12, releaseOrder: 15, phase: 3, kind: "Movie", timelineYear: "2014", note: "Set months after Vol. 1; Ego and Mantis." },
  { id: "aou", title: "Avengers: Age of Ultron", year: 2015, chronoOrder: 13, releaseOrder: 11, phase: 2, kind: "Movie", timelineYear: "2015", note: "Sokovia, Ultron, Vision, and Wanda Maximoff." },
  { id: "ant-man", title: "Ant-Man", year: 2015, chronoOrder: 14, releaseOrder: 12, phase: 2, kind: "Movie", timelineYear: "2015", note: "Scott Lang enters the Quantum Realm." },
  { id: "ca-cw", title: "Captain America: Civil War", year: 2016, chronoOrder: 15, releaseOrder: 13, phase: 3, kind: "Movie", timelineYear: "2016", note: "Sokovia Accords fracture the Avengers; Spider-Man & Black Panther debut." },
  { id: "black-widow", title: "Black Widow", year: 2021, chronoOrder: 16, releaseOrder: 24, phase: 4, kind: "Movie", timelineYear: "2016", note: "Natasha confronts the Red Room between Civil War and Infinity War." },
  { id: "black-panther", title: "Black Panther", year: 2018, chronoOrder: 17, releaseOrder: 18, phase: 3, kind: "Movie", timelineYear: "2016", note: "T'Challa defends Wakanda's throne against Killmonger." },
  { id: "sm-hc", title: "Spider-Man: Homecoming", year: 2017, chronoOrder: 18, releaseOrder: 16, phase: 3, kind: "Movie", timelineYear: "2016", note: "Peter Parker faces the Vulture after Civil War." },
  { id: "dr-strange", title: "Doctor Strange", year: 2016, chronoOrder: 19, releaseOrder: 14, phase: 3, kind: "Movie", timelineYear: "2016–2017", note: "Mystic Arts and the Time Stone." },
  { id: "thor-rag", title: "Thor: Ragnarok", year: 2017, chronoOrder: 20, releaseOrder: 17, phase: 3, kind: "Movie", timelineYear: "2017", note: "Fall of Asgard; leads directly into Infinity War." },
  { id: "ant-man-wasp", title: "Ant-Man and the Wasp", year: 2018, chronoOrder: 21, releaseOrder: 20, phase: 3, kind: "Movie", timelineYear: "2018", note: "Rescue from the Quantum Realm just before the Snap." },
  { id: "infinity-war", title: "Avengers: Infinity War", year: 2018, chronoOrder: 22, releaseOrder: 19, phase: 3, kind: "Movie", timelineYear: "2018", note: "Thanos collects all six Infinity Stones." },
  { id: "endgame", title: "Avengers: Endgame", year: 2019, chronoOrder: 23, releaseOrder: 22, phase: 3, kind: "Movie", timelineYear: "2023", note: "The Time Heist and final battle against Thanos." },
  { id: "loki-s1", title: "Loki (Season 1)", year: 2021, chronoOrder: 24, releaseOrder: 26, phase: 4, kind: "Series", timelineYear: "Multiverse / TVA", note: "Breaks the Sacred Timeline and opens the Multiverse." },
  { id: "wandavision", title: "WandaVision", year: 2021, chronoOrder: 25, releaseOrder: 23, phase: 4, kind: "Series", timelineYear: "2023", note: "Weeks after Endgame; Wanda becomes the Scarlet Witch." },
  { id: "sm-ffh", title: "Spider-Man: Far From Home", year: 2019, chronoOrder: 26, releaseOrder: 23, phase: 3, kind: "Movie", timelineYear: "2024", note: "Eight months after Endgame; Mysterio reveals Peter's identity." },
  { id: "shang-chi", title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, chronoOrder: 27, releaseOrder: 25, phase: 4, kind: "Movie", timelineYear: "2024", note: "The Ten Rings beacon activates." },
  { id: "sm-nwh", title: "Spider-Man: No Way Home", year: 2021, chronoOrder: 28, releaseOrder: 27, phase: 4, kind: "Movie", timelineYear: "2024", note: "Multiversal spell brings three Spider-Men together." },
  { id: "ds-mom", title: "Doctor Strange in the Multiverse of Madness", year: 2022, chronoOrder: 29, releaseOrder: 28, phase: 4, kind: "Movie", timelineYear: "2024", note: "Incursions and Earth-838." },
  { id: "wakanda-forever", title: "Black Panther: Wakanda Forever", year: 2022, chronoOrder: 30, releaseOrder: 29, phase: 4, kind: "Movie", timelineYear: "2025", note: "Shuri becomes Black Panther; Namor debuts." },
  { id: "gotg-3", title: "Guardians of the Galaxy Vol. 3", year: 2023, chronoOrder: 31, releaseOrder: 30, phase: 5, kind: "Movie", timelineYear: "2026", note: "Rocket's origin and the High Evolutionary." },
  { id: "deadpool-wolverine", title: "Deadpool & Wolverine", year: 2024, chronoOrder: 32, releaseOrder: 31, phase: 5, kind: "Movie", timelineYear: "Multiverse / Void", note: "TVA Anchor Beings and Fox-verse crossover." },
];

const STORAGE_KEY = "cu_mcu_watched_v1";

export default function WatchOrderTracker() {
  const [orderMode, setOrderMode] = useState<"chrono" | "release">("chrono");
  const [phaseFilter, setPhaseFilter] = useState<number | "all">("all");
  const [moviesOnly, setMoviesOnly] = useState(false);
  const [watched, setWatched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setWatched(JSON.parse(saved));
      } catch {
        // Ignore storage errors in private mode
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleWatched = (id: string) => {
    setWatched((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  const resetProgress = () => {
    setWatched({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const items = useMemo(() => {
    return MCU_WATCH_ITEMS.filter((item) => {
      if (phaseFilter !== "all" && item.phase !== phaseFilter) return false;
      if (moviesOnly && item.kind !== "Movie") return false;
      return true;
    }).sort((a, b) =>
      orderMode === "chrono" ? a.chronoOrder - b.chronoOrder : a.releaseOrder - b.releaseOrder
    );
  }, [orderMode, phaseFilter, moviesOnly]);

  const watchedCount = items.filter((i) => watched[i.id]).length;
  const pct = items.length ? Math.round((watchedCount / items.length) * 100) : 0;

  return (
    <section className="section-surface p-5 md:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Interactive Watch-Order Builder</p>
          <h2 className="text-xl font-bold text-white">Track Your MCU Marathon</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setOrderMode("chrono")}
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold border transition cursor-pointer ${
              orderMode === "chrono"
                ? "bg-orange-500 text-slate-950 border-orange-400"
                : "bg-slate-900/70 text-slate-200 border-slate-700 hover:border-slate-500"
            }`}
          >
            Chronological Order
          </button>
          <button
            type="button"
            onClick={() => setOrderMode("release")}
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold border transition cursor-pointer ${
              orderMode === "release"
                ? "bg-orange-500 text-slate-950 border-orange-400"
                : "bg-slate-900/70 text-slate-200 border-slate-700 hover:border-slate-500"
            }`}
          >
            Release Order
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(["all", 1, 2, 3, 4, 5] as const).map((p) => (
            <button
              key={String(p)}
              type="button"
              onClick={() => setPhaseFilter(p)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold border cursor-pointer ${
                phaseFilter === p
                  ? "bg-sky-400 text-slate-950 border-sky-300"
                  : "bg-slate-900/60 text-slate-300 border-slate-700"
              }`}
            >
              {p === "all" ? "All Phases" : `Phase ${p}`}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setMoviesOnly((v) => !v)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border cursor-pointer ${
              moviesOnly
                ? "bg-emerald-400 text-slate-950 border-emerald-300"
                : "bg-slate-900/60 text-slate-300 border-slate-700"
            }`}
          >
            {moviesOnly ? "Movies Only: ON" : "Movies + Key Series"}
          </button>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-300">
          <span>
            Watched: <strong className="text-orange-400">{watchedCount}/{items.length}</strong> ({pct}%)
          </span>
          {watchedCount > 0 && (
            <button
              type="button"
              onClick={resetProgress}
              className="text-xs text-slate-400 underline hover:text-white cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-orange-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="space-y-2.5">
        {items.map((item, idx) => {
          const isDone = !!watched[item.id];
          return (
            <label
              key={item.id}
              className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition cursor-pointer ${
                isDone
                  ? "bg-emerald-950/30 border-emerald-500/40"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-600"
              }`}
            >
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => toggleWatched(item.id)}
                className="mt-1 h-4 w-4 accent-orange-500 cursor-pointer"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-300">
                    #{idx + 1}
                  </span>
                  <span className="font-semibold text-white">{item.title}</span>
                  <span className="text-xs text-slate-400">
                    ({item.year}) • Phase {item.phase} • {item.timelineYear}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-1">{item.note}</p>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}
