"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { SectionWrapper } from "../ui/section-wrapper";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export function Projects() {
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
          פרויקטים
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
