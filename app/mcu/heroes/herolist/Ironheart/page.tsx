import Link from "next/link";

export default function IronheartPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Ironheart</h1>
      <p>Hero page for Ironheart (Riri Williams).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
