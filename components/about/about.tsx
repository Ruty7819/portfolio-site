"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { SectionWrapper } from "../ui/section-wrapper";
import { about } from "@/lib/data";

export function About() {
  const reduce = useReducedMotion();

  return (
    <SectionWrapper>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? false : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-none text-foreground dark:text-foreground-dark">
          אודות
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-foreground/70 dark:text-foreground-dark/70 leading-relaxed max-w-[65ch]">
              {about.description}
            </p>
            <p className="text-foreground/60 dark:text-foreground-dark/60">
              {about.yearsOfExperience} שנות ניסיון בפיתוח web ואינטגרציה של טכנולוגיות AI
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
              כישורים עיקריים
            </h3>
            <ul className="space-y-2 text-foreground/70 dark:text-foreground-dark/70">
              <li>• Fullstack Development</li>
              <li>• AI & Machine Learning</li>
              <li>• Workflow Automation</li>
              <li>• System Architecture</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
