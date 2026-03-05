"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import PageHero from "@/app/components/PageHero/PageHero";
import SplitSection from "@/app/components/SplitSection/SplitSection";
import Btn from "@/app/components/Btn/Btn";
import ContactFormCard from "@/app/components/ContactFormCard/ContactFormCard";
import ContactInfoCard from "@/app/components/ContactInfoCard/ContactInfoCard";
import PageLayout from "@/app/components/PageLayout/PageLayout";
import { contactSocialLinks } from "@/app/constants/socialLinks";

type Props = {};

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  details: string;
};

type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const defaultFormState: ContactFormState = {
  name: "",
  email: "",
  company: "",
  details: "",
};

export default function ContactPage({}: Props) {
  const [form, setForm] = useState<ContactFormState>(defaultFormState);
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ state: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json()) as { message?: string };
        throw new Error(data.message || "Unable to send message.");
      }

      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent.",
      });
      setForm(defaultFormState);
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build a
            <span className="block italic text-blue-600">
              thoughtful web experience.
            </span>
          </>
        }
        description="A short note is enough. I’ll follow up with next steps and availability."
      />

      <section className="mt-12 px-6 md:px-12 lg:px-16 2xl:px-24">
        <SplitSection
          className="items-start"
          left={
            <ContactFormCard
              title="Send a quick note."
              description="I respond within 1–2 business days."
            >
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-600">
                    Name
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-600">
                    Email
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm text-slate-600">
                  Company (optional)
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Studio or startup"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                </label>

                <label className="space-y-2 text-sm text-slate-600">
                  Message
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    placeholder="What are you looking to build?"
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                </label>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <Btn type="submit" variant="contained" className="px-6 py-3">
                    {status.state === "submitting"
                      ? "Sending..."
                      : "Send inquiry"}
                  </Btn>
                  <p className="text-sm text-slate-500">
                    Or email me directly.
                  </p>
                </div>
                {status.state === "success" && (
                  <p className="text-sm text-emerald-600">{status.message}</p>
                )}
                {status.state === "error" && (
                  <p className="text-sm text-rose-600">{status.message}</p>
                )}
              </form>
            </ContactFormCard>
          }
          right={
            <ContactInfoCard
              title="Reach me directly."
              email="garrettarhsmith@gmail.com"
              phone="+1 (740) 601-4739"
              phoneHref="tel:+1-740-601-4739"
              location="Columbus, OH · Remote-friendly"
              socialLinks={contactSocialLinks}
            />
          }
        />
      </section>
    </PageLayout>
  );
}
