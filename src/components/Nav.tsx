import { profile } from "@/content/profile";

export function Nav() {
  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        brad.davis
      </a>
      <nav className="nav-links">
        {profile.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
