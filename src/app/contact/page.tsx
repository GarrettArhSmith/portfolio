"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Btn from "../components/Btn/Btn";

type Props = {};

export default function ContactPage({}: Props) {
  const [socialLink, setSocialLink] = useState("");
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Get In Touch</h1>
        <p className="mt-4 text-gray-600">
          Whether you have a project in mind or just want to say hello, I&apos;d
          love to hear from you.
        </p>
      </header>
      <div className="w-full max-w-2xl">
        {/* <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your message"
              rows={4}
            />
          </div>
          <div>
            <Btn
              type="submit"
              variant="contained"
              className="p-2 w-full bg-rose-500 text-white hover:text-white hover:bg-rose-600 flex justify-center"
            >
              Send
            </Btn>
          </div>
        </form> */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:garrettarhsmith@gmail.com"
                className="text-indigo-600"
              >
                garrettarhsmith@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              Phone:{" "}
              <a href="tel:+1-740-601-4739" className="text-indigo-600">
                +1 (740) 601-4739
              </a>
            </p>
          </div>
          <div>
            <div className="flex gap-6 md:justify-end">
              <Link href="https://github.com/garrettarhsmith" target="_blank">
                <FaGithub
                  className="text-3xl text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                  onMouseOver={() =>
                    setSocialLink("https://github.com/garrettarhsmith")
                  }
                  onMouseOut={() => setSocialLink("")}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/garrettarhsmith"
                target="_blank"
              >
                <FaLinkedin
                  className="text-3xl text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                  onMouseOver={() =>
                    setSocialLink("https://www.linkedin.com/in/garrettarhsmith")
                  }
                  onMouseOut={() => setSocialLink("")}
                />
              </Link>
            </div>
            <p className="mt-4 text-gray-500 h-6">
              {socialLink.split("garrettarhsmith")[0]}
              <span className="text-rose-400">
                {socialLink.length > 1 && "garrettarhsmith"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
