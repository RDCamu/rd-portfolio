import Link from "next/link";
import { profile } from "@/data/portfolio";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--background)]/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold">
          {profile.name}
        </Link>
        <ul className="flex gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-foreground/70 transition-colors hover:text-foreground">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
