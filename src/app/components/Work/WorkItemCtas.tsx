"use client";

import Link from "next/link";
import Btn from "@/app/components/Btn/Btn";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

type Props = {
  link: string;
  caseStudy?: string;
};

export default function WorkItemCtas({ link, caseStudy }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Btn variant="contained" className="px-4 py-2">
          <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-rose-500" />{" "}
          Live Site
        </Btn>
      </Link>
      {caseStudy && (
        <Link href={caseStudy}>
          <Btn
            variant="outlined"
            className="px-4 py-2 text-slate-900 border-slate-900 hover:text-slate-900"
          >
            <CodeBracketIcon className="size-4 text-slate-900 group-hover:text-slate-900" />{" "}
            Case Study
          </Btn>
        </Link>
      )}
    </div>
  );
}
