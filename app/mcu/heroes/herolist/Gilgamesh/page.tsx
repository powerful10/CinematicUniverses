import Link from "next/link";

export default function GilgameshPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Gilgamesh</h1>
      <p>Hero page for Gilgamesh.</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
