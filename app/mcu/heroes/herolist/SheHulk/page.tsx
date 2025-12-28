import Link from "next/link";

export default function SheHulkPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">She-Hulk</h1>
      <p>Hero page for She-Hulk (Jennifer Walters).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
