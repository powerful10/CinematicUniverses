import DCHeroSidebar from "@/app/components/dcsidebar/DCHeroSidebar";
import SidebarLayout from "@/app/components/layout/SidebarLayout";

export default function DCHeroesLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout sidebar={<DCHeroSidebar />}>{children}</SidebarLayout>;
}
