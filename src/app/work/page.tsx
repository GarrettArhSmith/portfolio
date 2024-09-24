import Image from "next/image";
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
      link: "https://express.com",
    },
  ];
  return (
    <main className="">
      {workItems.map((item, i) => (
        <div key={i} className="flex flex-col gap-4 items-center">
          <Image
            src={item.logo}
            width={250}
            height={200}
            alt="Work Item Logo"
            className="rounded-full shadow-lg"
          />
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-lg">{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Btn variant="contained" className="w-full">
              <ArrowRightIcon className="size-4 text-slate-400 group-hover:text-rose-500" />{" "}
              {item.link}
            </Btn>
          </a>
        </div>
      ))}
    </main>
  );
}
