"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  as?: "div" | "section" | "article" | "header";
}

export default function ScrollAnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.55,
  yOffset = 24,
  as = "div",
}: ScrollAnimatedSectionProps) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
