import Link from "next/link";
import Image from "next/image";

import ThorSrc from "../../heroesImage/Thor/Thor.jpg";
import Mjolnir from "../../heroesImage/Thor/Mjolnir.jpg";
import Stormbreaker from "../../heroesImage/Thor/Stormbreaker.jpg";
import Asgard from "../../heroesImage/Thor/Asgard.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";

export default function ThorPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={ThorSrc}
                  alt="Thor, God of Thunder"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">Thor</h1>
                <p className="text-sm text-gray-600 mt-1">Thor Odinson</p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  The God of Thunder, heir to the throne of Asgard, and a founding member of the Avengers.
                  Thor wields enchanted weapons and commands the power of lightning, combining divine strength with heroic determination to protect the Nine Realms and Earth from cosmic threats.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/thor/on-screen"
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
                Thor Odinson
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers; Asgard
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Alive
              </div>
              <div>
                <strong className="block text-gray-900">Weapons</strong>
                Mjolnir, Stormbreaker, Lightning
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
                  <strong>First MCU appearance:</strong> Thor (2011)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Chris Hemsworth
                </li>
                <li>
                  <strong>Occupation:</strong> Prince of Asgard, Avenger
                </li>
                <li>
                  <strong>Home:</strong> Asgard / Earth
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Mjolnir, label: "Mjolnir" },
                  { src: Stormbreaker, label: "Stormbreaker" },
                  { src: Asgard, label: "Asgard" },
                  { src: Avengers, label: "Avengers Team" }
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
                    <div className="mt-2 text-xs text-gray-500">{item.label}</div>
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
          Thor is the eldest son of Odin, king of Asgard, and was groomed from birth to be a hero of the Nine Realms.
          His arrogance and impulsive behavior early on led to banishment to Earth, teaching him humility and compassion.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Arrival on Earth</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Stripped of his powers by Odin and sent to Earth, Thor learns the value of selflessness.
          He proves his worth by retrieving Mjolnir, the enchanted hammer that only the worthy can lift, and stops his brother Loki from conquering Earth.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Avengers and New York</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Recruited by Nick Fury and S.H.I.E.L.D., Thor joins the Avengers to combat Loki and the Chitauri invasion of New York.
          Thor’s divine strength, flight, and lightning make him a central figure in the team’s battles.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Thor: Dark World and Family Conflict</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Thor faces the Dark Elves and the Aether while dealing with the loss of his mother Frigga.
          He demonstrates leadership, courage, and growing understanding of his responsibilities as heir to Asgard.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Ragnarok and Hulk</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Thor loses Mjolnir to Hela but discovers his latent powers as the God of Thunder.
          He forms an alliance with Hulk and Valkyrie to escape Sakaar and prevent Hela from destroying Asgard, culminating in the Ragnarok event and the destruction of his home.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Thor forges the weapon Stormbreaker with Rocket and Groot, gaining immense power.
          He arrives too late to stop Thanos from completing the Snap, suffering heavy personal loss.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Endgame</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Thor joins the Avengers’ time heist to undo the Snap. Haunted by guilt and despair, he ultimately participates in the final battle against Thanos.
          After the battle, he chooses to leave New Asgard in Valkyrie’s hands and joins the Guardians of the Galaxy, setting up new adventures.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Thor embodies the growth from arrogance to humility, power to responsibility, and isolation to teamwork. His journey through multiple realms, epic battles, and personal loss makes him a cornerstone of the MCU’s cosmic narrative.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/Hulk"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Hulk
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
