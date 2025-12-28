import Link from "next/link";
import Image from "next/image";

import StarLordSrc from "../../heroesImage/StarLord/StarLord.jpg";
import Helmet from "../../heroesImage/StarLord/Helmet.webp";
import Milano from "../../heroesImage/StarLord/Milano.webp";
import Guardians from "../../heroesImage/StarLord/Guardians.webp";
import Endgame from "../../heroesImage/StarLord/Endgame.webp";

export default function StarLordPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={StarLordSrc}
                  alt="Star-Lord"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Star-Lord
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Peter Jason Quill
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Half-human, half-Celestial outlaw, Peter Quill leads the
                  Guardians of the Galaxy as Star-Lord, blending bravado,
                  combat skill, and unlikely heroism into one of the MCU’s
                  most unconventional champions.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/guardians"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Guardians of the Galaxy
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/star-lord-peter-quill/on-screen"
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
                Peter Jason Quill
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
                Human / Celestial hybrid
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
                  <strong>Portrayed by:</strong> Chris Pratt
                </li>
                <li>
                  <strong>Alias origin:</strong> Childhood nickname
                </li>
                <li>
                  <strong>Primary weapons:</strong> Element Guns
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Helmet, label: "Star-Lord Helmet" },
                  { src: Milano, label: "Milano Ship" },
                  { src: Guardians, label: "Guardians Team" },
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
          Abducted from Earth as a child, Peter Quill grew up among space
          pirates before forging his own path as Star-Lord. His life changed
          when he crossed paths with the future Guardians of the Galaxy.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Formation of the Guardians</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          While pursuing a powerful artifact, Quill joined forces with
          Gamora, Drax, Rocket, and Groot. Their alliance evolved into a
          family bound by loyalty rather than blood.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Celestial Heritage</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Peter later learned his father was Ego, a Celestial being.
          Although briefly gaining cosmic powers, Quill ultimately rejected
          Ego’s ambitions, choosing humanity over godhood.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and Loss</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Star-Lord’s emotional decisions during the fight against Thanos
          contributed to the Avengers’ failure on Titan. He was later
          erased by the Snap, only to return for the final battle.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Though impulsive and flawed, Star-Lord embodies growth through
          responsibility. His journey reflects the MCU’s theme that heroes
          are defined not by perfection, but by choice.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
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
            href="/mcu/heroes/herolist/Groot"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Groot
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
