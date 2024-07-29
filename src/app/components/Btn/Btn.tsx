"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant: "text" | "contained" | "outlined";
  underline?: boolean;
  onClick: React.MouseEventHandler;
  disabled?: boolean;
};

export default function Btn({
  children,
  className = "",
  underline,
  variant,
  onClick,
  disabled = false,
}: Props) {
  const variantStyling = () => {
    let style = "";
    if (variant === "contained")
      style = "bg-slate-800 hover:text-rose-500 hover:bg-slate-700";
    if (variant === "outlined")
      style = "border border-slate-700 hover:border-slate-500";
    if (variant === "text") style = "flex-col font-bold bg-transparent";
    return style;
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "group rounded-xl text-white py-1 px-3 transition-all overflow-hidden text-nowrap",
        variantStyling(),
        className
      )}
    >
      <div className="flex items-center gap-2">{children}</div>
      {underline && (
        <div className="h-0.5 w-full bg-black translate-x-[150%] group-hover:translate-x-0 transition-all"></div>
      )}
    </button>
  );
}
