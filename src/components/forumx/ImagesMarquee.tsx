"use client";

import Image from "next/image";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const images: { src: string; size: "sm" | "md" | "lg" }[] = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", size: "md" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80", size: "lg" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", size: "sm" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80", size: "lg" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80", size: "md" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", size: "sm" },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80", size: "lg" },
];

const sizeClasses = {
  sm: "w-[240px] lg:w-[280px]",
  md: "w-[300px] lg:w-[340px]",
  lg: "w-[360px] lg:w-[420px]",
};

export default function ImagesMarquee() {
  const duplicated = [...images, ...images];

  return (
    <section data-dark-section className="relative overflow-hidden pt-10 pb-24 lg:pt-12 lg:pb-32">
      {/* Dark background - same as About / Ready to Join */}
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

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee-slow gap-5 lg:gap-6">
          {duplicated.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className={`relative aspect-[4/3] shrink-0 overflow-hidden rounded-xl ${sizeClasses[item.size]}`}
            >
              <Image src={item.src} alt="" fill className="object-cover" sizes="420px" />
              <div className="absolute inset-0 bg-[#0f172a]/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
