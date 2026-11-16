import Link from "next/link";
import { ProjectGrid } from "@/components/project-grid";
import { getOwnerAssets, portfolio } from "@/data/portfolio";
import { getFeaturedProjects } from "@/data/projects";
import type { Metadata } from "next";
import { SkillsSection } from "@/components/skills-section";
import { ContactLinks } from "@/components/contact-links";
import { Reveal } from "@/components/reveal";

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

      <SkillsSection />
            <section id="contact" className="border-t border-line py-16">
        <Reveal>
          <h2 className="mb-3 text-[2rem] leading-[1.2] font-bold">Contact</h2>
          <p className="mb-4 max-w-[65ch] text-muted">{contact.intro}</p>
          <ContactLinks />
        </Reveal>
      </section>
    </>
  );
}
