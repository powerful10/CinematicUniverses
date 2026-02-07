import VillainSidebar from "@/app/components/mcusidebar/VillainSidebar";
import SidebarLayout from "@/app/components/layout/SidebarLayout";

export default function VillainsLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout sidebar={<VillainSidebar />}>{children}</SidebarLayout>;
}
