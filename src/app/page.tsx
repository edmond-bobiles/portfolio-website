import Link from "next/link";
import { ProjectGrid } from "@/components/project-grid";
import { getOwnerAssets, portfolio } from "@/data/portfolio";
import { getFeaturedProjects } from "@/data/projects";
import type { Metadata } from "next";

const skillStyles = [
  "bg-surface text-ink",
  "bg-surface text-ink",
  "bg-surface text-ink",
];

export const metadata: Metadata = {
  title: `${portfolio.name} | Portfolio`,
  description:
    "Computer Science student at the University of Santo Tomas specializing in Data Science, building full-stack web applications and data engineering solutions.",
};

export default function HomePage() {
  const { resume } = getOwnerAssets();
  const { contact } = portfolio;

  return (
    <>
      <section
        id="home"
        className="flex min-h-[70vh] items-center py-16 max-[800px]:min-h-0"
      >
        <div>
          <h1 className="mb-3 text-[3.5rem] leading-[1.2] font-bold text-ink">
            {portfolio.name}
          </h1>
          <p className="mb-6 max-w-[65ch]">{portfolio.bio}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full border border-transparent bg-ink px-[1.4rem] py-[0.7rem] text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-90"
            >
              View Projects
            </Link>
            {resume && (
              <a
                href={resume}
                download
                className="rounded-full border border-ink px-[1.4rem] py-[0.7rem] text-[0.95rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>

      </section>

      <section id="projects" className="py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="mb-3 text-[2rem] leading-[1.2] font-bold">Projects</h2>
          <Link href="/projects" className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink">
            All projects
          </Link>
        </div>
        <ProjectGrid projects={getFeaturedProjects(6)} />
      </section>

      <section id="skills" className="py-16">
        <h2 className="mb-3 text-[2rem] leading-[1.2] font-bold">Skills</h2>
        {portfolio.skillGroups.map((group, index) => (
          <div key={group.title}>
            <h3 className="mb-3 text-xl leading-[1.2] font-bold">{group.title}</h3>
            <ul className="mb-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className={`rounded-full px-3 py-1 text-[0.9rem] ${skillStyles[index % skillStyles.length]}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="contact" className="border-t border-line py-16">
        <h2 className="mb-3 text-[2rem] leading-[1.2] font-bold">Contact</h2>
        <p className="mb-4 max-w-[65ch] text-muted">{contact.intro}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
