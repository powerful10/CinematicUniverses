import Link from "next/link";

export default function WongPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Wong</h1>
      <p>Hero page for Wong.</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
