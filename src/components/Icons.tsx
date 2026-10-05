import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <FaGithub className={className} />;
}

export function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <FaLinkedin className={className} />;
}

export function LeetcodeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <SiLeetcode className={className} />;
}
