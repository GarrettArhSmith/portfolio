"use client";
import BgParticles from "@/app/components/BgParticles/BgParticles";
import Btn from "./components/Btn/Btn";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import EmailListForm from "./components/EmailListForm";

export default function Home() {
  return (
    <>
      <BgParticles />
      <main className="grid place-items-center min-h-screen flex-col p-4 md:p-10 text-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="z-10 text-5xl md:text-8xl font-bold">
            Let me build<br></br>
            <i>
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-rose-500 to-yellow-500 pr-4">
                IDEAS
              </span>
            </i>
          </h1>
          <p className="w-72 md:w-fit text-lg md:text-2xl">
            Tailored sites and apps crafted to <i>your vision.</i>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 z-10 mt-16">
            <EmailListForm />
            {/* <Btn
              variant="text"
              className="text-slate-900 px-4 py-2 hover:text-slate-700"
              onClick={() => true}
            >
              Take a look
              <ArrowDownIcon className="size-5 group-hover:translate-y-0.5 stroke-2 transition-all hover:text-slate-700" />
            </Btn> */}
          </div>
        </div>
      </main>
    </>
  );
}
