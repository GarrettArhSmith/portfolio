"use client";

import Pill from "@/app/components/Pill/Pill";

type Props = {
  role: string;
  timeframe: string;
};

export default function WorkItemMeta({ role, timeframe }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
      <Pill variant="role">{role}</Pill>
      <span className="text-slate-700">{timeframe}</span>
    </div>
  );
}
