import Link from "next/link";

export default function MariaHillPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Maria Hill</h1>
      <p>Hero page for Maria Hill.</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
