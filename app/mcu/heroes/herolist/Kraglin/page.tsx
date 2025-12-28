import Link from "next/link";
import Image from "next/image";

import KraglinSrc from "../../heroesImage/Kraglin/Kraglin.jpg";
import RavagerShip from "../../heroesImage/Kraglin/Ravagers.jpg";
import YonduTeam from "../../heroesImage/Kraglin/YonduTeam.jpg";
import Guardians from "../../heroesImage/Kraglin/Guardians.jpg";
import Endgame from "../../heroesImage/Kraglin/Endgame.jpg";

export default function KraglinPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={KraglinSrc}
                  alt="Kraglin"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Kraglin
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Kraglin Obfonteri
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Loyal member of the Ravagers and trusted right-hand of Yondu, Kraglin
                  has assisted the Guardians of the Galaxy on several missions.
                  Skilled in marksmanship and ship combat, he provides valuable support.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/guardians"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Guardians of the Galaxy
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/kraglin/on-screen"
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
                Kraglin Obfonteri
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Ravagers / Guardians of the Galaxy
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Alive
              </div>
              <div>
                <strong className="block text-gray-900">Specialization</strong>
                Combat, marksmanship, tactical support
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
                  <strong>Portrayed by:</strong> Sean Gunn
                </li>
                <li>
                  <strong>Occupation:</strong> Ravager / Guardian Support
                </li>
                <li>
                  <strong>Base of operations:</strong> Ravager Ships / Guardians’ Ship
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: RavagerShip, label: "Ravager Ship" },
                  { src: YonduTeam, label: "With Yondu's Team" },
                  { src: Guardians, label: "Guardians Support" },
                  { src: Endgame, label: "Endgame Battle" },
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
          Kraglin has been a loyal Ravager and aide to Yondu for years. 
          He later assists the Guardians of the Galaxy in their adventures
          and plays a vital role in the team’s efforts during major galactic conflicts.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Early Role with the Ravagers</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Kraglin was trained under Yondu to pilot ships, fight enemies, and manage
          missions for the Ravagers. His loyalty and skill earned him a crucial position
          within the crew.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Alliance with Guardians</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Following Yondu’s death, Kraglin continues to support the Guardians
          in intergalactic missions, contributing to battles and strategic operations.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War & Endgame</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Kraglin participates in key battles alongside the Guardians and Avengers,
          helping coordinate and execute missions during the conflicts with Thanos.
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
            href="/mcu/heroes/herolist/Yondu"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Yondu
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
