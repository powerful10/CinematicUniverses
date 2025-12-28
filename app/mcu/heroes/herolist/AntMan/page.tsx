import Link from "next/link";

export default function AntManPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Ant-Man</h1>
      <p>Hero page for Ant-Man (Scott Lang).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
