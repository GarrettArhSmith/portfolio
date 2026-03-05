export type WorkItem = {
  title: string;
  description: string;
  role: string;
  timeframe: string;
  focus: string[];
  stack: string[];
  highlights: string[];
  logo: string;
  bannerImage: string;
  link: string;
  screenshot: string;
  caseStudy?: string;
};

export const workItems: WorkItem[] = [
  {
    title: "Bath & Body Works",
    description:
      "Developing and maintaining React + TypeScript features for a large-scale retail ecommerce platform. Delivering customer-facing updates, resolving UI defects, and supporting critical workflows across teams.",
    role: "Front End Web Developer",
    timeframe: "2025–Present",
    focus: ["Commerce", "UI Quality", "Agile Delivery"],
    stack: ["React", "TypeScript", "JavaScript", "CSS"],
    highlights: [
      "Implemented reusable UI components within an established design system.",
      "Diagnosed and resolved UI defects across dev, integration, and production.",
      "Contributed to a large-scale CIAM rollout for customer authentication flows.",
    ],
    logo: "/express.png",
    bannerImage: "/bbw-background.png",
    link: "https://www.bathandbodyworks.com",
    screenshot: "/bbw-screenshot.png",
  },
  {
    title: "Express",
    description:
      "Built and maintained ecommerce experiences across Bag, Checkout, Product List, and Search for a high-traffic retail platform.",
    role: "Associate ECommerce Engineer",
    timeframe: "2021–2023",
    focus: ["Checkout", "Search", "Design Systems"],
    stack: ["React", "GraphQL", "Jest", "RTL"],
    highlights: [
      "Delivered Bag and Checkout redesigns and tender-type promotions.",
      "Translated Figma/InVision designs into production components.",
      "Wrote unit tests and supported production releases.",
    ],
    logo: "/express.png",
    bannerImage: "/0912-hp-fall-outfits-dt.avif",
    link: "https://express.com",
    screenshot: "/express-screenshot.png",
  },
  {
    title: "Independent Web Developer",
    description:
      "Owned and stabilized a Next.js/TypeScript codebase, extending CMS-driven content and shipping new features based on Figma designs and stakeholder feedback.",
    role: "Independent Web Developer",
    timeframe: "2023–2024",
    focus: ["CMS", "UX", "Refactoring"],
    stack: ["Next.js", "TypeScript", "Sanity", "Tailwind"],
    highlights: [
      "Extended structured content models and editor-friendly workflows.",
      "Implemented responsive, accessible components from Figma designs.",
      "Improved maintainability through refactoring and code cleanup.",
    ],
    logo: "/express.png",
    bannerImage: "/fishing-rods.jpg",
    link: "https://midcurrent-learn.vercel.app/",
    screenshot: "/midcurrent-screenshot.png",
  },
];
