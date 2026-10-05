"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import {
  FileText,
  ArrowRight,
  Code2,
  Cpu,
  Zap,
  CheckCircle2,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle gentle ambient background - no glaring blurs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-Time Engineering Roles</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-400">
                Hi, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-none">
                {PERSONAL_INFO.name}
              </h1>
            </motion.div>

            {/* Dynamic Role Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center text-xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-200 min-h-[44px]"
            >
              <span className="mr-2 text-indigo-600 dark:text-indigo-400 font-normal">I am a</span>
              <span className="glow-gradient-text border-b border-indigo-400/40 pb-0.5">
                {displayedText}
              </span>
              <span className="w-0.5 h-6 bg-indigo-500 ml-1 animate-pulse" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto"
            >
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all duration-150 hover:scale-[1.02] active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Check Resume</span>
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition-all duration-150 text-sm sm:text-base shadow-xs cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-indigo-500" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center px-5 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-slate-100 transition-colors text-sm sm:text-base cursor-pointer"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Key Skill Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400"
            >
              <span className="text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                Core Tech:
              </span>
              {["React.js", "Next.js", "TypeScript", "Node.js", "Redux Toolkit", "Local RAG", "Electron", "MySQL"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs"
                  >
                    {skill}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right Column: Visual & Floating Highlights */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center"
            >
              {/* Subtle gentle circular frame */}
              <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-slate-700/60" />

              {/* Central Avatar Card */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center relative overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-slate-700/70 border border-slate-200 dark:border-slate-700 mb-3 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="font-bold text-lg text-slate-900 dark:text-slate-100 tracking-wide">
                    Vivek Singh
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    Frontend & AI Engineer
                  </span>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>3+ Yrs Experience</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: React & Next.js */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 sm:right-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-md"
              >
                <div className="p-1 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">Frontend</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">React & Next.js</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Local AI & RAG */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-2 sm:left-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-md"
              >
                <div className="p-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">AI Architecture</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">RAG & Quantization</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row with Animated Number Counters */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              direction="up"
              className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                <CountUp value={stat.value} duration={1800} />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
