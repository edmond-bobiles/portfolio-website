import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/types/project";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={(index % 2) * 100} className="h-full">
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}