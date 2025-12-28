import Link from "next/link";
import Image from "next/image";

import QuicksilverSrc from "../../heroesImage/Quicksilver/Quicksilver.jpg";
import Sokovia from "../../heroesImage/WandaMaximoff/Sokovia.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";
import Ultron from "../../heroesImage/Quicksilver/Ultron.jpg";
import Sacrifice from "../../heroesImage/Quicksilver/Sacrifice.jpg";

export default function QuicksilverPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={QuicksilverSrc}
                  alt="Quicksilver"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Quicksilver
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Pietro Maximoff
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Enhanced Sokovian speedster and twin brother of Wanda
                  Maximoff, Pietro Maximoff possessed extraordinary reflexes
                  and superhuman velocity. Though his time as a hero was brief,
                  his sacrifice left a permanent mark on the Avengers.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/quicksilver-pietro-maximoff/on-screen"
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
                Pietro Maximoff
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers (briefly)
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Deceased
              </div>
              <div>
                <strong className="block text-gray-900">Abilities</strong>
                Superhuman speed, reflexes, perception
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
                  <strong>First MCU appearance:</strong> Avengers: Age of Ultron (2015)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Aaron Taylor-Johnson
                </li>
                <li>
                  <strong>Origin:</strong> Sokovia
                </li>
                <li>
                  <strong>Enhanced by:</strong> Mind Stone experiments
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Sokovia, label: "Sokovian Origins" },
                  { src: Ultron, label: "Ultron Conflict" },
                  { src: Avengers, label: "Avengers Alliance" },
                  { src: Sacrifice, label: "Final Sacrifice" },
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
          Pietro Maximoff was a Sokovian civilian whose life was shaped by war
          and loss. Alongside his sister Wanda, he volunteered for HYDRA
          experiments in hopes of gaining the power to change the world.
        </p>

        <h3 className="mt-8 text-xl font-semibold">HYDRA Experiments</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Exposure to the Mind Stone granted Pietro superhuman speed, reflexes,
          and accelerated perception. Initially hostile toward the Avengers,
          he blamed them for Sokovia’s suffering and allied himself with Ultron.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Turning Against Ultron</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Upon learning Ultron intended to eradicate humanity, Pietro defected
          and fought alongside the Avengers during the Battle of Sokovia. His
          speed proved crucial in evacuating civilians and combating Ultron’s
          forces.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Sacrifice</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Pietro sacrificed his life to save Clint Barton and a Sokovian child,
          intercepting a hail of gunfire. His death marked the first permanent
          loss among the Avengers and deeply impacted Wanda Maximoff.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Though his time was brief, Quicksilver’s sacrifice demonstrated the
          true meaning of heroism. His loss became a defining trauma for Wanda
          and a reminder of the human cost of the Avengers’ battles.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/WandaMaximoff"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Wanda Maximoff
          </Link>
          <Link
            href="/mcu/heroes/herolist/Hawkeye"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Hawkeye
          </Link>
          <Link
            href="/mcu/heroes/herolist/Thor"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Thor
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
