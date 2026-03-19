"use client";

import type { ReactNode } from "react";
import TagGroup from "@/app/components/TagGroup/TagGroup";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  pills?: string[];
  showGlow?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  pills,
  showGlow = true,
}: Props) {
  return (
    <section className="w-full">
      <div className="page-container">
        <div className="relative">
          {showGlow && (
            <>
              <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-rose-500/30 via-fuchsia-400/15 to-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gradient-to-br from-amber-400/20 via-rose-500/15 to-violet-500/20 blur-3xl" />
            </>
          )}
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-700">
              {eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-slate-800 max-w-3xl">
              {description}
            </p>
            {pills && pills.length > 0 && (
              <TagGroup items={pills} className="gap-3 pt-2" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
