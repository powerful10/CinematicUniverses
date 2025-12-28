import Link from "next/link";

export default function LokiPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Loki</h1>
      <p>Hero page for Loki (God of Stories).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
