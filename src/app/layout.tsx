import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import { MobileNav } from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Trexzactyl Documentation",
  description: "Modern documentation for Trexzactyl Panel",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white min-h-screen selection:bg-primary-500/30 selection:text-primary-200 overflow-x-hidden`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
        <NavbarWrapper />
        <MobileNav />
        <main className="pt-16 min-h-screen relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
