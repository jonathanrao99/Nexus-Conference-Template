import type { Metadata } from "next";
import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavNextConfo from "@/components/nexus/NavNextConfo";
import FooterNextConfo from "@/components/nexus/FooterNextConfo";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: "200",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ForumX Summit 2027 — Conference Website Template",
  description:
    "ForumX Summit 2027. June 12–14, 2027 · San Francisco, CA. A modern conference template—swap branding, dates, and content for your event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakartaSans.variable} antialiased`}>
        <NavNextConfo />
        {children}
        <FooterNextConfo />
        <Analytics />
      </body>
    </html>
  );
}
