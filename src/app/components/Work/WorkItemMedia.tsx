"use client";

import Image from "next/image";

type Props = {
  title: string;
  bannerImage: string;
  screenshot: string;
  isOdd: boolean;
  onPreview: () => void;
};

export default function WorkItemMedia({
  title,
  bannerImage,
  screenshot,
  isOdd,
  onPreview,
}: Props) {
  return (
    <div className={`relative lg:col-span-7 ${isOdd ? "lg:order-1" : "lg:order-2"}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/25 via-transparent to-cyan-400/25 blur-2xl" />
      <div className="relative rounded-2xl border border-slate-200 bg-white/60 p-3">
        <div
          className={`relative aspect-[16/9] w-full min-h-[180px] sm:min-h-[220px] overflow-hidden rounded-xl ${
            isOdd ? "rotate-0 sm:-rotate-1 lg:-rotate-2" : "rotate-0 sm:rotate-1 lg:rotate-2"
          }`}
        >
          <Image
            src={bannerImage}
            fill={true}
            alt={`${title} Banner Image`}
            className="object-cover"
            priority={true}
            sizes="(min-width: 1280px) 55vw, (min-width: 1024px) 60vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10" />
        </div>

        <div
          className={`absolute bottom-4 ${
            isOdd ? "right-4 md:right-6" : "right-4 md:left-6 md:right-auto"
          } w-[70%] sm:w-[62%] md:w-[52%] lg:w-[56%] xl:w-[60%] max-w-[85vw] md:top-1/2 md:-translate-y-1/2`}
        >
          <button
            type="button"
            onClick={onPreview}
            className={`relative z-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-xl transition-all duration-300 ease-out hover:scale-[1.2] hover:rotate-0 hover:shadow-2xl ${
              isOdd ? "rotate-0 sm:rotate-1 lg:rotate-2" : "rotate-0 sm:-rotate-1 lg:-rotate-2"
            }`}
          >
            <Image
              src={screenshot}
              fill={true}
              alt={`${title} Screenshot`}
              className="object-cover object-top"
              quality={100}
              priority={true}
              sizes="(min-width: 1280px) 36vw, (min-width: 1024px) 40vw, (min-width: 768px) 56vw, 90vw"
            />
          </button>
        </div>
      </div>
    </div>
  );
}