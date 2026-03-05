"use client";

type Props = {
  items: string[];
  className?: string;
};

export default function HighlightList({ items, className }: Props) {
  return (
    <ul
      className={["grid gap-2 text-sm text-slate-800", className]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((point) => (
        <li key={point} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-600" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
