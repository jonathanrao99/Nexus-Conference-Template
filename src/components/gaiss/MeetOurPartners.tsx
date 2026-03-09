"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Partner = { name: string; logo: string; large?: boolean };

const diamondPartners: Partner[] = [
  { name: "IEEE", logo: "/partners/ieee.png" },
  { name: "Sony", logo: "/partners/sony.png" },
  { name: "JPMorgan", logo: "/partners/jpmorgan.png" },
  { name: "Bank of America", logo: "/partners/bofa.png" },
];

const platinumPartners: Partner[] = [
  { name: "Google", logo: "/partners/google.png" },
  { name: "Amazon", logo: "/partners/amazon.png" },
  { name: "Facebook", logo: "/partners/facebook.png" },
  { name: "PayPal", logo: "/partners/paypal.png" },
];

const goldPartners: Partner[] = [
  { name: "YouTube", logo: "/partners/youtube.png" },
  { name: "Honda", logo: "/partners/honda.png" },
  { name: "Nike", logo: "/partners/nike.png", large: true },
  { name: "Samsung", logo: "/partners/Samsung.png" },
  { name: "United", logo: "/partners/united.png", large: true },
  { name: "GE Appliances", logo: "/partners/ge.png", large: true },
];

const LOGO_SIZE = { width: 140, height: 48 };
const LOGO_SIZE_LARGE = { width: 180, height: 56 };

function LogoImage({
  src,
  alt,
  className = "",
  large = false,
}: {
  src: string;
  alt: string;
  className?: string;
  large?: boolean;
}) {
  const size = large ? LOGO_SIZE_LARGE : LOGO_SIZE;
  return (
    <div
      className={`relative flex items-center justify-center ${large ? "h-14 w-[180px]" : "h-12 w-[140px]"} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={size.width}
        height={size.height}
        className={`object-contain object-center ${large ? "max-h-14 max-w-[180px]" : "max-h-12 max-w-[140px]"}`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.classList.remove("hidden");
        }}
      />
      <span className="hidden text-sm font-semibold text-[#334155]">{alt}</span>
    </div>
  );
}

function Marquee({
  items,
  className = "",
}: {
  items: Partner[];
  className?: string;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee-right-left gap-12 lg:gap-16">
        {duplicated.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex shrink-0 items-center justify-center"
          >
            <LogoImage src={item.logo} alt={item.name} large={item.large} />
          </div>
        ))}
      </div>
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"
        aria-hidden
      />
    </div>
  );
}

export default function MeetOurPartners() {
  return (
    <section id="partners" className="relative bg-[#f4f4f5] pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-space-grotesk font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] text-[#0f172a] leading-[1.05] tracking-tight uppercase">
            Meet Our
            <br />
            <span className="inline-block pl-12">partners</span>
          </h2>
          <Link
            href="/#sponsors"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#0f172a] bg-[#0f172a] px-6 py-3 text-[14px] font-semibold text-white uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-[#0f172a]"
          >
            Become a sponsor
            <span className="flex gap-0.5">
              <span className="h-1 w-1 rounded-full bg-current" />
              <span className="h-1 w-1 rounded-full bg-current" />
              <span className="h-1 w-1 rounded-full bg-current" />
            </span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 lg:mt-20 flex flex-col gap-8"
        >
          {/* Diamond + Platinum side by side; Platinum spans remaining width like Gold */}
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[0.55fr_1fr]">
            {/* Diamond Partner - label inside card, marquee */}
            <div className="min-w-0 overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white px-8 py-12 shadow-sm">
              <p className="mb-8 text-center text-lg font-semibold uppercase tracking-wider text-[#374151]">
                Diamond partner
              </p>
              <Marquee items={diamondPartners} className="py-4" />
            </div>

            {/* Platinum Partners - label inside card, marquee */}
            <div className="min-w-0 overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white px-8 py-12 shadow-sm">
              <p className="mb-8 text-center text-lg font-semibold uppercase tracking-wider text-[#374151]">
                Platinum partners
              </p>
              <Marquee items={platinumPartners} className="py-4" />
            </div>
          </div>

          {/* Gold Partners - label inside card, marquee, full width */}
          <div className="rounded-[20px] border border-[#e5e7eb] bg-white px-8 py-12 shadow-sm">
            <p className="mb-8 text-center text-lg font-semibold uppercase tracking-wider text-[#374151]">
              Gold partners
            </p>
            <Marquee items={goldPartners} className="py-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
