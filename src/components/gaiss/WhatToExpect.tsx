"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    num: "01",
    title: "Expert Keynotes",
    body: "Insights from world-class innovators shaping the future.",
  },
  {
    num: "02",
    title: "Hands-On Workshops",
    body: "Build skills with practical sessions led by industry experts.",
  },
  {
    num: "03",
    title: "Networking Opportunities",
    body: "Connect with founders, developers, investors, and tech talent.",
  },
  {
    num: "04",
    title: "Startup Showcase",
    body: "Discover next-gen startups and breakthrough solutions live.",
  },
];

export default function WhatToExpect() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f4f4f5] pt-24 pb-12 lg:pt-32 lg:pb-14">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-space-grotesk font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] text-[#0f172a] leading-[1.05] tracking-tight uppercase mb-16 lg:mb-20"
        >
          Why attend
          <br />
          <span className="inline-block pl-0">GAISS 2026</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`py-4 px-6 lg:px-8 ${i === 0 || i === 2 ? "border-r border-[#e2e8f0]" : ""} ${i === 1 ? "lg:border-r lg:border-[#e2e8f0]" : ""}`}
            >
              <span className="text-[14px] font-semibold text-[#64748b]">{item.num}.</span>
              <h3 className="mt-3 text-[1.25rem] sm:text-[1.35rem] font-bold text-[#0f172a] leading-[1.2]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#475569]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
