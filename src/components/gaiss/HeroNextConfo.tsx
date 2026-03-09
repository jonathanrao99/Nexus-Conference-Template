"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import HoverAnimationButton from "@/components/ui/HoverAnimationButton";
import Image from "next/image";

export default function HeroNextConfo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div ref={ref} data-hero>
      {/* ─── IMAGE SECTION ─── */}
      <section data-dark-section className="relative h-[65vh] min-h-[340px] overflow-hidden bg-[#0a0a0f]">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="GAISS Summit — conference attendees at a tech summit on generative AI for secure systems"
            fill
            className="object-cover scale-110 grayscale brightness-[0.45] contrast-110"
            priority
            sizes="100vw"
          />
        </motion.div>
        {/* Fade from image into blue — sits at the very bottom of the image section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 lg:h-64 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #2563eb 100%)" }}
          aria-hidden
        />
      </section>

      {/* ─── BLUE SECTION ─── */}
      <section data-hero-end data-dark-section className="relative bg-[#2563eb] pb-10 lg:pb-14">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Headline: GAISS left, SUMMIT 2026 right-aligned below */}
          <h1>
            <span className="block font-extrabold italic tracking-[-0.04em] text-white text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem] leading-[0.95] uppercase">
              GAISS
            </span>
            <span className="block text-right font-extrabold italic tracking-[-0.04em] text-white text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem] leading-[0.95] uppercase">
              SUMMIT 2026
            </span>
          </h1>

          {/* Bottom bar: CTA left, location + date right */}
          <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            {/* Left: tagline + description + button */}
            <div className="max-w-lg">
              <p className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                Ready to be part of it?
              </p>
              <p className="mt-2.5 text-lg sm:text-lg leading-relaxed text-white/90">
                Don&apos;t miss the premier conference on generative AI for secure systems! Get your tickets now and be part of the future of technology!
              </p>
              <HoverAnimationButton
                href="/#tickets"
                className="btn-hover-anim-hero mt-12 !py-4 !px-10 text-[17px] tracking-widest"
              >
                Get a ticket
              </HoverAnimationButton>
            </div>

            {/* Right: location + date boxes */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-5">
              <div className="flex items-center gap-3 bg-[#1d4ed8] px-6 py-4 text-white">
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                <span className="text-base font-medium uppercase tracking-widest">Austin, TX</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1d4ed8] px-6 py-4 text-white">
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                </svg>
                <span className="text-base font-medium uppercase tracking-widest">October 28-30, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
