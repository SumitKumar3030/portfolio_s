"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
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

  const inputClass =
    "w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-crimson/60 focus:ring-1 focus:ring-crimson/30 transition-all duration-200";

  return (
    <section className="py-24 px-6" id="contact">
      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
          Get in <span className="text-crimson">Touch</span>
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
      </div>

      <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">

        {/* Left — info */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div>
            <p className="text-zinc-400 leading-relaxed text-sm mb-8">
              Have a project in mind, an opportunity to share, or just want to
              say hello? My inbox is always open.
            </p>
          </div>

          <div className="space-y-3">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-crimson/30 hover:bg-zinc-900/60 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-zinc-800/60 group-hover:bg-crimson/10 group-hover:text-crimson text-zinc-400 transition-colors">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-zinc-600 font-mono uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors truncate">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability dot */}
          <div className="mt-auto pt-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Currently available for freelance & full-time roles
            </span>
          </div>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 space-y-5"
          >
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
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
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
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
              <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
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

            {/* Status messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3"
              >
                <CheckCircle size={16} />
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
              >
                <AlertCircle size={16} />
                {errorMsg}
              </motion.div>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={status !== "loading" ? { scale: 1.02, boxShadow: "0 0 24px rgba(225,29,72,0.35)" } : {}}
              whileTap={status !== "loading" ? { scale: 0.98 } : {}}
              className="w-full flex items-center justify-center gap-2 bg-crimson text-white py-3.5 rounded-xl font-semibold text-sm shadow-[0_0_15px_rgba(225,29,72,0.2)] hover:bg-crimson/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}