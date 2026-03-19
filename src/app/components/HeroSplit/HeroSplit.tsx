import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  subDescription?: string;
  right: ReactNode;
};

export default function HeroSplit({
  eyebrow,
  title,
  description,
  subDescription,
  right,
}: Props) {
  return (
    <section className="relative pb-12">
      <div className="absolute inset-0">
        <div className="absolute -top-28 left-0 h-80 w-80 rounded-full bg-violet-300/50 blur-3xl" />
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-rose-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/40 blur-3xl" />
      </div>
      <div className="relative page-container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-600">
              {eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl">
              {description}
            </p>
            {subDescription && (
              <p className="text-base md:text-lg text-slate-700">
                {subDescription}
              </p>
            )}
          </div>
          {right}
        </div>
      </div>
    </section>
  );
}
