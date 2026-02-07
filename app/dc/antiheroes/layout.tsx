import DCAntiheroSidebar from "@/app/components/dcsidebar/DCAntiheroSidebar";
import SidebarLayout from "@/app/components/layout/SidebarLayout";

export default function DCAntiheroesLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout sidebar={<DCAntiheroSidebar />}>{children}</SidebarLayout>;
}
