import Image from "next/image";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex items-center justify-center gap-16 min-h-screen flex-col p-4 py-10 md:p-64 md:py-10 text-center">
      <div>
        <h1 className="text-7xl font-bold">Garrett Smith</h1>
        <h2 className="max-w-[702px] text-2xl">
          Web engineer delivering high-quality, scalable code.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center text-left">
        <Image
          src={`/picofme.jpg`}
          width={250}
          height={200}
          alt="Picture of Me"
          className="rounded-full shadow-lg"
        />
        <div className="flex flex-col gap-4 items-start max-w-3xl">
          <p className="font-bold">
            Full-Stack Software Engineer | React, Next.js, Node.js Expert
          </p>
          <p>
            I’m a skilled software engineer with a passion for building
            beautiful, responsive, and scalable applications. My expertise
            includes a wide range of technologies, including:
          </p>
          <ul className="flex flex-col gap-2 text-left">
            <li>
              <p className="font-bold text-rose-500">Front-End Development:</p>
              <p>HTML, CSS, JavaScript, TypeScript,</p>
              <p>React, Next.js</p>
              <p>Tailwind CSS, Responsive Design</p>
            </li>
            <li>
              <p className="font-bold text-rose-500">Back-End Development:</p>
              <p>Node.js, Express.js</p>
              <p>REST APIs, GraphQL, Database integration</p>
              <p>Content Management Systems like Sanity.io, ContentStack</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
