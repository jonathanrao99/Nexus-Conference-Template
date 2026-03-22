"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com", icon: Twitter, label: "X" },
];

const navigation = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "Conference" },
  { href: "/#cfp", label: "Authors" },
  { href: "/#tickets", label: "Attend" },
  { href: "/#partners", label: "Sponsors" },
  { href: "/#contact", label: "Contact" },
];

const quickLinks = [
  { href: "/#about", label: "About ForumX" },
  { href: "/#speakers", label: "Keynote Speakers" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#venue", label: "Venue" },
];

const resources = [
  { href: "/#cfp", label: "Call for Papers" },
  { href: "/#submission", label: "Submission Guidelines" },
  { href: "/#dates", label: "Important Dates" },
  { href: "/#sponsorship", label: "Sponsorship Opportunities" },
  { href: "/#faq", label: "FAQs" },
  { href: "/privacy", label: "Privacy" },
];

export default function FooterNextConfo() {
  return (
    <footer id="contact" data-dark-section className="relative overflow-hidden bg-[#000] text-white">
      <DottedGlowBackground
        className="inset-0"
        gap={16}
        radius={1.5}
        color="rgba(255,255,255,0.12)"
        darkColor="rgba(255,255,255,0.15)"
        glowColor="rgba(37, 99, 235, 0.5)"
        darkGlowColor="rgba(37, 99, 235, 0.6)"
        opacity={0.7}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo + Contact */}
          <div className="lg:col-span-2">
            <p className="font-space-grotesk font-bold text-4xl lg:text-5xl tracking-tight text-white">
              ForumX<span className="text-[#2563eb]">.</span>
            </p>
            <p className="mt-6 text-[14px] font-medium uppercase tracking-[0.2em] text-white/60">
              Contact us
            </p>
            <a
              href="mailto:hello@forumx.example.com"
              className="mt-2 block text-[16px] lg:text-[17px] text-white/90 transition-colors hover:text-[#2563eb]"
            >
              hello@forumx.example.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[16px] text-white/90 transition-colors uppercase tracking-wide hover:text-[#2563eb]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Quick links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[16px] text-white/90 transition-colors uppercase tracking-wide hover:text-[#2563eb]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[16px] text-white/90 transition-colors uppercase tracking-wide hover:text-[#2563eb]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[15px] lg:text-[16px] text-white/60 uppercase tracking-wide">
            Copyright | © ForumX {new Date().getFullYear()} All rights reserved
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 transition-colors hover:text-[#2563eb]"
              >
                <Icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
