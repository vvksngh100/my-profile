"use client";

import React from "react";
import Image from "next/image";
import { WORK_EXPERIENCES } from "@/data/portfolio";
import {
  Calendar,
  MapPin,
  HeartHandshake,
  ShieldCheck,
  Terminal,
  Radio,
  Sparkles,
  Building2,
  Briefcase,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiElectron,
  SiMysql,
  SiJira,
  SiPostman,
} from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

export default function Experience() {
  const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("react")) return <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />;
    if (s.includes("next")) return <SiNextdotjs className="w-3.5 h-3.5 text-slate-900 dark:text-slate-100" />;
    if (s.includes("typescript")) return <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />;
    if (s.includes("javascript")) return <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" />;
    if (s.includes("redux")) return <SiRedux className="w-3.5 h-3.5 text-[#764ABC]" />;
    if (s.includes("tailwind")) return <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />;
    if (s.includes("node")) return <SiNodedotjs className="w-3.5 h-3.5 text-[#5FA04E]" />;
    if (s.includes("express")) return <SiExpress className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />;
    if (s.includes("electron")) return <SiElectron className="w-3.5 h-3.5 text-[#47848F]" />;
    if (s.includes("mysql") || s.includes("sql")) return <SiMysql className="w-3.5 h-3.5 text-[#00758F]" />;
    if (s.includes("jira")) return <SiJira className="w-3.5 h-3.5 text-[#0052CC]" />;
    if (s.includes("postman")) return <SiPostman className="w-3.5 h-3.5 text-[#FF6C37]" />;
    if (s.includes("rbac")) return <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />;
    if (s.includes("websocket")) return <Radio className="w-3.5 h-3.5 text-sky-500" />;
    if (s.includes("api") || s.includes("rest")) return <Terminal className="w-3.5 h-3.5 text-emerald-500" />;
    return <Sparkles className="w-3.5 h-3.5 text-indigo-400" />;
  };

  const getStepperIcon = (exp: (typeof WORK_EXPERIENCES)[number]) => {
    if (exp.isCurrent) return <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
    if (exp.type === "career-break") return <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
    return <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />;
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Proven track record of architecting scalable web applications, optimizing databases, and deploying enterprise-grade platforms.
          </p>
        </ScrollReveal>

        {/* Vertical Timeline with Elevated Cards */}
        <div className="relative pl-[52px] sm:pl-[76px] space-y-10 sm:space-y-12">
          {/* Continuous Gradient Timeline Spine connecting between badges */}
          <div className="absolute left-[18px] sm:left-[28px] -translate-x-1/2 top-10 sm:top-12 bottom-10 sm:bottom-12 w-[3px] bg-gradient-to-b from-indigo-500 via-amber-400 to-indigo-400 dark:to-slate-700 rounded-full pointer-events-none" />

          {WORK_EXPERIENCES.map((exp, idx) => {
            const isCareerBreak = exp.type === "career-break";

            return (
              <ScrollReveal
                key={exp.id}
                direction="up"
                delay={idx * 0.15}
                className="relative group"
              >
                {/* Milestone Stepper Node */}
                <div className="absolute left-[-52px] sm:left-[-76px] top-6 z-10 w-[36px] sm:w-[56px] flex items-center justify-center">
                  <div
                    className={`relative w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md ${
                      exp.isCurrent
                        ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-indigo-500/30 ring-4 ring-indigo-500/15"
                        : isCareerBreak
                        ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-amber-500/30 ring-4 ring-amber-500/15"
                        : "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-200 dark:border-indigo-500/40 shadow-slate-900/5 group-hover:border-indigo-500 dark:group-hover:border-indigo-400"
                    }`}
                  >
                    {getStepperIcon(exp)}

                    {/* Live Pulse Beacon for Current Role */}
                    {exp.isCurrent && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Horizontal Connector Arm linking Node to Card */}
                <div
                  className={`absolute left-[-34px] sm:left-[-48px] top-[42px] sm:top-[46px] w-[34px] sm:w-[48px] h-[2px] transition-all duration-300 pointer-events-none ${
                    isCareerBreak
                      ? "bg-gradient-to-r from-amber-400 to-amber-200 dark:from-amber-500 dark:to-slate-700 group-hover:h-[2.5px]"
                      : exp.isCurrent
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-200 dark:from-indigo-400 dark:to-slate-700 group-hover:h-[2.5px]"
                      : "bg-gradient-to-r from-indigo-300 dark:from-indigo-600 to-slate-200 dark:to-slate-700 group-hover:from-indigo-500 group-hover:h-[2.5px]"
                  }`}
                />

                {/* Experience Card */}
                <div
                  className={`bg-white dark:bg-slate-800/95 p-6 sm:p-8 rounded-3xl border transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 ${
                    isCareerBreak
                      ? "border-amber-300/70 dark:border-amber-500/30 hover:border-amber-400"
                      : "border-slate-200/90 dark:border-slate-700/80 hover:border-indigo-400/60 dark:hover:border-slate-600"
                  }`}
                >
                  {/* Header Row: Company Logo + Role Details + Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Company Branded Avatar Badge */}
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-2 shrink-0 flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105 border ${
                          isCareerBreak
                            ? "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-500/30 text-amber-500"
                            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                        }`}
                      >
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} Logo`}
                            width={56}
                            height={56}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <HeartHandshake className="w-8 h-8 text-amber-500" />
                        )}
                      </div>

                      {/* Title, Company & Location */}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 shadow-2xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mt-1 text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400">
                          {isCareerBreak ? (
                            <span className="text-amber-600 dark:text-amber-400 font-medium">{exp.company}</span>
                          ) : (
                            <>
                              <Building2 className="w-4 h-4 text-indigo-500 shrink-0" />
                              <span>{exp.company}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Date and Location Badges */}
                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-700/60 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 px-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Highlight Callouts (Temporarily commented out) */}
                  {/* {exp.highlights && exp.highlights.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 my-6 pt-4 pb-4 border-y border-slate-100 dark:border-slate-700/60">
                      {exp.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="px-3 py-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-700/40 border border-slate-200/70 dark:border-slate-700/60 text-center transition-all hover:bg-white dark:hover:bg-slate-700/70"
                        >
                          <div
                            className={`text-base sm:text-xl font-extrabold ${
                              isCareerBreak
                                ? "text-amber-600 dark:text-amber-400"
                                : "text-indigo-600 dark:text-indigo-400"
                            }`}
                          >
                            <CountUp value={h.value} duration={1400} />
                          </div>
                          <div className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            {h.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )} */}

                  {/* Bullet Points with Clean Styling */}
                  <ul className="mt-4 space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                            isCareerBreak ? "bg-amber-500" : "bg-indigo-500"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips with Real Brand Icons */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center">
                      Technologies:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-2xs hover:border-indigo-400/50 dark:hover:border-slate-500 transition-colors"
                      >
                        {getSkillIcon(skill)}
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
