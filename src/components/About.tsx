"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import {
  Code,
  Database,
  Cpu,
  MapPin,
  Mail,
  GraduationCap,
  Briefcase,
  Radio,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Frontend & Enterprise UI",
      desc: "Developed 20+ reusable React.js components with client-side RBAC across 3 tiers for a digital signage platform supporting 50+ enterprise accounts.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      title: "Local AI & RAG Architectures",
      desc: "Engineered production-grade RAG pipelines with 8-bit quantized embedding models and Node.js worker threads (0ms event-loop lag).",
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "SQL & Performance Tuning",
      desc: "Reduced enterprise SQL query times by 50% (slashing load times from 10s to 5s) by refactoring complex execution plans, joins, and indexing.",
    },
    {
      icon: <Radio className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Real-Time Telemetry & Desktop",
      desc: "Built cross-platform desktop telemetry applications using Electron, React.js, and WebSockets to stream live electrical parameters.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A software engineer focused on building responsive, performant web applications, scalable backend APIs, and real-time desktop systems.
          </p>
        </ScrollReveal>

        {/* 2-Column Story & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Detailed Narrative */}
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-7 flex flex-col">
            <div className="h-full bg-white dark:bg-slate-800 p-7 sm:p-9 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                <p>
                  I am a passionate <span className="text-slate-900 dark:text-slate-100 font-semibold">Frontend Developer</span> based in Kalyan, Mumbai, with over <span className="text-indigo-600 dark:text-indigo-400 font-semibold">3+ years of professional experience</span> building responsive and enterprise web applications using <span className="text-slate-800 dark:text-slate-200 font-medium">React.js, JavaScript, TypeScript, Redux Toolkit, and REST APIs</span>.
                </p>
                <p>
                  Throughout my work at <span className="text-slate-800 dark:text-slate-200 font-medium">Sublime Technocorp</span> and <span className="text-slate-800 dark:text-slate-200 font-medium">Sankey Business Solutions</span>, I specialized in high-performance digital signage platforms and field service management suites serving up to 200 concurrent users and 50+ enterprise accounts.
                </p>
                <p>
                  Beyond standard UI architecture, I possess hands-on expertise in <span className="text-sky-600 dark:text-sky-400 font-medium">SQL execution tuning (50% query time reduction)</span>, <span className="text-indigo-600 dark:text-indigo-400 font-medium">Node.js event-loop optimization</span> with worker threads, <span className="text-sky-600 dark:text-sky-400 font-medium">local RAG AI platforms</span>, and <span className="text-indigo-600 dark:text-indigo-400 font-medium">Electron cross-platform desktop telemetry</span>.
                </p>
              </div>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-500 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Briefcase className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>3+ Years Enterprise Experience</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>B.Sc. & Diploma in CSE</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Pillars of Excellence */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {highlights.map((h, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                delay={0.15 + i * 0.1}
                className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-150 group shadow-xs"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
