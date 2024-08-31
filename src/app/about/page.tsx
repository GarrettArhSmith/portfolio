import React from "react";
import Image from "next/image";

type Props = {};

export default function page({}: Props) {
  const pics = new Array(5).fill({});

  return (
    <main className="grid gap-12 place-items-center min-h-screen flex-col p-4 py-10 md:p-10 text-center">
      <div>
        <h1 className="text-7xl font-bold">Garrett Smith</h1>
        <h2 className="max-w-[702px] text-2xl">
          Web engineer delivering high-quality, scalable code.
        </h2>
      </div>
      <div className="columns-2 space-y-10 md:flex md:flex-wrap md:space-y-0 gap-10 justify-center items-center">
        {pics.map((pic, i) => (
          <Image
            key={i}
            src={`/picofme${i + 1}.jpg`}
            width={250}
            height={200}
            alt="Picture of Me"
            className="rounded-3xl shadow-lg"
          />
        ))}
      </div>
    </main>
  );
}
