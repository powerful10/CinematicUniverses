import Link from "next/link";
import Image from "next/image";

import VisionSrc from "../../heroesImage/Vision/Vision.jpg";
import Creation from "../../heroesImage/Vision/Creation.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";
import MindStone from "../../heroesImage/Vision/Mindstone.jpg";
import Wakanda from "../../heroesImage/Vision/Wakanda.jpg";

export default function VisionPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={VisionSrc}
                  alt="Vision"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Vision
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Synthetic Being
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  An advanced synthetic lifeform born from the convergence of
                  human intellect, alien technology, and the Mind Stone,
                  Vision represents the MCU’s exploration of consciousness,
                  morality, and identity.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/vision/on-screen"
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
                <strong className="block text-gray-900">Designation</strong>
                Vision
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Deceased / Reconstructed Variants
              </div>
              <div>
                <strong className="block text-gray-900">Power source</strong>
                Mind Stone (formerly)
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
                  <strong>First appearance:</strong> Avengers: Age of Ultron (2015)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Paul Bettany
                </li>
                <li>
                  <strong>Created by:</strong> Bruce Banner, Tony Stark
                </li>
                <li>
                  <strong>Primary abilities:</strong> Density control, energy projection
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Creation, label: "Creation" },
                  { src: MindStone, label: "Mind Stone" },
                  { src: Avengers, label: "Avengers Member" },
                  { src: Wakanda, label: "Battle of Wakanda" },
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
          Vision was created during the Ultron crisis as a synthetic body
          powered by the Mind Stone and animated by a combination of J.A.R.V.I.S.,
          Bruce Banner’s neural mapping, and Tony Stark’s design.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Birth and Purpose</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Though initially feared, Vision demonstrated moral clarity and
          philosophical restraint, proving himself worthy to wield Mjölnir
          and earning the Avengers’ trust almost immediately.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Avengers and Humanity</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Vision struggled with questions of identity, free will, and human
          emotion. His relationship with Wanda Maximoff revealed his capacity
          for love and deepened his understanding of humanity.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Targeted by Thanos for the Mind Stone, Vision was critically wounded
          and taken to Wakanda in a failed attempt to separate him from the
          Stone without killing him. Wanda ultimately destroyed the Stone,
          only for Thanos to reverse time and kill Vision himself.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Vision’s legacy lies in his embodiment of moral reasoning and
          compassion. Though artificial in origin, his humanity surpassed
          that of many organic beings, leaving a lasting impact on the MCU.
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
            href="/mcu/heroes/herolist/IronMan"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Iron Man
          </Link>
          <Link
            href="/mcu/heroes/herolist/Hulk"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Hulk
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
