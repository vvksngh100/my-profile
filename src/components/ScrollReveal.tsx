"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: 28, x: 0 };
      case "down":
        return { y: -28, x: 0 };
      case "left":
        return { x: 28, y: 0 };
      case "right":
        return { x: -28, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth modern bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
