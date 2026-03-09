"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const sessions = [
  {
    title: "Building Secure AI Systems",
    time: "10:00 AM",
    type: "Opening Keynote",
    description: "Architecting generative AI systems with security, privacy, and robustness at the core.",
    speaker: "Ava Mitchell",
    org: "SecureAI Labs",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
  },
  {
    title: "LLM Security & Privacy",
    time: "2:00 PM",
    type: "Panel Discussion",
    description: "Protecting data and models: prompt injection, data leakage, and privacy-preserving inference.",
    speaker: "Rajan Verma",
    org: "CloudEdge",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    title: "Generative AI in Enterprise",
    time: "1:30 PM",
    type: "Tech Talk",
    description: "Deploying secure, compliant generative AI at scale in regulated industries.",
    speaker: "Emily Chen",
    org: "Arverse",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
  },
  {
    title: "Adversarial Defense for AI",
    time: "11:00 AM",
    type: "Technical Session",
    description: "Detecting and mitigating attacks on generative models and AI pipelines.",
    speaker: "Carlos Rios",
    org: "CyberForge",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    title: "Trust & Ethics in AI",
    time: "9:30 AM",
    type: "Fireside Chat",
    description: "Addressing ethics, bias, and transparency in generative AI systems.",
    speaker: "Mei Tanaka",
    org: "Creovate AI",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    title: "Secure AI Development Practices",
    time: "12:00 PM",
    type: "Closing Keynote",
    description: "Shifting security left: secure-by-design practices for AI teams.",
    speaker: "Leo Anders",
    org: "DEVSphere",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
];

export default function FeaturedSessions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="schedule" className="relative bg-[#f4f4f5] pt-12 pb-8 lg:pt-14 lg:pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] flex flex-col lg:flex-row lg:gap-16 lg:items-start">
          {/* Left: heading + button - sticky so it scrolls with user */}
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
              <span className="flex gap-0.5">
                <span className="h-1 w-1 rounded-full bg-current" />
                <span className="h-1 w-1 rounded-full bg-current" />
                <span className="h-1 w-1 rounded-full bg-current" />
              </span>
            </Link>
          </motion.div>

          {/* Right: session list */}
          <div className="mt-12 lg:mt-0 flex-1 min-w-0">
            {sessions.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row lg:gap-12 py-8 border-t border-[#e2e8f0] first:border-t-0 first:pt-0"
              >
                {/* Left: title + time */}
                <div className="shrink-0 lg:w-[280px] xl:w-[320px]">
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0f172a] leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#64748b]">
                    {s.time} - {s.type}
                  </p>
                </div>
                {/* Right: description + speaker */}
                <div className="mt-4 lg:mt-0 flex-1 min-w-0">
                  <p className="text-[15px] leading-relaxed text-[#475569]">
                    {s.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#e2e8f0]">
                      <Image src={s.image} alt={s.speaker} fill className="object-cover" sizes="40px" />
                    </div>
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-[#0f172a]">
                      {s.speaker}, {s.org}
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
