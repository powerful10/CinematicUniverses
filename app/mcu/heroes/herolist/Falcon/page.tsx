import Link from "next/link";
import Image from "next/image";

import FalconSrc from "../../heroesImage/Falcon/Falcon.jpg";
import Wings from "../../heroesImage/Falcon/Wings.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";
import CivilWar from "../../heroesImage/Falcon/CivilWar.jpg";
import Endgame from "../../heroesImage/Falcon/Endgame.jpg";

export default function FalconPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={FalconSrc}
                  alt="Falcon"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Falcon
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Sam Wilson
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Former U.S. Air Force pararescue airman turned Avenger,
                  Sam Wilson fights as Falcon using advanced aerial combat
                  gear, tactical intelligence, and an unshakable moral
                  compass.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/falcon-sam-wilson/on-screen"
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
                Samuel Thomas Wilson
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Active
              </div>
              <div>
                <strong className="block text-gray-900">Equipment</strong>
                EXO-7 Falcon wingsuit
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
                  <strong>First MCU appearance:</strong> Captain America: The Winter Soldier (2014)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Anthony Mackie
                </li>
                <li>
                  <strong>Military background:</strong> USAF Pararescue
                </li>
                <li>
                  <strong>Combat style:</strong> Aerial and tactical combat
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Wings, label: "EXO-7 Wingsuit" },
                  { src: CivilWar, label: "Civil War Battle" },
                  { src: Avengers, label: "Avengers Member" },
                  { src: Endgame, label: "Endgame Final Battle" },
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
          Sam Wilson entered the world of superheroes after befriending Steve
          Rogers while assisting veterans suffering from trauma. His
          willingness to help others placed him directly in the path of
          global conflict.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Military Service</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          As a pararescue airman, Sam specialized in extracting soldiers from
          hostile environments. This background made him an ideal candidate
          for the EXO-7 Falcon program, which he later adapted for hero work.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Partnership with Captain America</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Falcon became one of Steve Rogers’ closest allies, standing with
          him against Hydra, during the Sokovia Accords conflict, and while
          operating as a fugitive after Civil War.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and the Blip</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Sam was among those lost to Thanos’ Snap but returned five years
          later to fight in the Battle of Earth, proving his resolve and
          loyalty to the Avengers’ cause.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Falcon represents courage without enhancement. Through leadership,
          empathy, and skill, Sam Wilson earned his place among the MCU’s
          heroes and would later rise to carry Captain America’s shield.
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
            href="/mcu/heroes/herolist/WinterSoldier"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Winter Soldier
          </Link>
          <Link
            href="/mcu/heroes/herolist/IronMan"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Iron Man
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
