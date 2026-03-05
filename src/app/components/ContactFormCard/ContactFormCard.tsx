import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function ContactFormCard({
  eyebrow = "Contact",
  title,
  description,
  children,
  className,
}: Props) {
  return (
    <div
      className={[
        "rounded-[24px] border border-white/60 bg-white/70 p-6 md:p-10 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.5)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          {title}
        </h2>
        {description && <p className="text-slate-600">{description}</p>}
      </div>
      {children}
    </div>
  );
}
