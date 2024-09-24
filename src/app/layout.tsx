import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garrett Smith",
  description: "This is my personal site. Enjoy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <Header />
        <div className="rounded-3xl bg-slate-200 w-full max-w-full min-h-dvh bg-gradient-to-br from-rose-50 to-slate-200">
          {children}
        </div>
        <footer className="h-14 flex items-center justify-between px-5"></footer>
      </body>
    </html>
  );
}
