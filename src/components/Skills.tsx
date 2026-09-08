import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="text-sm font-medium text-foreground/50">{g.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm dark:border-white/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
