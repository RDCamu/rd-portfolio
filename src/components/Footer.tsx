import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-10 text-sm text-foreground/50">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js.
    </footer>
  );
}
