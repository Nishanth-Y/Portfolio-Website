import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL(""),
  title: "Nishanth Portfolio",
  description: "Developer Portfolio By Nishanth Y",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Nishanth Y"],
  openGraph: {
    title: "Nishanth Y",
    description: "Software Engineer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#000000] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
