"use client";

import type { ReactNode } from "react";

export type PillVariant = "outline" | "soft" | "role";

type Props = {
  children: ReactNode;
  variant?: PillVariant;
  className?: string;
};

const variantClasses: Record<PillVariant, string> = {
  outline:
    "border border-slate-300 px-3 py-1 text-xs text-slate-800 bg-white/60",
  soft: "bg-slate-900/5 px-3 py-1 text-xs text-slate-800 border border-slate-200",
  role: "rounded-full bg-white/70 px-3 py-1 text-slate-900 border border-slate-300",
};

export default function Pill({
  children,
  variant = "outline",
  className,
}: Props) {
  const classes = ["rounded-full", variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
