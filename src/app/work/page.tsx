import Image from "next/image";
import Link from "next/link";
import Btn from "@/app/components/Btn/Btn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function page({}: Props) {
  const workItems = [
    {
      title: "Express",
      description:
        "Worked on the Express.com eCommerce website as a frontend engineer for 2 years. Touched just about everywhere on the site during my time here, working on new features, redesigns, site maintenance and bug fixes. Worked on cross functional, agile teams consisting of Web, IOS and Android engineers as well as Product team members and UX Designers.",
      logo: "/express.png",
      bannerImage: "/0912-hp-fall-outfits-dt.avif",
      link: "https://express.com",
      screenshot: "/express-screenshot.png",
    },
    {
      title: "MidCurrent",
      description:
        "The goal of this project was to create an online learning for fly fishing, and allow content editors to customize the content of these guides. We set this up with NextJS and SanityCMS.",
      logo: "/express.png",
      bannerImage: "/fishing-rods.jpg",
      link: "https://midcurrent-learn.vercel.app/",
      screenshot: "/midcurrent-screenshot.png",
    },
  ];
  return (
    <main className="">
      {workItems.map((item, i) => (
        <section
          key={i}
          className="flex flex-col md:flex-row gap-4 items-center md:h-screen"
        >
          <div className="md:w-5/12 p-4 md:px-12 flex flex-col gap-6">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-lg md:w-4/5">{item.description}</p>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <Btn variant="contained" className="px-4 py-2">
                <ArrowRightIcon className="size-4 text-slate-400 group-hover:text-rose-500" />{" "}
                {item.link}
              </Btn>
            </Link>
            <div className="absolute w-2/3 mt-[125%] md:mt-0 md:w-4/12 aspect-video bg-rose-500 md:start-1/4 z-10 rounded-md overflow-hidden outline outline-4 outline-white">
              <Image
                src={item.screenshot}
                fill={true}
                alt="Express Banner Image"
                className="object-cover"
                quality={100}
                priority={true}
                unoptimized={true}
              />
            </div>
          </div>
          <div className="relative rounded-lg md:rounded-none overflow-hidden ml-auto -right-4 md:right-0 w-11/12 md:w-full md:w-7/12 h-80 md:h-full bg-black">
            <Image
              src={item.bannerImage}
              fill={true}
              alt="Express Banner Image"
              className="object-cover"
            />
          </div>
        </section>
      ))}
    </main>
  );
}
