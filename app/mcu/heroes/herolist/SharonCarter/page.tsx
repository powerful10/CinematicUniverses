import Link from "next/link";

export default function SharonCarterPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Sharon Carter</h1>
      <p>Hero page for Sharon Carter.</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
