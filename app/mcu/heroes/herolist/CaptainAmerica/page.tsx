import Link from "next/link";
import Image from "next/image";

import CapSrc from "../../heroesImage/CaptainAmerica/CaptainAmerica.jpg";
import Shield from "../../heroesImage/CaptainAmerica/CaptainAmericaShield.jpg";
import WinterSoldier from "../../heroesImage/CaptainAmerica/WinterSoldier.jpg";
import Avengers from "../../heroesImage/hulk/Avengers.jpg";
import InfinityWar from "../../heroesImage/CaptainAmerica/InfinityWar.jpg";

export default function CaptainAmericaPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={CapSrc}
                  alt="Captain America"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">Captain America</h1>
                <p className="text-sm text-gray-600 mt-1">Steve Rogers</p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Super-soldier and moral compass of the Avengers, Steve Rogers was enhanced to peak human condition
                  during World War II. Wielding his iconic Vibranium shield, he fights to uphold justice, freedom, and
                  the values of humanity across time and space.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/captain-america-steve-rogers/on-screen"
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
                Steve Rogers
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers; Howling Commandos; S.H.I.E.L.D.
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Alive (post-Endgame timeline)
              </div>
              <div>
                <strong className="block text-gray-900">Weapons</strong>
                Vibranium Shield, tactical combat skills
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
                  <strong>Portrayed by:</strong> Chris Evans
                </li>
                <li>
                  <strong>Occupation:</strong> Super Soldier, Avenger
                </li>
                <li>
                  <strong>Home:</strong> Brooklyn, New York / Avengers Base
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Shield, label: "Vibranium Shield" },
                  { src: WinterSoldier, label: "Bucky Barnes / Winter Soldier" },
                  { src: Avengers, label: "Avengers Team" },
                  { src: InfinityWar, label: "Infinity War Battle" }
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
          Steve Rogers volunteered for Project Rebirth during World War II and was transformed into the super-soldier Captain America.
          His enhanced strength, agility, and endurance, combined with his unwavering morality, made him a key figure in the fight against Hydra and global threats.
        </p>

        <h3 className="mt-8 text-xl font-semibold">World War II and Hydra</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Rogers led the Howling Commandos to stop Hydra’s plans with Red Skull and the Tesseract. 
          After an explosive mission, he was frozen and later found decades later by S.H.I.E.L.D., effectively traveling from the 1940s to the modern era.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Avengers Recruitment</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Captain America joins the Avengers Initiative to combat Loki and the Chitauri invasion of New York.
          He quickly becomes a central figure, coordinating the team and fighting alongside Iron Man, Thor, Black Widow, and Hulk.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Winter Soldier and Civil War</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Steve faces moral dilemmas when his best friend Bucky Barnes is revealed as the brainwashed Winter Soldier.
          His defiance of government oversight culminates in a conflict with Tony Stark and the Sokovia Accords, splitting the Avengers into factions.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and Endgame</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Captain America fights valiantly against Thanos and his army. He leads the remaining Avengers in a time heist to undo the Snap, returning to battle Thanos in a climactic final fight.
          Rogers proves his leadership and heroism, reclaiming his shield and iconic status.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Steve Rogers represents morality, self-sacrifice, and leadership in the MCU. His journey from a frail but determined soldier to the ultimate Avenger underscores the ideals of courage, justice, and humanity.
          After Endgame, he passes his shield to Sam Wilson, signifying the continuation of the Captain America legacy.
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
            href="/mcu/heroes/herolist/Thor"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Thor
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
