import Link from "next/link";

export default function AdamWarlockPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Adam Warlock</h1>
      <p>Hero page for Adam Warlock.</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
