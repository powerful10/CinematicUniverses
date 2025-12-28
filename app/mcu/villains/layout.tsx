import VillainSidebar from "@/app/components/mcusidebar/VillainSidebar";

export default function HeroesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <VillainSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}
