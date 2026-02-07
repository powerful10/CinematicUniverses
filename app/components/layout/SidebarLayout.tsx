import React from "react";

type SidebarLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export default function SidebarLayout({ sidebar, children }: SidebarLayoutProps) {
  return (
    <div className="sidebar-layout">
      <div className="sidebar-layout-panel">{sidebar}</div>
      <div className="sidebar-layout-content">{children}</div>
    </div>
  );
}
