"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "VEloop",
    location: "Remote",
    duration: "Sept 2026 — Present",
    type: "Current",
    description: [
      "Developed real-time collaborative features using Socket.io and Next.js.",
      "Optimized database queries in Supabase, reducing load times by 30%.",
      "Integrated Gemini AI for automated data tagging and analysis.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Labmentrix",
    location: "Remote",
    duration: "Mar 2026 — Jun 2026",
    type: "Completed",
    description: [
      "Developed real-time collaborative features using Socket.io and Next.js.",
      "Optimized database queries in Supabase, reducing load times by 30%.",
      "Integrated Gemini AI for automated data tagging and analysis.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Internshala",
    location: "Remote",
    duration: "Jun 2025 — Dec 2025",
    type: "Completed",
    description: [
      "Built responsive frontend components using Tailwind CSS and TypeScript.",
      "Collaborated with UI/UX designers to implement pixel-perfect interfaces.",
      "Maintained and debugged Express.js backend services.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="experience">
      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
          Where I have <span className="text-crimson">Worked</span>
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </div>

      <div className="flex flex-col gap-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b border-zinc-800/60 last:border-0 hover:bg-zinc-900/20 transition-colors rounded-2xl px-4 md:px-6 -mx-4 md:-mx-6"
          >
            
            {/* Left Side: Date & Company (Spans 4 columns) */}
            <div className="md:col-span-4 flex flex-col gap-1 md:pt-1">
              <span className="text-sm font-mono text-crimson tracking-wider uppercase">
                {exp.duration}
              </span>
              <span className="text-zinc-400 font-medium mt-1 flex items-center gap-2">
                {exp.company}
                {exp.type === "Current" && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
              </span>
              <span className="text-zinc-600 text-sm">{exp.location}</span>
            </div>

            {/* Right Side: Role & Description (Spans 8 columns) */}
            <div className="md:col-span-8 relative">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-crimson transition-colors flex items-center justify-between">
                {exp.title}
                <ArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-crimson w-6 h-6 hidden md:block" />
              </h3>
              
              <ul className="space-y-3">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="text-zinc-400 text-sm md:text-base flex gap-3 leading-relaxed">
                    <span className="text-zinc-600 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}