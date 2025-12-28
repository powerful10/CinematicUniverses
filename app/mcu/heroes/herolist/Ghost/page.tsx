import Link from "next/link";

export default function GhostPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Ghost</h1>
      <p>Hero page for Ghost (Ava Starr).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
