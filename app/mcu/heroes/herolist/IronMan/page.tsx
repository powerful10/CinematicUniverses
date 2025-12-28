import Link from "next/link";
import Image from "next/image";

import ironSrc from "../../heroesImage/Ironman/IronMan.jpg";
import Helmet from "../../heroesImage/Ironman/IronManHelmet.jpg";
import ArcReactor from "../../heroesImage/Ironman/ArcReactor.jpg";
import StarkTower from "../../heroesImage/Ironman/StarkTower.jpg";
import MarkSuit from "../../heroesImage/Ironman/MarkSuit.jpg";

export default function IronManPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={ironSrc}
                  alt="Iron Man (Tony Stark)"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Iron Man
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Anthony Edward “Tony” Stark
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Iron Man is the armored superhero identity of Tony Stark, a
                  billionaire engineer and industrialist whose inventions and
                  personal sacrifices shaped the modern era of the Marvel
                  Cinematic Universe. A founding member of the Avengers, Stark
                  played a decisive role in nearly every global and cosmic-level
                  conflict from 2008 until his death in 2023.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/iron-man-tony-stark/on-screen"
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
                Anthony Edward Stark
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers, Stark Industries
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Deceased (Sacrificed during the Battle of Earth, 2023)
              </div>
              <div>
                <strong className="block text-gray-900">Specialization</strong>
                Powered armor, AI systems, clean energy, weapons engineering
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
                  <strong>First MCU appearance:</strong> Iron Man (2008)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Robert Downey Jr.
                </li>
                <li>
                  <strong>Occupation:</strong> Inventor, CEO, Avenger
                </li>
                <li>
                  <strong>Primary base:</strong> Stark Tower / Avengers Compound
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[ 
                  { src: Helmet, label: "Iron Man Helmet" },
                  { src: ArcReactor, label: "Arc Reactor" },
                  { src: MarkSuit, label: "Iron Man Armor" },
                  { src: StarkTower, label: "Stark Tower" }
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
          Tony Stark entered the MCU as a weapons manufacturer whose life changed
          after his kidnapping by the Ten Rings organization. Forced to confront
          the consequences of his technology, Stark created the first Iron Man
          armor to escape captivity. This event marked the beginning of his
          transformation from arms dealer to global protector.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Early Career</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          After shutting down Stark Industries’ weapons division, Stark refined
          the Iron Man armor and defeated Obadiah Stane. He later confronted Ivan
          Vanko while struggling with arc reactor poisoning, before discovering
          a new element left to him by his father, Howard Stark.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Avengers Initiative</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Stark was instrumental in the formation of the Avengers, providing
          funding, technology, and battlefield leadership. During the Battle of
          New York, he redirected a nuclear missile into space, an act that left
          lasting psychological trauma and fear of future extraterrestrial
          threats.
        </p>

        <h3 className="mt-8 text-xl font-semibold">
          Ultron, Accords, and Civil War
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Driven by anxiety over future invasions, Stark created Ultron, an AI
          intended to protect Earth. Ultron’s rebellion led to the destruction
          of Sokovia. Wracked with guilt, Stark supported the Sokovia Accords,
          placing him in direct opposition to Steve Rogers and fracturing the
          Avengers.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Mentorship and Space Conflict</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Stark developed a mentor-like relationship with Peter Parker, providing
          guidance and advanced technology. Later, Stark confronted Thanos on
          Titan, where he came closest to stopping the Mad Titan before
          witnessing the Snap that erased half of all life.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Endgame and Sacrifice</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Five years after the Snap, Stark solved time travel, enabling the Time
          Heist. During the Battle of Earth, he used his nanotech armor to seize
          the Infinity Stones from Thanos and snap his fingers, sacrificing his
          life to save the universe.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Tony Stark’s legacy defines the MCU’s foundation. His technology,
          choices, and ultimate sacrifice continue to influence the Avengers,
          global defense strategies, and the next generation of heroes.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/mcu/heroes/herolist/CaptainAmerica" className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline">
            Captain America
          </Link>
          <Link href="/mcu/heroes/herolist/Spiderman" className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline">
            Spider-Man
          </Link>
          <Link href="/mcu/avengers" className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline">
            Avengers
          </Link>
        </div>
      </article>
    </main>
  );
}
