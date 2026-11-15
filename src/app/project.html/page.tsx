import { notFound, redirect } from "next/navigation";
import { getProjectById } from "@/data/projects";

type PageProps = { searchParams: Promise<{ id?: string | string[] }> };

export default async function LegacyProjectPage({ searchParams }: PageProps) {
  const { id } = await searchParams;
  const projectId = Array.isArray(id) ? id[0] : id;
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) notFound();

  redirect(`/projects/${project.id}`);
}