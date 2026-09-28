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
        <h2 className="text-3xl md:text-4xl tracking-tight leading-none text-foreground">
          כישורים ויכולות
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-foreground capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-lg bg-foreground/5 text-foreground/70 hover:bg-foreground/10 transition-colors"
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
