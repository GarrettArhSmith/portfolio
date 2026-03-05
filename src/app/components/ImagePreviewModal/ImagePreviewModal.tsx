"use client";

import Image from "next/image";
import Link from "next/link";
import Btn from "@/app/components/Btn/Btn";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export type ImagePreview = {
  image: string;
  link: string;
  title: string;
};

type Props = {
  preview: ImagePreview | null;
  onClose: () => void;
};

export default function ImagePreviewModal({ preview, onClose }: Props) {
  if (!preview) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full md:w-[clamp(320px,70vw,2000px)] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-10 right-0 flex items-center gap-2">
          <Link href={preview.link} target="_blank" rel="noopener noreferrer">
            <Btn variant="contained" className="px-3 py-1 text-sm">
              <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-rose-500" />{" "}
              Live Site
            </Btn>
          </Link>
          <button
            type="button"
            className="rounded-full bg-white/90 px-3 py-1 text-sm text-slate-900 shadow"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={preview.image}
            fill={true}
            alt={`${preview.title} Screenshot`}
            className="object-cover"
            quality={100}
            priority={true}
            sizes="(min-width: 768px) 70vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}