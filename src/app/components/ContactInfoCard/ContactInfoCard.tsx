import SocialLinks from "@/app/components/SocialLinks/SocialLinks";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  email: string;
  emailHref?: string;
  phone: string;
  phoneHref?: string;
  location: string;
  socialLinks: Array<{ href: string; label: string; icon: ReactNode }>;
};

export default function ContactInfoCard({
  eyebrow = "Contact",
  title,
  email,
  emailHref,
  phone,
  phoneHref,
  location,
  socialLinks,
}: Props) {
  const resolvedEmailHref = emailHref ?? `mailto:${email}`;
  const resolvedPhoneHref = phoneHref ?? `tel:${phone}`;
  return (
    <div className="rounded-[24px] border border-white/60 bg-white/70 p-6 md:p-8">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h3
        className={`${eyebrow ? "mt-3" : "mt-0"} text-xl font-semibold text-slate-900`}
      >
        {title}
      </h3>
      <div className="mt-5 space-y-3 text-slate-600">
        <p>
          Email:{" "}
          <a
            className="text-blue-600 hover:text-blue-700"
            href={resolvedEmailHref}
          >
            {email}
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            className="text-blue-600 hover:text-blue-700"
            href={resolvedPhoneHref}
          >
            {phone}
          </a>
        </p>
        <p>{location}</p>
      </div>

      <SocialLinks className="mt-6" links={socialLinks} />
    </div>
  );
}
