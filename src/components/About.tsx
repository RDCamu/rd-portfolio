import { about, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="mt-6 flex flex-col gap-4 text-foreground/80">
        {about.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="mt-6 text-sm text-foreground/50">{profile.location}</p>
    </section>
  );
}
