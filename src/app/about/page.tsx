import HeroSplit from "@/app/components/HeroSplit/HeroSplit";
import ImageGrid from "@/app/components/ImageGrid/ImageGrid";
import SplitSection from "@/app/components/SplitSection/SplitSection";
import ToolsList from "@/app/components/ToolsList/ToolsList";
import PageLayout from "@/app/components/PageLayout/PageLayout";
import { tools } from "./tools";

export default function Page() {
  return (
    <PageLayout>
      <HeroSplit
        eyebrow="About"
        title={
          <>
            Hi, I’m Garrett.
            <span className="block italic text-blue-600">
              I build things on the web.
            </span>
          </>
        }
        description={
          "I’m a frontend engineer with a long-standing interest in computers and the web. I grew up alongside the internet, which naturally turned into a career focused on building web applications."
        }
        subDescription={
          "Most of my work centers around building thoughtful interfaces, untangling tricky UI logic, and making sure complex systems feel simple, stable, and reliable for the people using them."
        }
        right={
          <ImageGrid
            items={[
              {
                src: "/picofme.jpg",
                alt: "Garrett Smith",
                width: 640,
                height: 720,
                wrapperClassName: "md:row-span-2",
              },
              {
                src: "/fishing-rods.jpg",
                alt: "Weekend snapshot",
                width: 520,
                height: 360,
              },
              {
                src: "/0912-hp-fall-outfits-dt.avif",
                alt: "Mood board",
                width: 520,
                height: 360,
              },
            ]}
          />
        }
      />

      <section className="mt-12 px-6 md:px-12 lg:px-16 2xl:px-24">
        <SplitSection
          left={
            <div className="space-y-5 text-base md:text-lg text-slate-700">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                A bit more about me
              </h2>
              <p>
                Outside of work, I enjoy a mix of screen time and getting
                outdoors. I love movies and video games, like being outside, and
                spend a lot of time building things and working on fun projects
                with my son.
              </p>
              <p>
                I really value time with friends, family, and the people I care
                about. I love learning and trying new things, and I believe that
                everyone is both a student and a teacher. I try to bring that
                mindset into my work and relationships by staying curious, open,
                and easy to work with.
              </p>
            </div>
          }
          right={<ToolsList title="Tools I like" groups={tools} />}
        />
      </section>
    </PageLayout>
  );
}
