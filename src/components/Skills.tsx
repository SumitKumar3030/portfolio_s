"use client";

import { motion } from "framer-motion";

// Adding a simple infinite scrolling marquee for the tools
const allTools = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "Node.js", "Express", "Socket.io", "WebRTC", "PostgreSQL", 
  "Gemini AI", "Supabase", "Git", "Docker", "Vercel"
];

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Vite", "Framer Motion"],
    colSpan: "md:col-span-2",
    color: "group-hover:border-blue-500/50"
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Socket.io", "WebRTC", "PostgreSQL", "JWT Authentication", "REST APIs", "Prisma ORM"],
    colSpan: "md:col-span-1",
    color: "group-hover:border-emerald-500/50"
  },
  {
    title: "Tools & AI",
    icon: "🤖",
    skills: ["Groq AI / Llama-3", "Gemini AI", "Supabase", "MongoDB", "Github", "Git", "Docker", "Vercel", "Render", "Postman"],
    colSpan: "md:col-span-1",
    color: "group-hover:border-crimson/50"
  },
  {
    title: "Currently Exploring",
    icon: "🚀",
    skills: ["Rust", "WebGL", "Three.js", "tRPC"],
    colSpan: "md:col-span-2",
    color: "group-hover:border-purple-500/50"
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden" id="skills">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
          Technical <span className="text-crimson">Arsenal</span>
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </div>

      {/* Infinite Marquee (Modern Trend) */}
      <div className="relative w-full overflow-hidden mb-16 py-4 border-y border-zinc-800/50 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-8 items-center"
        >
          {[...allTools, ...allTools].map((tool, i) => (
            <span key={i} className="text-zinc-500 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
              {tool} <span className="text-crimson/50 text-xs">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 transition-colors duration-500 overflow-hidden ${category.colSpan} ${category.color}`}
          >
            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-4 py-2 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-300 group-hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}