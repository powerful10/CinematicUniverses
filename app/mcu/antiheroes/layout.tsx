import AntiHeroSidebar from "@/app/components/mcusidebar/AntiHeroSidebar";
import SidebarLayout from "@/app/components/layout/SidebarLayout";

export default function AntiheroesLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout sidebar={<AntiHeroSidebar />}>{children}</SidebarLayout>;
}
