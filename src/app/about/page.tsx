import React from "react";
import Image from "next/image";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="grid gap-12 place-items-center min-h-screen flex-col p-4 md:p-10 text-center">
      <h2 className="max-w-[702px] text-4xl">
        React Engineer with 3+ years of software development expertise,
        dedicated to delivering high-quality, scalable, production code.
        Proficient in a wide array of web technologies, and always hungry to
        learn new programming languages and emerging technologies. Eager to join
        a dynamic team with diverse talent.
      </h2>
      <div className="flex gap-8">
        <Image
          src="/picofme.jpg"
          width={250}
          height={250}
          alt="Picture of Me"
          className="rounded-3xl shadow-lg"
        />
        <Image
          src="/picofme.jpg"
          width={200}
          height={100}
          alt="Picture of Me"
          className="rounded-3xl shadow-lg"
        />
      </div>
    </main>
  );
}
