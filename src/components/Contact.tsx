"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "stva3030@gmail.com",
    href: "mailto:stva3030@gmail.com",
  },
  {
    icon: GitHubLogoIcon,
    label: "GitHub",
    value: "github.com/SumitKumar3030",
    href: "https://github.com/SumitKumar3030",
  },
  {
    icon: LinkedInLogoIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/sumit-kumar-dev3",
    href: "https://www.linkedin.com/in/sumit-kumar-dev3/",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  // Updated Input Class for a more modern, rounded look
  const inputClass =
    "w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-crimson/50 focus:ring-4 focus:ring-crimson/10 transition-all duration-300";

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
          Lets <span className="text-crimson">Connect</span>
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </div>

      <div className="grid md:grid-cols-12 gap-6">

        {/* Left — Info (Bento Box Style) */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group">
             {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/10 blur-[60px] rounded-full group-hover:bg-crimson/20 transition-colors" />
            
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Have a project in mind?</h3>
            <p className="text-zinc-400 leading-relaxed text-sm relative z-10 mb-8">
              I am currently looking for new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
            </p>

            <div className="space-y-3 relative z-10">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 hover:border-crimson/30 hover:bg-zinc-900 transition-all duration-300 group/link"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 group-hover/link:border-crimson/30 group-hover/link:text-crimson text-zinc-400 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-zinc-300 group-hover/link:text-white transition-colors truncate">
                      {value}
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-600 group-hover/link:text-crimson opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 flex items-center justify-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-zinc-300">
              Available for Freelance & Full-time
            </span>
          </div>
        </div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-10 h-full flex flex-col"
          >
            <div className="space-y-5 flex-1">
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 ml-1 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Sumit Kumar"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 ml-1 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="sumit@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400 ml-1 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* Status messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-2xl px-5 py-4 mt-6"
              >
                <CheckCircle size={18} />
                Message sent! I will get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-2xl px-5 py-4 mt-6"
              >
                <AlertCircle size={18} />
                {errorMsg}
              </motion.div>
            )}

            {/* Submit Button - Upgraded */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={status !== "loading" ? { scale: 1.01 } : {}}
              whileTap={status !== "loading" ? { scale: 0.99 } : {}}
              className="relative group w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-2xl font-bold text-sm mt-6 overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
               {/* Hover Background Fill Effect */}
              <div className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}