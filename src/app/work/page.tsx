"use client";

import { useState } from "react";
import { workItems } from "./workItems";
import PageHero from "@/app/components/PageHero/PageHero";
import WorkItemCard from "@/app/components/Work/WorkItemCard";
import SectionCta from "@/app/components/SectionCta/SectionCta";
import PageLayout from "@/app/components/PageLayout/PageLayout";
import ImagePreviewModal, {
  type ImagePreview,
} from "@/app/components/ImagePreviewModal/ImagePreviewModal";

type Props = {};

export default function Page({}: Props) {
  const [activePreview, setActivePreview] = useState<ImagePreview | null>(null);
  return (
    <PageLayout bgColor="bg-[#fef1f2]">
      <PageHero
        eyebrow="Selected Work"
        title={
          <>
            Work that
            <span className="block italic text-rose-700">
              ships and scales.
            </span>
          </>
        }
        description="End-to-end web delivery with an emphasis on speed, quality, usability, and scale."
        pills={[
          "Performance",
          "Design Systems",
          "Accessibility",
          "CMS",
          "Ecommerce",
        ]}
      />

      <section className="mt-12 px-6 md:px-12 lg:px-16 2xl:px-24">
        {workItems.map((item, i) => (
          <WorkItemCard
            key={item.title}
            item={item}
            index={i}
            onPreview={setActivePreview}
          />
        ))}
      </section>

      <SectionCta
        title="Have a project in mind?"
        description="I help teams ship modern web products. Let’s talk about your goals, stack, and timeline."
        href="/contact"
        ctaLabel="Start a Project"
      />

      <ImagePreviewModal
        preview={activePreview}
        onClose={() => setActivePreview(null)}
      />
    </PageLayout>
  );
}
