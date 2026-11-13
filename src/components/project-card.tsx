import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:-translate-y-0.5 hover:border-accent">
      {project.image && (
        <Image
          src={project.image}
          alt={`Illustrated preview of ${project.title}`}
          width={0}
          height={0}
          sizes="(max-width: 640px) 100vw, 600px"
          className="block h-auto w-full"
        />
      )}
      <div className="flex flex-1 flex-col gap-2 px-5 pt-[1.1rem] pb-5">
        <h3 className="text-base leading-[1.2] font-semibold">{project.title}</h3>
        <p className="text-[0.9rem] text-muted">{project.summary}</p>
        <div className="mt-auto flex items-center gap-4 pt-2">
          <Link
            href={`/projects/${project.id}`}
            className="rounded-full border border-outline px-[0.9rem] py-[0.35rem] text-[0.85rem] font-semibold text-accent transition-colors hover:bg-page"
          >
            View project
          </Link>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] font-semibold text-accent hover:underline"
            >
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}