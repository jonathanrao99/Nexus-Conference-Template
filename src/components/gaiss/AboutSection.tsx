"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const COUNTDOWN_TARGET = new Date("2026-10-28T09:00:00-05:00"); // Oct 28, 2026 9am Austin time

function useCountdown(target: Date) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const d = target.getTime() - now.getTime();
      if (d <= 0) {
        setDiff({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setDiff({
        days: Math.floor(d / (1000 * 60 * 60 * 24)),
        hours: Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((d % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return diff;
}

function ParallaxImage({
  src,
  alt,
  index,
  containerRef,
  direction = "down",
  radiusFade,
  cropTop,
}: {
  src: string;
  alt: string;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  direction?: "down" | "up";
  radiusFade?: "top" | "bottom";
  cropTop?: boolean;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.15"],
  });
  const yDown = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["0%", "12%", "12%", "0%"]);
  const yUp = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["0%", "-12%", "-12%", "0%"]);
  const y = direction === "up" ? yUp : yDown;
  const inView = useInView(containerRef, { once: true, amount: 0.1 });

  const radiusFadePx = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ["12px", "6px", "0px", "0px"]);

  const wrapperStyle =
    radiusFade === "top"
      ? {
          borderTopLeftRadius: radiusFadePx,
          borderTopRightRadius: radiusFadePx,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }
      : radiusFade === "bottom"
        ? {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottomLeftRadius: radiusFadePx,
            borderBottomRightRadius: radiusFadePx,
          }
        : { borderRadius: 12 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`relative aspect-[4/3] overflow-hidden ${radiusFade ? "" : "rounded-xl"}`}
      style={wrapperStyle}
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover scale-110 grayscale brightness-[0.9] contrast-105"
          style={cropTop ? { objectPosition: "center 22%" } : undefined}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const imagesRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imagesInView = useInView(imagesRef, { once: true, margin: "-100px" });
  const countdown = useCountdown(COUNTDOWN_TARGET);

  return (
    <section id="about" data-dark-section className="relative pt-20 lg:pt-28 pb-0 overflow-hidden">
      {/* Gradient fade from hero blue into black */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, #2563eb 0%, #000 6%, #000 100%)" }}
        aria-hidden
      />
      {/* Dotted glow background */}
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

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-18">
        {/* Heading + description */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20"
        >
          <h2 className="font-space-grotesk font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] text-white leading-[1.05] tracking-tight uppercase shrink-0 lg:max-w-[45%]">
            Where
            <br />
            <span className="inline-block pl-8">innovation</span>
            <br />
            meets action
          </h2>
          <p className="font-inter lg:mt-56 text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.7] text-white/90 max-w-lg lg:max-w-xl">
            GAISS is a premier summit bringing together researchers, founders, and technologists from across the globe. From visionary keynotes to practical workshops and purposeful networking, the event is designed to spark ideas, forge partnerships, and shape what&apos;s next in secure AI systems. Whether you&apos;re a researcher, founder, or technologist, this is where the future unfolds.
          </p>
        </motion.div>

        {/* Scroll-reveal images with parallax + masked movement */}
        <div
          ref={imagesRef}
          className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          <ParallaxImage
            containerRef={imagesRef}
            src="/about-parallax-left.png"
            alt="Conference networking"
            index={0}
            direction="down"
            radiusFade="top"
          />
          <ParallaxImage
            containerRef={imagesRef}
            src="/about-parallax-right.png"
            alt="Conference exchange"
            index={1}
            direction="up"
            radiusFade="bottom"
            cropTop
          />
        </div>

        {/* Countdown + date + venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={imagesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12"
        >
          {/* Date - left */}
          <div className="text-white">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">Date</p>
            <p className="mt-1 text-xl sm:text-2xl font-bold uppercase tracking-wide">Oct 28–30, 2026</p>
          </div>

          {/* Countdown - center */}
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-10">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums text-white">
                {String(countdown.days).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium uppercase tracking-widest text-white/70">Days</p>
            </div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/60">:</span>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums text-white">
                {String(countdown.hours).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium uppercase tracking-widest text-white/70">Hours</p>
            </div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/60">:</span>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums text-white">
                {String(countdown.minutes).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium uppercase tracking-widest text-white/70">Minutes</p>
            </div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/60">:</span>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums text-white">
                {String(countdown.seconds).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium uppercase tracking-widest text-white/70">Seconds</p>
            </div>
          </div>

          {/* Venue - right */}
          <div id="venue" className="text-white text-right lg:text-right">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">Venue</p>
            <p className="mt-1 text-xl sm:text-2xl font-bold uppercase tracking-wide">Austin, TX</p>
          </div>
        </motion.div>
      </div>

      {/* Full-width conference image */}
      <div className="mt-16 lg:mt-24 w-full">
        <div className="relative w-full aspect-[16/9] min-h-[280px]">
          <Image
            src="/conference-image.JPG"
            alt="GAISS conference - speaker presenting"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
