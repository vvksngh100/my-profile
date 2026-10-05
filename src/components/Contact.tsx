"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle, non-glaring ambient background */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Interested in collaborating, hiring for full-time engineering roles, or discussing system design and AI workflows? Reach out directly!
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Info & Socials */}
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-white dark:bg-slate-800/90 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Let&apos;s build something exceptional
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  I am actively seeking high-impact software engineering roles where I can contribute to performant web applications, scalable APIs, and smart AI tooling.
                </p>

                {/* Direct Info List */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between group shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Email</div>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                      className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                      aria-label="Copy Email address"
                    >
                      {copiedField === "email" ? (
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between group shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Phone / WhatsApp</div>
                        <a
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                      className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                      aria-label="Copy Phone number"
                    >
                      {copiedField === "phone" ? (
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 flex items-center gap-3 shadow-xs">
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Bar */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Professional Profiles
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs"
                  >
                    <LeetcodeIcon className="w-4 h-4 text-[#FFA116]" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Contact Form */}
          <ScrollReveal direction="up" delay={0.2} className="lg:col-span-7 flex flex-col">
            <div className="h-full bg-white dark:bg-slate-800/90 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in your query and it will automatically launch your mail client with everything filled in.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Job Opportunity / Engineering Project"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Vivek, I came across your portfolio and wanted to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all duration-150 hover:scale-[1.01] active:scale-95 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs text-center font-medium animate-in fade-in">
                    Thank you! Your email client has been launched with your message.
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
