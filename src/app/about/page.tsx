import ImageGrid from "@/app/components/ImageGrid/ImageGrid";
import ToolsList from "@/app/components/ToolsList/ToolsList";
import PageLayout from "@/app/components/PageLayout/PageLayout";
import { tools } from "./tools";

export default function Page() {
  return (
    <PageLayout>
      <section className="relative">
        <div className="page-container grid gap-10 2xl:gap-12 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-600">
                About
              </p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Hi, I’m Garrett.
                <span className="block italic text-blue-600">
                  I build things on the web.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 max-w-3xl">
                I’m a frontend engineer with a long-standing interest in
                computers and the web. I grew up alongside the internet, which
                naturally turned into a career focused on building web
                applications.
              </p>
              <p className="text-base md:text-lg text-slate-700 max-w-3xl">
                Most of my work centers around building thoughtful interfaces,
                untangling tricky UI logic, and making sure complex systems feel
                simple, stable, and reliable for the people using them.
              </p>
            </div>

            <div className="pt-8 md:pt-12 max-w-3xl space-y-9 text-base md:text-lg text-slate-700">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                A bit more about me
              </h2>
              <p>
                Outside of work, I enjoy a mix of screen time and getting
                outdoors. I love movies, video games, and spending time
                outdoors. I also enjoy building things and working on fun
                projects with my son.
              </p>
              <p>
                I really value spending time with friends, family, and the
                people I care about. I love learning and trying new things. We
                are all students. We are all teachers. I try to carry that
                mindset into everything I do by staying curious, open, and easy
                to work with.
              </p>
            </div>
          </div>

          <div className="space-y-10 lg:sticky lg:top-24 lg:w-full lg:max-w-[760px] 2xl:max-w-[800px]">
            <ImageGrid
              items={[
                {
                  src: "/picofme1.jpg",
                  alt: "Me smiling at dinner at Pelino's Pasta",
                  width: 640,
                  height: 720,
                  imageClassName: "object-[62%_50%]",
                },
                {
                  src: "/picofme2.jpg",
                  alt: "Me wearing my Digital Tech Data hat at work at Bath & Body Works",
                  width: 520,
                  height: 360,
                  imageClassName: "object-[50%_18%]",
                },
                {
                  src: "/picofus.jpg",
                  alt: "Me, my son and my girlfriend",
                  width: 520,
                  height: 360,
                },
              ]}
            />

            <ToolsList title="Tools I like" groups={tools} />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
