import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
};

export default function PageLayout({
  children,
  bgColor = "bg-[#f6f4ff]",
  textColor = "text-slate-900",
}: Props) {
  return (
    <main className={`${bgColor} ${textColor} pt-16 pb-20`}>{children}</main>
  );
}
