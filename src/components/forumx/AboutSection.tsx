"use client";

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const COUNTDOWN_TARGET = new Date("2027-06-12T09:00:00-07:00"); // June 12, 2027 9am PT

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
  direction = "down",
  radiusFade,
  cropTop,
}: {
  src: string;
  alt: string;
  index: number;
  direction?: "down" | "up";
  radiusFade?: "top" | "bottom";
  cropTop?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  /* As the card crosses the viewport: opposite directions for depth */
  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? ["18%", "-18%"] : ["-18%", "18%"],
  );
  const y = useSpring(yRaw, { stiffness: 400, damping: 40 });

  const inView = useInView(cardRef, { once: true, amount: 0.15 });

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
        : {};

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/3] overflow-hidden rounded-xl"
      style={wrapperStyle}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y, backfaceVisibility: "hidden" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover scale-[1.15] grayscale brightness-[0.9] contrast-105"
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
    <section id="about" data-dark-section className="relative pt-10 pb-0 overflow-hidden">
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

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-28">
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
          <p className="font-inter lg:mt-56 text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.7] text-white/90 max-w-xl lg:max-w-2xl">
            <strong className="font-semibold text-white">ForumX</strong> is a <span className="font-semibold text-white">multi-track summit</span> for <span className="font-semibold text-white">executives, builders, and strategists</span> who want to stay ahead of change. From <span className="font-semibold text-white">keynotes and panels</span> to <span className="font-semibold text-white">hands-on sessions</span> and <span className="font-semibold text-white">curated networking</span>, we focus on <span className="font-semibold text-white">actionable insight</span>, <span className="font-semibold text-white">meaningful connections</span>, and <span className="font-semibold text-white">ideas you can apply on Monday</span>. Replace this copy with your event story—this template is built to be customized.
          </p>
        </motion.div>

      </div>

      {/* Scroll-reveal images with padding */}
      <div
        ref={imagesRef}
        className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full px-6 lg:px-10"
      >
        <ParallaxImage
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80"
            alt="Conference networking and collaboration"
            index={0}
            direction="down"
          />
          <ParallaxImage
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80"
            alt="Audience at a professional conference"
            index={1}
            direction="up"
            cropTop
          />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
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
            <p className="mt-1 text-3xl sm:text-4xl font-bold uppercase tracking-wide font-space-grotesk">Jun 12–14, 2027</p>
          </div>

          {/* Countdown - center */}
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-10">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums text-white font-space-grotesk">
                {String(countdown.days).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium uppercase tracking-widest text-white/70">Days</p>
            </div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/60">:</span>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums text-white font-space-grotesk">
                {String(countdown.hours).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium uppercase tracking-widest text-white/70">Hours</p>
            </div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/60">:</span>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums text-white font-space-grotesk">
                {String(countdown.minutes).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium uppercase tracking-widest text-white/70">Minutes</p>
            </div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/60">:</span>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tabular-nums text-white font-space-grotesk">
                {String(countdown.seconds).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium uppercase tracking-widest text-white/70">Seconds</p>
            </div>
          </div>

          {/* Venue - right */}
          <div id="venue" className="text-white text-right lg:text-right">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">Venue</p>
            <p className="mt-1 text-3xl sm:text-4xl font-bold uppercase tracking-wide font-space-grotesk">San Francisco, CA</p>
          </div>
        </motion.div>
      </div>

      {/* Full-width conference image - no extra margin */}
      <div className="mt-16 lg:mt-24 w-full -mb-px">
        <div className="relative w-full aspect-[16/9] min-h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Speaker on stage at a conference"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
