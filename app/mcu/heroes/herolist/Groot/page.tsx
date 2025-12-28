import Link from "next/link";
import Image from "next/image";

import GrootSrc from "../../heroesImage/Groot/Groot.webp";
import Guardians from "../../heroesImage/StarLord/Guardians.webp";
import BabyGroot from "../../heroesImage/Groot/BabyGroot.webp";
import TeenGroot from "../../heroesImage/Groot/TeenGroot.webp";
import Endgame from "../../heroesImage/Groot/Endgame.webp";

export default function GrootPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={GrootSrc}
                  alt="Groot"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_15%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Groot
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Flora Colossus
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  A sentient tree-like being from Planet X, Groot is a powerful
                  and gentle warrior whose loyalty and self-sacrifice define
                  his role among the Guardians of the Galaxy.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/guardians"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Guardians of the Galaxy
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/groot/on-screen"
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
                Groot
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Guardians of the Galaxy
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Active
              </div>
              <div>
                <strong className="block text-gray-900">Species</strong>
                Flora Colossus
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
                  <strong>Voiced by:</strong> Vin Diesel
                </li>
                <li>
                  <strong>Abilities:</strong> Regeneration, growth, strength
                </li>
                <li>
                  <strong>Speech:</strong> “I am Groot”
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Guardians, label: "Guardians of the Galaxy" },
                  { src: BabyGroot, label: "Baby Groot" },
                  { src: TeenGroot, label: "Teen Groot" },
                  { src: Endgame, label: "Battle of Earth" },
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
          Groot began as a bounty hunter alongside Rocket before becoming a core
          member of the Guardians of the Galaxy. Despite limited speech, his
          intelligence and empathy are deeply understood by those close to him.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Sacrifice and Rebirth</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          During the battle against Ronan the Accuser, Groot sacrificed himself
          to protect his teammates, regenerating from a cutting into a new,
          younger form.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Growth Through the Saga</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Groot matured from Baby Groot to a teenage phase, gradually reclaiming
          his strength and sense of identity while remaining loyal to Rocket and
          the Guardians.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and Endgame</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Groot aided Thor in forging Stormbreaker and later fought in the Battle
          of Earth, standing alongside the Avengers against Thanos.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Groot embodies selflessness, resilience, and quiet heroism. His
          actions repeatedly prove that true strength lies in protecting others.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/Rocket"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Rocket
          </Link>
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
