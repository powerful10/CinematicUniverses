import Link from "next/link";

export default function DoctorStrangePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Doctor Strange</h1>
      <p>Hero page for Doctor Strange (Stephen Strange).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
