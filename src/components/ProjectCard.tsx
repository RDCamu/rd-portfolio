"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  images?: string[];
};

export default function ProjectCard({ project: p }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasImages = !!p.images && p.images.length > 0;

  return (
    <>
      <article
        className={`group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-black/10 p-5 transition-colors hover:border-black/20 dark:border-white/10 dark:hover:border-white/25 ${
          hasImages ? "cursor-pointer" : ""
        }`}
        onClick={() => hasImages && setOpen(true)}
        role={hasImages ? "button" : undefined}
        tabIndex={hasImages ? 0 : undefined}
        onKeyDown={(e) => {
          if (hasImages && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-foreground/70">{p.description}</p>
        <ul className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <li key={s} className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/60">
              {s}
            </li>
          ))}
        </ul>
        {(p.liveUrl || p.repoUrl) && (
          <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline underline-offset-4"
              >
                Live
              </a>
            )}
            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline underline-offset-4"
              >
                Code
              </a>
            )}
          </div>
        )}

        {hasImages && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
              View screenshots ({p.images!.length})
            </span>
          </div>
        )}
      </article>

      {open && hasImages && (
        <ImageLightbox images={p.images!} title={p.title} startIndex={0} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
