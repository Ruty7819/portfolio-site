import { SectionWrapper } from "../ui/section-wrapper";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <SectionWrapper>
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl tracking-tight leading-none text-foreground">
          פרויקטים
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
