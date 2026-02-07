import HeroSidebar from "@/app/components/mcusidebar/HeroSidebar";
import SidebarLayout from "@/app/components/layout/SidebarLayout";

export default function HeroesLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout sidebar={<HeroSidebar />}>{children}</SidebarLayout>;
}
