"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolio";
import {
  X,
  Cpu,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import CountUp from "@/components/CountUp";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl text-left my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-indigo-500" />
            {project.period}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-medium leading-relaxed">
          {project.tagline}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 text-center"
            >
              <div className="text-lg sm:text-xl font-bold text-sky-600 dark:text-sky-400">
                <CountUp value={m.value} duration={1200} />
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> System Overview
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Engineering Impacts */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-sky-500" /> Key Engineering Impacts
          </h4>
          <ul className="space-y-2">
            {project.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Highlights */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-500" /> Architectural Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.architectureHighlights.map((arch, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-500" /> Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-700/60 transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Code on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
