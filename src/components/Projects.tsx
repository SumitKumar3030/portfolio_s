"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Star, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
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
  video?: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "PairPulse - Real-Time Collaboration Platform",
    shortDescription:
      "A full-stack real-time collaboration platform featuring a Monaco-based code editor, live chat, and peer-to-peer video calling using WebRTC.",
    fullDescription:
      "Built a full-stack real-time collaboration platform featuring a Monaco-based code editor, live chat, and peer-to-peer video calling using WebRTC. Implemented low-latency synchronization with Socket.IO and secure session management using Supabase, enabling seamless mentor-student interaction. Students join via a 6-digit session key, and mentors can create sessions and share code in real time with zero lag.",
    tech: ["Next.js", "Node.js", "Socket.io", "WebRTC", "Supabase", "TypeScript"],
    link: "https://student-mentor-platform-three.vercel.app/",
    github: "https://github.com/SumitKumar3030",
    images: ["/student_mentor.png", "/student_mentor1.png", "/student_mentor2.png"],
    video: "",
    featured: true,
  },
  {
    title: "Document Signature Application",
    shortDescription:
      "A full-stack application for digitally signing documents with a focus on security and compliance.",
    fullDescription:
      "Built a full-stack document signature application that allows users to upload, view, and sign documents digitally. Implemented secure signature generation using cryptographic libraries and integrated with a RESTful API for seamless document management. The application ensures compliance with digital signature standards and provides an intuitive user interface for managing signed documents.",
    tech: ["Next.js", "Node.js", "Express", "CryptoJS", "Tailwind CSS"],
    link: "https://document-signature-app-jet.vercel.app/",
    github: "https://github.com/SumitKumar3030",
    images: ["/doc1.png","/doc2.png","/doc3.png","/doc4.png","/doc5.png","/doc6.png"],
    video: "https://www.loom.com/share/0e3f1b8c5a2b4f9e8c1d2e3f4a5b6c7d",
    featured: true,
  },
  {
    title: "TaskFlow - Team Task Manager",
    shortDescription:
      "A full-stack team collaboration app with real-time drag-and-drop task boards, workspaces, and role-based access.",
    fullDescription:
      "Built a full-stack task management platform where teams create workspaces, invite members by email, organize work into projects, and manage tasks on a real-time drag-and-drop Kanban board. Implemented JWT-based authentication with email OTP verification, role-based workspace permissions (admin/member), and an activity audit log that tracks every task status change and assignment. The board uses @dnd-kit for smooth drag-and-drop with optimistic UI updates synced to MongoDB, and transactional emails (invites, OTP, password reset) are sent via the Brevo API.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "@dnd-kit", "Tailwind CSS"],
    link: "https://task-manager-sepia-theta-48.vercel.app/",
    github: "https://github.com/SumitKumar3030",
    images: ["/taskflow1.png", "/taskflow2.png", "/taskflow3.png", "/taskflow4.png", "/taskflow5.png"],
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
    title: "PDFKit - PDF Manipulation Tool",
    shortDescription:
      "A full-stack application for creating, editing, and sharing PDF documents with a modern UI.",
    fullDescription:
      "A full-stack PDF manipulation tool that allows users to create, edit, and share PDF documents. Built with a modern UI for an intuitive user experience.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://pdfkit-landing.vercel.app/",
    github: "https://github.com/SumitKumar3030/pdfkit",
    images: ["/pdfkit1.png", "/pdfkit2.png"],
    featured: false,
  },
  {
    title: "CRUD",
    shortDescription:
      "Simple CRUD : Create, Read, Update, Delete operations with a clean and intuitive interface.",
    fullDescription:
      "A simple CRUD application with a clean and intuitive interface for managing data. Built with modern web technologies for a seamless user experience.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB"],
    link: "https://crud-rho-flax.vercel.app/",
    github: "https://github.com/SumitKumar3030/crud",
    images: ["/crud1.png"],
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
    github: "https://github.com/SumitKumar3030/meterflow",
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
    link: "https://reddit-clone-dusky-zeta.vercel.app/",
    github: "https://github.com/SumitKumar3030/reddit-clone",
    images: ["/reddit1.png","/reddit2.png","/reddit3.png","/reddit4.png"],
    featured: false,
  },
  {
    title: "Forma Studio Website Demo",
    shortDescription:
      "Website demo for video editing company Frame Shift, showcasing their services and portfolio.",
    fullDescription:
      "Website demo for video editing company Frame Shift, showcasing their services and portfolio. Built with Next.js and TypeScript, featuring a responsive design, smooth animations, and interactive elements to enhance user engagement.",
    tech: ["Next.js", "Node.js", "TypeScript"],
    link: "https://forma-studio-opal.vercel.app/",
    github: "https://github.com/SumitKumar3030/forma-studio",
    images: ["/forma1.png", "/forma2.png"],
    video: "",
    featured: true,
  },
  {
    title: "Mitti-Mocha Website Demo",
    shortDescription:
      "Website demo for video editing company Frame Shift, showcasing their services and portfolio.",
    fullDescription:
      "Website demo for video editing company Frame Shift, showcasing their services and portfolio. Built with Next.js and TypeScript, featuring a responsive design, smooth animations, and interactive elements to enhance user engagement.",
    tech: ["Next.js", "Node.js", "TypeScript"],
    link: "https://mitti-mocha.vercel.app/",
    github: "https://github.com/SumitKumar3030/mitti-mocha",
    images: ["/mitti1.png", "/mitti2.png", "/mitti3.png", "/mitti4.png"],
    video: "",
    featured: true,
  },
  {
    title: "Frame Shift Website Demo",
    shortDescription:
      "Website demo for video editing company Frame Shift, showcasing their services and portfolio.",
    fullDescription:
      "Website demo for video editing company Frame Shift, showcasing their services and portfolio. Built with Next.js and TypeScript, featuring a responsive design, smooth animations, and interactive elements to enhance user engagement.",
    tech: ["Next.js", "Node.js", "TypeScript"],
    link: "https://frame-shift-demo.vercel.app/",
    github: "https://github.com/SumitKumar3030/frame-shift-demo",
    images: ["/framer1.png", "/framer2.png", "/framer3.png", "/framer4.png", "/framer5.png", "/framer6.png"],
    video: "",
    featured: true,
  },
  {
    title: "Weather-App",
    shortDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence.",
    fullDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence using Express and Socket.io. Features real-time event broadcasting, room-based session isolation, reconnection handling, and a PostgreSQL-backed state store. Built to handle hundreds of concurrent sessions with sub-100ms latency.",
    tech: ["Express", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://weather-now-liart-eta.vercel.app/",
    github: "https://github.com/SumitKumar3030/weather-now",
    images: ["/weatherApp.png", "/weatherApp1.png", "/weatherApp2.png"],
    featured: false,
  },
  {
    title: "Speech-to-Text Application",
    shortDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence.",
    fullDescription:
      "A backend-heavy application focused on bidirectional communication and session state persistence using Express and Socket.io. Features real-time event broadcasting, room-based session isolation, reconnection handling, and a PostgreSQL-backed state store. Built to handle hundreds of concurrent sessions with sub-100ms latency.",
    tech: ["Express", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://demo.com",
    github: "https://github.com/SumitKumar3030/speech-to-text-app",
    images: ["/speechToText.png"],
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
        className="relative bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/60"
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

          <div className="mt-8">
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-crimson bg-crimson/10 border border-crimson/20 px-3 py-1 rounded-full mb-4">
                <Star size={10} className="fill-crimson" />
                Featured Project
              </span>
            )}

            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {project.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-8">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] uppercase tracking-tight bg-zinc-900 text-zinc-300 px-3 py-1.5 rounded-md border border-zinc-800">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6 pt-6 border-t border-zinc-800">
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
                className="flex items-center gap-2 text-sm text-crimson hover:text-white transition-colors font-medium"
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
  
  // Split into Featured and Other projects
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      
      {/* Header */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
          Selected <span className="text-crimson">Work</span>
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </div>

      {/* Featured Projects - Bento Box Style */}
      <div className="flex flex-col gap-12 mb-24">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelected(project)}
            className="group relative w-full rounded-[2rem] overflow-hidden border border-zinc-800/80 bg-zinc-900/20 cursor-pointer flex flex-col lg:flex-row hover:border-crimson/30 transition-colors duration-500"
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-[60%] h-72 lg:h-[450px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 lg:hidden" />
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-6 left-6 z-20 flex gap-2">
                <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2">
                  <Star size={12} className="text-crimson fill-crimson" /> Featured
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative w-full lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-zinc-900/50 to-black/50 z-20">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-crimson transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-medium bg-zinc-800/50 text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-700/50">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-4">
                  <a href={project.github} onClick={(e) => e.stopPropagation()} className="text-zinc-400 hover:text-white transition-colors">
                    <GitHubLogoIcon className="w-5 h-5" />
                  </a>
                  <a href={project.link} onClick={(e) => e.stopPropagation()} className="text-zinc-400 hover:text-crimson transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-crimson transition-colors duration-300">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects - Asymmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelected(project)}
            className="group relative bg-zinc-900/30 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-crimson transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-zinc-400 text-sm mb-6 line-clamp-2 flex-1">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
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