"use client";
import { useState, type ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function FooterSection({
  title,
  children,
  defaultOpen = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile: Collapsible header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:cursor-default flex items-center justify-between text-white font-semibold md:pointer-events-none"
      >
        <h3>{title}</h3>
        <ChevronDownIcon
          className={`size-5 transition-transform md:hidden ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Content: Collapsible on mobile, always visible on desktop */}
      <div
        className={`flex flex-col gap-2 md:flex transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
