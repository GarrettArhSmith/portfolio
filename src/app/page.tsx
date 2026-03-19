import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import PageLayout from "@/app/components/PageLayout/PageLayout";
import TagGroup from "@/app/components/TagGroup/TagGroup";

export default function Home() {
  return (
    <PageLayout
      bgColor="bg-gradient-to-br from-rose-50 via-[#f7f6f2] to-indigo-50"
      textColor="text-slate-900"
      contentPaddingClass=""
    >
      <section className="relative isolate overflow-hidden lg:min-h-[calc(100vh-5rem)] flex items-center py-8 md:py-10 lg:py-0">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_8%,rgba(244,114,182,0.16),transparent_65%),radial-gradient(95%_90%_at_88%_78%,rgba(129,140,248,0.2),transparent_68%)]" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute left-1/3 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-2/3 h-80 w-80 translate-x-1/3 -translate-y-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-[0.08] mix-blend-multiply"
          >
            <filter id="homepage-grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.78"
                numOctaves="2"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#homepage-grain)" />
          </svg>
        </div>

        <div className="page-container grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <aside className="order-2 rounded-2xl border border-slate-300/70 bg-white/35 p-5 backdrop-blur-sm lg:order-1 lg:col-span-3 lg:rounded-none lg:border-0 lg:border-r lg:bg-transparent lg:p-0 lg:pr-8">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-600">
              Portfolio
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-700 lg:mt-6">
              <span className="block">Based in Ohio • Remote friendly</span>
              <span className="mt-2 block">
                I specialize in building React and TypeScript applications that
                are fast, scalable, and built to last.
              </span>
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <p>Available for full-time or contract roles.</p>
            </div>
          </aside>

          <div className="order-1 lg:order-2 lg:col-span-9">
            <h1 className="text-[2.25rem] leading-[0.95] font-semibold tracking-tight md:text-[4.3rem] xl:text-[5.4rem]">
              Garrett Smith
              <span className="mt-2 block italic text-cyan-700">
                Software Engineer
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-800 md:text-2xl md:leading-relaxed">
              I build scalable frontend systems and high-traffic web
              applications.
            </p>

            <div className="mt-8">
              <TagGroup
                items={[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Design Systems",
                  "Accessibility",
                ]}
                className="gap-3"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 md:mt-10">
              <Link
                href="/work"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-800 hover:text-rose-300"
              >
                View my work
                <ArrowRightIcon className="size-4 text-slate-400 transition group-hover:text-rose-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-400/70 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-700 hover:text-slate-950"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-8 h-px w-full bg-slate-300/70 md:mt-10" />
            <p className="mt-4 text-sm text-slate-600">
              Building web experiences with intent, not noise.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
