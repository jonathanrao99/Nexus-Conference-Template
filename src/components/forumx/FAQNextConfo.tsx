"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "What's included in my ticket?", a: "Each pass includes access to sessions, networking events, and the expo area. VIP & Business passes offer added perks like front-row seating, speaker meet & greet, and more." },
  { q: "Will sessions be recorded?", a: "Yes. Key sessions will be recorded and made available to all registered attendees within one week of the event." },
  { q: "Do I need a printed ticket?", a: "No — digital tickets are accepted. Show your confirmation email or QR code at check-in." },
  { q: "Is there a student discount?", a: "Yes. Contact us with your .edu email for eligibility and discounted pricing." },
  { q: "Can I transfer my ticket?", a: "Tickets are transferable up to 48 hours before the event. Contact support for details." },
  { q: "Where is the venue?", a: "The main program is held at a downtown convention center in San Francisco, CA. Full address, transit, and parking details are included with your ticket confirmation—replace this text with your real venue." },
];

export default function FAQNextConfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#f4f4f5] -mt-6 pt-0 pb-24 lg:-mt-4 lg:pt-0 lg:pb-32 text-[#0f172a]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-16 lg:items-start">
          {/* Left: stacked title */}
          <h2 className="font-space-grotesk font-bold text-[2.25rem] leading-[1.15] tracking-tight uppercase text-left sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem]">
            <span className="block">Frequently</span>
            <span className="block mt-1">Asked</span>
            <span className="block mt-1">Questions</span>
          </h2>

          {/* Right: accordion */}
          <div className="border-t border-[#e5e7eb]">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="border-b border-[#e5e7eb]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 lg:py-6 text-left group"
                >
                  <span className="font-semibold text-[#0f172a] text-base lg:text-[32px] pr-4">
                    {faq.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#0f172a] transition-colors group-hover:bg-[#e5e7eb]">
                    {openIndex === i ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 lg:pb-6 text-[15px] lg:text-[16px] leading-[1.7] text-[#475569]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
