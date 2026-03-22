"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HoverAnimationButton from "@/components/ui/HoverAnimationButton";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function ReadyToJoinCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section data-dark-section className="relative overflow-hidden pt-16 pb-24 lg:pt-20 lg:pb-32">
      {/* Dark background - same as About section */}
      <div className="absolute inset-0 bg-[#000]" aria-hidden />
      <DottedGlowBackground
        className="inset-0"
        gap={16}
        radius={1.5}
        color="rgba(255,255,255,0.15)"
        darkColor="rgba(255,255,255,0.2)"
        glowColor="rgba(37, 99, 235, 0.7)"
        darkGlowColor="rgba(37, 99, 235, 0.8)"
        opacity={0.8}
      />

      <div ref={ref} className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20"
        >
          {/* Left: headline */}
          <h2 className="font-space-grotesk font-bold text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-white leading-[1.05] tracking-tight uppercase shrink-0 lg:max-w-[45%]">
            Ready to join
            <br />
            <span className="inline-block pl-8">the future</span>
            <br />of <span>tech?</span>
          </h2>

          {/* Right: description + CTA */}
          <div className="flex flex-col gap-8 lg:max-w-xl">
            <p className="font-inter text-[17px] sm:text-[18px] leading-[1.7] text-white/90">
              Join <span className="font-semibold text-white">ForumX Summit 2027</span>—where <span className="font-semibold text-white">leaders and practitioners</span> connect on <span className="font-semibold text-white">strategy, innovation, and execution</span>. Customize this copy for your event theme.
            </p>
            <HoverAnimationButton
              href="/#tickets"
              className="btn-hover-anim-primary mt-2 w-fit self-start !py-4 !px-6 text-[16px] tracking-widest"
            >
              Get your ticket now
            </HoverAnimationButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
