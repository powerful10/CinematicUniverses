import Link from "next/link";
import Image from "next/image";

import DraxSrc from "../../heroesImage/Drax/Drax.webp";
import Family from "../../heroesImage/Drax/Family.jpg";
import Guardians from "../../heroesImage/StarLord/Guardians.webp";
import Knowhere from "../../heroesImage/Drax/Knowhere.webp";
import Endgame from "../../heroesImage/Drax/Endgame.webp";

export default function DraxPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={DraxSrc}
                  alt="Drax the Destroyer"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Drax the Destroyer
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Son of Ovette
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  A warrior driven by vengeance and honor, Drax seeks justice
                  for the murder of his family. His literal mindset, raw
                  strength, and unyielding loyalty make him a formidable
                  Guardian of the Galaxy.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/guardians"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Guardians of the Galaxy
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/drax/on-screen"
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
                Drax
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
                Kylosian
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
                  <strong>Portrayed by:</strong> Dave Bautista
                </li>
                <li>
                  <strong>Combat style:</strong> Dual knives, brute force
                </li>
                <li>
                  <strong>Notable trait:</strong> Literal interpretation of language
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Family, label: "Family Lost to Thanos" },
                  { src: Guardians, label: "Guardians of the Galaxy" },
                  { src: Knowhere, label: "Knowhere Battle" },
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
          Once a peaceful family man, Drax became a warrior consumed by rage
          after Thanos and Ronan destroyed his people. Imprisoned and later
          freed, he found a new purpose among the Guardians.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Quest for Vengeance</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Drax dedicated his life to killing Thanos and Ronan. Though reckless
          at times, his pursuit of justice defined his early actions.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Guardian Brotherhood</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Through shared battles and losses, Drax forged deep bonds with his
          teammates, particularly Rocket and Mantis, embracing his new family.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and Survival</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Drax fought Thanos on Knowhere and later perished in the Snap. He was
          restored five years later to join the final battle against Thanos.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Drax’s journey reflects healing through connection. What began as
          vengeance evolved into loyalty, purpose, and belonging.
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
            href="/mcu/heroes/herolist/Rocket"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Rocket
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
