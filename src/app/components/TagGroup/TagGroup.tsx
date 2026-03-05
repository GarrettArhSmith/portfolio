"use client";

import Pill, { type PillVariant } from "@/app/components/Pill/Pill";

type Props = {
  items: string[];
  variant?: PillVariant;
  className?: string;
};

export default function TagGroup({
  items,
  variant = "outline",
  className,
}: Props) {
  return (
    <div
      className={["flex flex-wrap gap-2", className].filter(Boolean).join(" ")}
    >
      {items.map((item) => (
        <Pill key={item} variant={variant}>
          {item}
        </Pill>
      ))}
    </div>
  );
}
