import type { Metadata } from "next";
import Link from "next/link";
import { ProjectGrid } from "@/components/project-grid";
import { portfolio } from "@/data/portfolio";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: `Projects | ${portfolio.name}`,
  description: `Projects by ${portfolio.name}.`,
};

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="flex items-baseline justify-between">
        <h1 className="mb-3 text-[2rem] leading-[1.2] font-bold">All Projects</h1>
        <Link href="/" className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink">
          Back to home
        </Link>
      </div>
      <ProjectGrid projects={projects} />
    </section>
  );
}