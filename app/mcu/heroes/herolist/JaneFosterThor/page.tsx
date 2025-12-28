import Link from "next/link";

export default function JaneFosterThorPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Jane Foster / Mighty Thor</h1>
      <p>Hero page for Jane Foster (Mighty Thor).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
