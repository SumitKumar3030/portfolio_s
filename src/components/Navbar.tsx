"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 100);
    setAtTop(latest < 20);
  });

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        atTop
          ? "bg-transparent"
          : "bg-[#050505]/80 backdrop-blur-xl border-b border-zinc-800/60"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-bold text-white tracking-widest hover:text-crimson transition-colors"
        >
          SK<span className="text-crimson">.</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/Resume_Sumitkumar.pdf"
          target="_blank"
          className="text-sm font-semibold text-crimson border border-crimson/40 hover:bg-crimson hover:text-white px-4 py-1.5 rounded-full transition-all duration-200"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
