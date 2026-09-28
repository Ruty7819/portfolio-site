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
              מומחיות טכנית מרכזית: בינה מלאכותית (AI Agents, RAG, Vector Databases), ארכיטקטורת Full-Stack (.NET Core, Angular, React), ענן ו-DevOps (AWS, Docker, CI/CD), ואוטומציות מתקדמות (Playwright, n8n, Make.com).
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
              ניסיון תעסוקתי
            </h3>
            <div className="space-y-3">
              <div className="text-foreground/70 dark:text-foreground-dark/70">
                <p className="font-semibold text-foreground dark:text-foreground-dark">מהנדסת Full-Stack ובינה מלאכותית</p>
                <p className="text-sm">משרד החינוך (פרויקט גפ"ן) • 2025 – היום</p>
              </div>
              <ul className="space-y-1 text-sm text-foreground/60 dark:text-foreground-dark/60">
                <li>• ארכיטקטורה ותחזוקה של מערכות ארגוניות מרכזיות</li>
                <li>• פיתוח Frontend רספונסיבי ב-Angular 16+ ו-PrimeNG</li>
                <li>• ממשקי API RESTful מאובטחים ב-.NET Core ו-SQL Server</li>
                <li>• שילוב זרימות עבודה של סוכני בינה מלאכותית</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
