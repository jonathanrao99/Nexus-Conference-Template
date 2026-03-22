"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HoverAnimationButton from "@/components/ui/HoverAnimationButton";

type NavLink = { href: string; label: string; future?: boolean };
type NavItem =
  | { type: "link"; href: string; label: string }
  | { type: "dropdown"; label: string; items: NavLink[] };

const navItems: NavItem[] = [
  { type: "link", href: "/", label: "Home" },
  {
    type: "dropdown",
    label: "Conference",
    items: [
      { href: "/#about", label: "About ForumX" },
      { href: "/#tpc", label: "Technical Program Committee (TPC)" },
      { href: "/#speakers", label: "Keynote Speakers" },
      { href: "/#venue", label: "Venue" },
    ],
  },
  {
    type: "dropdown",
    label: "Authors",
    items: [
      { href: "/#cfp", label: "Call for Papers (CFP)" },
      { href: "/#submission", label: "Submission Guidelines" },
      { href: "/#dates", label: "Important Dates" },
    ],
  },
  {
    type: "dropdown",
    label: "Attend",
    items: [
      { href: "/#tickets", label: "Registration" },
      { href: "/#schedule", label: "Schedule" },
    ],
  },
  {
    type: "dropdown",
    label: "Sponsors",
    items: [
      { href: "/#sponsorship", label: "Sponsorship Opportunities" },
      { href: "/#partners", label: "Our Sponsors" },
      { href: "/#become-sponsor", label: "Become a Sponsor" },
    ],
  },
  { type: "link", href: "/#contact", label: "Contact" },
];

const SCROLL_THRESHOLD = 50;
const SCROLL_DELTA = 5;

export default function NavNextConfo() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [navMode, setNavMode] = useState<"glass" | "dark" | "light">("glass");
  const [navVisible, setNavVisible] = useState(true);
  const [atPageTop, setAtPageTop] = useState(true);
  const lastScrollY = useRef(0);
  const rafId = useRef<number | null>(null);
  const { scrollY } = useScroll();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const checkNavMode = () => {
    const viewportTop = 80;
    const heroSections = document.querySelectorAll("[data-hero]");
    const darkSections = document.querySelectorAll("[data-dark-section]");
    let overHero = false;
    let overDark = false;
    heroSections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportTop && rect.bottom >= viewportTop) overHero = true;
    });
    darkSections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportTop && rect.bottom >= viewportTop) overDark = true;
    });
    if (overHero) setNavMode("glass");
    else if (overDark) setNavMode("dark");
    else setNavMode("light");
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const y = latest;
    const prev = lastScrollY.current;
    setAtPageTop(y < 12);
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(() => {
        checkNavMode();
        rafId.current = null;
      });
    }
    if (y <= SCROLL_THRESHOLD) setNavVisible(true);
    else if (y > prev + SCROLL_DELTA) setNavVisible(false);
    else if (y < prev - SCROLL_DELTA) setNavVisible(true);
    lastScrollY.current = y;
  });

  useEffect(() => {
    checkNavMode();
    const y = typeof window !== "undefined" ? window.scrollY : 0;
    lastScrollY.current = y;
    setAtPageTop(y < 12);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const textLight = navMode === "glass" || navMode === "light";
  const textClass = textLight ? "text-white hover:text-white/90" : "text-[#1e293b] hover:text-[#0f172a]";

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={{ y: navVisible ? 0 : -80 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={`pointer-events-none absolute inset-0 ${
          atPageTop ? "" : navMode === "glass" ? "backdrop-blur-xl" : ""
        }`}
        aria-hidden
        animate={{
          backgroundColor:
            atPageTop
              ? "rgba(0,0,0,0)"
              : navMode === "glass"
                ? "transparent"
                : navMode === "dark"
                  ? "rgba(255,255,255,0.98)"
                  : "rgba(0,0,0,0.95)",
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10"
      >
        <Link
          href="/"
          className={`relative z-10 font-bold tracking-[-0.02em] text-xl transition-colors duration-300 hover:opacity-80 ${textLight ? "text-white" : "text-[#1e293b]"}`}
        >
          ForumX<span className="text-[#2563eb]">.</span>
        </Link>

        {/* Desktop nav */}
        <div ref={dropdownRef} className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-[15px] font-medium uppercase tracking-wide transition-colors duration-300 group ${textClass}`}
                >
                  {item.label}
                  <span className="absolute inset-x-4 -bottom-px h-px bg-[#2563eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </Link>
              );
            }
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`group relative flex items-center gap-0.5 px-4 py-2 text-[15px] font-medium uppercase tracking-wide transition-colors duration-300 ${textClass}`}
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                  <span className={`absolute inset-x-4 -bottom-px h-px bg-[#2563eb] transition-transform duration-300 ease-out origin-left ${isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2 min-w-[240px]"
                    >
                      <div
                        className={`rounded-xl border backdrop-blur-xl py-2 shadow-xl ${
                          textLight
                            ? "border-white/20 bg-black/95 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                            : "border-[#e2e8f0] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.12)]"
                        }`}
                      >
                        {item.items.map((sub, i) => (
                          <Link
                            key={sub.href + sub.label}
                            href={sub.href}
                            className={`relative flex items-center gap-2 border-l-2 border-transparent pl-4 py-2.5 pr-3 text-[14px] font-medium transition-all duration-200 ${
                              textLight
                                ? "text-white/85 hover:text-white hover:bg-white/10 hover:border-[#2563eb]"
                                : "text-[#475569] hover:text-[#0f172a] hover:bg-[#f1f5f9] hover:border-[#2563eb]"
                            }`}
                          >
                            <span className="flex-1">{sub.label}</span>
                            {sub.future && (
                              <span className="text-[11px] font-normal text-[#94a3b8]">(future)</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div className={`ml-1 mr-4 h-4 w-px shrink-0 ${textLight ? "bg-white/50" : "bg-[#1e293b]/30"}`} />
          <HoverAnimationButton href="/#tickets" className="btn-hover-anim-primary shrink-0 !py-2.5 !px-10 text-[17px] tracking-widest">
            Get a ticket
          </HoverAnimationButton>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Menu"
          className={`lg:hidden relative z-10 p-2 ${textLight ? "text-white" : "text-[#1e293b]"}`}
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-col gap-[5px] w-5">
            <motion.span
              animate={{ y: open ? 6.5 : 0, rotate: open ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block h-[1.5px] bg-current origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] bg-current"
            />
            <motion.span
              animate={{ y: open ? -6.5 : 0, rotate: open ? -45 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block h-[1.5px] bg-current origin-center"
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden border-b border-[#e2e8f0] bg-white/98 backdrop-blur-2xl"
          >
            <div className="flex flex-col py-4 px-6 gap-0 max-h-[70vh] overflow-y-auto">
              {navItems.map((item, idx) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3.5 text-[16px] font-medium text-[#334155] transition-colors hover:text-[#1e293b]"
                    >
                      {item.label}
                    </Link>
                  );
                }
                const isExpanded = openMobileSection === item.label;
                return (
                  <div key={item.label} className="border-b border-[#f1f5f9] last:border-0">
                    <button
                      type="button"
                      onClick={() => setOpenMobileSection(isExpanded ? null : item.label)}
                      className="flex w-full items-center justify-between py-3.5 text-[16px] font-medium text-[#334155] hover:text-[#1e293b]"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-3 flex flex-col gap-0.5">
                            {item.items.map((sub) => (
                              <Link
                                key={sub.href + sub.label}
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="py-2.5 text-[15px] text-[#64748b] hover:text-[#1e293b]"
                              >
                                {sub.label}
                                {sub.future && (
                                  <span className="ml-1 text-[12px] text-[#94a3b8]">(future)</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <HoverAnimationButton
                href="/#tickets"
                onClick={() => setOpen(false)}
                className="btn-hover-anim-primary mt-4 w-fit self-start !py-4 !px-10 text-[17px] tracking-widest"
              >
                Get a ticket
              </HoverAnimationButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
