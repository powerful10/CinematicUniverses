import Link from "next/link";
import Image from "next/image";

import WarMachineSrc from "../../heroesImage/WarMachine/WarMachine.jpg";
import IronPatriot from "../../heroesImage/WarMachine/IronPatriot.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";
import CivilWar from "../../heroesImage/WarMachine/CivilWar.jpg";
import Endgame from "../../heroesImage/WarMachine/Endgame.jpg";

export default function WarMachinePage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={WarMachineSrc}
                  alt="War Machine"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  War Machine
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  James “Rhodey” Rhodes
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  United States Air Force officer and longtime ally of Tony
                  Stark, James Rhodes operates as War Machine, combining
                  military discipline with Stark technology to serve as one
                  of the Avengers’ most heavily armed combatants.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/war-machine-james-rhodes/on-screen"
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
                James Rupert Rhodes
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers; U.S. Air Force
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Active
              </div>
              <div>
                <strong className="block text-gray-900">Armor type</strong>
                War Machine / Iron Patriot
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
                  <strong>As War Machine:</strong> Iron Man 2 (2010)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Don Cheadle
                </li>
                <li>
                  <strong>Military rank:</strong> Lieutenant Colonel
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: IronPatriot, label: "Iron Patriot Armor" },
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
          James Rhodes is a decorated U.S. Air Force officer who became
          involved in the world of superheroes through his close friendship
          with Tony Stark. Recognizing the danger of Stark technology falling
          into the wrong hands, Rhodes assumed control of a modified Iron Man
          suit, becoming War Machine.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Military Career</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Rhodey’s military background defines his approach to heroism.
          Disciplined, pragmatic, and mission-focused, he serves as a bridge
          between governmental authority and the Avengers’ more independent
          members.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Iron Patriot Program</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          During the Extremis crisis, Rhodes operated under the Iron Patriot
          identity as a symbol of American defense. Though the program was
          compromised, it reinforced his role as a sanctioned protector
          rather than a vigilante.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Civil War and Injury</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          In the conflict over the Sokovia Accords, Rhodey sided with Tony
          Stark and the pro-registration faction. He was critically injured
          during the Leipzig airport battle, resulting in permanent spinal
          damage that he overcame using advanced exoskeletal support.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and Endgame</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Despite his injuries, Rhodey continued fighting alongside the
          Avengers against Thanos. He played a key role in both the Battle of
          Wakanda and the final confrontation during the Blip reversal.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          War Machine represents duty, resilience, and accountability in the
          MCU. Unlike many heroes driven by destiny or power, James Rhodes
          chooses service, proving that heroism can be rooted in responsibility
          rather than ambition.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/IronMan"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Iron Man
          </Link>
          <Link
            href="/mcu/heroes/herolist/CaptainAmerica"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Captain America
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
