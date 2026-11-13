import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types/project";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}