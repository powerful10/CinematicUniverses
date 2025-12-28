import Link from "next/link";
import Image from "next/image";

import WinterSoldierSrc from "../../heroesImage/WinterSoldier/WinterSoldier.jpg";
import Hydra from "../../heroesImage/WinterSoldier/Hydra.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";
import CivilWar from "../../heroesImage/WinterSoldier/CivilWar.jpg";
import Wakanda from "../../heroesImage/WinterSoldier/Wakanda.jpg";

export default function WinterSoldierPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={WinterSoldierSrc}
                  alt="Winter Soldier"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Winter Soldier
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  James Buchanan “Bucky” Barnes
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Former World War II soldier and best friend of Steve Rogers,
                  Bucky Barnes was captured, brainwashed, and weaponized by
                  Hydra into the assassin known as the Winter Soldier.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/winter-soldier-bucky-barnes/on-screen"
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
                James Buchanan Barnes
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers (formerly Hydra)
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Active
              </div>
              <div>
                <strong className="block text-gray-900">Enhancements</strong>
                Super Soldier Serum, cybernetic arm
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
                  <strong>First MCU appearance:</strong> Captain America: The First Avenger (2011)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Sebastian Stan
                </li>
                <li>
                  <strong>Former identity:</strong> Hydra assassin
                </li>
                <li>
                  <strong>Combat style:</strong> Enhanced close-quarters combat
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Hydra, label: "Hydra Conditioning" },
                  { src: CivilWar, label: "Civil War Conflict" },
                  { src: Wakanda, label: "Wakanda Rehabilitation" },
                  { src: Avengers, label: "Avengers Ally" },
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
          Bucky Barnes fought alongside Steve Rogers during World War II
          before being presumed dead. In truth, he was captured by Hydra
          and transformed into a weapon through brainwashing and cryogenic
          preservation.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Hydra and the Winter Soldier Program</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Hydra erased Bucky’s memories and deployed him for decades as an
          elite assassin. He carried out covert assassinations across
          history, awakening only when needed and stripped of identity.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Conflict with Captain America</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Steve Rogers’ refusal to abandon his friend ultimately broke
          Hydra’s control. Their conflict came to a head during the
          collapse of S.H.I.E.L.D. and later during the Sokovia Accords.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Wakanda and Recovery</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Seeking peace and healing, Bucky traveled to Wakanda, where his
          conditioning was removed. Given a new vibranium arm, he began
          reclaiming his identity free from Hydra’s influence.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          The Winter Soldier’s story is one of loss, guilt, and redemption.
          Though haunted by his past, Bucky Barnes continues to fight for
          a future defined by choice rather than control.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/CaptainAmerica"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Captain America
          </Link>
          <Link
            href="/mcu/heroes/herolist/Falcon"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Falcon
          </Link>
          <Link
            href="/mcu/heroes/herolist/BlackWidow"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Black Widow
          </Link>
          <Link
            href="/mcu/avengers"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Avengers
          </Link>
        </div>
      </article>
    </main>
  );
}
