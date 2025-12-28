import Link from "next/link";
import Image from "next/image";

import RocketSrc from "../../heroesImage/Rocket/Rocket.webp";
import Guardians from "../../heroesImage/StarLord/Guardians.webp";
import Weapons from "../../heroesImage/Rocket/Weapons.webp";
import Lylla from "../../heroesImage/Rocket/Lylla.webp";
import Endgame from "../../heroesImage/Rocket/Endgame.webp";

export default function RocketPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={RocketSrc}
                  alt="Rocket"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Rocket
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Subject 89P13
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  A genetically and cybernetically enhanced raccoon with a
                  genius-level intellect, Rocket is a master engineer,
                  weapons expert, and core member of the Guardians of the
                  Galaxy.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/guardians"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Guardians of the Galaxy
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/rocket/on-screen"
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
                Rocket
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
                Enhanced Raccoon
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
                  <strong>Voiced by:</strong> Bradley Cooper
                </li>
                <li>
                  <strong>Specialty:</strong> Engineering, explosives, tactics
                </li>
                <li>
                  <strong>Personality:</strong> Cynical, loyal, protective
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Weapons, label: "Custom Weaponry" },
                  { src: Guardians, label: "Guardians of the Galaxy" },
                  { src: Lylla, label: "Lylla" },
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
          Rocket was created through cruel experimentation that enhanced his
          intelligence and combat capabilities. Beneath his abrasive exterior
          lies deep trauma and a fierce desire for belonging.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Creation and Trauma</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Rocket’s past is marked by pain and loss, having been modified against
          his will. His anger and sarcasm mask vulnerability and fear of
          abandonment.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Bond with Groot</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Rocket’s closest bond is with Groot, whom he treats as family. Their
          partnership reflects loyalty forged through shared survival.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and Leadership</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          After surviving the Snap, Rocket joined Thor and the Avengers,
          shouldering guilt and grief while continuing to fight for the galaxy.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Rocket’s journey is one of healing and acceptance. Though created as a
          weapon, he chose compassion, loyalty, and heroism.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/Groot"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Groot
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
