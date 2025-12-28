import Link from "next/link";
import Image from "next/image";

import NebulaSrc from "../../heroesImage/Nebula/Nebula.jpg";
import ThanosShip from "../../heroesImage/Nebula/ThanosShip.jpg";
import Guardians from "../../heroesImage/Mantis/Guardians.jpg";
import Avengers from "../../heroesImage/Nebula/Avengers.jpg";
import InfinityWar from "../../heroesImage/Nebula/InfinityWar.jpg";

export default function NebulaPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={NebulaSrc}
                  alt="Nebula"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Nebula
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Nebula
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  A former assassin and adopted daughter of Thanos, Nebula
                  evolves from a ruthless rival to a heroic ally of the
                  Guardians of the Galaxy. Her cybernetic enhancements and
                  combat expertise make her a formidable fighter.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/guardians"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Guardians of the Galaxy
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/nebula/on-screen"
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
                Nebula
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
                Cybernetic combat, assassination, tactical strategy
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
                  <strong>First MCU appearance:</strong> Guardians of the Galaxy (2014)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Karen Gillan
                </li>
                <li>
                  <strong>Occupation:</strong> Assassin / Guardian of the Galaxy
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
                  { src: ThanosShip, label: "On Thanos' Ship" },
                  { src: Guardians, label: "Guardians Team" },
                  { src: Avengers, label: "Allies with Avengers" },
                  { src: InfinityWar, label: "Infinity War Battles" },
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
          Nebula was raised by Thanos alongside Gamora and trained to be an
          assassin. Initially a rival to her sister, she eventually allies
          with the Guardians of the Galaxy to fight Thanos and protect the
          universe.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Early Life & Training</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Subjected to harsh training and cybernetic enhancements, Nebula's
          childhood was defined by combat, pain, and competition with Gamora.
          These experiences shaped her into a skilled warrior.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Alliance with Guardians</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Over time, Nebula develops empathy and loyalty, joining the Guardians
          to stop Thanos and protect others. Her strategic thinking and combat
          skills are critical in the team’s missions.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War & Endgame</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Nebula participates in the war against Thanos, contributing to key
          strategies and fighting alongside the Avengers and Guardians. She
          plays an essential role in the Snap reversal.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Redemption & Future</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Having reconciled with Gamora and broken free from Thanos’ influence,
          Nebula continues her path as a hero and protector of the galaxy,
          embracing her identity and strengths.
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
