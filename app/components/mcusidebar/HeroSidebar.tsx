"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const heroes = [
  // Core Avengers and Founding Members
  { name: "Iron Man", href: "/mcu/heroes/herolist/IronMan" },
  { name: "Hulk", href: "/mcu/heroes/herolist/Hulk" },
  { name: "Thor", href: "/mcu/heroes/herolist/Thor" },
  { name: "Captain America", href: "/mcu/heroes/herolist/CaptainAmerica" },
  { name: "Black Widow", href: "/mcu/heroes/herolist/BlackWidow" },
  { name: "Hawkeye", href: "/mcu/heroes/herolist/Hawkeye" },

  // Post-Age of Ultron Additions
  { name: "Wanda Maximoff", href: "/mcu/heroes/herolist/WandaMaximoff" },
  { name: "Quicksilver", href: "/mcu/heroes/herolist/Quicksilver", alias: "Pietro Maximoff" },
  { name: "Vision", href: "/mcu/heroes/herolist/Vision" },
  { name: "War Machine", href: "/mcu/heroes/herolist/WarMachine", alias: "James Rhodes" },
  { name: "Falcon", href: "/mcu/heroes/herolist/Falcon", alias: "Sam Wilson" },
  { name: "Winter Soldier", href: "/mcu/heroes/herolist/WinterSoldier", alias: "Bucky Barnes" },

  // Guardians of the Galaxy
  { name: "Star-Lord", href: "/mcu/heroes/herolist/StarLord", alias: "Peter Quill" },
  { name: "Gamora", href: "/mcu/heroes/herolist/Gamora" },
  { name: "Drax", href: "/mcu/heroes/herolist/Drax" },
  { name: "Rocket", href: "/mcu/heroes/herolist/Rocket" },
  { name: "Groot", href: "/mcu/heroes/herolist/Groot" },
  { name: "Mantis", href: "/mcu/heroes/herolist/Mantis" },
  { name: "Nebula", href: "/mcu/heroes/herolist/Nebula" },
  { name: "Kraglin", href: "/mcu/heroes/herolist/Kraglin" },
  { name: "Adam Warlock", href: "/mcu/heroes/herolist/AdamWarlock" },

  // New and Extended Heroes
  { name: "Black Panther", href: "/mcu/heroes/herolist/BlackPanther", alias: "T'Challa/Shuri" },
  { name: "Spider-Man", href: "/mcu/heroes/herolist/Spiderman", alias: "Peter Parker" },
  { name: "Ant-Man", href: "/mcu/heroes/herolist/AntMan", alias: "Scott Lang" },
  { name: "Wasp", href: "/mcu/heroes/herolist/Wasp", alias: "Hope van Dyne" },
  { name: "Doctor Strange", href: "/mcu/heroes/herolist/DoctorStrange", alias: "Stephen Strange" },
  { name: "Captain Marvel", href: "/mcu/heroes/herolist/CaptainMarvel", alias: "Carol Danvers" },
  { name: "Shang-Chi", href: "/mcu/heroes/herolist/ShangChi", alias: "Xu Shang-Chi" },
  { name: "Ms. Marvel", href: "/mcu/heroes/herolist/MsMarvel", alias: "Kamala Khan" },
  { name: "She-Hulk", href: "/mcu/heroes/herolist/SheHulk", alias: "Jennifer Walters" },
  { name: "Moon Knight", href: "/mcu/heroes/herolist/MoonKnight", alias: "Marc Spector" },
  { name: "Loki", href: "/mcu/heroes/herolist/Loki", alias: "God of Stories" },
  { name: "Daredevil", href: "/mcu/heroes/herolist/Daredevil", alias: "Matt Murdock" },
  { name: "Jessica Jones", href: "/mcu/heroes/herolist/JessicaJones" },
  { name: "Luke Cage", href: "/mcu/heroes/herolist/LukeCage" },
  { name: "Iron Fist", href: "/mcu/heroes/herolist/IronFist", alias: "Danny Rand" },
  { name: "Echo", href: "/mcu/heroes/herolist/Echo", alias: "Maya Lopez" },
  { name: "Kate Bishop", href: "/mcu/heroes/herolist/KateBishop" },
  { name: "Yelena Belova", href: "/mcu/heroes/herolist/YelenaBelova" },
  { name: "Ghost", href: "/mcu/heroes/herolist/Ghost", alias: "Ava Starr" },
  { name: "Red Guardian", href: "/mcu/heroes/herolist/RedGuardian", alias: "Alexei Shostakov" },
  { name: "Shuri", href: "/mcu/heroes/herolist/Shuri", alias: "Black Panther" },
  { name: "M'Baku", href: "/mcu/heroes/herolist/MBaku" },
  { name: "Valkyrie", href: "/mcu/heroes/herolist/Valkyrie", alias: "Brunnhilde" },
  { name: "Wong", href: "/mcu/heroes/herolist/Wong" },
  { name: "Monica Rambeau", href: "/mcu/heroes/herolist/MonicaRambeau" },
  { name: "Ironheart", href: "/mcu/heroes/herolist/Ironheart", alias: "Riri Williams" },
  { name: "Stature", href: "/mcu/heroes/herolist/Stature", alias: "Cassie Lang" },

  // Eternals
  { name: "Ajak", href: "/mcu/heroes/herolist/Ajak" },
  { name: "Sersi", href: "/mcu/heroes/herolist/Sersi" },
  { name: "Sprite", href: "/mcu/heroes/herolist/Sprite" },
  { name: "Kingo", href: "/mcu/heroes/herolist/Kingo" },
  { name: "Thena", href: "/mcu/heroes/herolist/Thena" },
  { name: "Gilgamesh", href: "/mcu/heroes/herolist/Gilgamesh" },
  { name: "Phastos", href: "/mcu/heroes/herolist/Phastos" },
  { name: "Druig", href: "/mcu/heroes/herolist/Druig" },
  { name: "Makkari", href: "/mcu/heroes/herolist/Makkari" },

  // Other Allies
  { name: "Nick Fury", href: "/mcu/heroes/herolist/NickFury" },
  { name: "Phil Coulson", href: "/mcu/heroes/herolist/PhilCoulson" },
  { name: "Maria Hill", href: "/mcu/heroes/herolist/MariaHill" },
  { name: "Sharon Carter", href: "/mcu/heroes/herolist/SharonCarter" },
  { name: "Peggy Carter", href: "/mcu/heroes/herolist/PeggyCarter" },
  { name: "Jane Foster / Mighty Thor", href: "/mcu/heroes/herolist/JaneFosterThor" },
];



export default function HeroSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300 h-screen overflow-y-auto sticky top-0">
      <h2 className="text-xl font-bold mb-4">MCU Heroes</h2>
      <ul>
        {heroes.map((hero) => {
          const isActive = pathname === hero.href;

          return (
            <li key={hero.name} className="mb-2">
              <Link
                href={hero.href}
                className={`block text-blue-600 hover:underline ${
                  isActive ? "font-bold text-blue-800" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {hero.name} {hero.alias ? `(${hero.alias})` : ""}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
