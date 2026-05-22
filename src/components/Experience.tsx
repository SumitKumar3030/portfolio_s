"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Labmentrix",
    location: "Remote",
    duration: "March 2026 — Present",
    type: "Current",
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
    <section className="py-24 px-6" id="experience">
      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
          Work <span className="text-crimson">Experience</span>
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Static timeline track */}
        <div className="absolute left-0 md:left-6 top-0 bottom-0 w-[2px] bg-zinc-800" />

        {/* Animated fill */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-0 md:left-6 top-0 w-[2px] bg-gradient-to-b from-crimson via-crimson/50 to-transparent origin-top"
        />

        <div className="space-y-10 pl-10 md:pl-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="relative"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-[45px] md:-left-[55px] top-7 w-4 h-4 rounded-full border-2 border-crimson bg-black shadow-[0_0_12px_rgba(225,29,72,0.6)] z-10" />

              {/* Card */}
              <div className="bg-zinc-900/40 border border-zinc-800 hover:border-crimson/30 transition-all duration-300 rounded-2xl p-7 group">
                {/* Top row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2 text-crimson font-mono text-xs">
                    <Calendar size={12} />
                    {exp.duration}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-widest font-mono px-2.5 py-1 rounded-full border ${
                      exp.type === "Current"
                        ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
                        : "text-zinc-500 border-zinc-700 bg-zinc-800/50"
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-crimson transition-colors mb-1">
                  {exp.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm mb-5">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={13} />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="text-zinc-500 text-sm flex gap-3 leading-relaxed">
                      <span className="text-crimson font-bold mt-0.5 shrink-0">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}