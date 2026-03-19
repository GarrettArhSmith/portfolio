import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  contentPaddingClass?: string;
};

export default function PageLayout({
  children,
  bgColor = "bg-[#f6f4ff]",
  textColor = "text-slate-900",
  contentPaddingClass = "pt-16 pb-20",
}: Props) {
  return (
    <main className={`${bgColor} ${textColor} ${contentPaddingClass}`}>
      {children}
    </main>
  );
}
