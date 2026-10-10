"use client";

import React from "react";
import { EDUCATION_LIST, HONORS_AWARDS, CERTIFICATIONS } from "@/data/portfolio";
import {
  GraduationCap,
  Award,
  CheckCircle,
  Calendar,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Education & Honors
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Formal engineering foundations paired with industry awards and verified algorithmic credentials.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Left Column: Education Degrees */}
          <div className="lg:col-span-7 space-y-5">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-indigo-500" />
                <span>Degrees & Academics</span>
              </h3>
            </ScrollReveal>

            {EDUCATION_LIST.map((edu, idx) => (
              <ScrollReveal
                key={edu.id}
                direction="up"
                delay={0.15 + idx * 0.12}
                className="bg-white dark:bg-slate-800 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                    {edu.degree}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 w-fit">
                    Score: {edu.grade}
                  </span>
                </div>

                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {edu.period}
                  </span>
                  <span>{edu.location}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column: Honors, Awards & Certifications */}
          <div className="lg:col-span-5 space-y-7">
            {/* Honors & Awards */}
            <div>
              <ScrollReveal direction="up" delay={0.15}>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Honors & Awards</span>
                </h3>
              </ScrollReveal>

              <div className="space-y-3">
                {HONORS_AWARDS.map((award, i) => (
                  <ScrollReveal
                    key={i}
                    direction="up"
                    delay={0.2 + i * 0.1}
                    className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {award.title}
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {award.date}
                      </span>
                    </div>
                    {award.organization && (
                      <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mt-0.5">
                        {award.organization}
                      </div>
                    )}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {award.description}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <ScrollReveal direction="up" delay={0.25}>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-sky-500" />
                  <span>Certifications</span>
                </h3>
              </ScrollReveal>

              <div className="space-y-2.5">
                {CERTIFICATIONS.map((cert, i) => (
                  <ScrollReveal
                    key={i}
                    direction="up"
                    delay={0.3 + i * 0.1}
                  >
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-500/40 transition-all group shadow-xs cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-500 transition-colors">
                            {cert.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
