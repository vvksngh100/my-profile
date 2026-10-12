"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolio";
import ProjectModal from "@/components/ProjectModal";
import {
  ChevronRight,
  ArrowUpRight,
  BrainCircuit,
  LayoutDashboard,
  Activity,
  Zap,
  Layers,
  Gauge,
  Sparkles,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiElectron,
  SiMysql,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { GithubIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Full Stack", "Enterprise Web Apps", "Desktop & Full Stack", "Full Stack & Cloud"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getProjectConfig = (id: string) => {
    switch (id) {
      case "ai-research-assistant":
        return {
          icon: <BrainCircuit className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
          badgeBg:
            "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30",
          topBorder: "from-indigo-500 via-purple-500 to-sky-400",
          glow: "from-indigo-500/15 via-purple-500/10 to-transparent",
        };
      case "enterprise-digital-signage":
        return {
          icon: <LayoutDashboard className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
          badgeBg:
            "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
          topBorder: "from-emerald-500 via-teal-500 to-indigo-500",
          glow: "from-emerald-500/15 via-teal-500/10 to-transparent",
        };
      case "energy-monitoring-desktop":
        return {
          icon: <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
          badgeBg:
            "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/30",
          topBorder: "from-amber-500 via-orange-500 to-sky-400",
          glow: "from-amber-500/15 via-orange-500/10 to-transparent",
        };
      default:
        return {
          icon: <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
          badgeBg:
            "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30",
          topBorder: "from-indigo-500 to-sky-400",
          glow: "from-indigo-500/15 to-transparent",
        };
    }
  };

  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes("react")) return <SiReact className="w-3 h-3 text-[#61DAFB]" />;
    if (t.includes("next")) return <SiNextdotjs className="w-3 h-3 text-slate-900 dark:text-slate-100" />;
    if (t.includes("typescript")) return <SiTypescript className="w-3 h-3 text-[#3178C6]" />;
    if (t.includes("node")) return <SiNodedotjs className="w-3 h-3 text-[#5FA04E]" />;
    if (t.includes("express")) return <SiExpress className="w-3 h-3 text-slate-800 dark:text-slate-200" />;
    if (t.includes("electron")) return <SiElectron className="w-3 h-3 text-[#47848F]" />;
    if (t.includes("mysql") || t.includes("sql")) return <SiMysql className="w-3 h-3 text-[#00758F]" />;
    if (t.includes("redux")) return <SiRedux className="w-3 h-3 text-[#764ABC]" />;
    if (t.includes("tailwind")) return <SiTailwindcss className="w-3 h-3 text-[#06B6D4]" />;
    return <Sparkles className="w-3 h-3 text-indigo-400" />;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real-world systems, AI architectures, and high-scale enterprise platforms demonstrating engineering rigor and production stability.
          </p>

          {/* Filter Tabs (Temporarily commented out) */}
          {/* <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div> */}
        </ScrollReveal>

        {/* Project Cards Grid with Smooth Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {filteredProjects.map((project, idx) => {
            const config = getProjectConfig(project.id);

            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={idx * 0.1}
                className="flex"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  onClick={() => setActiveModalProject(project)}
                  className="relative w-full bg-white dark:bg-slate-800/95 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 hover:border-indigo-400/70 dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/15 overflow-hidden cursor-pointer"
                >
                  {/* Top Animated Color Accent Beam */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${config.topBorder} transition-all duration-300 group-hover:h-2`}
                  />

                  {/* Ambient Corner Mesh Glow */}
                  <div
                    className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${config.glow} rounded-full blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 relative z-10 flex flex-col flex-1">
                    {/* Header Row: Themed Icon + Category Badge + Year & Arrow */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                          {config.icon}
                        </div>
                        <span
                          className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${config.badgeBg}`}
                        >
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          {project.period}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-1.5 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Description Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Impact Metrics Block with Animated Counters */}
                    <div className="grid grid-cols-2 gap-2.5 mt-5">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/70 text-center transition-all group-hover:bg-white dark:group-hover:bg-slate-800 shadow-2xs"
                        >
                          <div className="text-base sm:text-lg font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1">
                            <CountUp value={m.value} duration={1500} />
                          </div>
                          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips with Brand Icons */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400/50 transition-colors"
                        >
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-4 sm:px-6 bg-slate-50/80 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between relative z-10">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                      <span>View Case Study</span>
                      <ChevronRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-2xs hover:scale-105"
                      aria-label="View Project on GitHub"
                      title="View Source on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
