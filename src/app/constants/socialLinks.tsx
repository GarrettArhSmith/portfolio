import { FaGithub, FaLinkedin, FaEnvelope, FaBluesky } from "react-icons/fa6";

// Default social links for footer
export const socialLinks = [
  {
    href: "https://github.com/garrettarhsmith",
    label: "GitHub",
    icon: (
      <FaGithub className="size-5 text-slate-400 hover:text-rose-500 transition-colors" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/garrettarhsmith",
    label: "LinkedIn",
    icon: (
      <FaLinkedin className="size-5 text-slate-400 hover:text-rose-500 transition-colors" />
    ),
  },
  {
    href: "https://bsky.app/profile/garrettsmith.me",
    label: "Bluesky",
    icon: (
      <FaBluesky className="size-5 text-slate-400 hover:text-rose-500 transition-colors" />
    ),
  },
  {
    href: "mailto:garrettarhsmith@gmail.com",
    label: "Email",
    icon: (
      <FaEnvelope className="size-5 text-slate-400 hover:text-rose-500 transition-colors" />
    ),
  },
];

// Social links for contact page (larger, different styling)
export const contactSocialLinks = [
  {
    href: "https://github.com/garrettarhsmith",
    label: "GitHub",
    icon: <FaGithub className="text-2xl text-slate-500 hover:text-slate-800" />,
  },
  {
    href: "https://www.linkedin.com/in/garrettarhsmith",
    label: "LinkedIn",
    icon: (
      <FaLinkedin className="text-2xl text-slate-500 hover:text-slate-800" />
    ),
  },
  {
    href: "https://bsky.app/profile/garrettsmith.me",
    label: "Bluesky",
    icon: (
      <FaBluesky className="text-2xl text-slate-500 hover:text-slate-800" />
    ),
  },
];
