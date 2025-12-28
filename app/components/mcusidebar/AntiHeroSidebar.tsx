// components/mcusidebar/VillainSidebar.tsx
import Link from "next/link";

const villains = [
  { name: "Thanos", href: "/MCUCharacters/MCUVillains/Thanos" },
  { name: "Loki", href: "/MCUCharacters/MCUVillains/Loki" },
  { name: "Ultron", href: "/MCUCharacters/MCUVillains/Ultron" },
  { name: "Hela", href: "/MCUCharacters/MCUVillains/Hela" },
  { name: "Red Skull", href: "/MCUCharacters/MCUVillains/RedSkull" },
  // Add more MCU villains here
];

export default function VillainSidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300 h-screen overflow-y-auto sticky top-0">
      <h2 className="text-xl font-bold mb-4">MCU Villains</h2>
      <ul>
        {villains.map((villain) => (
          <li key={villain.name} className="mb-2">
            <Link
              href={villain.href}
              className="block text-blue-600 hover:underline"
            >
              {villain.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
