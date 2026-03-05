import type { ReactNode } from "react";

type Props = {
  left: ReactNode;
  right: ReactNode;
  className?: string;
};

export default function SplitSection({ left, right, className }: Props) {
  return (
    <div
      className={[
        "grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
