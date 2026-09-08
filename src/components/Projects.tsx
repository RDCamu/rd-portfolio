import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col gap-3 rounded-xl border border-black/10 p-5 transition-colors hover:border-black/20 dark:border-white/10 dark:hover:border-white/25"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-foreground/70">{p.description}</p>
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/60"
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Live
              </a>
              <a href={p.repoUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
