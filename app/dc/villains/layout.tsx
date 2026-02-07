import DCVillainSidebar from "@/app/components/dcsidebar/DCVillainSidebar";
import SidebarLayout from "@/app/components/layout/SidebarLayout";

export default function DCVillainsLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout sidebar={<DCVillainSidebar />}>{children}</SidebarLayout>;
}
