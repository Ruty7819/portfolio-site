"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-foreground/10 dark:border-foreground-dark/10 bg-background dark:bg-background-dark hover:border-accent/50 dark:hover:border-accent/50 transition-colors"
    >
      <div className="aspect-video relative">
        <img
          src={`https://picsum.photos/seed/${project.title.replace(/\s+/g, '-')}/800/450`}
          alt={`תמונה של פרויקט ${project.title}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-foreground/60 dark:text-foreground-dark/60 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-secondary/30 dark:bg-secondary-dark/30 text-foreground/70 dark:text-foreground-dark/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
