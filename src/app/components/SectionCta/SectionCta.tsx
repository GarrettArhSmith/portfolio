"use client";

import Link from "next/link";
import Btn from "@/app/components/Btn/Btn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export default function SectionCta({
  title,
  description,
  href,
  ctaLabel,
}: Props) {
  return (
    <section className="mt-16">
      <div className="page-container">
        <div className="rounded-[32px] border border-white/15 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-100">
                {title}
              </h3>
              <p className="text-slate-100/90 max-w-2xl">{description}</p>
            </div>
            <Link href={href}>
              <Btn variant="contained" className="px-5 py-3">
                <ArrowRightIcon className="size-4 text-slate-400 group-hover:text-rose-500" />{" "}
                {ctaLabel}
              </Btn>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
