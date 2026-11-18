"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import AdBanner from "@/app/components/ads/AdBanner";
import ShareButton from "@/app/components/characters/ShareButton";
import { withBasePath } from "@/app/lib/basePath";

export type CompareCharacter = {
  id: string;
  name: string;
  alias: string | null;
  universe: "mcu" | "dc";
  faction: string;
  alignment: string;
  image: string;
  route: string;
  abilities: string[];
  stats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
};

const statLabels: Array<{ key: keyof CompareCharacter["stats"]; label: string }> = [
  { key: "intelligence", label: "Intelligence" },
  { key: "strength", label: "Strength" },
  { key: "speed", label: "Speed" },
  { key: "durability", label: "Durability" },
  { key: "power", label: "Power" },
  { key: "combat", label: "Combat" },
];

function totalScore(c: CompareCharacter): number {
  return (
    c.stats.intelligence +
    c.stats.strength +
    c.stats.speed +
    c.stats.durability +
    c.stats.power +
    c.stats.combat
  );
}

const presets: Array<{ label: string; a: string; b: string }> = [
  { label: "Iron Man vs Batman", a: "iron-man", b: "batman" },
  { label: "Thanos vs Darkseid", a: "thanos", b: "darkseid" },
  { label: "Thor vs Superman", a: "thor", b: "superman" },
  { label: "Spider-Man vs Flash", a: "spider-man", b: "flash" },
];

export default function CompareArenaClient({ characters }: { characters: CompareCharacter[] }) {
  const defaultA = characters.find((c) => c.id.toLowerCase().includes("iron-man")) || characters[0];
  const defaultB =
    characters.find((c) => c.id.toLowerCase().includes("batman")) ||
    characters.find((c) => c.universe === "dc") ||
    characters[1];

  const [idA, setIdA] = useState(defaultA?.id || "");
  const [idB, setIdB] = useState(defaultB?.id || "");

  const charA = useMemo(
    () => characters.find((c) => c.id === idA) || defaultA,
    [characters, idA, defaultA]
  );
  const charB = useMemo(
    () => characters.find((c) => c.id === idB) || defaultB,
    [characters, idB, defaultB]
  );

  if (!charA || !charB) return null;

  const scoreA = totalScore(charA);
  const scoreB = totalScore(charB);
  const winner = scoreA === scoreB ? null : scoreA > scoreB ? charA : charB;

  const applyPreset = (aKey: string, bKey: string) => {
    const foundA = characters.find((c) => c.id.toLowerCase().includes(aKey));
    const foundB = characters.find((c) => c.id.toLowerCase().includes(bKey));
    if (foundA) setIdA(foundA.id);
    if (foundB) setIdB(foundB.id);
  };

  return (
    <div className="compare-arena">
      <section className="section-surface compare-presets">
        <div className="compare-preset-row">
          <span className="directory-chip-label">Popular Matchups:</span>
          {presets.map((p) => (
            <button
              key={p.label}
              type="button"
              className="filter-chip"
              onClick={() => applyPreset(p.a, p.b)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="compare-selectors">
          <div className="directory-toolbar-field">
            <label htmlFor="fighter-a">Fighter 1</label>
            <select id="fighter-a" value={charA.id} onChange={(e) => setIdA(e.target.value)}>
              {characters.map((c) => (
                <option key={`a-${c.universe}-${c.id}`} value={c.id}>
                  {c.name} ({c.universe.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div className="compare-vs-badge" aria-hidden="true">
            VS
          </div>

          <div className="directory-toolbar-field">
            <label htmlFor="fighter-b">Fighter 2</label>
            <select id="fighter-b" value={charB.id} onChange={(e) => setIdB(e.target.value)}>
              {characters.map((c) => (
                <option key={`b-${c.universe}-${c.id}`} value={c.id}>
                  {c.name} ({c.universe.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="compare-fighters-grid">
        {[
          { char: charA, score: scoreA },
          { char: charB, score: scoreB },
        ].map(({ char, score }, idx) => (
          <article key={`fighter-card-${idx}-${char.id}`} className="section-surface compare-fighter-card">
            <div className="compare-fighter-media">
              <Image
                src={withBasePath(char.image)}
                alt={char.name}
                width={320}
                height={420}
              />
            </div>
            <div className="compare-fighter-info">
              <p className="profile-kicker">
                {char.universe.toUpperCase()} • {char.alignment}
              </p>
              <h2>{char.name}</h2>
              {char.alias ? <p className="character-card-alias">{char.alias}</p> : null}
              <p className="compare-total-score">Total Power: <strong>{score} / 600</strong></p>
              <div className="chip-row" style={{ marginTop: "0.4rem" }}>
                {char.abilities.slice(0, 3).map((ab) => (
                  <span key={ab} className="chip">{ab}</span>
                ))}
              </div>
              <Link href={char.route} className="pill-link muted" style={{ marginTop: "0.6rem", display: "inline-block" }}>
                View Full Dossier →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section-surface compare-breakdown">
        <div className="compare-verdict-header">
          <div>
            <p className="eyebrow">Stat-by-Stat Verdict</p>
            <h2>
              {winner
                ? `${winner.name} Leads (${Math.max(scoreA, scoreB)} vs ${Math.min(scoreA, scoreB)})`
                : `Even Matchup (${scoreA} vs ${scoreB})`}
            </h2>
          </div>
          <ShareButton
            title={`${charA.name} vs ${charB.name} — Cinematic Universes`}
            text={`Check out ${charA.name} (${scoreA}) vs ${charB.name} (${scoreB}) on Cinematic Universes!`}
            label="Share Battle"
            className="pill-link"
          />
        </div>

        <div className="compare-stat-rows">
          {statLabels.map(({ key, label }) => {
            const valA = charA.stats[key];
            const valB = charB.stats[key];
            return (
              <div key={key} className="compare-stat-row">
                <div className="compare-stat-head">
                  <strong className={valA >= valB ? "stat-win" : ""}>{valA}</strong>
                  <span>{label}</span>
                  <strong className={valB >= valA ? "stat-win" : ""}>{valB}</strong>
                </div>
                <div className="compare-dual-bar">
                  <div className="compare-bar-left">
                    <span style={{ width: `${Math.max(4, valA)}%` }} />
                  </div>
                  <div className="compare-bar-right">
                    <span style={{ width: `${Math.max(4, valB)}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AdBanner
        label="Sponsored Matchup Offer"
        title="Level Up Your Fandom — Exclusive Superhero & Gaming Deals"
        description="Explore trending partner promotions while comparing your favorite MCU and DC legends."
        ctaText="Check Partner Deal →"
      />
    </div>
  );
}
