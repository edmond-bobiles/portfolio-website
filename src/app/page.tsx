import Image from "next/image";
import Link from "next/link";
import { ProjectGrid } from "@/components/project-grid";
import { getOwnerAssets, portfolio } from "@/data/portfolio";
import { getFeaturedProjects } from "@/data/projects";

const skillStyles = [
  "bg-lavender text-lavender-ink",
  "bg-mint text-mint-ink",
  "bg-peach text-peach-ink",
];

export default function HomePage() {
  const { profile, resume } = getOwnerAssets();
  const { contact } = portfolio;

  return (
    <>
      <section
        id="home"
        className="grid min-h-[70vh] grid-cols-[1.3fr_1fr] items-center gap-12 py-16 max-[800px]:min-h-0 max-[800px]:grid-cols-1"
      >
        <div>
          <h1 className="mb-3 text-[3.5rem] leading-[1.2] font-bold text-heading">
            {portfolio.name}
          </h1>
          <p className="mb-6 max-w-[65ch]">{portfolio.bio}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full border border-transparent bg-accent px-[1.4rem] py-[0.7rem] text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-90"
            >
              View Projects
            </Link>
            {resume && (
              <a
                href={resume}
                download
                className="rounded-full border border-outline px-[1.4rem] py-[0.7rem] text-[0.95rem] font-semibold text-accent transition-colors hover:bg-surface"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>

        {profile ? (
          <Image
            src={profile}
            alt={`Photo of ${portfolio.name}`}
            width={640}
            height={800}
            priority
            sizes="(max-width: 800px) 320px, 40vw"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[12px_12px_0_var(--color-lavender)] max-[800px]:order-first max-[800px]:max-w-[320px]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="aspect-[4/5] w-full rounded-2xl border border-line bg-surface shadow-[12px_12px_0_var(--color-lavender)] max-[800px]:order-first max-[800px]:max-w-[320px]"
          />
        )}
      </section>

      <section id="projects" className="py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="mb-3 text-[2rem] leading-[1.2] font-bold">Projects</h2>
          <Link href="/projects" className="text-accent hover:underline">
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
              className="font-semibold text-accent hover:underline"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}