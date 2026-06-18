"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

type Project = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  link: string;
  github: string;
  images: string[];
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Mentor-Student Real-Time Collaboration Platform",
    shortDescription:
      "A full-stack real-time collaboration platform featuring a Monaco-based code editor, live chat, and peer-to-peer video calling using WebRTC.",
    fullDescription:
      "Built a full-stack real-time collaboration platform featuring a Monaco-based code editor, live chat, and peer-to-peer video calling using WebRTC. Implemented low-latency synchronization with Socket.IO and secure session management using Supabase, enabling seamless mentor-student interaction. Students join via a 6-digit session key, and mentors can create sessions and share code in real time with zero lag.",
    tech: ["Next.js", "Node.js", "Socket.io", "WebRTC", "Supabase", "TypeScript"],
    link: "https://student-mentor-app.vercel.app/",
    github: "https://github.com/SumitKumar3030",
    images: ["/student_mentor.png", "/project1b.png", "/project1c.png"],
    featured: true,
  },
  {
    title: "AI Data Analyst Dashboard",
    shortDescription:
      "Full-stack AI dashboard that lets users query CSV data in natural language and automatically generates interactive charts.",
    fullDescription:
      "Full-stack AI dashboard that lets users query CSV data in natural language and automatically generates interactive charts with intelligent chart type selection. Powered by Gemini AI for query understanding and Recharts for rendering. Users can upload any CSV, ask questions like 'show top 5 products by sales', and get instant visual insights without writing a single line of code.",
    tech: ["Next.js", "Node.js", "Express", "Gemini AI", "Recharts", "Tailwind CSS"],
    link: "https://ai-data-analyst-dashboard-sigma.vercel.app/",
    github: "https://github.com/SumitKumar3030/ai-data-analyst-dashboard",
    images: ["/ai_dataAnalyst.png", "/project2b.png"],
    featured: false,
  },
  {
    title: "MeterFlow: Real-Time Energy Consumption Dashboard",
    shortDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence.",
    fullDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence using Express and Socket.io. Features real-time event broadcasting, room-based session isolation, reconnection handling, and a PostgreSQL-backed state store. Built to handle hundreds of concurrent sessions with sub-100ms latency.",
    tech: ["Express", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://demo.com",
    github: "https://github.com/SumitKumar3030",
    images: ["/meterflow.png"],
    featured: false,
  },
  {
    title: "Reddit Clone",
    shortDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence.",
    fullDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence using Express and Socket.io. Features real-time event broadcasting, room-based session isolation, reconnection handling, and a PostgreSQL-backed state store. Built to handle hundreds of concurrent sessions with sub-100ms latency.",
    tech: ["Express", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://demo.com",
    github: "https://github.com/SumitKumar3030",
    images: ["/weatherApp.png"],
    featured: false,
  },
  {
    title: "Weather-App",
    shortDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence.",
    fullDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence using Express and Socket.io. Features real-time event broadcasting, room-based session isolation, reconnection handling, and a PostgreSQL-backed state store. Built to handle hundreds of concurrent sessions with sub-100ms latency.",
    tech: ["Express", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://demo.com",
    github: "https://github.com/SumitKumar3030",
    images: ["/weatherApp.png"],
    featured: false,
  },
  {
    title: "System",
    shortDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence.",
    fullDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence using Express and Socket.io. Features real-time event broadcasting, room-based session isolation, reconnection handling, and a PostgreSQL-backed state store. Built to handle hundreds of concurrent sessions with sub-100ms latency.",
    tech: ["Express", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://demo.com",
    github: "https://github.com/SumitKumar3030",
    images: ["/weatherApp.png"],
    featured: false,
  }
];

// ─── Carousel ─────────────────────────────────────────────────────
function Carousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-80 bg-zinc-900 rounded-xl overflow-hidden group/carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 via-zinc-900 to-zinc-950" />
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 backdrop-blur border border-zinc-700 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:border-crimson/50"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 backdrop-blur border border-zinc-700 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:border-crimson/50"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-crimson w-4" : "bg-zinc-600 w-1.5"
                }`}
              />
            ))}
          </div>

          {/* Counter badge */}
          <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur border border-zinc-700 text-zinc-400 text-[10px] font-mono px-2 py-1 rounded-full">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/60"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-crimson/50 transition-all"
        >
          <X size={16} />
        </button>

        <div className="p-6 md:p-8">
          <Carousel images={project.images} title={project.title} />

          <div className="mt-6">
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-crimson bg-crimson/10 border border-crimson/20 px-3 py-1 rounded-full mb-4">
                <Star size={10} className="fill-crimson" />
                Featured Project
              </span>
            )}

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              {project.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] uppercase tracking-tight bg-zinc-900 text-zinc-400 px-3 py-1.5 rounded-md border border-zinc-800">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6 pt-4 border-t border-zinc-800">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors font-medium"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                View Source
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-crimson hover:text-crimson/80 transition-colors font-medium"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [featured, ...rest] = projects;

  return (
    <section className="py-24 px-6" id="projects">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
          Featured <span className="text-crimson">Projects</span>
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </div>

      {/* Featured — full width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => setSelected(featured)}
        className="group relative bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden hover:border-crimson/40 transition-all duration-500 mb-10 grid md:grid-cols-2 cursor-pointer"
      >
        <div className="relative h-72 md:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-zinc-900" />
          <div className="absolute inset-0 bg-crimson/5 group-hover:bg-transparent transition-colors z-10" />
          <Image
            src={featured.images[0]}
            alt={featured.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          {featured.images.length > 1 && (
            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur border border-zinc-700 text-zinc-300 text-[10px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <Code2 size={10} />
              {featured.images.length} screenshots
            </div>
          )}
        </div>

        <div className="p-10 flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-crimson bg-crimson/10 border border-crimson/20 px-3 py-1 rounded-full mb-5">
              <Star size={10} className="fill-crimson" />
              Featured Project
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-crimson transition-colors mb-3">
              {featured.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm line-clamp-3">
              {featured.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span key={t} className="text-[11px] uppercase tracking-tight bg-zinc-950 text-zinc-400 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-crimson/20 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-zinc-600 font-mono flex items-center gap-1.5 mt-6">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
            Click to view details & screenshots
          </p>
        </div>
      </motion.div>

      {/* Rest — 2 col */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {rest.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            onClick={() => setSelected(project)}
            className="group relative bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden hover:border-crimson/40 transition-all duration-500 cursor-pointer"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-crimson/8 to-zinc-900" />
              <div className="absolute inset-0 bg-crimson/5 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              {project.images.length > 1 && (
                <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur border border-zinc-700 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded-full">
                  {project.images.length} screenshots
                </div>
              )}
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/60 backdrop-blur border border-crimson/30 p-2 rounded-full">
                  <Code2 className="text-crimson w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="p-7">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-crimson transition-colors pr-4">
                  {project.title}
                </h3>
                <div className="flex gap-3 shrink-0">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-zinc-500 hover:text-white transition-all hover:scale-110">
                    <GitHubLogoIcon className="w-5 h-5" />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-zinc-500 hover:text-crimson transition-all hover:scale-110">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mb-5 leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-tight bg-zinc-950 text-zinc-400 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-crimson/20 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-[11px] text-zinc-600 font-mono flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-crimson" />
                Click to view details
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
