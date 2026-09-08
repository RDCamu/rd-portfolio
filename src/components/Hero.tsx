import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-24">
      <p className="text-sm font-medium text-foreground/60">{profile.role}</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m {profile.name}.
      </h1>
      <p className="max-w-xl text-lg text-foreground/70">{profile.tagline}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
        >
          Resume
        </a>
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
