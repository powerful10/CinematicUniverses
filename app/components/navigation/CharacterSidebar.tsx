import Link from "next/link";

type SidebarItem = {
  name: string;
  href: string;
  alias?: string | null;
};

type CharacterSidebarProps = {
  title: string;
  subtitle: string;
  items: SidebarItem[];
};

export default function CharacterSidebar({ title, subtitle, items }: CharacterSidebarProps) {
  return (
    <aside className="character-sidebar">
      <div>
        <p className="character-sidebar-kicker">Directory</p>
        <h2 className="character-sidebar-title">{title}</h2>
        <p className="character-sidebar-subtitle">{subtitle}</p>
      </div>

      <nav className="character-sidebar-links" aria-label={`${title} navigation`}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="character-sidebar-link">
            <span>{item.name}</span>
            {item.alias ? <small>{item.alias}</small> : null}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
