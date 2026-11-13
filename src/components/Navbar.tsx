"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 100);
  });

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Smoother easing
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 flex justify-center w-full"
    >
      {/* Floating Glass Pill Container */}
      <nav className="bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 rounded-full px-2 py-2 flex items-center justify-between w-full max-w-3xl shadow-2xl shadow-black/50">
        
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 hover:border-crimson/50 transition-colors ml-1"
        >
          <span className="font-mono text-sm font-bold text-white group-hover:text-crimson transition-colors">
            SK<span className="text-crimson">.</span>
          </span>
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative group px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
              {/* Hover dot */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-crimson rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/Resume_Sumitkumar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-crimson hover:text-white transition-all duration-300 mr-1"
        >
          Resume
          <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
        </a>

      </nav>
    </motion.header>
  );
}