import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { getProjectById, projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${portfolio.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) notFound();

  return (
    <article className="max-w-[800px] py-16">
      <Link
        href="/projects"
        className="mb-6 inline-block text-[0.9rem] font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
      >
        ← All projects
      </Link>

      <h1 className="mb-3 text-[2.5rem] leading-[1.2] font-bold">{project.title}</h1>
      <p className="mb-5 text-[1.1rem] text-muted">{project.summary}</p>

      <ul className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line bg-surface px-3 py-1 text-[0.85rem] text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mb-8 flex flex-wrap gap-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-transparent bg-ink px-[1.4rem] py-[0.7rem] text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Live demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ink px-[1.4rem] py-[0.7rem] text-[0.95rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          GitHub
        </a>
      </div>

      {project.image && (
        <Image
          src={project.image}
          alt={`Illustrated preview of ${project.title}`}
          width={0}
          height={0}
          sizes="(max-width: 800px) 100vw, 800px"
          className="mb-8 h-auto w-full rounded-xl border border-line"
        />
      )}

      <h2 className="mb-3 text-[2rem] leading-[1.2] font-bold">About this project</h2>
      <p className="max-w-[65ch]">{project.details}</p>
    </article>
  );
}