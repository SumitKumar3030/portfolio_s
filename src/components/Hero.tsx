"use client";

import { motion, type Variants } from "framer-motion";
import { FileText, ChevronDown } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Real-Time Systems Builder",
  "AI Integration Engineer",
  "Open Source Contributor",
];

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  // All mutable state lives in a ref — no synchronous setState inside the effect
  const state = useRef({ wordIndex: 0, charIndex: 0, deleting: false });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const { wordIndex, charIndex, deleting } = state.current;
      const current = words[wordIndex];

      if (!deleting && charIndex < current.length) {
        state.current.charIndex += 1;
        setDisplay(current.slice(0, state.current.charIndex));
        timeout = setTimeout(tick, speed);
      } else if (!deleting && charIndex === current.length) {
        timeout = setTimeout(() => {
          state.current.deleting = true;
          tick();
        }, pause);
      } else if (deleting && charIndex > 0) {
        state.current.charIndex -= 1;
        setDisplay(current.slice(0, state.current.charIndex));
        timeout = setTimeout(tick, speed / 2);
      } else {
        // Fully deleted — advance to next word
        state.current.deleting = false;
        state.current.wordIndex = (wordIndex + 1) % words.length;
        state.current.charIndex = 0;
        timeout = setTimeout(tick, speed);
      }
    }

    timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return display;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const typedRole = useTypingEffect(roles);

  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center text-center px-6 relative pt-16 pb-24">
      {/* Ambient glow blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-crimson/8 blur-[140px] rounded-full -z-10 animate-pulse" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        {/* Profile image */}
        <motion.div variants={item} className="relative w-36 h-36 mb-10 mx-auto group">
          <div className="absolute inset-0 bg-crimson rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="relative w-full h-full rounded-full border-[3px] border-crimson/50 p-1 bg-black overflow-hidden shadow-[0_0_30px_rgba(225,29,72,0.3)]">
            <Image
              src="/profile1.jpg"
              alt="Sumit Kumar"
              fill
              className="rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson via-[#ff4d4d] to-crimson animate-gradient-x">
            Sumit Kumar
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={item}
          className="h-10 mb-6 flex items-center justify-center"
        >
          <span className="font-mono text-xl md:text-2xl text-zinc-300">
            {typedRole}
            <span className="cursor-blink text-crimson ml-0.5">|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-zinc-400 max-w-2xl text-lg md:text-xl mb-12 leading-relaxed font-light"
        >
          Specializing in{" "}
          <span className="text-white font-medium">real-time collaborative systems</span>{" "}
          and{" "}
          <span className="text-white font-medium">AI-driven data visualization</span>.
          Turning complex problems into elegant interfaces.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(225,29,72,0.45)" }}
            whileTap={{ scale: 0.95 }}
            href="/Resume_Sumitkumar.pdf"
            target="_blank"
            className="flex items-center gap-2 bg-crimson text-white px-8 py-3.5 rounded-full font-bold shadow-[0_0_15px_rgba(225,29,72,0.25)] transition-all"
          >
            <FileText size={18} />
            Download Resume
          </motion.a>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(225,29,72,0.1)",
                borderColor: "#e11d48",
              }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/SumitKumar3030"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-white transition-colors flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(225,29,72,0.1)",
                borderColor: "#e11d48",
              }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/sumit-kumar-dev3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-white transition-colors flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - pinned to bottom, won't overlap content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={14} className="scroll-bounce" />
      </motion.div>
    </section>
  );
}
