"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type VersusCandidate = {
  id: string;
  name: string;
  universe: "mcu" | "dc";
  faction: "heroes" | "villains" | "antiheroes";
  alignment: string;
  debut: string | null;
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

const STAT_KEYS: Array<keyof VersusCandidate["stats"]> = [
  "intelligence",
  "strength",
  "speed",
  "durability",
  "power",
  "combat",
];

const QUIZ_QUESTIONS = [
  {
    q: "Which Infinity Stone was hidden inside the Tesseract?",
    options: ["Power Stone", "Space Stone", "Reality Stone", "Mind Stone"],
    answer: 1,
  },
  {
    q: "Who founded the Justice League alongside Batman in DCEU continuity?",
    options: ["Wonder Woman", "Aquaman", "Green Lantern", "Shazam"],
    answer: 0,
  },
  {
    q: "Which MCU series first introduced the Time Variance Authority (TVA)?",
    options: ["WandaVision", "What If...?", "Loki", "Moon Knight"],
    answer: 2,
  },
  {
    q: "Which DC villain is known as the ruler of Apokolips?",
    options: ["Brainiac", "General Zod", "Darkseid", "Black Adam"],
    answer: 2,
  },
  {
    q: "In chronological MCU order, which film comes directly after Captain America: The First Avenger?",
    options: ["Iron Man", "Captain Marvel", "Thor", "The Incredible Hulk"],
    answer: 1,
  },
];

function totalPower(c: VersusCandidate): number {
  return STAT_KEYS.reduce((acc, k) => acc + c.stats[k], 0);
}

export default function VersusArena({ candidates }: { candidates: VersusCandidate[] }) {
  const [leftId, setLeftId] = useState(candidates[0]?.id || "");
  const [rightId, setRightId] = useState(
    candidates.find((c) => c.universe === "dc")?.id || candidates[1]?.id || ""
  );

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const left = useMemo(() => candidates.find((c) => c.id === leftId) || candidates[0], [candidates, leftId]);
  const right = useMemo(() => candidates.find((c) => c.id === rightId) || candidates[1], [candidates, rightId]);

  const randomize = () => {
    if (candidates.length < 2) return;
    const i = Math.floor(Math.random() * candidates.length);
    let j = Math.floor(Math.random() * candidates.length);
    if (j === i) j = (i + 1) % candidates.length;
    setLeftId(candidates[i].id);
    setRightId(candidates[j].id);
  };

  const leftScore = left ? totalPower(left) : 0;
  const rightScore = right ? totalPower(right) : 0;
  const winner =
    leftScore === rightScore ? "Draw" : leftScore > rightScore ? left?.name : right?.name;

  const quizScore = QUIZ_QUESTIONS.reduce(
    (acc, q, idx) => (quizAnswers[idx] === q.answer ? acc + 1 : acc),
    0
  );
  const answeredCount = Object.keys(quizAnswers).length;

  return (
    <div className="space-y-6">
      <section className="section-surface p-5 md:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="eyebrow">Head-to-Head Stat Engine</p>
            <h2 className="text-xl font-bold text-white">MCU vs. DC Character Comparison</h2>
          </div>
          <button
            type="button"
            onClick={randomize}
            className="px-4 py-2 rounded-lg bg-orange-500 text-slate-950 font-semibold text-sm hover:bg-orange-400 transition cursor-pointer"
          >
            Random Matchup
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Fighter A
            </label>
            <select
              value={left?.id || ""}
              onChange={(e) => setLeftId(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm"
            >
              {candidates.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.universe.toUpperCase()} • {c.faction})
                </option>
              ))}
            </select>
            {left && (
              <div className="text-xs text-slate-300 pt-1 flex items-center justify-between">
                <span>Total Rating: <strong className="text-sky-400">{leftScore}/600</strong></span>
                <Link href={left.route} className="text-sky-400 underline">
                  Full Profile →
                </Link>
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Fighter B
            </label>
            <select
              value={right?.id || ""}
              onChange={(e) => setRightId(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm"
            >
              {candidates.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.universe.toUpperCase()} • {c.faction})
                </option>
              ))}
            </select>
            {right && (
              <div className="text-xs text-slate-300 pt-1 flex items-center justify-between">
                <span>Total Rating: <strong className="text-orange-400">{rightScore}/600</strong></span>
                <Link href={right.route} className="text-orange-400 underline">
                  Full Profile →
                </Link>
              </div>
            )}
          </div>
        </div>

        {left && right && (
          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-xs uppercase tracking-wider text-slate-400">Stat Edge: </span>
              <strong className="text-lg text-amber-300">{winner}</strong>
            </div>

            {STAT_KEYS.map((stat) => {
              const lv = left.stats[stat];
              const rv = right.stats[stat];
              return (
                <div key={stat} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-300 uppercase">
                    <span className="text-sky-300">{lv}</span>
                    <span>{stat}</span>
                    <span className="text-orange-300">{rv}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 h-2.5">
                    <div className="bg-slate-800 rounded-l-full overflow-hidden flex justify-end">
                      <div className="bg-sky-400 h-full" style={{ width: `${lv}%` }} />
                    </div>
                    <div className="bg-slate-800 rounded-r-full overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: `${rv}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="section-surface p-5 md:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="eyebrow">Multiverse Challenge</p>
            <h2 className="text-xl font-bold text-white">5-Question MCU & DC Trivia Quiz</h2>
          </div>
          <span className="text-sm font-semibold text-amber-300">
            Score: {quizScore}/{QUIZ_QUESTIONS.length} ({answeredCount} answered)
          </span>
        </div>

        <div className="space-y-4">
          {QUIZ_QUESTIONS.map((item, qIdx) => {
            const picked = quizAnswers[qIdx];
            return (
              <div key={item.q} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                <p className="font-semibold text-white">
                  {qIdx + 1}. {item.q}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.options.map((opt, oIdx) => {
                    const isPicked = picked === oIdx;
                    const isCorrect = oIdx === item.answer;
                    let cls = "bg-slate-950 border-slate-700 text-slate-200 hover:border-slate-500";
                    if (picked !== undefined) {
                      if (isCorrect) cls = "bg-emerald-950/70 border-emerald-400 text-emerald-200";
                      else if (isPicked) cls = "bg-rose-950/70 border-rose-400 text-rose-200";
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setQuizAnswers((prev) => ({ ...prev, [qIdx]: oIdx }))}
                        className={`text-left px-3.5 py-2 rounded-lg border text-sm transition cursor-pointer ${cls}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
