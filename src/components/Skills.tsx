"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500/10 to-transparent",
    accent: "border-blue-500/20",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-500/10 to-transparent",
    accent: "border-emerald-500/20",
    skills: [
      { name: "Node.js", level: 87 },
      { name: "Express", level: 85 },
      { name: "Socket.io", level: 82 },
      { name: "WebRTC", level: 70 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    title: "Tools & AI",
    color: "from-crimson/10 to-transparent",
    accent: "border-crimson/20",
    skills: [
      { name: "Gemini AI", level: 80 },
      { name: "Supabase", level: 83 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 68 },
      { name: "Vercel / Render", level: 88 },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const chipItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section className="py-16 px-6" id="skills">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
          Technical <span className="text-crimson">Toolkit</span>
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative bg-zinc-900/30 border ${category.accent} rounded-2xl p-6 overflow-hidden`}
          >
            {/* Subtle gradient top */}
            <div
              className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${category.color} pointer-events-none`}
            />

            {/* Category label */}
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-5">
              {category.title}
            </p>

            {/* Skill bars */}
            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-xs text-zinc-600 font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-crimson to-[#ff6b6b] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Chip tags */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-zinc-800/60"
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={chipItem}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-500 font-mono"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
