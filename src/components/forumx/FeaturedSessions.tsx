"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const sessions = [
  {
    title: "Opening Keynote: The Next Decade of Innovation",
    time: "9:00 AM",
    type: "Keynote",
    description: "A forward-looking view on how organizations can adapt strategy, culture, and technology in a rapidly changing landscape.",
    speaker: "Alex Morgan",
    org: "Summit Labs",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
  },
  {
    title: "Panel: Leadership in Uncertain Times",
    time: "11:00 AM",
    type: "Panel",
    description: "Executives share lessons on resilience, decision-making, and building teams that thrive under pressure.",
    speaker: "Jordan Lee",
    org: "Northwind Ventures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    title: "Workshop: From Strategy to Execution",
    time: "2:00 PM",
    type: "Workshop",
    description: "Practical frameworks to align stakeholders, prioritize initiatives, and measure outcomes.",
    speaker: "Sam Rivera",
    org: "Horizon Institute",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
  },
  {
    title: "Fireside: Building Trust at Scale",
    time: "10:30 AM",
    type: "Fireside Chat",
    description: "How leading brands earn loyalty through transparency, ethics, and consistent experience.",
    speaker: "Morgan Blake",
    org: "Meridian Group",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    title: "Tech Talk: Data-Driven Decision Making",
    time: "1:15 PM",
    type: "Technical Session",
    description: "Turning analytics into action—tools, pitfalls, and real-world case studies.",
    speaker: "Taylor Wu",
    org: "Signal Analytics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    title: "Closing Keynote: What We Learned Together",
    time: "4:00 PM",
    type: "Closing Keynote",
    description: "Highlights from the conference and a call to action for the year ahead.",
    speaker: "Casey Park",
    org: "Volt Collective",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
];

export default function FeaturedSessions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="schedule" className="relative bg-[#f4f4f5] pt-10 pb-24 lg:pt-12 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] flex flex-col lg:flex-row lg:gap-16 lg:items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 lg:max-w-[380px] lg:sticky lg:top-24"
          >
            <h2 className="font-space-grotesk font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] text-[#0f172a] leading-[1.05] tracking-tight uppercase">
              Featured
              <br />
              Sessions
            </h2>
            <Link
              href="/#schedule"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#0f172a] bg-[#0f172a] px-6 py-3 text-[14px] font-semibold text-white uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-[#0f172a]"
            >
              Full Schedule
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="mt-12 lg:mt-0 flex-1 min-w-0">
            {sessions.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row lg:gap-12 py-8 border-t border-[#e2e8f0] first:border-t-0 first:pt-0"
              >
                <div className="shrink-0 lg:w-[280px] xl:w-[320px]">
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0f172a] leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-[#64748b]">
                    <span className="font-semibold font-space-grotesk tabular-nums text-[#0f172a]">{s.time}</span>
                    <span className="text-[#94a3b8]"> · </span>
                    {s.type}
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 flex-1 min-w-0">
                  <p className="text-[15px] leading-relaxed text-[#475569]">
                    {s.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <Link href="/speakers" className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#e2e8f0] block">
                      <Image src={s.image} alt={s.speaker} fill className="object-cover" sizes="40px" />
                    </Link>
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-[#0f172a]">
                      <Link href="/speakers" className="transition-colors hover:text-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-1 rounded">
                        {s.speaker}
                      </Link>
                      <span>, {s.org}</span>
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
