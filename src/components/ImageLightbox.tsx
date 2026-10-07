"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageLightbox({
  images,
  title,
  startIndex,
  onClose,
}: {
  images: string[];
  title: string;
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/80 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-background"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/11] w-full">
          <Image
            src={images[index]}
            alt={`${title} screenshot ${index + 1} of ${images.length}`}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
          />
        </div>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-lg shadow"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-lg shadow"
            >
              ›
            </button>
          </>
        )}
      </div>
      <div className="flex items-center gap-3 text-sm text-white/80">
        <span>
          {title} — {index + 1}/{images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-white hover:border-white/60"
        >
          Close
        </button>
      </div>
    </div>
  );
}
