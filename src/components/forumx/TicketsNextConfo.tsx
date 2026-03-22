"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const tiers = [
  {
    name: "GENERAL PASS",
    subtitle: "Core Event Access",
    price: "$650",
    original: "$699",
    features: [
      "Full event access",
      "Keynote & session entry",
      "Networking opportunities",
      "Access to expo hall",
      "Conference materials",
    ],
    bg: "bg-[#bae6fd]",
  },
  {
    name: "BUSINESS PASS",
    subtitle: "Premium Experience",
    price: "$1,099",
    original: "$1,199",
    features: [
      "All general pass perks",
      "VIP lounge access",
      "Front-row seating",
      "Meet & greet with speakers",
      "Afterparty invitation",
    ],
    bg: "bg-[#fbcfe8]",
  },
  {
    name: "VIP PASS",
    subtitle: "Ultimate Access",
    price: "$1,195",
    original: "$1,295",
    features: [
      "All business pass perks",
      "Exclusive backstage access",
      "Private lunch with speakers",
      "Priority check-in concierge",
      "Premium gift package",
    ],
    bg: "bg-[#fef3c7]",
  },
];

export default function TicketsNextConfo() {
  return (
    <section id="tickets" className="relative bg-[#f4f4f5] -mt-6 pt-0 pb-24 lg:-mt-4 lg:pt-0 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-space-grotesk font-bold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] text-[#0f172a] leading-[1.1] tracking-tight uppercase text-left mb-16 lg:mb-20"
        >
          Grab your
          <br />
          <span className="inline-block pl-20">ticket now</span>
        </motion.h2>

        {/* Cards — equal size, same layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col h-full"
            >
              <div
                className={`flex flex-col flex-1 rounded-2xl ${t.bg} p-8 min-h-[440px]`}
              >
                <h3 className="font-space-grotesk font-black text-[1.85rem] sm:text-[2.1rem] text-[#0f172a] uppercase tracking-wide">
                  {t.name}
                </h3>
                <p className="mt-1 text-[14px] font-normal text-[#0f172a]">({t.subtitle})</p>

                <div className="mt-2 flex items-baseline">
                  <span className="text-[2rem] sm:text-[2.25rem] font-bold tracking-tight text-[#0f172a]">{t.price}</span>
                  <span className="text-[14px] font-normal text-[#64748b] line-through">{t.original}</span>
                </div>

                <div className="mt-6 flex items-center gap-0">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f172a]" />
                  <div className="flex-1 border-t border-dashed border-[#0f172a]" />
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f172a]" />
                </div>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="font-ticket-bullets flex items-start gap-2 text-[17px] leading-snug text-[#0f172a]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f172a]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <InteractiveHoverButton
                  text="Get Ticket"
                  href="/#tickets"
                  variant="premium"
                  className="mt-20 flex w-full items-center justify-center"
                />

                <p className="mt-4 text-center text-[15px] font-space-grotesk font-light text-[#64748b]">
                  Early pricing until May 31 or until sold out
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
