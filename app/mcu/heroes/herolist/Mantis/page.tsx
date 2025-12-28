import Link from "next/link";
import Image from "next/image";

import MantisSrc from "../../heroesImage/Mantis/Mantis.jpg";
import Knowhere from "../../heroesImage/Mantis/Knowhere.jpg";
import Guardians from "../../heroesImage/Mantis/Guardians.jpg";
import Ego from "../../heroesImage/Mantis/Ego.jpg";
import InfinityWar from "../../heroesImage/Mantis/InfinityWar.jpg";

export default function MantisPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={MantisSrc}
                  alt="Mantis"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Mantis
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Mantis
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  An empath with the ability to sense and manipulate emotions,
                  Mantis became a key member of the Guardians of the Galaxy.
                  Her gentle nature, combined with extraordinary abilities,
                  makes her an unexpected yet vital hero in the MCU.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/guardians"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Guardians of the Galaxy
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/mantis/on-screen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Marvel (On-Screen Profile)
                  </a>
                </div>
              </div>
            </div>

            {/* ================= BASIC DATA ================= */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong className="block text-gray-900">Full name</strong>
                Mantis
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Guardians of the Galaxy
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Alive
              </div>
              <div>
                <strong className="block text-gray-900">Specialization</strong>
                Empathic abilities, combat assistance
              </div>
            </div>
          </div>
        </header>

        {/* ================= SIDEBAR ================= */}
        <aside className="w-full lg:w-96">
          <div className="sticky top-6 space-y-4">
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2">Quick Facts</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <strong>First MCU appearance:</strong> Guardians of the Galaxy Vol. 2 (2017)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Pom Klementieff
                </li>
                <li>
                  <strong>Occupation:</strong> Guardian of the Galaxy
                </li>
                <li>
                  <strong>Base of operations:</strong> Knowhere / Guardians’ Ship
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Knowhere, label: "Knowhere Mission" },
                  { src: Ego, label: "Ego Encounter" },
                  { src: Guardians, label: "Guardians Team" },
                  { src: InfinityWar, label: "Infinity War Battle" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="relative w-full rounded overflow-hidden bg-gray-50"
                      style={{ aspectRatio: "4 / 3" }}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ================= MAIN ARTICLE ================= */}
      <article className="mt-10 bg-white shadow-sm rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-4">MCU Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Mantis was raised by Ego and trained to use her empathic abilities.
          She later joined the Guardians of the Galaxy, using her powers to
          assist in combat and understand others’ emotions, often acting as
          the heart of the team.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Early Life</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Raised on Ego’s planet, Mantis learned empathy and telepathic
          communication. Her naive outlook often contrasts with the hardened
          Guardians, providing both insight and comic relief.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Joining the Guardians</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Mantis joins the Guardians during their battle with Ego. Her
          empathic powers prove essential for understanding threats and
          coordinating the team in critical moments.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          She participates in the team’s efforts against Thanos, contributing
          to key strategies and supporting the team with her unique abilities
          during combat.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Post Infinity War</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Mantis continues to aid the Guardians while exploring her own identity
          and powers. Her connection with Peter Quill adds depth to her character
          arc.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/StarLord"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Star-Lord
          </Link>
          <Link
            href="/mcu/heroes/herolist/Gamora"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Gamora
          </Link>
          <Link
            href="/mcu/heroes/herolist/Drax"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Drax
          </Link>
          <Link
            href="/mcu/guardians"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Guardians of the Galaxy
          </Link>
        </div>
      </article>
    </main>
  );
}
