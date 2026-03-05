import Link from "next/link";
import type { ReactNode } from "react";

type SocialLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

type Props = {
  links: SocialLink[];
  className?: string;
};

export default function SocialLinks({ links, className }: Props) {
  return (
    <div className={["flex gap-4", className].filter(Boolean).join(" ")}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} target="_blank">
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
