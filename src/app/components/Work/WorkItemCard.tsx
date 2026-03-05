"use client";

import type { WorkItem } from "@/app/work/workItems";
import type { ImagePreview } from "@/app/components/ImagePreviewModal/ImagePreviewModal";
import TagGroup from "@/app/components/TagGroup/TagGroup";
import HighlightList from "@/app/components/Work/HighlightList";
import WorkItemCtas from "@/app/components/Work/WorkItemCtas";
import WorkItemMedia from "@/app/components/Work/WorkItemMedia";
import WorkItemMeta from "@/app/components/Work/WorkItemMeta";

type Props = {
  item: WorkItem;
  index: number;
  onPreview: (preview: ImagePreview) => void;
};

export default function WorkItemCard({ item, index, onPreview }: Props) {
  const isOdd = index % 2 === 1;

  return (
    <article className="group relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-rose-500/25 via-fuchsia-500/10 to-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-gradient-to-br from-amber-400/15 via-rose-500/10 to-violet-500/15 blur-3xl" />
      </div>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.05] mix-blend-soft-light"
      >
        <filter id={`noise-${index}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#noise-${index})`} />
      </svg>
      <div className="grid gap-8 py-10 md:py-12 lg:grid-cols-12">
        <div
          className={`flex flex-col gap-6 lg:col-span-5 ${
            isOdd ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <WorkItemMeta role={item.role} timeframe={item.timeframe} />

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
              Project 0{index + 1}
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight">
              {item.title}
            </h2>
            <p className="text-base md:text-lg text-slate-800">
              {item.description}
            </p>
          </div>

          <TagGroup items={item.focus} />
          <TagGroup items={item.stack} variant="soft" />
          <HighlightList items={item.highlights} />
          <WorkItemCtas link={item.link} caseStudy={item.caseStudy} />
        </div>

        <WorkItemMedia
          title={item.title}
          bannerImage={item.bannerImage}
          screenshot={item.screenshot}
          isOdd={isOdd}
          onPreview={() =>
            onPreview({
              image: item.screenshot,
              link: item.link,
              title: item.title,
            })
          }
        />
      </div>
      <div className="h-px w-full bg-white/10" />
    </article>
  );
}
