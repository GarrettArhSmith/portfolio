"use client";
import Link from "next/link";
import SocialLinks from "@/app/components/SocialLinks/SocialLinks";
import FooterSection from "@/app/components/Footer/FooterSection";
import { routes } from "@/app/components/Header/routes";
import { socialLinks } from "@/app/constants/socialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="w-full px-5 py-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
          {/* Left Group: Brand and Navigation */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="flex flex-col gap-4 md:min-w-[280px]">
              <Link href="/">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-rose-500 to-yellow-500 font-bold text-xl hover:opacity-80 transition-opacity">
                  garrett smith
                </h2>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
                Crafting tailored digital experiences with modern web
                technologies and creative design.
              </p>
            </div>

            {/* Navigation */}
            <FooterSection title="Navigation">
              <nav>
                <ul className="flex flex-col gap-2">
                  {routes
                    .filter((route) => route.enabled)
                    .map((route) => (
                      <li key={route.path}>
                        <Link
                          href={route.path}
                          className="text-slate-400 hover:text-rose-500 transition-colors text-sm"
                        >
                          {route.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </FooterSection>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="text-white font-semibold">Connect</h3>
            <SocialLinks links={socialLinks} />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-400 transition-colors text-sm font-medium"
            >
              Schedule a call →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Garrett Smith. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-slate-500 hover:text-rose-500 transition-colors text-sm font-medium flex items-center gap-2"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
