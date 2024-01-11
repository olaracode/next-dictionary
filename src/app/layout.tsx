import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GrBook, GrSearch } from "react-icons/gr";
import Link from "next/link";
import "./globals.css";
import Dynamics from "@/components/navbar/Dynamics";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dictionary App",
  description:
    "App that uses the dictionary API and Next.js app folder structure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-900 dark:text-white`}>
        <nav className="w-[90vw] mx-auto md:max-w-[732px] py-8 lg:max-w-[1000px]">
          <div className="flex justify-between">
            <Link href="/">
              <GrBook className="w-6 h-6 text-gray-300" />
            </Link>
            <Dynamics />
          </div>
        </nav>
        <div className="w-[90vw] mx-auto md:max-w-[732px] py-8 lg:max-w-[1000px]">
          <SearchBar />
          {children}
        </div>
      </body>
    </html>
  );
}
