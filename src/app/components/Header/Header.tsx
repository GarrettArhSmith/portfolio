"use client";
import { useState } from "react";
import Link from "next/link";
import { FireIcon } from "@heroicons/react/24/solid";
import {
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Btn from "@/app/components/Btn/Btn";

import { routes } from "./routes";

type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-5">
      <div className={`h-14 flex items-center justify-between`}>
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-rose-500 to-yellow-500 font-bold text-2xl">
              garrett smith
            </h1>
          </Link>
          <div className="w-9 h-px bg-gray-500 -rotate-45 hidden md:block"></div>
          <h3 className="text-nowrap text-lg text-gray-500 hidden md:block">
            software engineer
          </h3>
          <nav className="ml-10 hidden lg:block">
            <ul className="flex items-center gap-4 text-white">
              {routes.map(
                (route) =>
                  route.enabled && (
                    <li key={route.path} className="hover:text-rose-500">
                      <Link href={route.path}>{route.name}</Link>
                    </li>
                  )
              )}
            </ul>
          </nav>
        </div>
        <div className="gap-2 hidden lg:flex">
          <Link
            href="/Garrett_Smith_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Btn variant="outlined" onClick={() => true}>
              <DocumentTextIcon className="size-4 text-slate-400" /> get my
              resume
            </Btn>
          </Link>
          <Link href="/hire-me">
            <Btn variant="contained" onClick={() => true}>
              <FireIcon className="size-4 text-slate-400 group-hover:text-rose-500" />{" "}
              hire me
            </Btn>
          </Link>
        </div>
        <Btn
          variant="contained"
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden p-1.5 text-slate-400"
        >
          {open ? (
            <XMarkIcon className="size-6" />
          ) : (
            <Bars3Icon className="size-6" />
          )}
        </Btn>
      </div>
      <div
        className={`${
          open ? "h-52 opacity-100 pb-5" : "h-0 opacity-0"
        } lg:h-0 transition-all flex flex-col gap-4 overflow-hidden lg:p-0`}
      >
        {open && (
          <>
            <nav className="lg:hidden">
              <ul className="flex flex-col gap-4 text-white">
                {routes.map(
                  (route) =>
                    route.enabled && (
                      <li key={route.path} className="hover:text-rose-500">
                        <Link href={route.path}>{route.name}</Link>
                      </li>
                    )
                )}
              </ul>
            </nav>
            <div
              className={`gap-2 flex flex-col lg:hidden delay-1000 duration-1000 transition-all ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="/Garrett_Smith_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Btn
                  variant="outlined"
                  onClick={() => true}
                  className="flex justify-center w-full"
                >
                  <DocumentTextIcon className="size-4 text-slate-400" /> get my
                  resume
                </Btn>
              </Link>
              <Link href="/hire-me">
                <Btn
                  variant="contained"
                  onClick={() => true}
                  className="flex justify-center w-full"
                >
                  <FireIcon className="size-4 text-slate-400 group-hover:text-rose-500" />{" "}
                  hire me
                </Btn>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
