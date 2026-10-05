"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiJsonwebtokens,
  SiTanstack,
  SiGit,
  SiPostman,
  SiJira,
  SiHuggingface,
  SiElectron,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { Terminal, Zap, Cpu, Database, ShieldCheck, Radio, Users2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-slate-900 dark:text-slate-100" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="w-5 h-5 text-[#764ABC]" /> },
        { name: "Context API", icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
        { name: "HTML5 & CSS3", icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" /> },
        { name: "Material UI", icon: <SiMui className="w-5 h-5 text-[#007FFF]" /> },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" /> },
        { name: "Express.js", icon: <SiExpress className="w-5 h-5 text-slate-800 dark:text-slate-200" /> },
        { name: "REST APIs", icon: <Terminal className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> },
        { name: "Server-Sent Events (SSE)", icon: <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" /> },
        { name: "WebSockets", icon: <Radio className="w-5 h-5 text-sky-500 dark:text-sky-400" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="w-5 h-5 text-[#D63AFF]" /> },
        { name: "Role-Based Access Control", icon: <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> },
        { name: "TanStack Query", icon: <SiTanstack className="w-5 h-5 text-[#FF4154]" /> },
      ],
    },
    {
      title: "Databases & AI Technologies",
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-[#00758F]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" /> },
        { name: "Pinecone Vector DB", icon: <Database className="w-5 h-5 text-emerald-400" /> },
        { name: "Hugging Face Transformers", icon: <SiHuggingface className="w-5 h-5 text-[#FFD21E]" /> },
        { name: "Groq", icon: <Zap className="w-5 h-5 text-[#F55036]" /> },
        { name: "Local RAG", icon: <Cpu className="w-5 h-5 text-sky-400" /> },
        { name: "8-bit Quantized Models", icon: <Cpu className="w-5 h-5 text-indigo-400" /> },
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Git", icon: <SiGit className="w-5 h-5 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-5 h-5 text-slate-900 dark:text-slate-100" /> },
        { name: "Postman", icon: <SiPostman className="w-5 h-5 text-[#FF6C37]" /> },
        { name: "VS Code", icon: <VscVscode className="w-5 h-5 text-[#007ACC]" /> },
        { name: "JIRA", icon: <SiJira className="w-5 h-5 text-[#0052CC]" /> },
        { name: "Agile/Scrum", icon: <Users2 className="w-5 h-5 text-sky-500" /> },
        { name: "Electron", icon: <SiElectron className="w-5 h-5 text-[#47848F]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Core technologies and engineering proficiencies utilized across 3+ years of building production-grade web systems.
          </p>
        </ScrollReveal>

        {/* 2x2 Grid of Skill Cards with Smooth Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch">
          {skillGroups.map((group, groupIdx) => (
            <ScrollReveal
              key={group.title}
              direction="up"
              delay={groupIdx * 0.12}
              className="flex"
            >
              <div className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 flex flex-col justify-start">
                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 text-center mb-6">
                  {group.title}
                </h3>

                {/* Centered Flexbox of Skill Pills */}
                <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center gap-2.5 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 hover:border-indigo-400 dark:hover:border-slate-500 hover:scale-[1.03] transition-all duration-150 cursor-default shadow-xs"
                    >
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
