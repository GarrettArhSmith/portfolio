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
    },
    {
      title: "MidCurrent",
      description:
        "The goal of this project was to create an online learning for fly fishing, and allow content editors to customize the content of these guides. We set this up with NextJS and SanityCMS.",
      logo: "/express.png",
      bannerImage: "/fishing-rods.jpg",
      link: "https://midcurrent-learn.vercel.app/",
    },
  ];
  return (
    <main className="">
      {workItems.map((item, i) => (
        <section key={i} className="flex gap-4 items-center h-screen">
          <div className="w-5/12 px-12 flex flex-col gap-6">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-lg">{item.description}</p>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <Btn variant="contained" className="px-4 py-2">
                <ArrowRightIcon className="size-4 text-slate-400 group-hover:text-rose-500" />{" "}
                {item.link}
              </Btn>
            </Link>
          </div>
          <div className="relative w-7/12 h-full bg-black">
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
