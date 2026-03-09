"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const speakers = [
  {
    name: "Dr. Hardik Gohel, Ph.D.",
    role: "Texas A&M University",
    image: "/speaker-hardik-gohel.png",
  },
  {
    name: "Dr. Marcus Cole",
    role: "CloudEdge",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90",
  },
  {
    name: "Nina Patel",
    role: "CyberForge",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90",
  },
];

export default function MeetOurSpeakers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="speakers" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-16 lg:mb-20"
        >
          <h2 className="font-space-grotesk font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] text-[#0f172a] leading-[1.05] tracking-tight uppercase shrink-0 lg:max-w-[50%]">
            Meet our
            <br />
            <span className="inline-block pl-12">speakers</span>
          </h2>

          <div className="lg:mt-6 max-w-md">
            <p className="font-inter text-[17px] sm:text-[18px] leading-[1.7] text-[#475569]">
              Global tech leaders, visionary founders, and creators shaping the future — all on one stage.
            </p>
            <Link
              href="/#speakers"
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#0f172a] bg-[#0f172a] px-6 py-3 text-[14px] font-semibold text-white uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-[#0f172a]"
            >
              View all Speakers
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Speaker cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f4f4f5]">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="mt-5 flex items-start justify-between pl-4 pr-4">
                <div>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-wide text-[#0f172a]">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium uppercase tracking-widest text-[#64748b]">
                    {s.role}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <a href="#" className="text-[#94a3b8] hover:text-[#0f172a] transition-colors" aria-label="LinkedIn">
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#94a3b8] hover:text-[#0f172a] transition-colors" aria-label="X">
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
