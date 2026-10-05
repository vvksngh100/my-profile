"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Mail, ArrowUp, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/90 py-14 overflow-hidden">
      {/* Subtle gentle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Brand */}
          <div className="flex flex-col items-center space-y-1">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Vivek Singh
            </h2>
            <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-mono">
              Frontend Developer & Full-Stack AI Engineer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-4 h-4 text-[#FFA116]" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs"
              aria-label="Download Resume PDF"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="w-full pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Vivek Singh. Crafted with Next.js, TypeScript & Tailwind CSS.
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
