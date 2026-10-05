"use client";

import React from "react";
import { WORK_EXPERIENCES } from "@/data/portfolio";
import {
  Calendar,
  MapPin,
  Building2,
  HeartHandshake,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Experience() {
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

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {WORK_EXPERIENCES.map((exp, idx) => {
            const isCareerBreak = exp.type === "career-break";

            return (
              <ScrollReveal
                key={exp.id}
                direction="up"
                delay={idx * 0.15}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isCareerBreak
                      ? "bg-white dark:bg-slate-800 border-amber-500 shadow-xs"
                      : "bg-white dark:bg-slate-800 border-indigo-600 dark:border-indigo-400 shadow-xs"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isCareerBreak ? "bg-amber-500" : "bg-indigo-600 dark:bg-indigo-400"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div
                  className={`bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border transition-all duration-150 shadow-xs ${
                    isCareerBreak
                      ? "border-amber-300/60 dark:border-amber-500/30"
                      : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400">
                        {isCareerBreak ? (
                          <HeartHandshake className="w-4 h-4 text-amber-500 shrink-0" />
                        ) : (
                          <Building2 className="w-4 h-4 text-indigo-500 shrink-0" />
                        )}
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-700/60 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-sky-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-5 space-y-2.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center">
                      Technologies:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
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
