"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { SectionWrapper } from "../ui/section-wrapper";
import { skills } from "@/lib/data";

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <SectionWrapper>
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-none text-foreground dark:text-foreground-dark">
          כישורים ויכולות
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-lg bg-secondary/30 dark:bg-secondary-dark/30 text-foreground/70 dark:text-foreground-dark/70 hover:bg-secondary/50 dark:hover:bg-secondary-dark/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
