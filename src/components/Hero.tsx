"use client";

import { motion, type Variants } from "framer-motion";
import { FileText, ChevronDown, ArrowUpRight } from "lucide-react";
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
        state.current.deleting = false;
        state.current.wordIndex = (wordIndex + 1) % words.length;
        state.current.charIndex = 0;
        timeout = setTimeout(tick, speed);
      }
    }

    timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, []);

  return display;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Smoother, modern easing
  },
};

export default function Hero() {
  const typedRole = useTypingEffect(roles);

  return (
    <section className="min-h-screen relative flex flex-col justify-center px-6 pt-32 pb-24 overflow-hidden">
      
      {/* Background Grid Pattern - Adds that 'tech' feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />

      {/* Modern Layout: 2 Columns */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        
        {/* Left Side: Typography (Takes up 7/12 columns) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[0.95] mb-6"
          >
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson via-[#ff4d4d] to-crimson animate-gradient-x">
              Digital Reality.
            </span>
          </motion.h1>

          <motion.div variants={item} className="h-10 mb-6 flex items-center">
            <span className="font-mono text-lg md:text-xl text-zinc-400 border-l-2 border-crimson pl-4">
              I am a {typedRole}
              <span className="cursor-blink text-crimson ml-0.5">|</span>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="text-zinc-400 max-w-xl text-base md:text-lg mb-10 leading-relaxed font-light"
          >
            Hi, Im <span className="text-white font-medium">Sumit Kumar</span>. Specializing in{" "}
            <span className="text-white font-medium">real-time collaborative systems</span>{" "}
            and{" "}
            <span className="text-white font-medium">AI-driven data visualization</span>.
            I turn complex problems into elegant interfaces.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Resume_Sumitkumar.pdf"
              target="_blank"
              className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all group"
            >
              <FileText size={18} className="group-hover:-rotate-12 transition-transform" />
              Download Resume
              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
            </motion.a>

            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/SumitKumar3030"
                target="_blank"
                className="p-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-white hover:bg-zinc-800 transition-colors flex items-center justify-center"
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/sumit-kumar-dev3/"
                target="_blank"
                className="p-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-white hover:bg-zinc-800 transition-colors flex items-center justify-center"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image (Takes up 5/12 columns) */}
        <motion.div 
          variants={item} 
          className="lg:col-span-5 relative w-full h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
        >
          {/* Decorative Elements behind image */}
          <div className="absolute inset-0 bg-crimson/10 blur-[100px] rounded-full" />
          
          {/* Image Container - Changed to a sleek rectangle with rounded corners */}
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800/50 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
            <Image
              src="/profile1.jpg"
              alt="Sumit Kumar"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              priority
            />
            {/* Small floating tag on image */}
            <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-mono text-white">
              Based in India
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={14} className="scroll-bounce" />
      </motion.div>
    </section>
  );
}