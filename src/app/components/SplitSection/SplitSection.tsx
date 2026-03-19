import type { ReactNode } from "react";

type Props = {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  reverseOnMobile?: boolean;
};

export default function SplitSection({
  left,
  right,
  className,
  reverseOnMobile = false,
}: Props) {
  return (
    <div
      className={[
        "grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={reverseOnMobile ? "order-2 lg:order-1" : undefined}>
        {left}
      </div>
      <div className={reverseOnMobile ? "order-1 lg:order-2" : undefined}>
        {right}
      </div>
    </div>
  );
}
