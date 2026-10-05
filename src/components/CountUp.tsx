"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 1800, className = "" }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Extract prefix, number, and suffix (e.g., "<2s" -> prefix: "<", num: 2, suffix: "s")
  // e.g., "45%" -> prefix: "", num: 45, suffix: "%"
  // e.g., "500+ Req/s" -> prefix: "", num: 500, suffix: "+ Req/s"
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);

  useEffect(() => {
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const targetNumber = parseInt(match[2], 10);
    const suffix = match[3] || "";

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing: easeOutExpo / easeOutCubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeOut * targetNumber);

            setDisplayValue(`${prefix}${currentNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value); // ensure final exact string
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [value, duration, hasAnimated, match]);

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
}
