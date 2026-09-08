import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4 max-w-lg text-foreground/70">
        Have a project in mind or just want to say hi? My inbox is open.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {profile.email}
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
